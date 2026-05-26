import type { ClanMembership } from '../../../entities/clan/model/types'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

interface ClanMembershipPanelProps {
  membership: ClanMembership
}

export function ClanMembershipPanel({ membership }: ClanMembershipPanelProps) {
  const { profile, ranking } = useActiveGameData()
  const { currentRank } = ranking
  const progress =
    (currentRank.experience / currentRank.experienceTarget) * 100
  const details = [
    { label: 'CLAN RANK', value: membership.clanRank },
    { label: 'CLAN SCORE', value: membership.clanScore },
    { label: 'REGION', value: membership.clan.region },
    { label: 'WINS', value: String(membership.wins) },
  ]

  return (
    <>
      <Panel className="clan-membership-banner relative overflow-hidden px-5 pb-4 pt-[120px] sm:min-h-[182px] sm:py-4 sm:pl-[170px] xl:min-h-[212px] xl:pl-[196px] min-[1900px]:min-h-[284px] min-[1900px]:pl-[270px] min-[1900px]:py-[29px]">
        <span className="clan-membership-crest absolute left-5 top-4 h-[94px] w-[94px] rounded-full border border-crimson sm:left-5 sm:top-1/2 sm:h-[138px] sm:w-[138px] sm:-translate-y-1/2 xl:h-[158px] xl:w-[158px] min-[1900px]:left-[28px] min-[1900px]:h-[216px] min-[1900px]:w-[216px]" />
        <div className="relative z-10 sm:flex sm:min-h-[150px] sm:flex-col sm:justify-center min-[1900px]:min-h-[224px]">
          <h2 className="font-display text-[24px] text-arena-strong xl:text-[29px] min-[1900px]:text-[40px]">
            {membership.clan.name}
          </h2>
          <div className="mt-2 flex max-w-[390px] items-center justify-between gap-3 text-[8px] font-semibold min-[1900px]:mt-[12px] min-[1900px]:max-w-[540px] min-[1900px]:text-[12px]">
            <span className="text-crimson">LEVEL {profile.level}</span>
            <span className="text-arena-muted">
              {currentRank.experience}/{currentRank.experienceTarget}XP
            </span>
          </div>
          <div className="mt-1 h-[2px] max-w-[390px] bg-arena-outline min-[1900px]:max-w-[540px] min-[1900px]:h-[3px]">
            <span
              className="block h-full bg-crimson"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 grid max-w-[445px] grid-cols-4 gap-3 min-[1900px]:mt-[20px] min-[1900px]:max-w-[590px]">
            {details.map((detail) => (
              <div key={detail.label}>
                <p className="text-[7px] text-arena-dim min-[1900px]:text-[10px]">
                  {detail.label}
                </p>
                <p className="mt-1 text-[9px] text-arena-copy min-[1900px]:text-[13px]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Panel>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3 min-[1900px]:mt-[14px] min-[1900px]:gap-[15px]">
        {membership.members.map((member) => (
          <Panel
            className="flex h-[68px] items-center gap-3 px-3 min-[1900px]:h-[94px] min-[1900px]:gap-[17px] min-[1900px]:px-[17px]"
            key={member.id}
          >
            <span className="clan-member-avatar h-[48px] w-[48px] shrink-0 rounded-full border border-crimson min-[1900px]:h-[68px] min-[1900px]:w-[68px]" />
            <span className="min-w-0">
              <span className="block truncate text-[9px] font-semibold text-crimson min-[1900px]:text-[13px]">
                {member.isCurrentUser ? profile.name : member.nickname}
              </span>
              <span className="block text-[7px] text-arena-muted min-[1900px]:text-[10px]">
                {member.tag}
              </span>
              <span className="mt-1 block text-[7px] font-semibold text-crimson min-[1900px]:text-[10px]">
                {member.role}
              </span>
            </span>
          </Panel>
        ))}
      </div>
    </>
  )
}
