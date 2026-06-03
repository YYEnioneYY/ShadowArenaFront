import { useMemo, useState } from 'react'
import { RankEmblem } from '../../../entities/ranking/ui/RankEmblem'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

type ProfileTab = 'overview' | 'stats' | 'matches' | 'achievements'

const tabs: Array<{ label: string; value: ProfileTab }> = [
  { label: 'OVERVIEW', value: 'overview' },
  { label: 'STATS', value: 'stats' },
  { label: 'MATCH HISTORY', value: 'matches' },
  { label: 'ACHIEVEMENTS', value: 'achievements' },
]

export function ProfileStats() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview')
  //const activeGameData = useActiveGameData()

  return (
    <>
      <Panel className="mt-3 flex h-[52px] items-center px-5 xl:mt-4 xl:h-[62px] xl:px-8 min-[1900px]:h-[72px] min-[1900px]:px-[42px]">
        <div className="flex h-full w-full items-center justify-between">
          {tabs.map((tab) => (
            <button
              className={cn(
                'relative h-full px-2 font-display text-[10px] font-bold text-arena-muted transition-colors hover:text-arena-strong xl:text-[12px] min-[1900px]:px-[17px] min-[1900px]:text-[16px]',
                activeTab === tab.value && 'text-crimson',
              )}
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              type="button"
            >
              {tab.label}
              {activeTab === tab.value && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-crimson" />
              )}
            </button>
          ))}
        </div>
      </Panel>
      {activeTab === 'overview' && <RankAndProgression />}
      {activeTab === 'stats' && <GameStatistics />}
      {activeTab === 'matches' && <MatchHistory />}
      {activeTab === 'achievements' && <GameMilestones />}
    </>
  )
}

