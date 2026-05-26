import { TournamentArtwork } from '../../../entities/tournament/ui/TournamentArtwork'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

const countdown = [
  { value: '0', unit: 'DAYS' },
  { value: '14', unit: 'HRS' },
  { value: '55', unit: 'MINS' },
  { value: '41', unit: 'SECS' },
]

export function UpcomingTournamentPanel() {
  const { tournaments } = useActiveGameData()
  const featuredTournament = tournaments[0]

  return (
    <Panel className="p-3 xl:p-4 2xl:p-[18px] min-[1900px]:p-[24px]">
      <h2 className="mb-3 font-heading text-[15px] font-bold text-arena-copy xl:text-[18px] 2xl:mb-4 2xl:text-[21px] min-[1900px]:mb-[27px] min-[1900px]:text-[28px]">
        UPCOMING TOURNAMENT
      </h2>
      <div className="h-[108px] overflow-hidden rounded-[2px] xl:h-[140px] 2xl:h-[162px] min-[1900px]:h-[209px]">
        <TournamentArtwork
          featured
          format={featuredTournament.gameMode}
          game={featuredTournament.game}
          variant={featuredTournament.artwork}
        />
      </div>
      <h3 className="mt-3 text-[21px] font-medium text-arena-strong xl:mt-4 xl:text-[26px] 2xl:text-[29px] min-[1900px]:mt-[31px] min-[1900px]:text-[42px]">
        {featuredTournament.title}
      </h3>
      <p className="text-[10px] text-arena-muted xl:text-[12px] 2xl:text-[14px] min-[1900px]:mt-1 min-[1900px]:text-[20px]">
        {featuredTournament.game} - {featuredTournament.region} -{' '}
        {featuredTournament.gameMode}
      </p>
      <div className="mt-3 grid grid-cols-4 gap-3 xl:mt-4 xl:gap-4 min-[1900px]:mt-[20px] min-[1900px]:gap-[29px]">
        {countdown.map((item) => (
          <div
            className="rounded-[5px] border border-arena-outline py-2 text-center xl:py-3 min-[1900px]:h-[83px] min-[1900px]:py-[13px]"
            key={item.unit}
          >
            <p className="text-[13px] font-bold text-arena-strong xl:text-[17px] 2xl:text-[20px] min-[1900px]:text-[29px]">{item.value}</p>
            <p className="mt-1 text-[7px] text-arena-muted xl:text-[9px] min-[1900px]:text-[13px]">{item.unit}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-3 h-[31px] w-full rounded-[3px] border border-crimson text-[9px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:mt-4 xl:h-[40px] xl:text-[12px] 2xl:h-[44px] 2xl:text-[13px] min-[1900px]:mt-[15px] min-[1900px]:h-[59px] min-[1900px]:text-[18px]"
        type="button"
      >
        VIEW DETAILS
      </button>
    </Panel>
  )
}
