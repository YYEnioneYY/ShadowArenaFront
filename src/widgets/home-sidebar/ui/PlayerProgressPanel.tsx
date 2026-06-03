import { Link } from 'react-router-dom'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

export function PlayerProgressPanel() {
  const { user } = useAuth()
  const { game, profile } = useActiveGameData()

  if (!user) {
    return (
      <Panel className="overflow-hidden p-4 xl:p-5 min-[1900px]:p-[25px]">
        <p className="text-[8px] font-semibold tracking-[0.2em] text-crimson min-[1900px]:text-[12px]">
          WARRIOR ACCESS
        </p>
        <h2 className="mt-3 font-heading text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
          ENTER THE ARENA
        </h2>
        <p className="mt-3 text-[10px] leading-[1.7] text-arena-muted xl:text-[12px] min-[1900px]:text-[15px]">
          Sign in to reveal your rank, rewards and personal tournament history.
        </p>
        <Link
          className="mt-5 flex h-[36px] w-full items-center justify-center rounded-[3px] border border-crimson bg-crimson/10 text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[42px] min-[1900px]:mt-7 min-[1900px]:h-[53px] min-[1900px]:text-[16px]"
          to="/login"
        >
          LOGIN
        </Link>
        <Link
          className="mt-2 flex h-[36px] w-full items-center justify-center rounded-[3px] border border-arena-outline text-[10px] font-semibold text-arena-copy transition-colors hover:border-crimson xl:h-[42px] min-[1900px]:h-[53px] min-[1900px]:text-[16px]"
          to="/register"
        >
          CREATE ACCOUNT
        </Link>
      </Panel>
    )
  }

  return (
    <Panel className="p-4 xl:p-5 min-[1900px]:p-[25px]">
      <div className="flex items-center gap-3 min-[1900px]:gap-[18px]">
        <div className="profile-orb h-[50px] w-[50px] shrink-0 rounded-full border border-crimson xl:h-[58px] xl:w-[58px] min-[1900px]:h-[76px] min-[1900px]:w-[76px]" />
        <div>
          <p className="text-[8px] font-semibold tracking-[0.2em] text-crimson min-[1900px]:text-[12px]">
            {game.title}
          </p>
          <h2 className="font-heading text-[15px] text-arena-strong xl:text-[18px] min-[1900px]:text-[24px]">
            {profile.name}
          </h2>
          <p className="text-[9px] text-arena-muted min-[1900px]:text-[13px]">
            {profile.title}
          </p>
        </div>
      </div>
      <div className="mt-5 border-t border-arena-line pt-4 min-[1900px]:mt-7 min-[1900px]:pt-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[8px] text-arena-muted min-[1900px]:text-[12px]">
              CURRENT RANK
            </p>
            <p className="mt-1 font-heading text-[17px] font-semibold text-arena-strong xl:text-[20px] min-[1900px]:text-[28px]">
              {profile.rank}
            </p>
          </div>
          <p className="text-[9px] text-crimson min-[1900px]:text-[13px]">
            LVL {profile.level}
          </p>
        </div>
        <div className="mt-4 h-[4px] overflow-hidden rounded-full bg-arena-outline min-[1900px]:h-[6px]">
          <div
            className="h-full bg-crimson shadow-[0_0_10px_rgb(255_45_45/0.8)]"
            style={{ width: `${profile.rankProgress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[8px] text-arena-muted min-[1900px]:text-[11px]">
          <span>{profile.rankProgress}% COMPLETE</span>
          <span className="font-heading">{profile.nextRank}</span>
        </div>
      </div>
      <button
        className="mt-5 h-[34px] w-full rounded-[3px] border border-crimson text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[40px] min-[1900px]:mt-7 min-[1900px]:h-[53px] min-[1900px]:text-[16px]"
        type="button"
      >
        VIEW PROFILE
      </button>
    </Panel>
  )
}