function RankAndProgression() {
  const { game, ranking } = useActiveGameData()
  const { currentRank } = ranking
  const progress =
    (currentRank.experience / currentRank.experienceTarget) * 100
  const kills = Number(currentRank.kills.replace(',', ''))
  const deaths = Math.round(kills / 2.02)
  const stats = [
    { label: 'MATCHES PLAYED', value: String(currentRank.matchesPlayed) },
    { label: 'WINS', value: String(currentRank.wins) },
    { label: 'WIN RATE', value: currentRank.winRate },
    { label: 'KILLS', value: currentRank.kills },
    { label: 'DEATHS', value: deaths.toLocaleString('en-US') },
    { label: 'K/D RATIO', value: (kills / deaths).toFixed(2) },
  ]

  return (
    <Panel className="mt-3 px-6 py-7 xl:mt-4 xl:px-8 xl:py-[34px] min-[1900px]:px-[44px] min-[1900px]:py-[42px]">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-[18px] font-bold text-arena-strong xl:text-[22px] min-[1900px]:text-[29px]">
          RANK AND PROGRESSION
        </h2>
        <p className="text-[9px] font-semibold tracking-[0.18em] text-crimson min-[1900px]:text-[13px]">
          {game.title}
        </p>
      </div>
      <div className="mt-7 grid gap-8 md:grid-cols-[minmax(280px,0.82fr)_minmax(310px,1fr)] min-[1900px]:mt-[38px] min-[1900px]:gap-[52px]">
        <div className="flex items-center gap-7 min-[1900px]:gap-[36px]">
          <RankEmblem
            className="h-[112px] w-[166px] shrink-0 xl:h-[140px] xl:w-[207px] min-[1900px]:h-[180px] min-[1900px]:w-[266px]"
            tier={currentRank.tier}
          />
          <div className="min-w-0 flex-1">
            <p className="text-[12px] text-arena-muted min-[1900px]:text-[16px]">
              CURRENT RANK
            </p>
            <p className="mt-1 font-heading text-[28px] font-bold text-crimson xl:text-[34px] min-[1900px]:text-[43px]">
              {currentRank.rankName}
            </p>
            <p className="mt-6 text-[12px] text-arena-muted min-[1900px]:text-[16px]">
              {currentRank.experience} RP
            </p>
            <div className="mt-2 h-[4px] overflow-hidden bg-arena-outline min-[1900px]:h-[6px]">
              <div
                className="h-full bg-crimson"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 min-[1900px]:gap-[7px]">
          {stats.map((stat) => (
            <div
              className="flex min-h-[59px] flex-col items-center justify-center rounded-[4px] border border-arena-line bg-[#050609] min-[1900px]:min-h-[78px]"
              key={stat.label}
            >
              <p className="text-[7px] text-arena-muted min-[1900px]:text-[10px]">
                {stat.label}
              </p>
              <p className="mt-1 font-display text-[18px] text-arena-strong min-[1900px]:text-[25px]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  )
}

function GameStatistics() {
  const { game, profile, ranking } = useActiveGameData()
  const values = [
    ...profile.stats.slice(0, 3),
    { label: 'GLOBAL POSITION', value: `#${ranking.currentRank.position}` },
  ]

  return (
    <Panel className="mt-3 p-6 xl:mt-4 xl:p-8 min-[1900px]:p-[42px]">
      <h2 className="font-display text-[19px] text-arena-strong min-[1900px]:text-[29px]">
        {game.title} STATISTICS
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 min-[1900px]:mt-[32px] min-[1900px]:gap-[18px]">
        {values.map((value) => (
          <div
            className="rounded-[4px] border border-arena-line bg-[#050609] p-5 min-[1900px]:p-[26px]"
            key={value.label}
          >
            <p className="text-[9px] font-semibold text-arena-muted min-[1900px]:text-[13px]">
              {value.label}
            </p>
            <p className="mt-3 font-display text-[27px] text-crimson min-[1900px]:text-[36px]">
              {value.value}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function MatchHistory() {
  const { homeActivity, game } = useActiveGameData()

  return (
    <Panel className="mt-3 p-6 xl:mt-4 xl:p-8 min-[1900px]:p-[42px]">
      <h2 className="font-display text-[19px] text-arena-strong min-[1900px]:text-[29px]">
        RECENT {game.title} MATCHES
      </h2>
      <div className="mt-6 space-y-3 min-[1900px]:mt-[30px] min-[1900px]:space-y-[15px]">
        {homeActivity.map((activity) => (
          <div
            className="flex items-center justify-between rounded-[4px] border border-arena-line bg-[#050609] px-5 py-4 min-[1900px]:px-[26px] min-[1900px]:py-[19px]"
            key={activity.detail}
          >
            <div>
              <p className="text-[9px] text-crimson min-[1900px]:text-[13px]">
                {activity.action}
              </p>
              <p className="mt-1 text-[13px] text-arena-strong min-[1900px]:text-[17px]">
                {activity.detail}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[12px] font-semibold text-arena-copy min-[1900px]:text-[16px]">
                {activity.gain}
              </p>
              <p className="mt-1 text-[8px] text-arena-muted min-[1900px]:text-[11px]">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function GameMilestones() {
  const { game, missions } = useActiveGameData()
  const completed = useMemo(
    () =>
      missions.map((mission, index) => ({
        ...mission,
        title: index === 0 ? `${game.title} VETERAN` : mission.title,
      })),
    [game.title, missions],
  )

  return (
    <Panel className="mt-3 p-6 xl:mt-4 xl:p-8 min-[1900px]:p-[42px]">
      <h2 className="font-display text-[19px] text-arena-strong min-[1900px]:text-[29px]">
        GAME MILESTONES
      </h2>
      <div className="mt-6 space-y-3 min-[1900px]:mt-[30px]">
        {completed.map((mission) => (
          <div
            className="rounded-[4px] border border-arena-line bg-[#050609] px-5 py-4 min-[1900px]:px-[26px] min-[1900px]:py-[19px]"
            key={mission.title}
          >
            <div className="flex justify-between gap-4">
              <p className="text-[12px] text-arena-strong min-[1900px]:text-[17px]">
                {mission.title}
              </p>
              <p className="text-[10px] font-semibold text-crimson min-[1900px]:text-[14px]">
                {mission.reward}
              </p>
            </div>
            <p className="mt-2 text-[9px] text-arena-muted min-[1900px]:text-[12px]">
              PROGRESS / {mission.progress}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  )
}
