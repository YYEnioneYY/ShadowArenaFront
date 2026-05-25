import { cn } from '../../../shared/lib/cn'
import type { StoreItem } from '../model/mockStoreItems'
import { StoreItemVisual } from './StoreItemVisual'

interface StoreItemCardProps {
  equipped: boolean
  item: StoreItem
  onSelect: (item: StoreItem) => void
  owned: boolean
  selected: boolean
}

const categoryLabels = {
  decoration: 'AVATAR DECORATION',
  effect: 'PROFILE EFFECT',
  nameplate: 'NAMEPLATE',
  bundle: 'BUNDLE',
} as const

export function StoreItemCard({
  equipped,
  item,
  onSelect,
  owned,
  selected,
}: StoreItemCardProps) {
  return (
    <button
      className={cn(
        'overflow-hidden rounded-[5px] border bg-arena-panel text-left shadow-panel transition-colors hover:border-crimson/60',
        selected ? 'border-crimson' : 'border-arena-line',
      )}
      onClick={() => onSelect(item)}
      type="button"
    >
      <StoreItemVisual
        className="h-[132px] xl:h-[162px] min-[1900px]:h-[205px]"
        item={item}
      />
      <span className="block px-4 pb-4 pt-3 min-[1900px]:px-[22px] min-[1900px]:pb-[21px] min-[1900px]:pt-[17px]">
        <span className="flex items-center justify-between gap-2">
          <span className="text-[8px] font-semibold tracking-[0.16em] text-crimson xl:text-[10px] min-[1900px]:text-[12px]">
            {categoryLabels[item.category]}
          </span>
          {equipped ? (
            <span className="text-[8px] text-crimson min-[1900px]:text-[11px]">
              EQUIPPED
            </span>
          ) : owned ? (
            <span className="text-[8px] text-arena-muted min-[1900px]:text-[11px]">
              OWNED
            </span>
          ) : null}
        </span>
        <span className="mt-2 block truncate text-[15px] font-medium text-arena-strong xl:text-[18px] min-[1900px]:text-[24px]">
          {item.name}
        </span>
        <span className="mt-3 flex items-center justify-between">
          <span className="text-[9px] text-arena-muted min-[1900px]:text-[12px]">
            {item.rarity}
          </span>
          <span className="text-[12px] font-semibold text-arena-strong xl:text-[14px] min-[1900px]:text-[18px]">
            {item.price.toLocaleString('en-US')} <span className="text-crimson">CR</span>
          </span>
        </span>
      </span>
    </button>
  )
}
