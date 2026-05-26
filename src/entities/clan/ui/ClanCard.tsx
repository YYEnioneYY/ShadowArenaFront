import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'
import type { Clan } from '../model/types'

interface ClanCardProps {
  clan: Clan
  isRequested: boolean
  onRequest: (clanId: string) => void
}

export function ClanCard({
  clan,
  isRequested,
  onRequest,
}: ClanCardProps) {
  const details = [
    { label: 'MEMBERS', value: `${clan.members} / ${clan.totalMembers}` },
    { label: 'WINRATE', value: `${clan.winRate}%` },
    { label: 'RANK', value: clan.rank },
    { label: 'REGION', value: clan.region },
    { label: 'LOOKING FOR', value: clan.roles.join(' / ') },
    { label: 'LANGUAGE', value: clan.languages.join(' / ') },
  ]

  return (
    <Panel className="group flex min-h-[82px] overflow-hidden min-[1900px]:min-h-[108px]">
      <span className="clan-card-art hidden w-[98px] shrink-0 sm:block xl:w-[120px] min-[1900px]:w-[170px]" />
      <div className="flex min-w-0 flex-1 flex-col gap-4 px-4 py-3 sm:flex-row sm:items-center xl:px-5 min-[1900px]:gap-[32px] min-[1900px]:px-[28px]">
        <div className="min-w-[180px] flex-1">
          <h3 className="truncate text-[17px] font-medium text-arena-strong xl:text-[21px] min-[1900px]:text-[30px]">
            {clan.name}
          </h3>
          <p className="mt-1 text-[9px] text-arena-muted xl:text-[11px] min-[1900px]:text-[15px]">
            {clan.tier} - {clan.region} - {clan.game}
          </p>
        </div>
        <div className="grid min-w-[295px] flex-[1.3] grid-cols-3 gap-x-4 gap-y-2 min-[1900px]:min-w-[418px] min-[1900px]:gap-x-[25px]">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="text-[7px] font-semibold text-arena-dim min-[1900px]:text-[10px]">
                {detail.label}
              </p>
              <p className="mt-0.5 truncate text-[8px] text-arena-copy min-[1900px]:text-[12px]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
        <button
          className={cn(
            'h-[42px] shrink-0 rounded-[4px] border border-crimson px-4 text-[9px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:h-[56px] min-[1900px]:px-[21px] min-[1900px]:text-[13px]',
            isRequested && 'bg-crimson/15 text-arena-strong',
          )}
          onClick={() => onRequest(clan.id)}
          type="button"
        >
          {isRequested ? 'REQUEST SENT' : 'REQUEST TO JOIN'}
        </button>
      </div>
    </Panel>
  )
}
