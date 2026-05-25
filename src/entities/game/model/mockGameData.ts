import {
  mockRecentActivities,
  mockTournamentActivities,
  type ArenaActivity,
} from '../../activity/model/mockActivities'
import {
  mockActivity,
  mockHomeProfile,
  mockMissions,
} from '../../player/model/mockHomeProfile'
import {
  mockCurrentRank,
  mockRankingPlayers,
  mockRankingTeams,
  mockRankingTop500,
  type RankDivision,
  type RankingEntry,
  type RankTier,
  type TeamRankingEntry,
} from '../../ranking/model/mockRanking'
import { mockTournaments } from '../../tournament/model/mockTournaments'
import type { Tournament } from '../../tournament/model/types'
import { mockGames, type Game, type GameId } from './mockGames'

type PlayerProfile = typeof mockHomeProfile
type PlayerMission = (typeof mockMissions)[number]
type PlayerActivity = (typeof mockActivity)[number]
type CurrentRank = typeof mockCurrentRank

interface GameProfileConfig {
  championshipName: string
  eventPrefix: string
  experience: number
  experienceTarget: number
  kills: string
  level: number
  matchesPlayed: number
  nextRank: string
  playerPoints: number
  rankNames: Record<RankTier, string>
  rank: RankTier
  rankProgress: number
  season: string
  title: string
  tournamentLine: string
  victoryRate: string
  wins: number
}

interface GameRankingData {
  currentRank: CurrentRank
  divisions: RankDivision[]
  players: RankingEntry[]
  teams: TeamRankingEntry[]
  top500: RankingEntry[]
}

type DynamicGameId = Exclude<GameId, 'valorant'>

interface GameRankingPoints {
  fieldStart: number
  fieldStep: number
  teams: number[]
  top500: number[]
}

interface TournamentOverviewEntry {
  accent?: boolean
  icon: 'pulse' | 'calendar' | 'coin' | 'globe'
  label: string
  value: string
}

export interface GameArenaData {
  game: Game
  homeActivity: PlayerActivity[]
  missions: PlayerMission[]
  overview: TournamentOverviewEntry[]
  profile: PlayerProfile
  ranking: GameRankingData
  recentActivities: ArenaActivity[]
  season: string
  tournamentActivities: ArenaActivity[]
  tournamentLine: string
  tournaments: Tournament[]
}

