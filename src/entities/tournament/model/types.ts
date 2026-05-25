export type TournamentStatus = 'live' | 'upcoming' | 'ended'
export type TournamentFilter = 'all' | TournamentStatus
export type TournamentGameMode = '5v5' | 'PREMIER' | 'DEATHMATCH'
export type TournamentRegion = 'EU' | 'NA' | 'CIS' | 'APAC'
export type TournamentRank = 'ANY' | 'GOLD+' | 'PLATINUM+' | 'DIAMOND+'
export type TournamentFormat = 'SOLO' | 'DUO' | 'TEAM'
export type TournamentPrizeTier = 'FREE' | '1K-5K CR' | '5K+ CR'
export type TournamentDate = 'TODAY' | 'THIS WEEK' | 'THIS MONTH'
export type ArtworkVariant =
  | 'initiation'
  | 'phantom'
  | 'shadow'
  | 'vanguard'
  | 'neon'
  | 'radiant'
  | 'crown'
  | 'legends'

export interface Tournament {
  id: number
  title: string
  game: string
  region: TournamentRegion
  gameMode: TournamentGameMode
  format: TournamentFormat
  status: TournamentStatus
  date: TournamentDate
  startsIn: string
  teams: number
  entryFee: string
  prizePool: string
  prizeAmount: number
  prizeTier: TournamentPrizeTier
  rank: TournamentRank
  artwork: ArtworkVariant
}
