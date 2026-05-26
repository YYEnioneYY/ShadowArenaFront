import { useState } from 'react'
import { useActiveClanData } from '../../../features/game-selection/model/useActiveClanData'
import { Panel } from '../../../shared/ui/Panel'

export function ClanRequestsPanel() {
  const { requests } = useActiveClanData()
  const [reviewedIds, setReviewedIds] = useState<string[]>([])

  return (
    <Panel className="p-3 font-heading xl:p-4 2xl:p-[18px] min-[1900px]:p-[24px]">
      <div className="mb-3 flex items-center justify-between min-[1900px]:mb-[18px]">
        <h2 className="font-heading text-[15px] font-bold text-arena-copy xl:text-[18px] 2xl:text-[21px] min-[1900px]:text-[28px]">
          REQUESTS
        </h2>
        <button className="text-[8px] font-semibold text-crimson xl:text-[10px] min-[1900px]:text-[15px]" type="button">
          VIEW ALL
        </button>
      </div>
      <div className="space-y-1.5 min-[1900px]:space-y-[8px]">
        {requests.map((request) => {
          const isReviewed = reviewedIds.includes(request.id)

          return (
            <div
              className="flex h-[43px] items-center gap-2 rounded-[5px] border border-arena-outline px-2 min-[1900px]:h-[60px] min-[1900px]:gap-[12px] min-[1900px]:px-[13px]"
              key={request.id}
            >
              <span className="leader-avatar h-[29px] w-[29px] shrink-0 rounded-full border border-crimson min-[1900px]:h-[42px] min-[1900px]:w-[42px]" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[9px] font-semibold text-crimson min-[1900px]:text-[13px]">
                  {request.nickname}
                </span>
                <span className="block text-[7px] text-arena-muted min-[1900px]:text-[10px]">
                  {request.tag}
                </span>
              </span>
              <button
                className="h-[27px] w-[67px] rounded-[3px] border border-crimson text-[8px] font-semibold text-crimson transition-colors hover:bg-crimson/15 min-[1900px]:h-[39px] min-[1900px]:w-[91px] min-[1900px]:text-[12px]"
                onClick={() =>
                  setReviewedIds((items) =>
                    items.includes(request.id) ? items : [...items, request.id],
                  )
                }
                type="button"
              >
                {isReviewed ? 'REVIEWED' : 'REVIEW'}
              </button>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
