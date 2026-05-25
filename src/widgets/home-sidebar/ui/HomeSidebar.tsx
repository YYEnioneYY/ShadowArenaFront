import { cn } from '../../../shared/lib/cn'
import { LeaderboardPanel } from '../../tournament-sidebar/ui/LeaderboardPanel'
import { UpcomingTournamentPanel } from '../../tournament-sidebar/ui/UpcomingTournamentPanel'
import { PlayerProgressPanel } from './PlayerProgressPanel'

interface HomeSidebarProps {
  compact?: boolean
}

export function HomeSidebar({ compact = false }: HomeSidebarProps) {
  return (
    <aside
      className={cn(
        compact
          ? 'mt-6 grid gap-3 md:grid-cols-2 lg:hidden'
          : 'hidden flex-col gap-2 bg-arena-base pb-2 pl-3 pr-2 lg:col-start-2 lg:row-start-2 lg:flex xl:gap-3 xl:pl-3 xl:pr-3 min-[1900px]:gap-[12px] min-[1900px]:pl-[16px] min-[1900px]:pr-[14px]',
      )}
    >
      <PlayerProgressPanel />
      <UpcomingTournamentPanel />
      <div className={compact ? 'md:col-span-2' : ''}>
        <LeaderboardPanel />
      </div>
    </aside>
  )
}
