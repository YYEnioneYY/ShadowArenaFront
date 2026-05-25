import {
  mockTournamentActivities,
  type ArenaActivity,
} from '../../../entities/activity/model/mockActivities'
import { Panel } from '../../../shared/ui/Panel'

interface RecentActivityPanelProps {
  items?: ArenaActivity[]
}

export function RecentActivityPanel({
  items = mockTournamentActivities,
}: RecentActivityPanelProps) {
  return (
    <Panel className="min-h-[137px] flex-1 p-3 xl:p-4 min-[1900px]:p-[24px]">
      <h2 className="mb-3 font-display text-[15px] font-bold text-arena-copy xl:text-[18px] 2xl:text-[21px] min-[1900px]:mb-[18px] min-[1900px]:text-[28px]">
        RECENT ACTIVITY
      </h2>
      <div className="space-y-[4px] min-[1900px]:space-y-[7px]">
        {items.map((item) => (
          <div
            className="flex items-center gap-2 rounded-[5px] border border-arena-outline px-2 py-2 min-[1900px]:gap-[12px] min-[1900px]:px-[12px] min-[1900px]:py-[13px]"
            key={item.id}
          >
            <span className="activity-mark h-[29px] w-[29px] shrink-0 rounded-[4px] border border-crimson/40 min-[1900px]:h-[42px] min-[1900px]:w-[42px]" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[8px] text-arena-copy xl:text-[10px] min-[1900px]:text-[13px]">
                {item.actor} {item.verb}{' '}
                <span className="text-crimson">{item.target}</span>
              </span>
              <span className="block text-[7px] text-arena-muted min-[1900px]:text-[10px]">
                {item.time}
              </span>
            </span>
          </div>
        ))}
      </div>
    </Panel>
  )
}
