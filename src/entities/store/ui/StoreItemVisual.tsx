import { cn } from '../../../shared/lib/cn'
import type { StoreItem } from '../model/mockStoreItems'

interface StoreItemVisualProps {
  className?: string
  item: StoreItem
  preview?: boolean
}

export function StoreItemVisual({
  className,
  item,
  preview = false,
}: StoreItemVisualProps) {
  return (
    <div
      className={cn(
        'store-art relative isolate overflow-hidden',
        `store-art-${item.visual}`,
        className,
      )}
    >
      <div className="store-art-pattern absolute inset-0" />
      <div className="store-art-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="store-art-decoration absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      {preview && (
        <span className="absolute bottom-3 left-3 rounded-sm border border-white/10 bg-black/45 px-2.5 py-1 text-[8px] font-semibold tracking-[0.16em] text-arena-copy min-[1900px]:bottom-5 min-[1900px]:left-5 min-[1900px]:text-[11px]">
          LIVE PREVIEW
        </span>
      )}
    </div>
  )
}
