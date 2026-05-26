import { useMemo, useState } from 'react'
import { ClanCard } from '../../../entities/clan/ui/ClanCard'
import { useActiveClanData } from '../../../features/game-selection/model/useActiveClanData'
import {
  countClanFilters,
  emptyClanFilters,
  filterClans,
  type ClanFilters,
} from '../../../features/clan-filter/model/types'
import { ClanFilterPanel } from '../../../features/clan-filter/ui/ClanFilterPanel'
import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'
import { Panel } from '../../../shared/ui/Panel'
import { ClanMembershipPanel } from '../../clan-membership/ui/ClanMembershipPanel'

export function ClanCatalog() {
  const { clans: gameClans, membership } = useActiveClanData()
  const [search, setSearch] = useState('')
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [appliedFilters, setAppliedFilters] =
    useState<ClanFilters>(emptyClanFilters)
  const [draftFilters, setDraftFilters] =
    useState<ClanFilters>(emptyClanFilters)
  const [requestedClanIds, setRequestedClanIds] = useState<string[]>([])

  const clans = useMemo(
    () => filterClans(gameClans, appliedFilters, search),
    [appliedFilters, gameClans, search],
  )
  const filterCount = countClanFilters(appliedFilters)

  function toggleFilterPanel() {
    if (!isPanelOpen) {
      setDraftFilters(appliedFilters)
    }
    setIsPanelOpen((open) => !open)
  }

  function resetFilters() {
    setDraftFilters(emptyClanFilters)
    setAppliedFilters(emptyClanFilters)
  }

  function applyFilters() {
    setAppliedFilters(draftFilters)
    setIsPanelOpen(false)
  }

  function requestToJoin(clanId: string) {
    setRequestedClanIds((ids) =>
      ids.includes(clanId)
        ? ids.filter((id) => id !== clanId)
        : [...ids, clanId],
    )
  }

  return (
    <section className="relative">
      {membership ? (
        <ClanMembershipPanel membership={membership} />
      ) : (
        <div className="mb-7 min-[1900px]:mb-[42px]">
          <h2 className="text-[22px] font-medium text-arena-strong xl:text-[27px] min-[1900px]:text-[37px]">
            YOU ARE NOT IN THE TEAM
          </h2>
          <div className="mt-3 flex gap-2 min-[1900px]:mt-[17px] min-[1900px]:gap-[10px]">
            <button
              className="h-[43px] rounded-[4px] border border-arena-copy px-5 text-[14px] font-semibold text-arena-copy transition-colors hover:border-arena-strong hover:text-arena-strong xl:h-[49px] xl:text-[16px] min-[1900px]:h-[63px] min-[1900px]:px-[28px] min-[1900px]:text-[22px]"
              type="button"
            >
              CREATE TEAM
            </button>
            <button
              className="h-[43px] rounded-[4px] border border-crimson px-7 text-[14px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[49px] xl:text-[16px] min-[1900px]:h-[63px] min-[1900px]:px-[42px] min-[1900px]:text-[22px]"
              onClick={toggleFilterPanel}
              type="button"
            >
              JOIN TEAM
            </button>
          </div>
        </div>
      )}
      <Panel
        className={cn(
          'mb-[6px] flex h-[47px] items-center overflow-hidden bg-[#090a0e] pl-4 min-[1900px]:mb-[8px] min-[1900px]:h-[62px] min-[1900px]:pl-[22px]',
          membership !== null && 'mt-5 min-[1900px]:mt-[21px]',
        )}
      >
        <ArenaIcon className="h-[19px] w-[19px] text-arena-copy min-[1900px]:h-[25px] min-[1900px]:w-[25px]" name="search" />
        <input
          className="h-full min-w-0 flex-1 bg-transparent px-2 text-[11px] text-arena-strong outline-none placeholder:text-arena-muted min-[1900px]:px-[12px] min-[1900px]:text-[15px]"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
          type="search"
          value={search}
        />
        <button
          className="flex h-full items-center gap-2 border border-crimson px-5 text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson/15 min-[1900px]:gap-[11px] min-[1900px]:px-[26px] min-[1900px]:text-[14px]"
          onClick={toggleFilterPanel}
          type="button"
        >
          <ArenaIcon className="h-4 w-4 min-[1900px]:h-[21px] min-[1900px]:w-[21px]" name="filter" />
          FILTERS
          {filterCount > 0 && (
            <span className="rounded-full bg-crimson px-1.5 py-0.5 text-[8px] text-arena-strong min-[1900px]:text-[11px]">
              {filterCount}
            </span>
          )}
        </button>
      </Panel>
      <div className="space-y-[6px] min-[1900px]:space-y-[8px]">
        {clans.map((clan) => (
          <ClanCard
            clan={clan}
            isRequested={requestedClanIds.includes(clan.id)}
            key={clan.id}
            onRequest={requestToJoin}
          />
        ))}
        {clans.length === 0 && (
          <Panel className="p-8 text-center text-sm text-arena-muted">
            No clans match the selected filters.
          </Panel>
        )}
      </div>
      {isPanelOpen && (
        <>
          <button
            aria-label="Close filters"
            className="filters-backdrop fixed inset-0 z-40 cursor-default bg-black/45"
            onClick={() => setIsPanelOpen(false)}
            type="button"
          />
          <ClanFilterPanel
            filters={draftFilters}
            onApply={applyFilters}
            onChange={setDraftFilters}
            onReset={resetFilters}
          />
        </>
      )}
    </section>
  )
}
