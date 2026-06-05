import { useMemo, useState } from 'react'
import rankingBanner01 from '../../../assets/ranking-banners/ranking-banner-01.webp'
import rankingBanner02 from '../../../assets/ranking-banners/ranking-banner-02.webp'
import rankingBanner03 from '../../../assets/ranking-banners/ranking-banner-03.webp'
import rankingBanner04 from '../../../assets/ranking-banners/ranking-banner-04.webp'
import rankingBanner05 from '../../../assets/ranking-banners/ranking-banner-05.webp'
import rankingBanner06 from '../../../assets/ranking-banners/ranking-banner-06.webp'
import rankingBanner07 from '../../../assets/ranking-banners/ranking-banner-07.webp'
import rankingBanner08 from '../../../assets/ranking-banners/ranking-banner-08.webp'
import rankingBanner09 from '../../../assets/ranking-banners/ranking-banner-09.webp'
import rankingBanner10 from '../../../assets/ranking-banners/ranking-banner-10.webp'
import rankingBanner11 from '../../../assets/ranking-banners/ranking-banner-11.webp'
import rankingBanner12 from '../../../assets/ranking-banners/ranking-banner-12.webp'
import {
  type RankingEntry,
} from '../../../entities/ranking/model/mockRanking'
import { RankEmblem } from '../../../entities/ranking/ui/RankEmblem'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

type RankingScope = 'top' | 'players' | 'teams'

const scopes: Array<{ label: string; value: RankingScope }> = [
  { label: 'TOP 500', value: 'top' },
  { label: 'PLAYERS', value: 'players' },
  { label: 'TEAMS', value: 'teams' },
]

const rankingBanners = [
  rankingBanner01,
  rankingBanner02,
  rankingBanner03,
  rankingBanner04,
  rankingBanner05,
  rankingBanner06,
  rankingBanner07,
  rankingBanner08,
  rankingBanner09,
  rankingBanner10,
  rankingBanner11,
  rankingBanner12,
]

export function RankingBoard() {
  const { ranking } = useActiveGameData()
  const [scope, setScope] = useState<RankingScope>('top')
  const [query, setQuery] = useState('')

  const entries = useMemo(() => {
    const source: RankingEntry[] =
      scope === 'top'
        ? ranking.top500
        : scope === 'teams'
          ? ranking.teams
          : ranking.players
    const needle = query.trim().toLowerCase()

    return source.filter(
      (entry) =>
        !needle ||
        entry.nickname.toLowerCase().includes(needle) ||
        entry.region.toLowerCase().includes(needle),
    )
  }, [query, ranking, scope])

  return (
    <section className="relative mt-5 min-[1900px]:mt-[18px]">
      <Panel className="flex h-[47px] items-center px-5 xl:h-[56px] xl:px-7 min-[1900px]:h-[70px] min-[1900px]:px-[42px]">
        <div className="flex h-full items-center gap-8 sm:gap-11 xl:gap-[52px] min-[1900px]:gap-[72px]">
          {scopes.map((tab) => (
            <button
              className={cn(
                'relative h-full text-[10px] font-semibold text-arena-muted transition-colors hover:text-arena-strong xl:text-[12px] min-[1900px]:text-[17px]',
                scope === tab.value && 'text-crimson',
              )}
              key={tab.value}
              onClick={() => setScope(tab.value)}
              type="button"
            >
              {tab.label}
              {scope === tab.value && (
                <span className="absolute inset-x-[-11px] bottom-0 h-px bg-crimson" />
              )}
            </button>
          ))}
        </div>
      </Panel>
      <label className="relative mt-2 block min-[1900px]:mt-[10px]">
        <input
          className="h-[40px] w-full rounded-[4px] border border-arena-line bg-[#0d0e12] px-5 pr-12 text-[11px] text-arena-strong outline-none placeholder:text-arena-muted focus:border-crimson xl:h-[47px] xl:text-[13px] min-[1900px]:h-[62px] min-[1900px]:text-[16px]"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          type="search"
          value={query}
        />
        {query && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-arena-muted hover:text-crimson"
            onClick={() => setQuery('')}
            type="button"
          >
            X
          </button>
        )}
      </label>
      <div className="mt-4 space-y-[4px] min-[1900px]:mt-[27px] min-[1900px]:space-y-[8px]">
        {entries.map((entry) => (
          <RankingRow entry={entry} isTeam={scope === 'teams'} key={entry.nickname} />
        ))}
        {entries.length === 0 && (
          <Panel className="p-8 text-center text-[12px] text-arena-muted">
            No ranked warriors match your search.
          </Panel>
        )}
      </div>
    </section>
  )
}

interface RankingRowProps {
  entry: RankingEntry
  isTeam: boolean
}

function RankingRow({ entry, isTeam }: RankingRowProps) {
  const rankLabel = entry.rankName ?? entry.tier
  const rankDetail = isTeam ? `${entry.region} SQUAD` : entry.tag
  const banner = rankingBanners[(entry.position - 1) % rankingBanners.length]

  return (
    <Panel className="grid h-[63px] grid-cols-[47px_82px_82px_minmax(0,1fr)_135px] items-center overflow-hidden px-4 xl:h-[76px] xl:grid-cols-[56px_100px_100px_minmax(0,1fr)_180px] min-[1900px]:h-[100px] min-[1900px]:grid-cols-[72px_145px_157px_minmax(0,1fr)_307px] min-[1900px]:px-[30px]">
      <span className="text-[21px] font-medium text-crimson xl:text-[25px] min-[1900px]:text-[35px]">
        {entry.position}
      </span>
      <span className="flex h-[40px] items-center border-l border-arena-outline pl-4 xl:h-[51px] min-[1900px]:h-[66px] min-[1900px]:pl-[32px]">
        <RankEmblem
          className="h-[40px] w-[59px] xl:h-[51px] xl:w-[75px] min-[1900px]:h-[66px] min-[1900px]:w-[98px]"
          tier={entry.tier}
        />
      </span>
      <span className="border-l border-arena-outline pl-4 text-[11px] font-bold text-arena-strong xl:text-[13px] min-[1900px]:pl-[34px] min-[1900px]:text-[18px]">
        {entry.points}
      </span>
      <span className="border-l border-arena-outline pl-4 min-[1900px]:pl-[36px]">
        <span className="block truncate text-[10px] font-semibold text-crimson xl:text-[12px] min-[1900px]:text-[16px]">
          {entry.nickname}
        </span>
        <span className="block text-[8px] text-arena-muted xl:text-[9px] min-[1900px]:text-[12px]">
          <span className="font-heading font-semibold text-arena-copy">{rankLabel}</span> / {rankDetail}
        </span>
      </span>
      <span
        className="ranking-row-art -mr-4 h-full min-[1900px]:-mr-[30px]"
        style={{ backgroundImage: `url(${banner})` }}
      />
    </Panel>
  )
}
