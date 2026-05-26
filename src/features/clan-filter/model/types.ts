import type {
  Clan,
  ClanGameMode,
  ClanLanguage,
  ClanRank,
  ClanRegion,
  ClanRole,
} from '../../../entities/clan/model/types'

export interface ClanFilters {
  gameMode: ClanGameMode | null
  language: ClanLanguage | null
  rank: ClanRank
  region: ClanRegion | null
  role: ClanRole | null
}

export const emptyClanFilters: ClanFilters = {
  gameMode: null,
  language: null,
  rank: 'ANY',
  region: null,
  role: null,
}

export function countClanFilters(filters: ClanFilters) {
  return [
    filters.gameMode,
    filters.region,
    filters.rank === 'ANY' ? null : filters.rank,
    filters.language,
    filters.role,
  ].filter(Boolean).length
}

export function filterClans(
  clans: Clan[],
  filters: ClanFilters,
  search: string,
) {
  const normalizedSearch = search.trim().toLowerCase()

  return clans.filter(
    (clan) =>
      (!normalizedSearch ||
        clan.name.toLowerCase().includes(normalizedSearch) ||
        clan.tier.toLowerCase().includes(normalizedSearch)) &&
      (!filters.gameMode || clan.gameMode === filters.gameMode) &&
      (!filters.region || clan.region === filters.region) &&
      (filters.rank === 'ANY' || clan.rank === filters.rank) &&
      (!filters.language || clan.languages.includes(filters.language)) &&
      (!filters.role || clan.roles.includes(filters.role)),
  )
}
