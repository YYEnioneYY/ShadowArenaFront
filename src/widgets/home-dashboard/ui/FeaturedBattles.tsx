import { Link } from 'react-router-dom'
import { TournamentArtwork } from '../../../entities/tournament/ui/TournamentArtwork'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

export function FeaturedBattles() {
  const { tournaments } = useActiveGameData()
  const liveBattles = tournaments
    .filter((tournament) => tournament.status === 'live')
    .slice(0, 3)

  return (
    <section className="mt-6 min-[1900px]:mt-[34px]">
      <div className="mb-4 flex items-center justify-between min-[1900px]:mb-[20px]">
        <h2 className="font-display text-[18px] text-arena-strong xl:text-[22px] min-[1900px]:text-[29px]">
          LIVE BATTLES
        </h2>
        <Link
          className="text-[10px] font-semibold text-crimson xl:text-[12px] min-[1900px]:text-[15px]"
          to="/tournaments"
        >
          VIEW ALL TOURNAMENTS
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-3 min-[1900px]:gap-[18px]">
        {liveBattles.map((tournament) => (
          <Panel className="overflow-hidden" key={tournament.id}>
            <div className="h-[94px] xl:h-[122px] 2xl:h-[135px] min-[1900px]:h-[165px]">
              <TournamentArtwork
                format={tournament.gameMode}
                game={tournament.game}
                variant={tournament.artwork}
              />
            </div>
            <div className="px-4 py-3 xl:px-5 xl:py-4 min-[1900px]:px-6 min-[1900px]:py-5">
              <p className="text-[8px] font-semibold tracking-wider text-crimson xl:text-[10px] min-[1900px]:text-[13px]">
                LIVE NOW
              </p>
              <h3 className="mt-1 text-[16px] text-arena-strong xl:text-[19px] min-[1900px]:text-[25px]">
                {tournament.title}
              </h3>
              <div className="mt-3 flex items-center justify-between text-[9px] text-arena-muted xl:text-[11px] min-[1900px]:text-[14px]">
                <span>
                  {tournament.region} / {tournament.gameMode}
                </span>
                <span className="text-arena-strong">{tournament.prizePool}</span>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  )
}