const configurations: Record<GameId, GameProfileConfig> = {
  valorant: {
    championshipName: 'Enlone',
    eventPrefix: '',
    experience: 2450,
    experienceTarget: 2800,
    kills: '1,254',
    level: 27,
    matchesPlayed: 248,
    nextRank: 'MAX RANK',
    playerPoints: 2156,
    rankNames: {
      SHADOW: 'SHADOW',
      RONIN: 'RONIN',
      SAMURAI: 'SAMURAI',
      WARLORD: 'WARLORD',
      IMMORTAL: 'IMMORTAL',
    },
    rank: 'IMMORTAL',
    rankProgress: 72,
    season: 'SEASON 12 / THE CRIMSON VEIL',
    title: 'Crimson Warden',
    tournamentLine: 'Valorant tournaments for every warrior.',
    victoryRate: '68.4%',
    wins: 156,
  },
  'counter-strike-2': {
    championshipName: 'AwpSaint',
    eventPrefix: 'TACTICAL',
    experience: 3180,
    experienceTarget: 3600,
    kills: '4,892',
    level: 41,
    matchesPlayed: 612,
    nextRank: 'GLOBAL PHANTOM',
    playerPoints: 1144,
    rankNames: {
      SHADOW: 'RECRUIT',
      RONIN: 'OPERATIVE',
      SAMURAI: 'SHARPSHOOTER',
      WARLORD: 'MASTER GUARDIAN',
      IMMORTAL: 'GLOBAL PHANTOM',
    },
    rank: 'WARLORD',
    rankProgress: 84,
    season: 'SEASON 08 / THE SILENT STRIKE',
    title: 'Clutch Architect',
    tournamentLine: 'Counter-Strike 2 brackets for tactical elites.',
    victoryRate: '61.7%',
    wins: 377,
  },
  'league-of-legends': {
    championshipName: 'BaronHeir',
    eventPrefix: 'RIFT',
    experience: 1880,
    experienceTarget: 2400,
    kills: '2,018',
    level: 132,
    matchesPlayed: 430,
    nextRank: 'NEXUS LORD',
    playerPoints: 1026,
    rankNames: {
      SHADOW: 'INITIATE',
      RONIN: 'VANGUARD',
      SAMURAI: 'ARCANE',
      WARLORD: 'NEXUS LORD',
      IMMORTAL: 'ASCENDED',
    },
    rank: 'SAMURAI',
    rankProgress: 57,
    season: 'SEASON 15 / FALLEN NEXUS',
    title: 'Midnight Carry',
    tournamentLine: 'League of Legends clashes across the Rift.',
    victoryRate: '55.9%',
    wins: 240,
  },
  'rainbow-six-siege': {
    championshipName: 'BreachKing',
    eventPrefix: 'BREACH',
    experience: 1340,
    experienceTarget: 2000,
    kills: '1,786',
    level: 68,
    matchesPlayed: 354,
    nextRank: 'VIGIL',
    playerPoints: 892,
    rankNames: {
      SHADOW: 'OBSERVER',
      RONIN: 'BREACHER',
      SAMURAI: 'VIGIL',
      WARLORD: 'COMMANDER',
      IMMORTAL: 'SIX LEGEND',
    },
    rank: 'RONIN',
    rankProgress: 46,
    season: 'SEASON 09 / IRON FORTRESS',
    title: 'Silent Breacher',
    tournamentLine: 'Rainbow Six Siege operations for hardened squads.',
    victoryRate: '53.2%',
    wins: 188,
  },
  'dota-2': {
    championshipName: 'AncientWyrm',
    eventPrefix: 'ANCIENT',
    experience: 3030,
    experienceTarget: 3500,
    kills: '3,407',
    level: 36,
    matchesPlayed: 706,
    nextRank: 'AEON',
    playerPoints: 1132,
    rankNames: {
      SHADOW: 'COURIER',
      RONIN: 'HERALD',
      SAMURAI: 'ANCIENT',
      WARLORD: 'DIVINE',
      IMMORTAL: 'AEON',
    },
    rank: 'WARLORD',
    rankProgress: 81,
    season: 'SEASON 11 / ANCIENT ECLIPSE',
    title: 'Ancient Herald',
    tournamentLine: 'Dota 2 battles for the keepers of the Ancient.',
    victoryRate: '59.1%',
    wins: 417,
  },
  'apex-legends': {
    championshipName: 'PredatorV',
    eventPrefix: 'OUTLAND',
    experience: 2140,
    experienceTarget: 2700,
    kills: '6,443',
    level: 94,
    matchesPlayed: 824,
    nextRank: 'VOID PREDATOR',
    playerPoints: 1004,
    rankNames: {
      SHADOW: 'DROPSHIP',
      RONIN: 'TRACKER',
      SAMURAI: 'APEX HUNTER',
      WARLORD: 'PREDATOR',
      IMMORTAL: 'VOID PREDATOR',
    },
    rank: 'SAMURAI',
    rankProgress: 63,
    season: 'SEASON 24 / VOID HUNT',
    title: 'Outland Hunter',
    tournamentLine: 'Apex Legends trials for the final surviving squads.',
    victoryRate: '18.6%',
    wins: 153,
  },
  fortnite: {
    championshipName: 'CrownMaker',
    eventPrefix: 'STORM',
    experience: 1590,
    experienceTarget: 2100,
    kills: '3,982',
    level: 76,
    matchesPlayed: 581,
    nextRank: 'STORMBORN',
    playerPoints: 864,
    rankNames: {
      SHADOW: 'DRIFTER',
      RONIN: 'RAIDER',
      SAMURAI: 'STORMBORN',
      WARLORD: 'CROWNED',
      IMMORTAL: 'ISLAND LEGEND',
    },
    rank: 'RONIN',
    rankProgress: 51,
    season: 'SEASON 06 / CRIMSON STORM',
    title: 'Storm Walker',
    tournamentLine: 'Fortnite arenas where only the last legend stands.',
    victoryRate: '14.2%',
    wins: 83,
  },
  pubg: {
    championshipName: 'LastCircle',
    eventPrefix: 'SURVIVAL',
    experience: 870,
    experienceTarget: 1600,
    kills: '1,207',
    level: 33,
    matchesPlayed: 316,
    nextRank: 'SURVIVOR',
    playerPoints: 648,
    rankNames: {
      SHADOW: 'SCAVENGER',
      RONIN: 'SURVIVOR',
      SAMURAI: 'MARKSMAN',
      WARLORD: 'LAST CIRCLE',
      IMMORTAL: 'BATTLEGROUND KING',
    },
    rank: 'SHADOW',
    rankProgress: 34,
    season: 'SEASON 10 / BLACK DROP',
    title: 'Lone Survivor',
    tournamentLine: 'PUBG drops for warriors who endure the final circle.',
    victoryRate: '9.8%',
    wins: 31,
  },
  'marvel-rivals': {
    championshipName: 'NovaPrime',
    eventPrefix: 'COSMIC',
    experience: 2010,
    experienceTarget: 2550,
    kills: '2,634',
    level: 48,
    matchesPlayed: 298,
    nextRank: 'OMEGA',
    playerPoints: 986,
    rankNames: {
      SHADOW: 'INITIATE',
      RONIN: 'VANGUARD',
      SAMURAI: 'HEROIC',
      WARLORD: 'OMEGA',
      IMMORTAL: 'COSMIC LEGEND',
    },
    rank: 'SAMURAI',
    rankProgress: 62,
    season: 'SEASON 03 / SECRET WARS',
    title: 'Multiverse Sentinel',
    tournamentLine: 'Marvel Rivals confrontations across shattered worlds.',
    victoryRate: '58.7%',
    wins: 175,
  },
  'rocket-league': {
    championshipName: 'Airborne',
    eventPrefix: 'AERIAL',
    experience: 1455,
    experienceTarget: 2050,
    kills: '1,894',
    level: 57,
    matchesPlayed: 477,
    nextRank: 'AERIAL ACE',
    playerPoints: 825,
    rankNames: {
      SHADOW: 'ROOKIE',
      RONIN: 'STRIKER',
      SAMURAI: 'AERIAL ACE',
      WARLORD: 'SUPERSONIC',
      IMMORTAL: 'CELESTIAL',
    },
    rank: 'RONIN',
    rankProgress: 49,
    season: 'SEASON 18 / NIGHT DRIVE',
    title: 'Aerial Phantom',
    tournamentLine: 'Rocket League circuits for precision champions.',
    victoryRate: '56.4%',
    wins: 269,
  },
}

