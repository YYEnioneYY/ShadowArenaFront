import { useState } from 'react'
import {
  featuredStoreItem,
  mockStoreItems,
  type StoreItem,
} from '../../../entities/store/model/mockStoreItems'
import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { ArenaPassModal } from '../../../widgets/store-battle-pass/ui/ArenaPassModal'
import { StoreCatalog } from '../../../widgets/store-catalog/ui/StoreCatalog'
import { StoreHero } from '../../../widgets/store-hero/ui/StoreHero'

export function StorePage() {
  const [selectedItem, setSelectedItem] = useState<StoreItem>(featuredStoreItem)
  const [isPassOpen, setIsPassOpen] = useState(false)

  function selectItem(item: StoreItem) {
    setSelectedItem(
      mockStoreItems.find((storeItem) => storeItem.id === item.id) ?? item,
    )
  }

  return (
    <ArenaPageLayout mainClassName="lg:col-span-2">
      <div className="mx-3 pt-6 md:mx-5 md:pt-7 lg:mx-[35px] lg:pt-7 2xl:mx-[50px] 2xl:pt-8 min-[1900px]:mx-[72px] min-[1900px]:pt-[46px]">
        <StoreHero
          featuredItem={featuredStoreItem}
          onPreview={selectItem}
          onViewPass={() => setIsPassOpen(true)}
        />
      </div>
      <div className="mx-3 pb-5 md:mx-5 lg:mx-[35px] 2xl:mx-[50px] min-[1900px]:mx-[72px]">
        <StoreCatalog onSelect={selectItem} selectedId={selectedItem.id} />
      </div>
      {isPassOpen && <ArenaPassModal onClose={() => setIsPassOpen(false)} />}
    </ArenaPageLayout>
  )
}
