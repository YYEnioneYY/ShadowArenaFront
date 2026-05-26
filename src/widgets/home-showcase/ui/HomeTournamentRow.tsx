import { Link } from 'react-router-dom'
import type { Tournament } from '../../../entities/tournament/model/types'
import { TournamentArtwork } from '../../../entities/tournament/ui/TournamentArtwork'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

const countdown = [
  { unit: 'DAYS', value: '0' },
  { unit: 'HRS', value: '14' },
  { unit: 'MINS', value: '55' },
  { unit: 'SECS', value: '41' },
]

export function HomeTournamentRow() {
  const { tournaments } = useActiveGameData()

  return (
    <section>
      <h2 className="mb-3 font-display text-[14px] font-bold text-arena-copy xl:text-[17px] min-[1900px]:mb-[18px] min-[1900px]:text-[24px]">
        UPCOMING TOURNAMENT
      </h2>
      <div className="home-scroll-row flex gap-2 overflow-x-auto xl:gap-3 min-[1900px]:gap-[17px]">
        {tournaments.slice(0, 5).map((tournament) => (
          <HomeTournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </section>
  )
}

function HomeTournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <Panel className="w-[220px] shrink-0 overflow-hidden p-2 xl:w-[254px] xl:p-3 2xl:w-[286px] min-[1900px]:w-[358px] min-[1900px]:p-[14px]">
      <div className="h-[94px] overflow-hidden rounded-[2px] xl:h-[112px] 2xl:h-[126px] min-[1900px]:h-[164px]">
        <TournamentArtwork
          featured
          format={tournament.gameMode}
          game={tournament.game}
          variant={tournament.artwork}
        />
      </div>
      <h3 className="mt-2 text-[17px] text-arena-strong xl:text-[20px] min-[1900px]:mt-[13px] min-[1900px]:text-[28px]">
        {tournament.title}
      </h3>
      <p className="text-[8px] text-arena-muted xl:text-[9px] min-[1900px]:text-[13px]">
        {tournament.game} - {tournament.region} - {tournament.gameMode}
      </p>
      <div className="mt-2 grid grid-cols-4 gap-2 min-[1900px]:mt-[12px] min-[1900px]:gap-[10px]">
        {countdown.map((item) => (
          <div
            className="rounded-[4px] border border-arena-outline py-1 text-center min-[1900px]:py-[7px]"
            key={item.unit}
          >
            <p className="text-[11px] font-bold text-arena-strong xl:text-[13px] min-[1900px]:text-[18px]">
              {item.value}
            </p>
            <p className="text-[6px] text-arena-muted min-[1900px]:text-[9px]">
              {item.unit}
            </p>
          </div>
        ))}
      </div>
      <Link
        className="mt-2 flex h-[26px] items-center justify-center rounded-[3px] border border-crimson text-[7px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[29px] xl:text-[8px] min-[1900px]:mt-[11px] min-[1900px]:h-[39px] min-[1900px]:text-[11px]"
        to="/tournaments"
      >
        VIEW DETAILS
      </Link>
    </Panel>
  )
}
