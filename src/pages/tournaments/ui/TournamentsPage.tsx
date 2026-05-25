import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { TournamentCatalog } from '../../../widgets/tournament-catalog/ui/TournamentCatalog'
import { TournamentSidebar } from '../../../widgets/tournament-sidebar/ui/TournamentSidebar'
import { TournamentsHero } from '../../../widgets/tournaments-hero/ui/TournamentsHero'

export function TournamentsPage() {
  return (
    <ArenaPageLayout rightRail={<TournamentSidebar />}>
      <div className="px-3 pt-3 md:px-5 md:pt-5 lg:px-0 lg:pt-0">
        <TournamentsHero />
      </div>
      <div className="mx-3 mt-5 md:mx-5 lg:mx-[35px] 2xl:mx-[50px] min-[1900px]:mx-[72px] min-[1900px]:mt-[42px]">
        <TournamentCatalog />
      </div>
      <div className="mx-3 md:mx-5 lg:mx-0">
        <TournamentSidebar compact />
      </div>
    </ArenaPageLayout>
  )
}
