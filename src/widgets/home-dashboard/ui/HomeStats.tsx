import { useAuth } from '../../../features/auth/model/useAuth'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { useShop } from '../../../features/shop/model/useShop'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

export function HomeStats() {
  const { isAuthenticated } = useAuth()
  const { overview, profile } = useActiveGameData()
  const { balance } = useShop()
  const stats = isAuthenticated
    ? profile.stats.map((stat) =>
        stat.label === 'SHADOW COINS'
          ? { ...stat, value: balance.toLocaleString('en-US') }
          : stat,
      )
    : overview

  return (
    <Panel className="mt-4 grid grid-cols-2 overflow-hidden sm:grid-cols-4 xl:mt-5 min-[1900px]:mt-[24px]">
      {stats.map((stat) => (
        <div
          className="border-arena-line px-5 py-4 even:border-l sm:border-l sm:first:border-l-0 xl:px-7 xl:py-5 min-[1900px]:px-[38px] min-[1900px]:py-[25px]"
          key={stat.label}
        >
          <p className="text-[8px] font-semibold tracking-[0.13em] text-arena-dim xl:text-[10px] min-[1900px]:text-[13px]">
            {stat.label}
          </p>
          <p
            className={cn(
              'mt-2 text-[21px] font-semibold text-arena-strong xl:text-[25px] min-[1900px]:text-[34px]',
              stat.accent && 'text-crimson',
            )}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </Panel>
  )
}
