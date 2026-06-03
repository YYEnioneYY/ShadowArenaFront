import {
  mockFriends,
  mockProfileAchievements,
  mockProfileClan,
} from '../../../entities/account/model/mockAccountData'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

interface ProfileSidebarProps {
  compact?: boolean
}

export function ProfileSidebar({ compact = false }: ProfileSidebarProps) {
  return (
    <aside
      className={cn(
        compact
          ? 'mt-4 grid gap-3 md:grid-cols-2 lg:hidden'
          : 'hidden flex-col gap-3 bg-arena-base pb-2 pl-3 pr-2 lg:col-start-2 lg:row-start-2 lg:flex xl:pl-3 xl:pr-3 min-[1900px]:gap-[14px] min-[1900px]:pl-[16px] min-[1900px]:pr-[14px]',
      )}
    >
      <AchievementsPanel />
      <ClanPanel />
      <div className={compact ? 'md:col-span-2' : ''}>
        <ProfileFriendsPanel />
      </div>
    </aside>
  )
}

function AchievementsPanel() {
  return (
    <Panel className="p-4 xl:p-5 min-[1900px]:p-[25px]">
      <h2 className="font-heading text-[17px] font-bold text-arena-copy xl:text-[20px] min-[1900px]:text-[27px]">
        ACHIEVEMENTS
      </h2>
      <div className="mt-4 space-y-2 min-[1900px]:mt-[21px] min-[1900px]:space-y-[9px]">
        {mockProfileAchievements.map((achievement) => (
          <div
            className="rounded-[4px] border border-arena-outline px-4 py-4 min-[1900px]:px-[20px] min-[1900px]:py-[19px]"
            key={achievement.id}
          >
            <p className="text-[10px] text-arena-copy min-[1900px]:text-[14px]">
              {achievement.title}{' '}
              <span className="text-crimson">{achievement.detail}</span>
            </p>
            <p className="mt-2 text-[7px] text-arena-muted min-[1900px]:text-[10px]">
              {achievement.date}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function ClanPanel() {
  const details = [
    { label: 'MEMBERS', value: mockProfileClan.members },
    { label: 'CLAN RANK', value: mockProfileClan.rank },
    { label: 'CLAN SCORE', value: mockProfileClan.score },
  ]

  return (
    <Panel className="p-4 xl:p-5 min-[1900px]:p-[25px]">
      <h2 className="font-heading text-[17px] font-bold text-arena-copy xl:text-[20px] min-[1900px]:text-[27px]">
        CLAN
      </h2>
      <div className="mt-4 flex items-center gap-3 min-[1900px]:mt-[20px] min-[1900px]:gap-[17px]">
        <span className="profile-clan-emblem h-[58px] w-[58px] shrink-0 rounded-full border border-crimson min-[1900px]:h-[79px] min-[1900px]:w-[79px]" />
        <p className="font-heading text-[16px] font-bold text-arena-strong min-[1900px]:text-[23px]">
          {mockProfileClan.name}
        </p>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 min-[1900px]:mt-[25px] min-[1900px]:gap-[10px]">
        {details.map((detail) => (
          <div className="text-center" key={detail.label}>
            <p className="text-[7px] text-arena-muted min-[1900px]:text-[10px]">
              {detail.label}
            </p>
            <p className="mt-1 font-heading text-[17px] text-arena-strong min-[1900px]:text-[25px]">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  )
}

function ProfileFriendsPanel() {
  return (
    <Panel className="p-4 xl:p-5 min-[1900px]:p-[25px]">
      <h2 className="font-heading text-[17px] font-bold text-arena-copy xl:text-[20px] min-[1900px]:text-[27px]">
        FRIENDS
      </h2>
      <div className="mt-4 space-y-2 min-[1900px]:mt-[20px] min-[1900px]:space-y-[9px]">
        {mockFriends.slice(0, 3).map((friend) => (
          <div
            className="flex items-center gap-3 rounded-[4px] border border-arena-outline p-2 min-[1900px]:gap-[14px] min-[1900px]:p-[9px]"
            key={friend.id}
          >
            <span className="leader-avatar h-[37px] w-[37px] shrink-0 rounded-full border border-crimson/70 min-[1900px]:h-[50px] min-[1900px]:w-[50px]" />
            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-crimson min-[1900px]:text-[14px]">
                {friend.name}
              </p>
              <p className="truncate text-[8px] text-arena-muted min-[1900px]:text-[11px]">
                {friend.game} / <span className="font-heading">{friend.rank}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}
