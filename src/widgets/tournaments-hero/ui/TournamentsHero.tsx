import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'
import { Panel } from '../../../shared/ui/Panel'

export function TournamentsHero() {
  const { game, overview, tournamentLine } = useActiveGameData()

  return (
    <Panel className="px-7 pb-4 pt-8 md:px-9 xl:px-[46px] xl:pb-6 xl:pt-[42px] 2xl:px-[54px] 2xl:pb-[26px] 2xl:pt-[48px] min-[1900px]:px-[76px] min-[1900px]:pb-[26px] min-[1900px]:pt-[64px]">
      <h1 className="font-display text-[33px] leading-none text-arena-strong md:text-[36px] xl:text-[44px] 2xl:text-[50px] min-[1900px]:text-[62px]">
        TOURNAMENTS
      </h1>
      <p className="mt-3 text-[17px] font-medium text-arena-copy xl:mt-4 xl:text-[21px] 2xl:text-[24px] min-[1900px]:mt-[25px] min-[1900px]:text-[32px]">
        COMPETE. SURVIVE. <span className="text-crimson">BE REMEMBERED.</span>
      </p>
      <p className="mt-5 max-w-[370px] text-[12px] leading-[1.45] text-arena-muted xl:mt-7 xl:max-w-[470px] xl:text-[15px] 2xl:max-w-[550px] 2xl:text-[17px] min-[1900px]:mt-[42px] min-[1900px]:max-w-[650px] min-[1900px]:text-[21px] min-[1900px]:leading-[1.62]">
        {tournamentLine}
        <br />
        Prove your skills, climb the ranks, and claim your glory.
        <br />
        Only the best will be remembered.
      </p>
      <div className="mt-5 grid grid-cols-2 rounded-sm bg-[#0d0e12] px-3 py-2.5 sm:grid-cols-4 xl:mt-8 xl:px-5 xl:py-4 2xl:mt-9 2xl:py-5 min-[1900px]:mt-[42px] min-[1900px]:px-[40px] min-[1900px]:py-[29px]">
        {overview.map((stat, index) => (
          <div
            className="flex items-center gap-3 border-arena-outline px-3 odd:border-r sm:border-r sm:last:border-r-0 xl:gap-4 xl:px-4 min-[1900px]:gap-[22px] min-[1900px]:px-[30px]"
            key={stat.label}
          >
            <ArenaIcon
              className={cnStatIcon(index)}
              name={stat.icon}
            />
            <div>
              <p className="text-[8px] font-semibold text-arena-dim xl:text-[10px] 2xl:text-[11px] min-[1900px]:text-[15px]">{stat.label}</p>
              <p className="mt-0.5 text-[14px] font-bold text-arena-strong xl:text-[18px] 2xl:text-[20px] min-[1900px]:mt-1 min-[1900px]:text-[29px]">
                {stat.value.endsWith(' CR') ? (
                  <>
                    {stat.value.slice(0, -2)}
                    <span className="text-crimson">CR</span>
                  </>
                ) : (
                  stat.value
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-right text-[8px] font-semibold tracking-[0.2em] text-arena-dim min-[1900px]:mt-[16px] min-[1900px]:text-[12px]">
        CURRENT ARENA / {game.title}
      </p>
    </Panel>
  )
}

function cnStatIcon(index: number) {
  return [
    'h-6 w-6 text-crimson xl:h-8 xl:w-8 min-[1900px]:h-[44px] min-[1900px]:w-[44px]',
    'h-7 w-7 text-arena-copy xl:h-9 xl:w-9 min-[1900px]:h-[49px] min-[1900px]:w-[49px]',
    'h-7 w-7 text-arena-copy xl:h-9 xl:w-9 min-[1900px]:h-[49px] min-[1900px]:w-[49px]',
    'h-7 w-7 text-arena-copy xl:h-9 xl:w-9 min-[1900px]:h-[49px] min-[1900px]:w-[49px]',
  ][index]
}
