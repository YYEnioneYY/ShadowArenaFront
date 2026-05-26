import type { StoreItem } from '../../../entities/store/model/mockStoreItems'
import { storeCollections } from '../../../entities/store/model/mockStoreItems'
import { StoreItemVisual } from '../../../entities/store/ui/StoreItemVisual'
import { Panel } from '../../../shared/ui/Panel'

interface StoreHeroProps {
  featuredItem: StoreItem
  onPreview: (item: StoreItem) => void
}

const featuredCollection = storeCollections[0]

export function StoreHero({ featuredItem, onPreview }: StoreHeroProps) {
  return (
    <Panel className="store-hero relative overflow-hidden px-7 py-8 md:px-9 xl:px-[46px] xl:py-[42px] 2xl:px-[54px] min-[1900px]:px-[76px] min-[1900px]:py-[57px]">
      <div className="relative z-10 grid gap-7 md:grid-cols-[1fr_46%] md:items-center min-[1900px]:gap-[54px]">
        <div>
          <p className="text-[9px] font-semibold tracking-[0.32em] text-crimson xl:text-[11px] min-[1900px]:text-[15px]">
            SHADOW SHOP
          </p>
          <h1 className="mt-3 font-display text-[36px] leading-none text-arena-strong md:text-[41px] xl:text-[50px] min-[1900px]:mt-[17px] min-[1900px]:text-[66px]">
            STORE
          </h1>
          <p className="mt-3 text-[17px] font-medium text-arena-copy xl:text-[21px] min-[1900px]:mt-[20px] min-[1900px]:text-[29px]">
            CRAFT YOUR <span className="text-crimson">LEGEND.</span>
          </p>
          <p className="mt-5 max-w-[430px] text-[12px] leading-[1.65] text-arena-muted xl:text-[15px] min-[1900px]:mt-[31px] min-[1900px]:text-[19px]">
            Collect permanent avatar decorations, profile effects and nameplates.
            Equip a look worthy of the Arena.
          </p>
          <div className="mt-7 flex items-center gap-4 min-[1900px]:mt-[38px]">
            <button
              className="h-[39px] rounded-[3px] border border-crimson bg-crimson/15 px-6 text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[47px] xl:text-[12px] min-[1900px]:h-[57px] min-[1900px]:px-[34px] min-[1900px]:text-[16px]"
              onClick={() => onPreview(featuredItem)}
              type="button"
            >
              PREVIEW BUNDLE
            </button>
            <p className="text-[9px] text-arena-muted min-[1900px]:text-[13px]">
              LIMITED COLLECTION
            </p>
          </div>
        </div>
        <button
          className="relative overflow-hidden rounded-[5px] border border-arena-outline text-left transition-colors hover:border-crimson"
          onClick={() => onPreview(featuredItem)}
          type="button"
        >
          <StoreItemVisual
            className="h-[212px] xl:h-[260px] min-[1900px]:h-[334px]"
            item={featuredItem}
            preview
          />
          <span className="absolute bottom-4 right-4 rounded-[3px] bg-black/65 px-4 py-2 backdrop-blur-sm min-[1900px]:bottom-[22px] min-[1900px]:right-[22px]">
            <span className="block font-display text-[15px] text-arena-strong xl:text-[18px] min-[1900px]:text-[23px]">
              {featuredCollection.name}
            </span>
            <span className="text-[8px] text-crimson xl:text-[10px] min-[1900px]:text-[13px]">
              {featuredCollection.tagline}
            </span>
          </span>
        </button>
      </div>
    </Panel>
  )
}
