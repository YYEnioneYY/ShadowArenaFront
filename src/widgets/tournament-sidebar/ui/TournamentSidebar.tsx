import { cn } from '../../../shared/lib/cn'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { LeaderboardPanel } from './LeaderboardPanel'
import { RecentActivityPanel } from './RecentActivityPanel'
import { UpcomingTournamentPanel } from './UpcomingTournamentPanel'

interface TournamentSidebarProps {
  compact?: boolean
}

export function TournamentSidebar({ compact = false }: TournamentSidebarProps) {
  const { tournamentActivities } = useActiveGameData()

  return (
    <aside
      className={cn(
        compact
          ? 'mt-5 hidden gap-3 md:grid md:grid-cols-2 lg:hidden'
          : 'hidden flex-col gap-2 bg-arena-base pb-2 pl-3 pr-2 lg:col-start-2 lg:row-start-2 lg:flex xl:gap-3 xl:pl-3 xl:pr-3 min-[1900px]:gap-[12px] min-[1900px]:pl-[16px] min-[1900px]:pr-[14px]',
      )}
    >
      <UpcomingTournamentPanel />
      <LeaderboardPanel />
      <div className={compact ? 'md:col-span-2' : 'flex flex-1'}>
        <RecentActivityPanel items={tournamentActivities} />
      </div>
    </aside>
  )
}
