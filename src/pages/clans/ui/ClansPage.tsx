import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { ClanCatalog } from '../../../widgets/clan-catalog/ui/ClanCatalog'
import { ClansHero } from '../../../widgets/clans-hero/ui/ClansHero'
import { ClansSidebar } from '../../../widgets/clans-sidebar/ui/ClansSidebar'

export function ClansPage() {
  return (
    <ArenaPageLayout rightRail={<ClansSidebar />}>
      <div className="px-3 pt-3 md:px-5 md:pt-5 lg:px-0 lg:pt-0">
        <ClansHero />
      </div>
      <div className="mx-3 mt-5 md:mx-5 lg:mx-[35px] xl:mt-7 2xl:mx-[50px] min-[1900px]:mx-[72px] min-[1900px]:mt-[42px]">
        <ClanCatalog />
      </div>
      <div className="mx-3 md:mx-5 lg:mx-0">
        <ClansSidebar compact />
      </div>
    </ArenaPageLayout>
  )
}
