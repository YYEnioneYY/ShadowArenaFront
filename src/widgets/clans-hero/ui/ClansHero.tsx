import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'

export function ClansHero() {
  const { game } = useActiveGameData()

  return (
    <section className="px-7 pb-1 pt-8 md:px-9 xl:px-[46px] xl:pt-[42px] 2xl:px-[54px] 2xl:pt-[48px] min-[1900px]:px-[76px] min-[1900px]:pt-[64px]">
      <h1 className="font-display text-[33px] leading-none text-arena-strong md:text-[36px] xl:text-[44px] 2xl:text-[50px] min-[1900px]:text-[62px]">
        CLANS
      </h1>
      <p className="mt-3 text-[17px] font-medium leading-[1.55] text-arena-copy xl:mt-4 xl:text-[21px] 2xl:text-[24px] min-[1900px]:mt-[25px] min-[1900px]:text-[32px]">
        FIND YOUR SQUAD.
        <br />
        BUILD YOUR <span className="text-crimson">LEGACY.</span>
      </p>
      <p className="mt-5 text-[9px] font-semibold tracking-[0.2em] text-arena-dim xl:text-[11px] min-[1900px]:mt-[31px] min-[1900px]:text-[14px]">
        CURRENT ARENA / {game.title}
      </p>
    </section>
  )
}
