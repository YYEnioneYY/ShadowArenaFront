import bloodMoonArrivalImage from '../../../assets/store/items/blood-moon-arrival.webp'
import crimsonSovereignBundleImage from '../../../assets/store/items/crimson-sovereign-bundle.webp'
import crownOfEmbersImage from '../../../assets/store/items/crown-of-embers.webp'
import eclipseLegacyBundleImage from '../../../assets/store/items/eclipse-legacy-bundle.webp'
import immortalWingsImage from '../../../assets/store/items/immortal-wings.webp'
import lotusAwakeningImage from '../../../assets/store/items/lotus-awakening.webp'
import orderSigilImage from '../../../assets/store/items/order-sigil.webp'
import phantomStepImage from '../../../assets/store/items/phantom-step.webp'
import roninOathImage from '../../../assets/store/items/ronin-oath.webp'
import spectralHornsImage from '../../../assets/store/items/spectral-horns.webp'
import veiledNameplateImage from '../../../assets/store/items/veiled-nameplate.webp'
import { cn } from '../../../shared/lib/cn'
import type { StoreItem } from '../model/mockStoreItems'

interface StoreItemVisualProps {
  className?: string
  item: StoreItem
  preview?: boolean
}

const storeItemImages: Record<string, string> = {
  'blood-moon-arrival': bloodMoonArrivalImage,
  'crimson-sovereign-bundle': crimsonSovereignBundleImage,
  'crown-of-embers': crownOfEmbersImage,
  'eclipse-legacy-bundle': eclipseLegacyBundleImage,
  'immortal-wings': immortalWingsImage,
  'lotus-awakening': lotusAwakeningImage,
  'order-sigil': orderSigilImage,
  'phantom-step': phantomStepImage,
  'ronin-oath': roninOathImage,
  'spectral-horns': spectralHornsImage,
  'veiled-nameplate': veiledNameplateImage,
}

export function StoreItemVisual({
  className,
  item,
  preview = false,
}: StoreItemVisualProps) {
  const imageUrl = storeItemImages[item.id]

  return (
    <div
      className={cn(
        'store-art relative isolate overflow-hidden',
        `store-art-${item.visual}`,
        className,
      )}
    >
      {imageUrl ? (
        <>
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            src={imageUrl}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_45%,rgb(255_45_45/0.08),transparent_42%),linear-gradient(180deg,rgb(0_0_0/0.02),rgb(0_0_0/0.22))]" />
        </>
      ) : (
        <>
          <div className="store-art-pattern absolute inset-0" />
          <div className="store-art-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="store-art-decoration absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </>
      )}
      {preview && (
        <span className="absolute bottom-3 left-3 rounded-sm border border-white/10 bg-black/45 px-2.5 py-1 text-[8px] font-semibold tracking-[0.16em] text-arena-copy min-[1900px]:bottom-5 min-[1900px]:left-5 min-[1900px]:text-[11px]">
          LIVE PREVIEW
        </span>
      )}
    </div>
  )
}
