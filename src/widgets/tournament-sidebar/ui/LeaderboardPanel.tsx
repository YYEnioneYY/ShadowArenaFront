import { Link } from 'react-router-dom'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

export function LeaderboardPanel() {
  const { ranking } = useActiveGameData()
  const leadingPlayers = ranking.top500.slice(0, 8)

  return (
    <Panel className="p-3 xl:p-4 2xl:p-[18px] min-[1900px]:p-[24px]">
      <div className="mb-2 flex items-center justify-between xl:mb-3 min-[1900px]:mb-[14px]">
        <h2 className="font-display text-[15px] font-bold text-arena-copy xl:text-[18px] 2xl:text-[21px] min-[1900px]:text-[28px]">
          LEADERBOARD
        </h2>
        <Link
          className="text-[8px] font-semibold text-crimson xl:text-[10px] 2xl:text-[11px] min-[1900px]:text-[15px]"
          to="/ranking"
        >
          VIEW ALL
        </Link>
      </div>
      <div className="space-y-[3px] xl:space-y-1 min-[1900px]:space-y-[6px]">
        {leadingPlayers.map((player) => (
          <div
            className="flex h-[38px] items-center rounded-[5px] border border-arena-outline px-1.5 xl:h-[47px] xl:px-2 2xl:h-[53px] min-[1900px]:h-[72px] min-[1900px]:px-[13px]"
            key={player.position}
          >
            <span className="w-[27px] text-[18px] text-arena-copy xl:w-[34px] xl:text-[22px] 2xl:text-[25px] min-[1900px]:w-[49px] min-[1900px]:text-[33px]">
              {String(player.position).padStart(2, '0')}
            </span>
            <span className="leader-avatar mr-2 h-[27px] w-[27px] rounded-full border border-crimson xl:h-[34px] xl:w-[34px] 2xl:h-[38px] 2xl:w-[38px] min-[1900px]:mr-[18px] min-[1900px]:h-[50px] min-[1900px]:w-[50px]" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[9px] font-semibold text-crimson xl:text-[11px] 2xl:text-[12px] min-[1900px]:text-[17px]">
                {player.nickname}
              </span>
              <span className="block text-[7px] text-arena-muted xl:text-[8px] 2xl:text-[9px] min-[1900px]:text-[12px]">{player.tag}</span>
            </span>
            <span className="text-right">
              <span className="block text-[11px] font-bold text-arena-copy xl:text-[14px] 2xl:text-[16px] min-[1900px]:text-[23px]">
                {player.points}
              </span>
              <span className="block text-[7px] text-arena-muted xl:text-[8px] 2xl:text-[9px] min-[1900px]:text-[12px]">POINTS</span>
            </span>
          </div>
        ))}
      </div>
    </Panel>
  )
}