const gameRankingPoints: Record<DynamicGameId, GameRankingPoints> = {
  'counter-strike-2': {
    fieldStart: 1092,
    fieldStep: 27,
    teams: [12480, 11920, 11240, 10460, 9870],
    top500: [2974, 2882, 2791, 2694, 2615, 2528, 2440, 2367, 2299, 2228, 2150, 2087],
  },
  'league-of-legends': {
    fieldStart: 1102,
    fieldStep: 36,
    teams: [9360, 8820, 8345, 7914, 7548],
    top500: [2418, 2325, 2239, 2152, 2070, 1989, 1908, 1826, 1751, 1688, 1619, 1546],
  },
  'rainbow-six-siege': {
    fieldStart: 968,
    fieldStep: 31,
    teams: [6880, 6425, 6040, 5715, 5336],
    top500: [1924, 1848, 1773, 1697, 1612, 1541, 1467, 1382, 1304, 1221, 1148, 1068],
  },
  'dota-2': {
    fieldStart: 1088,
    fieldStep: 28,
    teams: [15680, 14820, 13990, 13240, 12475],
    top500: [4280, 4142, 4025, 3901, 3786, 3672, 3564, 3440, 3327, 3211, 3104, 2988],
  },
  'apex-legends': {
    fieldStart: 1082,
    fieldStep: 38,
    teams: [14240, 13655, 12960, 12250, 11708],
    top500: [3810, 3704, 3599, 3491, 3382, 3270, 3166, 3060, 2954, 2848, 2741, 2630],
  },
  fortnite: {
    fieldStart: 930,
    fieldStep: 42,
    teams: [10840, 10190, 9650, 9188, 8734],
    top500: [2872, 2776, 2681, 2588, 2496, 2403, 2309, 2217, 2126, 2035, 1943, 1848],
  },
  pubg: {
    fieldStart: 905,
    fieldStep: 28,
    teams: [6250, 5944, 5590, 5258, 4977],
    top500: [1780, 1706, 1638, 1564, 1491, 1422, 1350, 1281, 1208, 1144, 1082, 1019],
  },
  'marvel-rivals': {
    fieldStart: 1058,
    fieldStep: 40,
    teams: [10974, 10350, 9798, 9280, 8842],
    top500: [2765, 2674, 2580, 2487, 2399, 2312, 2224, 2137, 2050, 1968, 1883, 1794],
  },
  'rocket-league': {
    fieldStart: 898,
    fieldStep: 34,
    teams: [7720, 7286, 6881, 6468, 6120],
    top500: [2144, 2060, 1977, 1896, 1815, 1739, 1660, 1578, 1498, 1419, 1341, 1264],
  },
}

