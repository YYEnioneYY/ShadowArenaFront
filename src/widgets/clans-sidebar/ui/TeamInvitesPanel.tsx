import { useState } from 'react'
import { useActiveClanData } from '../../../features/game-selection/model/useActiveClanData'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

type InviteStatus = 'accepted' | 'declined'

export function TeamInvitesPanel() {
  const { invites } = useActiveClanData()
  const [statuses, setStatuses] = useState<Record<string, InviteStatus>>({})

  return (
    <Panel className="p-3 xl:p-4 2xl:p-[18px] min-[1900px]:p-[24px]">
      <div className="mb-3 flex items-center justify-between min-[1900px]:mb-[18px]">
        <h2 className="font-heading text-[15px] font-bold text-arena-copy xl:text-[18px] 2xl:text-[21px] min-[1900px]:text-[28px]">
          TEAM INVITES
        </h2>
        <button className="text-[8px] font-semibold text-crimson xl:text-[10px] min-[1900px]:text-[15px]" type="button">
          VIEW ALL
        </button>
      </div>
      <div className="space-y-2 min-[1900px]:space-y-[12px]">
        {invites.map((invite) => {
          const status = statuses[invite.id]

          return (
            <div
              className="rounded-[5px] border border-arena-outline px-3 py-2.5 min-[1900px]:px-[18px] min-[1900px]:py-[13px]"
              key={invite.id}
            >
              <p className="text-center text-[15px] text-arena-strong xl:text-[17px] min-[1900px]:text-[23px]">
                {invite.name}
              </p>
              <p className="mt-1 text-center text-[7px] text-arena-muted min-[1900px]:text-[10px]">
                has invited you to join
              </p>
              {status ? (
                <p
                  className={cn(
                    'mt-3 text-center text-[10px] font-semibold min-[1900px]:text-[14px]',
                    status === 'accepted' ? 'text-crimson' : 'text-arena-muted',
                  )}
                >
                  {status.toUpperCase()}
                </p>
              ) : (
                <div className="mt-3 flex gap-1.5 min-[1900px]:gap-[8px]">
                  <button
                    className="h-[30px] flex-1 rounded-[3px] border border-crimson text-[8px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:h-[42px] min-[1900px]:text-[12px]"
                    onClick={() =>
                      setStatuses((items) => ({
                        ...items,
                        [invite.id]: 'accepted',
                      }))
                    }
                    type="button"
                  >
                    ACCEPT
                  </button>
                  <button
                    className="h-[30px] flex-1 rounded-[3px] border border-arena-outline text-[8px] font-semibold text-arena-copy transition-colors hover:border-arena-copy min-[1900px]:h-[42px] min-[1900px]:text-[12px]"
                    onClick={() =>
                      setStatuses((items) => ({
                        ...items,
                        [invite.id]: 'declined',
                      }))
                    }
                    type="button"
                  >
                    DECLINE
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
