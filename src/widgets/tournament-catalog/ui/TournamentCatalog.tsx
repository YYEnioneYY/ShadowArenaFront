import { useMemo, useState } from 'react'
import type { TournamentFilter } from '../../../entities/tournament/model/types'
import { TournamentCard } from '../../../entities/tournament/ui/TournamentCard'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import {
  countAppliedFilters,
  emptyTournamentFilters,
  filterTournaments,
  type AdvancedTournamentFilters,
} from '../../../features/tournament-filter/model/types'
import { TournamentFilterPanel } from '../../../features/tournament-filter/ui/TournamentFilterPanel'
import { TournamentFilters } from '../../../features/tournament-filter/ui/TournamentFilters'

export function TournamentCatalog() {
  const { tournaments: gameTournaments } = useActiveGameData()
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [appliedFilters, setAppliedFilters] =
    useState<AdvancedTournamentFilters>(emptyTournamentFilters)
  const [draftFilters, setDraftFilters] =
    useState<AdvancedTournamentFilters>(emptyTournamentFilters)

  const selectedTab: TournamentFilter = appliedFilters.status ?? 'all'
  const tournaments = useMemo(
    () => filterTournaments(gameTournaments, appliedFilters),
    [appliedFilters, gameTournaments],
  )

  function changeStatusTab(status: TournamentFilter) {
    const value = status === 'all' ? null : status
    setAppliedFilters((filters) => ({ ...filters, status: value }))
    setDraftFilters((filters) => ({ ...filters, status: value }))
  }

  function toggleFilterPanel() {
    if (!isPanelOpen) {
      setDraftFilters(appliedFilters)
    }
    setIsPanelOpen((open) => !open)
  }

  function applyFilters() {
    setAppliedFilters(draftFilters)
    setIsPanelOpen(false)
  }

  function resetFilters() {
    setDraftFilters(emptyTournamentFilters)
    setAppliedFilters(emptyTournamentFilters)
  }

  return (
    <div className="relative">
      <TournamentFilters
        advancedFilterCount={countAppliedFilters(appliedFilters)}
        isPanelOpen={isPanelOpen}
        onChange={changeStatusTab}
        onTogglePanel={toggleFilterPanel}
        selected={selectedTab}
      />
      {isPanelOpen && (
        <>
          <button
            aria-label="Close filters"
            className="filters-backdrop fixed inset-0 z-40 cursor-default bg-black/45"
            onClick={() => setIsPanelOpen(false)}
            type="button"
          />
          <TournamentFilterPanel
            filters={draftFilters}
            onApply={applyFilters}
            onChange={setDraftFilters}
            onReset={resetFilters}
          />
        </>
      )}
      <div className="mt-5 space-y-[3px]">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
        {tournaments.length === 0 && (
          <p className="rounded-[5px] border border-arena-line bg-arena-panel p-8 text-center text-sm text-arena-muted">
            No tournaments match the selected filters.
          </p>
        )}
      </div>
    </div>
  )
}
