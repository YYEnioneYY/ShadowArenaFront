import heroBlockVideoUrl from '../../../assets/heroblock.mp4'

export function HomeHero() {
  return (
    <section className="home-entry-hero mb-8 pt-3 xl:mb-10 min-[1900px]:mb-[56px]">
      <div className="home-entry-video-frame relative h-[420px] overflow-hidden rounded-[4px] md:h-[500px] xl:h-[590px] 2xl:h-[650px] min-[1900px]:h-[780px]">
        <video
          aria-hidden="true"
          autoPlay
          className="home-entry-video absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
          src={heroBlockVideoUrl}
        />
      </div>
      <div className="mt-6 xl:mt-7 min-[1900px]:mt-[38px]">
        <p className="font-display text-[21px] text-arena-strong sm:text-[25px] xl:text-[31px] 2xl:text-[35px] min-[1900px]:text-[49px]">
          FORGE YOUR LEGEND
        </p>
        <p className="mt-2 text-[10px] text-arena-copy xl:text-[12px] 2xl:text-[14px] min-[1900px]:mt-[13px] min-[1900px]:text-[19px]">
          COMPLETE. SURVIVE.{' '}
          <span className="text-crimson">BE REMEMBERED</span>
        </p>
      </div>
    </section>
  )
}
