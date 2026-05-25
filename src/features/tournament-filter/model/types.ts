import type {
  Tournament,
  TournamentDate,
  TournamentFormat,
  TournamentGameMode,
  TournamentPrizeTier,
  TournamentRank,
  TournamentRegion,
  TournamentStatus,
} from '../../../entities/tournament/model/types'

export interface AdvancedTournamentFilters {
  gameMode: TournamentGameMode | null
  region: TournamentRegion | null
  rank: TournamentRank
  format: TournamentFormat | null
  prizeTier: TournamentPrizeTier | null
  status: TournamentStatus | null
  date: TournamentDate | null
}

export const emptyTournamentFilters: AdvancedTournamentFilters = {
  gameMode: null,
  region: null,
  rank: 'ANY',
  format: null,
  prizeTier: null,
  status: null,
  date: null,
}

export function countAppliedFilters(filters: AdvancedTournamentFilters) {
  return [
    filters.gameMode,
    filters.region,
    filters.rank === 'ANY' ? null : filters.rank,
    filters.format,
    filters.prizeTier,
    filters.status,
    filters.date,
  ].filter(Boolean).length
}

export function filterTournaments(
  tournaments: Tournament[],
  filters: AdvancedTournamentFilters,
) {
  return tournaments.filter(
    (tournament) =>
      (!filters.gameMode || tournament.gameMode === filters.gameMode) &&
      (!filters.region || tournament.region === filters.region) &&
      (filters.rank === 'ANY' || tournament.rank === filters.rank) &&
      (!filters.format || tournament.format === filters.format) &&
      (!filters.prizeTier || tournament.prizeTier === filters.prizeTier) &&
      (!filters.status || tournament.status === filters.status) &&
      (!filters.date || tournament.date === filters.date),
  )
}
