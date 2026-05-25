import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { cn } from '../../../shared/lib/cn'
import { RecentActivityPanel } from '../../tournament-sidebar/ui/RecentActivityPanel'
import { UpcomingTournamentPanel } from '../../tournament-sidebar/ui/UpcomingTournamentPanel'
import { YourRankPanel } from './YourRankPanel'

interface RankingSidebarProps {
  compact?: boolean
}

export function RankingSidebar({ compact = false }: RankingSidebarProps) {
  const { recentActivities } = useActiveGameData()

  return (
    <aside
      className={cn(
        compact
          ? 'mt-5 grid gap-3 md:grid-cols-2 lg:hidden'
          : 'hidden flex-col gap-2 bg-arena-base pb-2 pl-3 pr-2 lg:col-start-2 lg:row-start-2 lg:flex xl:gap-3 xl:pl-3 xl:pr-3 min-[1900px]:gap-[12px] min-[1900px]:pl-[16px] min-[1900px]:pr-[14px]',
      )}
    >
      <YourRankPanel />
      <RecentActivityPanel items={recentActivities} />
      <div className={compact ? 'md:col-span-2' : ''}>
        <UpcomingTournamentPanel />
      </div>
    </aside>
  )
}
