import { Panel } from '../../../shared/ui/Panel'
import type { Tournament } from '../model/types'
import { TournamentArtwork } from './TournamentArtwork'

interface TournamentCardProps {
  tournament: Tournament
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  const details = [
    { label: 'STARTS IN', value: tournament.startsIn },
    { label: 'TEAMS', value: String(tournament.teams) },
    { label: 'ENTRY FEE', value: tournament.entryFee },
    { label: 'PRIZE POOL', value: tournament.prizePool },
    { label: 'RANK', value: tournament.rank },
  ]

  return (
    <Panel className="group grid overflow-hidden md:grid-cols-[minmax(305px,1fr)_44%]">
      <div className="px-5 py-4 md:py-3.5 xl:px-7 xl:py-5 2xl:px-8 min-[1900px]:px-[70px] min-[1900px]:py-[32px]">
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-crimson xl:text-[12px] 2xl:text-[13px] min-[1900px]:text-[16px]">
          {tournament.status}
        </p>
        <h3 className="text-[23px] font-medium leading-none text-arena-strong xl:text-[28px] 2xl:text-[31px] min-[1900px]:mt-2 min-[1900px]:text-[43px]">
          {tournament.title}
        </h3>
        <p className="mt-1.5 text-[10px] text-arena-muted xl:text-[12px] 2xl:text-[13px] min-[1900px]:mt-3 min-[1900px]:text-[19px]">
          {tournament.game} - {tournament.region} - {tournament.gameMode}
        </p>
        <div className="mt-3.5 grid grid-cols-5 gap-2 xl:mt-5 min-[1900px]:mt-[26px]">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="text-[7px] font-semibold text-arena-dim xl:text-[8px] 2xl:text-[9px] min-[1900px]:text-[12px]">
                {detail.label}
              </p>
              <p className="mt-1 text-[8px] font-medium text-arena-copy xl:text-[10px] 2xl:text-[11px] min-[1900px]:text-[14px]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TournamentArtwork
        format={tournament.gameMode}
        game={tournament.game}
        variant={tournament.artwork}
      />
    </Panel>
  )
}
