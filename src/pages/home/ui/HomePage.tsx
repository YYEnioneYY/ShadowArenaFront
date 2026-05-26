import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { HomeHero } from '../../../widgets/home-hero/ui/HomeHero'
import { HomeGamesRow } from '../../../widgets/home-showcase/ui/HomeGamesRow'
import { HomeTournamentRow } from '../../../widgets/home-showcase/ui/HomeTournamentRow'
import { Panel } from '../../../shared/ui/Panel'

export function HomePage() {
  return (
    <ArenaPageLayout mainClassName="lg:col-span-2">
      <Panel className="home-landing-frame mx-3 overflow-hidden px-4 pb-8 pt-5 md:mx-5 md:px-7 lg:mx-0 lg:rounded-none lg:px-[34px] lg:pb-[34px] xl:px-[43px] 2xl:px-[54px] min-[1900px]:px-[76px] min-[1900px]:pb-[60px]">
        <HomeHero />
        <HomeTournamentRow />
        <HomeGamesRow />
      </Panel>
    </ArenaPageLayout>
  )
}
