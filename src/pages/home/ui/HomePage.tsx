import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { FeaturedBattles } from '../../../widgets/home-dashboard/ui/FeaturedBattles'
import { HomeOperations } from '../../../widgets/home-dashboard/ui/HomeOperations'
import { HomeStats } from '../../../widgets/home-dashboard/ui/HomeStats'
import { HomeHero } from '../../../widgets/home-hero/ui/HomeHero'
import { HomeSidebar } from '../../../widgets/home-sidebar/ui/HomeSidebar'

export function HomePage() {
  return (
    <ArenaPageLayout rightRail={<HomeSidebar />}>
      <div className="px-3 pt-3 md:px-5 md:pt-5 lg:px-[35px] lg:pt-0 2xl:px-[50px] min-[1900px]:px-[72px]">
        <HomeHero />
        <HomeStats />
        <FeaturedBattles />
        <HomeOperations />
        <HomeSidebar compact />
      </div>
    </ArenaPageLayout>
  )
}
