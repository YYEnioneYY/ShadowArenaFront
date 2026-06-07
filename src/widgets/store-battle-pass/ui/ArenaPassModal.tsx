import { useEffect, useMemo } from 'react'
import {
  mockStoreItems,
  type StoreItem,
} from '../../../entities/store/model/mockStoreItems'
import { StoreItemVisual } from '../../../entities/store/ui/StoreItemVisual'
import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'

interface ArenaPassModalProps {
  onClose: () => void
}

type PassRewardKind = 'currency' | 'item' | 'cache' | 'boost' | 'title'

interface PassReward {
  amount?: number
  item?: StoreItem
  kind: PassRewardKind
  label: string
  rarity: 'RARE' | 'EPIC' | 'LEGENDARY'
}

interface PassLevel {
  free: PassReward
  level: number
  premium: PassReward
}

const itemRewards = mockStoreItems.reduce<Record<string, StoreItem>>(
  (items, item) => ({ ...items, [item.id]: item }),
  {},
)

const currentPassLevel = 27
const currentPassProgress = 62

function currencyReward(amount: number, rarity: PassReward['rarity'] = 'RARE') {
  return {
    amount,
    kind: 'currency',
    label: `${amount.toLocaleString('en-US')} CR`,
    rarity,
  } satisfies PassReward
}

function textReward(
  kind: Exclude<PassRewardKind, 'currency' | 'item'>,
  label: string,
  rarity: PassReward['rarity'] = 'RARE',
) {
  return { kind, label, rarity } satisfies PassReward
}

function itemReward(itemId: string) {
  const item = itemRewards[itemId]

  return {
    item,
    kind: 'item',
    label: item?.name ?? 'ARENA COSMETIC',
    rarity: item?.rarity ?? 'EPIC',
  } satisfies PassReward
}

function getFreeReward(level: number): PassReward {
  if (level === 5) return itemReward('veiled-nameplate')
  if (level === 15) return itemReward('order-sigil')
  if (level === 30) return itemReward('ronin-oath')
  if (level === 45) return textReward('title', 'TITLE: NIGHTBOUND', 'EPIC')
  if (level % 10 === 0) return textReward('cache', 'SHADOW CACHE', 'EPIC')
  if (level % 4 === 0) return textReward('boost', 'XP BOOST', 'RARE')

  return currencyReward(level % 7 === 0 ? 250 : 150)
}

function getPremiumReward(level: number): PassReward {
  if (level === 1) return itemReward('crown-of-embers')
  if (level === 10) return itemReward('blood-moon-arrival')
  if (level === 20) return itemReward('spectral-horns')
  if (level === 25) return itemReward('crimson-sovereign-bundle')
  if (level === 30) return itemReward('phantom-step')
  if (level === 35) return itemReward('immortal-wings')
  if (level === 40) return itemReward('lotus-awakening')
  if (level === 45) return itemReward('eclipse-legacy-bundle')
  if (level === 50) return textReward('title', 'MYTHIC TITLE: ASCENDED', 'LEGENDARY')
  if (level % 5 === 0) return textReward('cache', 'ROYAL CACHE', 'EPIC')
  if (level % 3 === 0) return currencyReward(400, 'EPIC')

  return currencyReward(250)
}

function makePassLevels() {
  return Array.from({ length: 50 }, (_, index) => {
    const level = index + 1

    return {
      free: getFreeReward(level),
      level,
      premium: getPremiumReward(level),
    }
  })
}