function formatPoints(points: number) {
  return points.toLocaleString('en-US')
}

function parsePoints(points: string) {
  return Number(points.replace(',', ''))
}

function makeProfile(config: GameProfileConfig): PlayerProfile {
  return {
    ...mockHomeProfile,
    level: config.level,
    nextRank: config.nextRank,
    rank: config.rankNames[config.rank],
    rankProgress: config.rankProgress,
    title: config.title,
    stats: [
      { label: 'VICTORY RATE', value: config.victoryRate, accent: true },
      { label: 'TOURNAMENT WINS', value: String(Math.floor(config.wins / 8)) },
      { label: 'CURRENT STREAK', value: String((config.level % 9) + 1).padStart(2, '0') },
      { label: 'SHADOW COINS', value: '13,450', accent: true },
    ],
  }
}

function makeTournaments(game: Game, config: GameProfileConfig) {
  return mockTournaments.map((tournament) => ({
    ...tournament,
    game: game.title,
    title:
      game.id === 'valorant'
        ? tournament.title
        : `${config.eventPrefix} ${tournament.title}`,
  }))
}

function makeOverview(tournaments: Tournament[]): TournamentOverviewEntry[] {
  const prizeTotal = tournaments.reduce(
    (total, tournament) => total + tournament.prizeAmount,
    0,
  )

  return [
    {
      icon: 'pulse',
      label: 'LIVE NOW',
      accent: true,
      value: String(
        tournaments.filter((tournament) => tournament.status === 'live').length,
      ),
    },
    {
      icon: 'calendar',
      label: 'UPCOMING',
      value: String(
        tournaments.filter((tournament) => tournament.status === 'upcoming')
          .length,
      ),
    },
    {
      icon: 'coin',
      label: 'TOTAL PRIZE POOL',
      accent: true,
      value: `${formatPoints(prizeTotal)} CR`,
    },
    {
      icon: 'globe',
      label: 'REGIONS',
      value: String(new Set(tournaments.map((tournament) => tournament.region)).size),
    },
  ]
}

