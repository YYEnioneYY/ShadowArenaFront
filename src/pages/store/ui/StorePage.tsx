import { useState } from 'react'
import {
  featuredStoreItem,
  mockStoreItems,
  type StoreItem,
} from '../../../entities/store/model/mockStoreItems'
import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { StoreCatalog } from '../../../widgets/store-catalog/ui/StoreCatalog'
import { StoreHero } from '../../../widgets/store-hero/ui/StoreHero'
import { StoreSidebar } from '../../../widgets/store-sidebar/ui/StoreSidebar'

export function StorePage() {
  const [selectedItem, setSelectedItem] = useState<StoreItem>(featuredStoreItem)

  function selectItem(item: StoreItem) {
    setSelectedItem(
      mockStoreItems.find((storeItem) => storeItem.id === item.id) ?? item,
    )
  }

  return (
    <ArenaPageLayout rightRail={<StoreSidebar item={selectedItem} />}>
      <div className="px-3 pt-3 md:px-5 md:pt-5 lg:px-0 lg:pt-0">
        <StoreHero featuredItem={featuredStoreItem} onPreview={selectItem} />
      </div>
      <div className="mx-3 pb-5 md:mx-5 lg:mx-[35px] 2xl:mx-[50px] min-[1900px]:mx-[72px]">
        <StoreCatalog onSelect={selectItem} selectedId={selectedItem.id} />
        <StoreSidebar compact item={selectedItem} />
      </div>
    </ArenaPageLayout>
  )
}
