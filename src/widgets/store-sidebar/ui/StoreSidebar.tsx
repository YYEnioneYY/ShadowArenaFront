import type { StoreItem } from '../../../entities/store/model/mockStoreItems'
import { cn } from '../../../shared/lib/cn'
import { StoreInventoryPanel } from './StoreInventoryPanel'
import { StorePreviewPanel } from './StorePreviewPanel'

interface StoreSidebarProps {
  compact?: boolean
  item: StoreItem
}

export function StoreSidebar({ compact = false, item }: StoreSidebarProps) {
  return (
    <aside
      className={cn(
        compact
          ? 'mt-5 grid gap-3 md:grid-cols-2 lg:hidden'
          : 'hidden flex-col gap-2 bg-arena-base pb-2 pl-3 pr-2 lg:col-start-2 lg:row-start-2 lg:flex xl:gap-3 xl:pl-3 xl:pr-3 min-[1900px]:gap-[12px] min-[1900px]:pl-[16px] min-[1900px]:pr-[14px]',
      )}
    >
      <StorePreviewPanel item={item} key={item.id} />
      <StoreInventoryPanel />
    </aside>
  )
}