function makeRanking(config: GameProfileConfig, gameId: GameId): GameRankingData {
  const divisions = ([
    ['SHADOW', 'A newly entered contender learning the path of survival.'],
    ['RONIN', 'A proven warrior moving beyond the common ranks.'],
    ['SAMURAI', 'A disciplined challenger trusted in decisive battles.'],
    ['WARLORD', 'An elite force dominating the competitive arena.'],
    ['IMMORTAL', 'The final honor reserved for legendary champions.'],
  ] as Array<[RankTier, string]>).map(([tier, description]) => ({
    description,
    name: config.rankNames[tier],
    tier,
  }))

  if (gameId === 'valorant') {
    return {
      currentRank: { ...mockCurrentRank, rankName: config.rankNames.IMMORTAL },
      divisions,
      players: mockRankingPlayers.map((entry) => ({
        ...entry,
        rankName: config.rankNames[entry.tier],
      })),
      teams: mockRankingTeams.map((entry) => ({
        ...entry,
        rankName: config.rankNames[entry.tier],
      })),
      top500: mockRankingTop500.map((entry) => ({
        ...entry,
        rankName: config.rankNames[entry.tier],
      })),
    }
  }

  const pointTable = gameRankingPoints[gameId]
  const top500 = mockRankingTop500.map((entry, index) => ({
    ...entry,
    points: formatPoints(pointTable.top500[index]),
    rankName: config.rankNames[entry.tier],
    nickname:
      entry.nickname === 'Morningstar' ? config.championshipName : entry.nickname,
  }))
  const remainingPlayers = mockRankingPlayers
    .slice(top500.length)
    .map((entry, index) => ({
      ...entry,
      points: formatPoints(
        pointTable.fieldStart -
          index * pointTable.fieldStep -
          (index % 3) * 5,
      ),
      rankName: config.rankNames[entry.tier],
    }))
  remainingPlayers.push({
    nickname: 'Morningstar',
    points: formatPoints(config.playerPoints),
    position: 0,
    region: 'EU',
    rankName: config.rankNames[config.rank],
    tag: '#Ghost',
    tier: config.rank,
  })

  const players = [...top500, ...remainingPlayers]
    .sort((first, second) => parsePoints(second.points) - parsePoints(first.points))
    .map((entry, index) => ({ ...entry, position: index + 1 }))
  const userEntry = players.find((entry) => entry.nickname === 'Morningstar')
  const teams = mockRankingTeams.map((team, index) => ({
    ...team,
    points: formatPoints(pointTable.teams[index]),
    rankName: config.rankNames[team.tier],
    nickname:
      gameId === 'counter-strike-2'
        ? `${team.nickname} CS`
        : `${team.nickname} ${config.eventPrefix}`,
  }))

  return {
    currentRank: {
      ...mockCurrentRank,
      experience: config.experience,
      experienceTarget: config.experienceTarget,
      kills: config.kills,
      level: config.level,
      matchesPlayed: config.matchesPlayed,
      position: userEntry?.position ?? players.length,
      rankName: config.rankNames[config.rank],
      tier: config.rank,
      winRate: config.victoryRate,
      wins: config.wins,
    },
    divisions,
    players,
    teams,
    top500,
  }
}

function replaceTarget(target: string, tournaments: Tournament[]) {
  const sourceIndex = mockTournaments.findIndex(
    (tournament) => tournament.title === target,
  )

  return sourceIndex >= 0 ? tournaments[sourceIndex].title : target
}

function makeActivities(
  activities: ArenaActivity[],
  tournaments: Tournament[],
  gameId: GameId,
) {
  return activities.map((activity) => ({
    ...activity,
    id: activity.id + mockGames.findIndex((game) => game.id === gameId) * 20,
    target: replaceTarget(activity.target, tournaments),
  }))
}

function makeGameData(game: Game): GameArenaData {
  const config = configurations[game.id]
  const tournaments = makeTournaments(game, config)

  return {
    game,
    homeActivity: mockActivity.map((activity) => ({
      ...activity,
      detail: replaceTarget(activity.detail, tournaments),
    })),
    missions: mockMissions.map((mission) => ({
      ...mission,
      title: mission.title.replace('ranked matches', `${game.title} matches`),
    })),
    overview: makeOverview(tournaments),
    profile: makeProfile(config),
    ranking: makeRanking(config, game.id),
    recentActivities: makeActivities(mockRecentActivities, tournaments, game.id),
    season: config.season,
    tournamentActivities: makeActivities(
      mockTournamentActivities,
      tournaments,
      game.id,
    ),
    tournamentLine: config.tournamentLine,
    tournaments,
  }
}

const mockGameData = Object.fromEntries(
  mockGames.map((game) => [game.id, makeGameData(game)]),
) as Record<GameId, GameArenaData>

export function getMockGameData(gameId: GameId) {
  return mockGameData[gameId]
}
