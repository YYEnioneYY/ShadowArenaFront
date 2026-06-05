import type { ClanMembership } from '../../../entities/clan/model/types'
import clanBannerUrl from '../../../assets/clans/shadow-legion-banner.png'
import { MorningstarAvatar } from '../../../entities/player/ui/MorningstarAvatar'
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
      <section className="clan-membership-card relative min-h-[292px] overflow-hidden rounded-[5px] border border-arena-line bg-[#050609] xl:min-h-[340px] min-[1900px]:min-h-[450px]">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          src={clanBannerUrl}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.05)_0%,rgb(0_0_0/0.18)_42%,rgb(0_0_0/0.66)_100%)]" />
        <div className="relative flex min-h-[292px] items-end px-4 pb-5 pt-[118px] sm:px-6 xl:min-h-[340px] xl:px-8 xl:pb-7 min-[1900px]:min-h-[450px] min-[1900px]:px-[43px] min-[1900px]:pb-[39px]">
          <div className="clan-membership-info relative w-full rounded-[5px] border border-white/5 bg-[#050609]/80 px-4 pb-4 pt-[86px] shadow-[0_18px_36px_rgb(0_0_0/0.55)] backdrop-blur-[3px] sm:ml-[96px] sm:px-6 sm:pb-5 sm:pl-11 sm:pt-4 xl:ml-[116px] xl:px-7 xl:pl-12 min-[1900px]:ml-[158px] min-[1900px]:px-[37px] min-[1900px]:pb-[28px] min-[1900px]:pl-[58px] min-[1900px]:pt-[25px]">
            <span
              className="clan-membership-avatar absolute left-1/2 top-0 h-[124px] w-[124px] -translate-x-1/2 -translate-y-[92px] rounded-full border border-crimson bg-cover bg-center shadow-[0_0_0_1px_rgb(0_0_0/0.8),0_18px_34px_rgb(0_0_0/0.65)] sm:left-0 sm:h-[146px] sm:w-[146px] sm:-translate-x-[112px] sm:-translate-y-[60px] xl:h-[168px] xl:w-[168px] xl:-translate-x-[132px] xl:-translate-y-[70px] min-[1900px]:h-[228px] min-[1900px]:w-[228px] min-[1900px]:-translate-x-[180px] min-[1900px]:-translate-y-[96px]"
              style={{ backgroundImage: `url(${clanBannerUrl})` }}
            />
            <div className="max-w-[620px]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-display text-[25px] leading-none text-arena-strong xl:text-[32px] min-[1900px]:text-[45px]">
                  {membership.clan.name}
                </h2>
                <div className="min-w-[170px] flex-1 sm:max-w-[260px] min-[1900px]:max-w-[360px]">
                  <div className="flex items-end justify-between gap-3 text-[8px] font-semibold min-[1900px]:text-[12px]">
                    <span className="text-crimson">LEVEL {profile.level}</span>
                    <span className="text-arena-muted">
                      {currentRank.experience}/{currentRank.experienceTarget}XP
                    </span>
                  </div>
                  <div className="mt-1 h-[2px] bg-arena-outline min-[1900px]:h-[3px]">
                    <span
                      className="block h-full bg-crimson"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4 min-[1900px]:mt-[26px] min-[1900px]:gap-x-[35px]">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <p className="text-[9px] font-medium text-arena-dim xl:text-[10px] min-[1900px]:text-[14px]">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-[12px] font-medium text-arena-copy xl:text-[13px] min-[1900px]:text-[18px]">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3 min-[1900px]:mt-[14px] min-[1900px]:gap-[15px]">
        {membership.members.map((member) => (
          <Panel
            className="flex h-[68px] items-center gap-3 px-3 min-[1900px]:h-[94px] min-[1900px]:gap-[17px] min-[1900px]:px-[17px]"
            key={member.id}
          >
            {member.isCurrentUser ? (
              <MorningstarAvatar className="h-[48px] w-[48px] shrink-0 rounded-full border border-crimson min-[1900px]:h-[68px] min-[1900px]:w-[68px]" />
            ) : (
              <span className="clan-member-avatar h-[48px] w-[48px] shrink-0 rounded-full border border-crimson min-[1900px]:h-[68px] min-[1900px]:w-[68px]" />
            )}
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
