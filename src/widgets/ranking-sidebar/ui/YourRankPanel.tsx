import { Link } from 'react-router-dom'
import { RankEmblem } from '../../../entities/ranking/ui/RankEmblem'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

export function YourRankPanel() {
  const { isAuthenticated } = useAuth()
  const { ranking } = useActiveGameData()
  const { currentRank } = ranking

  if (!isAuthenticated) {
    return (
      <Panel className="p-3 xl:p-4 min-[1900px]:p-[24px]">
        <h2 className="font-heading text-[15px] font-bold text-arena-copy xl:text-[18px] min-[1900px]:text-[28px]">
          YOUR RANK
        </h2>
        <p className="mt-5 font-heading text-[19px] text-arena-strong min-[1900px]:text-[29px]">
          UNRANKED
        </p>
        <p className="mt-3 text-[10px] leading-[1.6] text-arena-muted min-[1900px]:text-[14px]">
          Log in to reveal your standing among the warriors.
        </p>
        <Link
          className="mt-5 flex h-[34px] w-full items-center justify-center rounded-[3px] border border-crimson text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:h-[53px] min-[1900px]:text-[16px]"
          to="/login"
        >
          LOGIN
        </Link>
      </Panel>
    )
  }

  const experiencePercent =
    (currentRank.experience / currentRank.experienceTarget) * 100
  const stats = [
    { label: 'MATCHES PLAYED', value: String(currentRank.matchesPlayed) },
    { label: 'WINS', value: String(currentRank.wins) },
    { label: 'WIN RATE', value: currentRank.winRate },
    { label: 'KILLS', value: currentRank.kills },
  ]

  return (
    <Panel className="p-3 xl:p-4 min-[1900px]:p-[24px]">
      <h2 className="font-heading text-[15px] font-bold text-arena-copy xl:text-[18px] min-[1900px]:text-[28px]">
        YOUR RANK
      </h2>
      <p className="mt-4 font-heading text-[38px] leading-none text-crimson min-[1900px]:mt-[25px] min-[1900px]:text-[55px]">
        #{currentRank.position}
      </p>
      <p className="text-[7px] text-arena-muted min-[1900px]:text-[10px]">
        {currentRank.scope}
      </p>
      <div className="mt-4 flex items-center rounded-[5px] border border-arena-outline px-3 py-3 min-[1900px]:mt-[23px] min-[1900px]:px-[21px] min-[1900px]:py-[20px]">
        <RankEmblem
          className="h-[55px] w-[47px] min-[1900px]:h-[83px] min-[1900px]:w-[74px]"
          tier={currentRank.tier}
        />
        <div className="ml-3 min-w-0 flex-1 min-[1900px]:ml-[18px]">
          <p className="font-heading text-[16px] font-bold text-crimson min-[1900px]:text-[24px]">
            {currentRank.rankName}
          </p>
          <div className="mt-2 flex items-end justify-between">
            <p className="text-[8px] text-crimson min-[1900px]:text-[11px]">
              LEVEL {currentRank.level}
            </p>
            <p className="text-[8px] text-arena-muted min-[1900px]:text-[11px]">
              {currentRank.experience}/{currentRank.experienceTarget}XP
            </p>
          </div>
          <div className="mt-1 h-[3px] bg-arena-outline">
            <div
              className="h-full bg-crimson"
              style={{ width: `${experiencePercent}%` }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-[4px] min-[1900px]:mt-[15px] min-[1900px]:gap-[7px]">
        {stats.map((stat) => (
          <div
            className="rounded-[4px] border border-arena-outline px-2 py-2 text-center min-[1900px]:py-[13px]"
            key={stat.label}
          >
            <p className="text-[6px] text-arena-muted min-[1900px]:text-[9px]">
              {stat.label}
            </p>
            <p className="mt-1 font-heading text-[15px] text-arena-strong min-[1900px]:text-[24px]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  )
}
