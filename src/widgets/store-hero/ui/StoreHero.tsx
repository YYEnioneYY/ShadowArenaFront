import type { StoreItem } from '../../../entities/store/model/mockStoreItems'
import { storeCollections } from '../../../entities/store/model/mockStoreItems'
import { StoreItemVisual } from '../../../entities/store/ui/StoreItemVisual'
import { Panel } from '../../../shared/ui/Panel'

interface StoreHeroProps {
  featuredItem: StoreItem
  onPreview: (item: StoreItem) => void
}

const featuredCollection = storeCollections[0]
const seasonTimer = [
  { label: 'DAYS', value: '32' },
  { label: 'HRS', value: '14' },
  { label: 'MINS', value: '27' },
  { label: 'SECS', value: '53' },
]

export function StoreHero({ featuredItem, onPreview }: StoreHeroProps) {
  return (
    <section className="store-stage">
      <div className="mb-4 min-[1900px]:mb-[22px]">
        <h1 className="font-heading text-[32px] leading-none text-arena-strong xl:text-[39px] min-[1900px]:text-[53px]">
          Store
        </h1>
        <p className="mt-2 text-[10px] font-semibold text-arena-muted xl:text-[12px] min-[1900px]:text-[16px]">
          ENHANCE YOUR EXPERIENCE. UNLOCK EXCLUSIVE CONTENT.
        </p>
      </div>
      <Panel className="store-hero relative min-h-[226px] overflow-hidden px-5 py-7 md:min-h-[250px] md:px-9 xl:min-h-[286px] xl:px-[46px] xl:py-[38px] 2xl:min-h-[316px] 2xl:px-[54px] min-[1900px]:min-h-[414px] min-[1900px]:px-[76px] min-[1900px]:py-[58px]">
        <div className="store-hero-art pointer-events-none absolute inset-y-0 left-[32%] right-[15%] hidden md:block">
          <StoreItemVisual
            className="h-full w-full rounded-none opacity-85"
            item={featuredItem}
            preview
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.92)_0%,rgb(0_0_0/0.5)_34%,rgb(0_0_0/0.18)_58%,rgb(0_0_0/0.78)_100%)]" />
        <div className="relative z-10 grid gap-7 md:grid-cols-[minmax(0,1fr)_220px] md:items-center xl:grid-cols-[minmax(0,1fr)_270px] min-[1900px]:grid-cols-[minmax(0,1fr)_390px]">
          <div className="max-w-[420px] min-[1900px]:max-w-[580px]">
            <h2 className="font-heading text-[24px] leading-none text-arena-strong xl:text-[31px] min-[1900px]:text-[43px]">
              ARENA PASS
            </h2>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.23em] text-crimson xl:text-[13px] min-[1900px]:mt-[18px] min-[1900px]:text-[18px]">
              SEASON 01: ASCENSION
            </p>
            <p className="mt-4 text-[12px] font-semibold text-arena-muted xl:text-[14px] min-[1900px]:mt-[22px] min-[1900px]:text-[19px]">
              COMPETE. PROGRESS. ASCEND.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 min-[1900px]:mt-[33px]">
              <button
                className="h-[40px] rounded-[3px] border border-crimson bg-crimson/12 px-7 text-[10px] font-semibold text-crimson shadow-[0_0_24px_rgb(255_45_45/0.16)] transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[47px] xl:px-9 xl:text-[12px] min-[1900px]:h-[58px] min-[1900px]:px-[46px] min-[1900px]:text-[16px]"
                onClick={() => onPreview(featuredItem)}
                type="button"
              >
                VIEW PASS
              </button>
              <button
                className="h-[40px] rounded-[3px] border border-arena-outline bg-black/35 px-5 text-[10px] font-semibold text-arena-copy transition-colors hover:border-crimson hover:text-crimson xl:h-[47px] xl:text-[12px] min-[1900px]:h-[58px] min-[1900px]:px-[31px] min-[1900px]:text-[16px]"
                onClick={() => onPreview(featuredItem)}
                type="button"
              >
                PREVIEW BUNDLE
              </button>
            </div>
          </div>
          <div className="rounded-[4px] border border-white/5 bg-black/35 p-4 backdrop-blur-[2px] md:bg-transparent md:p-0 min-[1900px]:p-0">
            <p className="text-[8px] font-semibold tracking-[0.22em] text-arena-muted xl:text-[10px] min-[1900px]:text-[14px]">
              SEASON ENDS IN
            </p>
            <div className="mt-3 grid grid-cols-4 gap-2 min-[1900px]:mt-[18px] min-[1900px]:gap-[14px]">
              {seasonTimer.map((item) => (
                <div className="text-center" key={item.label}>
                  <p className="font-heading text-[22px] leading-none text-crimson xl:text-[27px] min-[1900px]:text-[39px]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[7px] font-semibold text-arena-dim min-[1900px]:text-[11px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-arena-line pt-4 min-[1900px]:mt-[28px] min-[1900px]:pt-[22px]">
              <p className="font-heading text-[13px] text-arena-copy xl:text-[16px] min-[1900px]:text-[23px]">
                {featuredCollection.name}
              </p>
              <p className="mt-1 text-[8px] text-crimson xl:text-[10px] min-[1900px]:text-[14px]">
                {featuredCollection.tagline}
              </p>
            </div>
          </div>
        </div>
      </Panel>
    </section>
  )
}
