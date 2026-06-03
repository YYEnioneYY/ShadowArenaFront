import { ShadowArenaLogo } from '../../../shared/ui/ShadowArenaLogo'

export function HomeHero() {
  return (
    <section className="home-entry-hero relative flex min-h-[360px] flex-col justify-end pb-7 pt-12 md:min-h-[410px] xl:min-h-[480px] xl:pb-9 2xl:min-h-[530px] min-[1900px]:min-h-[620px] min-[1900px]:pb-[50px]">
      <ShadowArenaLogo className="home-entry-logo absolute left-1/2 top-[38%] h-auto w-[280px] -translate-x-1/2 -translate-y-1/2 sm:w-[390px] xl:w-[520px] 2xl:w-[620px] min-[1900px]:w-[820px]" />
      <div className="relative z-10">
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
