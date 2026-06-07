import bloodMoonVideo from '../../../assets/bloodmoon.mp4'
import crownOfEmbersVideo from '../../../assets/crownofembers.mp4'
import immortalWingsVideo from '../../../assets/immortalwings.mp4'
import lotusAwakingVideo from '../../../assets/lotusawaking.mp4'
import phantomStepVideo from '../../../assets/phantomstep.mp4'
import spectralHornsVideo from '../../../assets/spectralhorns.mp4'
import crownOfEmbersImage from '../../../assets/store/crownofembers.png'
import eclipseLegacyBundleImage from '../../../assets/store/eclipselegacy.png'
import immortalWingsImage from '../../../assets/store/immortalwings.png'
import orderSigilImage from '../../../assets/store/ordersigil.png'
import roninOathImage from '../../../assets/store/roninoath.png'
import sovereignSetImage from '../../../assets/store/sovereignset.png'
import spectralHornsImage from '../../../assets/store/spectralhorns.png'
import veiledThroneImage from '../../../assets/store/veiledthrone.png'
import { cn } from '../../../shared/lib/cn'
import type { StoreItem } from '../model/mockStoreItems'

interface StoreItemVisualProps {
  className?: string
  item: StoreItem
  preview?: boolean
}

const storeItemImages: Record<string, string> = {
  'crimson-sovereign-bundle': sovereignSetImage,
  'crown-of-embers': crownOfEmbersImage,
  'eclipse-legacy-bundle': eclipseLegacyBundleImage,
  'immortal-wings': immortalWingsImage,
  'order-sigil': orderSigilImage,
  'ronin-oath': roninOathImage,
  'spectral-horns': spectralHornsImage,
  'veiled-nameplate': veiledThroneImage,
}

const storeItemVideos: Record<string, string> = {
  'blood-moon-arrival': bloodMoonVideo,
  'crown-of-embers': crownOfEmbersVideo,
  'immortal-wings': immortalWingsVideo,
  'lotus-awakening': lotusAwakingVideo,
  'phantom-step': phantomStepVideo,
  'spectral-horns': spectralHornsVideo,
}

export function StoreItemVisual({
  className,
  item,
  preview = false,
}: StoreItemVisualProps) {
  const imageUrl = storeItemImages[item.id]
  const videoUrl = storeItemVideos[item.id]

  return (
    <div
      className={cn(
        'store-art relative isolate overflow-hidden',
        `store-art-${item.visual}`,
        className,
      )}
    >
      {videoUrl ? (
        <>
          <video
            aria-hidden="true"
            autoPlay
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            loop
            muted
            playsInline
            poster={imageUrl}
            preload="metadata"
            src={videoUrl}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_45%,rgb(255_45_45/0.1),transparent_42%),linear-gradient(180deg,rgb(0_0_0/0.04),rgb(0_0_0/0.28))]" />
        </>
      ) : imageUrl ? (
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
