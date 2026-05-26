import type { GameId } from '../../game/model/mockGames'

export type ClanGameMode = '5V5' | 'PREMIER' | 'DEATHMATCH'
export type ClanRegion = 'EU' | 'NA' | 'CIS' | 'APAC'
export type ClanRank = 'ANY' | 'GOLD+' | 'PLATINUM+' | 'DIAMOND+'
export type ClanLanguage =
  | 'ENG'
  | 'ESP'
  | 'RUS'
  | 'FRA'
  | 'ITA'
  | 'TUR'
  | 'CHN'
  | 'POL'
  | 'JPN'
  | 'DEU'
  | 'KOR'
  | 'NLD'
  | 'SWE'
  | 'UKR'
  | 'HEB'
export type ClanRole =
  | 'DUELIST'
  | 'CONTROLLER'
  | 'INITIATOR'
  | 'SENTINEL'
  | 'FLEX'
  | 'SUBSTITUTE'

export interface Clan {
  id: string
  game: string
  gameId: GameId
  gameMode: ClanGameMode
  languages: ClanLanguage[]
  members: number
  name: string
  rank: Exclude<ClanRank, 'ANY'>
  region: ClanRegion
  roles: ClanRole[]
  totalMembers: number
  tier: string
  winRate: number
}

export interface ClanInvite {
  id: string
  name: string
}

export interface ClanRequest {
  id: string
  nickname: string
  tag: string
}

export interface ClanMember {
  id: string
  isCurrentUser?: boolean
  nickname: string
  role: ClanRole
  tag: string
}

export interface ClanMembership {
  clan: Clan
  clanRank: string
  clanScore: string
  members: ClanMember[]
  wins: number
}

export interface ClanGameData {
  clans: Clan[]
  invites: ClanInvite[]
  membership: ClanMembership | null
  requests: ClanRequest[]
}
