import { Link } from 'react-router-dom'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

export function HomeOperations() {
  const { isAuthenticated } = useAuth()
  const { homeActivity, missions } = useActiveGameData()

  if (!isAuthenticated) {
    return <GuestOperations />
  }

  return (
    <div className="mt-6 grid gap-3 md:grid-cols-2 min-[1900px]:mt-[34px] min-[1900px]:gap-[18px]">
      <Panel className="p-4 xl:p-5 min-[1900px]:p-[27px]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-[16px] text-arena-strong xl:text-[19px] min-[1900px]:text-[25px]">
            DAILY MISSIONS
          </h2>
          <span className="text-[9px] text-crimson min-[1900px]:text-[13px]">
            02:14:32 LEFT
          </span>
        </div>
        <div className="space-y-2 min-[1900px]:space-y-3">
          {missions.map((mission) => (
            <div
              className="flex items-center rounded-[4px] border border-arena-line bg-white/[0.015] px-3 py-3 min-[1900px]:px-4 min-[1900px]:py-4"
              key={mission.title}
            >
              <span className="mr-3 h-[8px] w-[8px] rounded-full border border-crimson bg-crimson/25 min-[1900px]:mr-4" />
              <div className="flex-1">
                <p className="text-[11px] text-arena-strong xl:text-[13px] min-[1900px]:text-[16px]">
                  {mission.title}
                </p>
                <p className="mt-1 text-[8px] text-arena-muted min-[1900px]:text-[11px]">
                  {mission.progress}
                </p>
              </div>
              <span className="text-[9px] font-semibold text-crimson xl:text-[11px] min-[1900px]:text-[14px]">
                {mission.reward}
              </span>
            </div>
          ))}
        </div>
      </Panel>
      <Panel className="p-4 xl:p-5 min-[1900px]:p-[27px]">
        <h2 className="mb-4 font-display text-[16px] text-arena-strong xl:text-[19px] min-[1900px]:text-[25px]">
          RECENT ACTIVITY
        </h2>
        <div className="space-y-2 min-[1900px]:space-y-3">
          {homeActivity.map((activity) => (
            <div
              className="grid grid-cols-[1fr_auto] items-center rounded-[4px] border border-arena-line px-3 py-3 min-[1900px]:px-4 min-[1900px]:py-4"
              key={activity.detail}
            >
              <div>
                <p className="text-[9px] uppercase text-crimson min-[1900px]:text-[12px]">
                  {activity.action}
                </p>
                <p className="mt-1 text-[12px] text-arena-strong min-[1900px]:text-[16px]">
                  {activity.detail}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold text-arena-strong min-[1900px]:text-[14px]">
                  {activity.gain}
                </p>
                <p className="mt-1 text-[7px] text-arena-muted min-[1900px]:text-[10px]">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

function GuestOperations() {
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-[1.08fr_0.92fr] min-[1900px]:mt-[34px] min-[1900px]:gap-[18px]">
      <Panel className="relative overflow-hidden p-5 xl:p-7 min-[1900px]:p-[34px]">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-crimson/10 blur-3xl" />
        <p className="text-[9px] font-semibold tracking-[0.24em] text-crimson min-[1900px]:text-[13px]">
          JOIN THE LEGEND
        </p>
        <h2 className="mt-3 font-display text-[22px] text-arena-strong xl:text-[27px] min-[1900px]:text-[36px]">
          YOUR JOURNEY AWAITS
        </h2>
        <p className="relative mt-3 max-w-[430px] text-[11px] leading-[1.7] text-arena-muted xl:text-[13px] min-[1900px]:text-[16px]">
          Unlock ranked progression, daily missions and victory rewards when
          you enter under your warrior profile.
        </p>
        <div className="relative mt-6 flex gap-3">
          <Link
            className="flex h-[39px] items-center justify-center rounded-[3px] border border-crimson bg-crimson/15 px-6 text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:h-[50px] min-[1900px]:text-[14px]"
            to="/login"
          >
            LOGIN
          </Link>
          <Link
            className="flex h-[39px] items-center justify-center rounded-[3px] border border-arena-outline px-6 text-[10px] font-semibold text-arena-copy transition-colors hover:border-crimson min-[1900px]:h-[50px] min-[1900px]:text-[14px]"
            to="/register"
          >
            REGISTER
          </Link>
        </div>
      </Panel>
      <Panel className="p-5 xl:p-7 min-[1900px]:p-[34px]">
        <h2 className="font-display text-[17px] text-arena-strong xl:text-[21px] min-[1900px]:text-[27px]">
          ARENA PRIVILEGES
        </h2>
        <div className="mt-5 space-y-4 text-[11px] text-arena-copy min-[1900px]:text-[15px]">
          {[
            'Track rank progression',
            'Compete for Shadow Coins',
            'Claim seasonal rewards',
          ].map((feature) => (
            <p className="flex items-center gap-3" key={feature}>
              <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
              {feature}
            </p>
          ))}
        </div>
      </Panel>
    </div>
  )
}
