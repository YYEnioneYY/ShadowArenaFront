import { RankEmblem } from '../../../entities/ranking/ui/RankEmblem'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

export function RankingHero() {
  const { game, ranking } = useActiveGameData()

  return (
    <Panel className="px-7 pb-5 pt-8 md:px-9 xl:px-[46px] xl:pb-6 xl:pt-[42px] 2xl:px-[54px] 2xl:pt-[48px] min-[1900px]:px-[76px] min-[1900px]:pb-[33px] min-[1900px]:pt-[64px]">
      <h1 className="font-display text-[33px] leading-none text-arena-strong md:text-[36px] xl:text-[44px] 2xl:text-[50px] min-[1900px]:text-[62px]">
        RANKING
      </h1>
      <p className="mt-3 text-[17px] font-medium text-arena-copy xl:mt-4 xl:text-[21px] 2xl:text-[24px] min-[1900px]:mt-[25px] min-[1900px]:text-[32px]">
        ONLY THE STRONGEST <span className="text-crimson">RISE.</span>
      </p>
      <p className="mt-5 text-[12px] leading-[1.55] text-arena-muted xl:mt-7 xl:text-[15px] 2xl:text-[17px] min-[1900px]:mt-[38px] min-[1900px]:text-[21px]">
        Earn glory in {game.title}.
        <br />
        Leave a legacy.
      </p>
      <div className="mt-7 grid gap-2 sm:grid-cols-5 xl:mt-9 xl:gap-3 min-[1900px]:mt-[48px] min-[1900px]:gap-[9px]">
        {ranking.divisions.map((division) => (
          <Panel
            className="flex min-h-[145px] flex-col items-center px-2 pb-3 pt-2 text-center xl:min-h-[177px] min-[1900px]:min-h-[230px] min-[1900px]:px-[16px] min-[1900px]:pb-[17px] min-[1900px]:pt-[11px]"
            key={division.name}
          >
            <RankEmblem
              className="h-[53px] w-[48px] xl:h-[65px] xl:w-[57px] min-[1900px]:h-[96px] min-[1900px]:w-[82px]"
              tier={division.tier}
            />
            <h2 className="mt-2 font-display text-[9px] font-bold text-crimson xl:text-[11px] min-[1900px]:text-[15px]">
              {division.name}
            </h2>
            <p className="mt-2 text-[6px] leading-[1.4] text-arena-muted xl:text-[7px] min-[1900px]:text-[10px]">
              {division.description}
            </p>
          </Panel>
        ))}
      </div>
    </Panel>
  )
}