export function ArenaPassModal({ onClose }: ArenaPassModalProps) {
  const passLevels = useMemo(() => makePassLevels(), [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/78 px-3 py-4 backdrop-blur-[3px]"
      role="dialog"
    >
      <button
        aria-label="Close arena pass"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        type="button"
      />
      <section className="relative max-h-[92vh] w-full max-w-[1180px] overflow-hidden rounded-[6px] border border-arena-outline bg-[#050609] shadow-[0_24px_80px_rgb(0_0_0/0.86)] min-[1900px]:max-w-[1540px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_4%,rgb(255_45_45/0.2),transparent_28%),radial-gradient(circle_at_72%_8%,rgb(255_255_255/0.08),transparent_22%),linear-gradient(180deg,rgb(255_255_255/0.035),transparent_38%)]" />
        <header className="relative z-10 flex flex-col gap-5 border-b border-arena-line px-5 py-5 md:flex-row md:items-end md:justify-between xl:px-7 min-[1900px]:px-[38px] min-[1900px]:py-[28px]">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.28em] text-crimson min-[1900px]:text-[14px]">
              SEASON 01: ASCENSION
            </p>
            <h2 className="mt-2 font-heading text-[34px] leading-none text-arena-strong xl:text-[44px] min-[1900px]:text-[60px]">
              ARENA PASS
            </h2>
            <p className="mt-3 max-w-[620px] text-[11px] leading-relaxed text-arena-muted xl:text-[13px] min-[1900px]:max-w-[820px] min-[1900px]:text-[17px]">
              Earn CR, cache drops, rank boosts and exclusive Shadow Arena
              cosmetics across 50 levels.
            </p>
          </div>
          <div className="grid min-w-[280px] grid-cols-3 gap-2 min-[1900px]:min-w-[410px] min-[1900px]:gap-[12px]">
            <PassSummary label="CURRENT LEVEL" value={String(currentPassLevel)} />
            <PassSummary label="PREMIUM" value="ACTIVE" />
            <PassSummary label="TOTAL REWARDS" value="100" />
          </div>
          <button
            className="absolute right-4 top-4 flex h-[34px] w-[34px] items-center justify-center rounded-full border border-arena-outline bg-black/55 text-[14px] font-semibold text-arena-copy transition-colors hover:border-crimson hover:text-crimson min-[1900px]:right-[22px] min-[1900px]:top-[22px] min-[1900px]:h-[44px] min-[1900px]:w-[44px]"
            onClick={onClose}
            type="button"
          >
            X
          </button>
        </header>

        <div className="arena-pass-modal-scroll relative z-10 max-h-[calc(92vh-150px)] overflow-y-auto px-5 pb-5 pt-4 xl:px-7 min-[1900px]:max-h-[calc(92vh-210px)] min-[1900px]:px-[38px] min-[1900px]:pb-[32px] min-[1900px]:pt-[25px]">
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_260px] min-[1900px]:grid-cols-[minmax(0,1fr)_360px]">
            <div className="rounded-[5px] border border-arena-line bg-black/35 p-4 min-[1900px]:p-[22px]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.2em] text-arena-muted min-[1900px]:text-[13px]">
                    NEXT REWARD
                  </p>
                  <p className="mt-1 font-heading text-[18px] text-arena-strong min-[1900px]:text-[26px]">
                    LEVEL 28 / 250 CR
                  </p>
                </div>
                <p className="font-heading text-[22px] text-crimson min-[1900px]:text-[32px]">
                  {currentPassProgress}%
                </p>
              </div>
              <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-arena-outline min-[1900px]:mt-[17px] min-[1900px]:h-[7px]">
                <div
                  className="h-full rounded-full bg-crimson shadow-[0_0_16px_rgb(255_45_45/0.7)]"
                  style={{ width: `${currentPassProgress}%` }}
                />
              </div>
            </div>
            <div className="rounded-[5px] border border-crimson/35 bg-crimson/10 p-4 min-[1900px]:p-[22px]">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-crimson min-[1900px]:text-[13px]">
                PREMIUM UPGRADE
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-arena-copy min-[1900px]:text-[15px]">
                Unlock the upper reward track and claim previous premium
                rewards instantly.
              </p>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[5px] border border-arena-line bg-[#030406]/92 min-[1900px]:mt-[26px]">
            <div className="grid grid-cols-[92px_minmax(0,1fr)] border-b border-arena-line bg-black/35 text-[8px] font-semibold tracking-[0.18em] text-arena-muted min-[1900px]:grid-cols-[130px_minmax(0,1fr)] min-[1900px]:text-[12px]">
              <div className="border-r border-arena-line px-3 py-3 text-crimson min-[1900px]:px-[18px] min-[1900px]:py-[17px]">
                PREMIUM
              </div>
              <div className="px-3 py-3 min-[1900px]:px-[18px] min-[1900px]:py-[17px]">
                DRAG OR SCROLL TO VIEW LEVELS 1-50
              </div>
            </div>
            <div className="grid grid-cols-[92px_minmax(0,1fr)] min-[1900px]:grid-cols-[130px_minmax(0,1fr)]">
              <div className="flex flex-col border-r border-arena-line bg-black/25">
                <TrackLabel active label="PREMIUM" />
                <TrackLabel label="LEVEL" />
                <TrackLabel label="FREE" />
              </div>
              <div className="arena-pass-track overflow-x-auto">
                <div
                  className="grid gap-2 p-3 min-[1900px]:gap-[12px] min-[1900px]:p-[18px]"
                  style={{
                    gridTemplateColumns: `repeat(${passLevels.length}, minmax(132px, 132px))`,
                  }}
                >
                  {passLevels.map((passLevel) => (
                    <PassLevelColumn key={passLevel.level} passLevel={passLevel} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PassSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[4px] border border-arena-line bg-black/35 px-3 py-3 text-center min-[1900px]:px-[18px] min-[1900px]:py-[17px]">
      <p className="text-[7px] font-semibold text-arena-muted min-[1900px]:text-[11px]">
        {label}
      </p>
      <p className="mt-1 font-heading text-[16px] text-arena-strong min-[1900px]:text-[25px]">
        {value}
      </p>
    </div>
  )
}

function TrackLabel({ active = false, label }: { active?: boolean; label: string }) {
  return (
    <div
      className={cn(
        'flex h-[132px] items-center justify-center border-b border-arena-line px-2 text-center font-heading text-[10px] text-arena-muted last:border-b-0 min-[1900px]:h-[154px] min-[1900px]:text-[14px]',
        active && 'text-crimson',
      )}
    >
      {label}
    </div>
  )
}

function PassLevelColumn({ passLevel }: { passLevel: PassLevel }) {
  const isClaimed = passLevel.level < currentPassLevel
  const isCurrent = passLevel.level === currentPassLevel

  return (
    <div className="grid grid-rows-[132px_42px_132px] gap-2 min-[1900px]:grid-rows-[154px_52px_154px]">
      <PassRewardCard reward={passLevel.premium} state={isClaimed ? 'claimed' : isCurrent ? 'current' : 'locked'} />
      <div
        className={cn(
          'flex items-center justify-center rounded-[4px] border bg-black/45 font-heading text-[16px] text-arena-copy min-[1900px]:text-[23px]',
          isCurrent
            ? 'border-crimson text-crimson shadow-[0_0_22px_rgb(255_45_45/0.2)]'
            : 'border-arena-line',
        )}
      >
        {passLevel.level}
      </div>
      <PassRewardCard reward={passLevel.free} state={isClaimed ? 'claimed' : isCurrent ? 'current' : 'locked'} />
    </div>
  )
}

function PassRewardCard({
  reward,
  state,
}: {
  reward: PassReward
  state: 'claimed' | 'current' | 'locked'
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[5px] border bg-[#07080c] p-2 text-left transition-colors min-[1900px]:p-[10px]',
        reward.rarity === 'LEGENDARY'
          ? 'border-crimson/75'
          : reward.rarity === 'EPIC'
            ? 'border-white/22'
            : 'border-arena-line',
        state === 'claimed' && 'opacity-55',
        state === 'current' && 'shadow-[0_0_24px_rgb(255_45_45/0.18)]',
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(255_45_45/0.1),transparent_45%),radial-gradient(circle_at_80%_15%,rgb(255_255_255/0.08),transparent_28%)]" />
      <div className="relative z-10 flex h-full flex-col">
        {reward.item ? (
          <StoreItemVisual
            className="h-[70px] rounded-[3px] min-[1900px]:h-[84px]"
            item={reward.item}
          />
        ) : (
          <RewardIcon reward={reward} />
        )}
        <p className="mt-2 line-clamp-2 min-h-[28px] text-[9px] font-semibold leading-tight text-arena-strong min-[1900px]:text-[13px]">
          {reward.label}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="text-[7px] font-semibold text-arena-muted min-[1900px]:text-[10px]">
            {reward.rarity}
          </span>
          {state === 'claimed' && (
            <span className="text-[7px] font-semibold text-crimson min-[1900px]:text-[10px]">
              CLAIMED
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function RewardIcon({ reward }: { reward: PassReward }) {
  const iconName =
    reward.kind === 'currency'
      ? 'coin'
      : reward.kind === 'boost'
        ? 'pulse'
        : reward.kind === 'cache'
          ? 'shield'
          : 'user'

  return (
    <div className="flex h-[70px] items-center justify-center rounded-[3px] border border-white/10 bg-black/45 text-crimson min-[1900px]:h-[84px]">
      <ArenaIcon
        className="h-[30px] w-[30px] min-[1900px]:h-[42px] min-[1900px]:w-[42px]"
        name={iconName}
      />
    </div>
  )
}
