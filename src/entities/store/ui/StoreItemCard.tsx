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
        'store-market-card group overflow-hidden rounded-[5px] border bg-arena-panel text-left shadow-panel transition-colors hover:border-crimson/60',
        selected ? 'border-crimson' : 'border-arena-line',
      )}
      onClick={() => onSelect(item)}
      type="button"
    >
      <StoreItemVisual
        className="h-[158px] transition-transform duration-300 group-hover:scale-[1.035] xl:h-[186px] min-[1900px]:h-[252px]"
        item={item}
      />
      <span className="block px-4 pb-4 pt-3 min-[1900px]:px-[22px] min-[1900px]:pb-[23px] min-[1900px]:pt-[18px]">
        <span className="flex min-h-[14px] items-center justify-between gap-2">
          <span className="text-[8px] font-semibold tracking-[0.16em] text-crimson xl:text-[10px] min-[1900px]:text-[13px]">
            {categoryLabels[item.category]}
          </span>
          {equipped ? (
            <span className="text-[8px] font-semibold text-crimson min-[1900px]:text-[11px]">
              EQUIPPED
            </span>
          ) : owned ? (
            <span className="text-[8px] font-semibold text-arena-muted min-[1900px]:text-[11px]">
              OWNED
            </span>
          ) : null}
        </span>
        <span className="mt-2 block truncate font-heading text-[16px] text-arena-strong xl:text-[19px] min-[1900px]:text-[27px]">
          {item.name}
        </span>
        <span className="mt-1 block truncate text-[9px] text-arena-muted xl:text-[11px] min-[1900px]:text-[15px]">
          {item.description}
        </span>
        <span className="mt-4 flex items-center justify-between border-t border-arena-line pt-3 min-[1900px]:mt-[22px] min-[1900px]:pt-[16px]">
          <span className="text-[9px] text-arena-muted min-[1900px]:text-[12px]">
            {item.rarity}
          </span>
          <span className="text-[13px] font-semibold text-arena-strong xl:text-[15px] min-[1900px]:text-[20px]">
            {item.price.toLocaleString('en-US')} <span className="text-crimson">CR</span>
          </span>
        </span>
      </span>
    </button>
  )
}
