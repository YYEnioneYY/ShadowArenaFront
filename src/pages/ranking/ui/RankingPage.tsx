import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { RankingBoard } from '../../../widgets/ranking-board/ui/RankingBoard'
import { RankingHero } from '../../../widgets/ranking-hero/ui/RankingHero'
import { RankingSidebar } from '../../../widgets/ranking-sidebar/ui/RankingSidebar'

export function RankingPage() {
  return (
    <ArenaPageLayout rightRail={<RankingSidebar />}>
      <div className="px-3 pt-3 md:px-5 md:pt-5 lg:px-0 lg:pt-0">
        <RankingHero />
      </div>
      <div className="mx-3 md:mx-5 lg:mx-[35px] 2xl:mx-[50px] min-[1900px]:mx-[72px]">
        <RankingBoard />
        <RankingSidebar compact />
      </div>
    </ArenaPageLayout>
  )
}
