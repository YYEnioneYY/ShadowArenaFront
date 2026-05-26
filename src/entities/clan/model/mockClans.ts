import { mockGames, type GameId } from '../../game/model/mockGames'
import type {
  Clan,
  ClanGameData,
  ClanGameMode,
  ClanLanguage,
  ClanMember,
  ClanRegion,
  ClanRole,
} from './types'

interface ClanTheme {
  clanRank: string
  clanScore: string
  invites: string[]
  names: string[]
  requesters: string[]
  tier: string
  wins: number
}

interface ClanTemplate {
  gameMode: ClanGameMode
  languages: ClanLanguage[]
  members: number
  rank: Clan['rank']
  region: ClanRegion
  roles: ClanRole[]
  totalMembers: number
  winRate: number
}

const themes: Record<GameId, ClanTheme> = {
  valorant: {
    clanRank: '#24',
    clanScore: '15,680',
    invites: ['VOID WARS', 'RED SHIFT', 'NIGHT PROTOCOL'],
    names: [
      'SHADOW LEGION',
      'CRIMSON VEIL',
      'SILENT RONIN',
      'VOID STRIKERS',
      'NEON COVENANT',
      'EMBER WATCH',
      'RADIANT FALL',
      'LAST OATH',
    ],
    requesters: ['Ashen', 'Vex', 'Kyra', 'Noctis', 'Sable', 'Morrow'],
    tier: 'SAMURAI',
    wins: 23,
  },
  'counter-strike-2': {
    clanRank: '#18',
    clanScore: '18,240',
    invites: ['DUST REQUIEM', 'INFERNO CORE', 'SILENT DEFUSE'],
    names: [
      'SMOKE COUNCIL',
      'CLUTCH ORDER',
      'PHANTOM AWP',
      'DUST WARDENS',
      'ECO REAPERS',
      'INFERNO GUARD',
      'MIRAGE OATH',
      'LAST ROUND',
    ],
    requesters: ['AwpSaint', 'Flashborn', 'Kestrel', 'Rook', 'Echo', 'Slate'],
    tier: 'MASTER GUARDIAN',
    wins: 41,
  },
  'league-of-legends': {
    clanRank: '#32',
    clanScore: '12,950',
    invites: ['NEXUS CROWN', 'BARON OATH', 'RIFT HERALDS'],
    names: [
      'MIDNIGHT NEXUS',
      'BARON LEGION',
      'ARCANE FIVE',
      'RIFTKEEPERS',
      'DRAGON VEIL',
      'LANTERN ORDER',
      'VOIDBORN',
      'ELDER PACT',
    ],
    requesters: ['BaronHeir', 'Luxor', 'Rune', 'Fable', 'Solace', 'Myth'],
    tier: 'ARCANE',
    wins: 29,
  },
  'rainbow-six-siege': {
    clanRank: '#47',
    clanScore: '9,860',
    invites: ['BREACH ORDER', 'BLACKSITE', 'IRON HOLD'],
    names: [
      'SILENT BREACH',
      'IRON FORTRESS',
      'VIGIL CELL',
      'DEFENDER OATH',
      'NIGHT ENTRY',
      'HARD WALL',
      'SIX COMMAND',
      'LOCKDOWN',
    ],
    requesters: ['BreachKing', 'Mute', 'Anchor', 'Pulse', 'Cipher', 'Castle'],
    tier: 'VIGIL',
    wins: 17,
  },
  'dota-2': {
    clanRank: '#16',
    clanScore: '21,340',
    invites: ['ANCIENT OATH', 'AEGIS GUARD', 'DIRE COURT'],
    names: [
      'ANCIENT LEGION',
      'RADIANT COVEN',
      'DIVINE FIVE',
      'ROSHAN ORDER',
      'DIRE VEIL',
      'AEGIS KEEPERS',
      'RUNEBOUND',
      'THRONE WATCH',
    ],
    requesters: ['AncientWyrm', 'Invoker', 'Oracle', 'Nyx', 'Ember', 'Viper'],
    tier: 'DIVINE',
    wins: 38,
  },
  'apex-legends': {
    clanRank: '#21',
    clanScore: '17,125',
    invites: ['VOID HUNTERS', 'FINAL RING', 'OUTLAND CREW'],
    names: [
      'PREDATOR PACK',
      'VOID RUNNERS',
      'OUTLAND OATH',
      'RING WARDENS',
      'DROP LEGENDS',
      'PHASE GUARD',
      'APEX VEIL',
      'LAST SQUAD',
    ],
    requesters: ['PredatorV', 'Wraith', 'Horizon', 'Ash', 'Catalyst', 'Fuse'],
    tier: 'PREDATOR',
    wins: 31,
  },
  fortnite: {
    clanRank: '#38',
    clanScore: '11,270',
    invites: ['CROWN GUARD', 'STORM LINE', 'LAST DROP'],
    names: [
      'STORM CROWN',
      'ISLAND LEGION',
      'NIGHT BUILDERS',
      'CROWN SEEKERS',
      'RIFT RAIDERS',
      'VAULT ORDER',
      'FINAL ZONE',
      'GLIDER OATH',
    ],
    requesters: ['CrownMaker', 'Drift', 'Havoc', 'Aura', 'Renegade', 'Jones'],
    tier: 'STORMBORN',
    wins: 19,
  },
  pubg: {
    clanRank: '#63',
    clanScore: '7,480',
    invites: ['LAST CIRCLE', 'BLACK DROP', 'RED ZONE'],
    names: [
      'CIRCLE KEEPERS',
      'DROP WARDENS',
      'BLACK PARACHUTE',
      'RED ZONE ORDER',
      'SURVIVOR CORE',
      'CRATE HUNTERS',
      'LONE SQUAD',
      'FINAL RIDGE',
    ],
    requesters: ['LastCircle', 'Nomad', 'Scope', 'Khan', 'Raven', 'Mason'],
    tier: 'SURVIVOR',
    wins: 12,
  },
  'marvel-rivals': {
    clanRank: '#27',
    clanScore: '14,820',
    invites: ['OMEGA FORCE', 'NOVA WATCH', 'SECRET WARS'],
    names: [
      'COSMIC LEGION',
      'OMEGA ORDER',
      'NOVA CORPS',
      'MULTIVERSE GUARD',
      'HEROIC VEIL',
      'RIVAL CROWN',
      'STAR SENTINELS',
      'FINAL PANEL',
    ],
    requesters: ['NovaPrime', 'Luna', 'Magik', 'Storm', 'Rocket', 'Hela'],
    tier: 'HEROIC',
    wins: 26,
  },
  'rocket-league': {
    clanRank: '#35',
    clanScore: '12,420',
    invites: ['AERIAL ORDER', 'NIGHT DRIVE', 'OVERTIME'],
    names: [
      'AERIAL PHANTOMS',
      'SUPERSONIC OATH',
      'BOOST LEGION',
      'OVERTIME GUARD',
      'CEILING SHOTS',
      'NIGHT ROTATION',
      'GOALKEEPERS',
      'FINAL KICKOFF',
    ],
    requesters: ['Airborne', 'FlipReset', 'Zenith', 'Pulse', 'Vortex', 'Orbit'],
    tier: 'AERIAL ACE',
    wins: 22,
  },
}

const templates: ClanTemplate[] = [
  {
    gameMode: '5V5',
    languages: ['ENG', 'RUS'],
    members: 4,
    rank: 'DIAMOND+',
    region: 'NA',
    roles: ['DUELIST', 'CONTROLLER'],
    totalMembers: 6,
    winRate: 72,
  },
  {
    gameMode: 'PREMIER',
    languages: ['ENG'],
    members: 3,
    rank: 'PLATINUM+',
    region: 'EU',
    roles: ['INITIATOR', 'SENTINEL'],
    totalMembers: 5,
    winRate: 68,
  },
  {
    gameMode: '5V5',
    languages: ['RUS', 'UKR'],
    members: 5,
    rank: 'GOLD+',
    region: 'CIS',
    roles: ['CONTROLLER', 'FLEX'],
    totalMembers: 6,
    winRate: 63,
  },
  {
    gameMode: 'DEATHMATCH',
    languages: ['ENG', 'JPN'],
    members: 2,
    rank: 'DIAMOND+',
    region: 'APAC',
    roles: ['DUELIST'],
    totalMembers: 4,
    winRate: 78,
  },
  {
    gameMode: '5V5',
    languages: ['ESP', 'ENG'],
    members: 4,
    rank: 'PLATINUM+',
    region: 'EU',
    roles: ['SENTINEL', 'SUBSTITUTE'],
    totalMembers: 6,
    winRate: 66,
  },
  {
    gameMode: 'PREMIER',
    languages: ['FRA', 'ENG'],
    members: 3,
    rank: 'GOLD+',
    region: 'NA',
    roles: ['FLEX', 'CONTROLLER'],
    totalMembers: 5,
    winRate: 58,
  },
  {
    gameMode: '5V5',
    languages: ['DEU', 'ENG'],
    members: 5,
    rank: 'DIAMOND+',
    region: 'EU',
    roles: ['INITIATOR', 'CONTROLLER'],
    totalMembers: 6,
    winRate: 75,
  },
  {
    gameMode: 'DEATHMATCH',
    languages: ['KOR', 'ENG'],
    members: 2,
    rank: 'PLATINUM+',
    region: 'APAC',
    roles: ['DUELIST', 'FLEX'],
    totalMembers: 4,
    winRate: 70,
  },
]

export function getMockClanData(gameId: GameId): ClanGameData {
  const theme = themes[gameId]
  const game = mockGames.find((item) => item.id === gameId)
  const gameTitle = game?.title ?? 'ARENA'
  const hasMembership =
    gameId === 'valorant' || gameId === 'league-of-legends'
  const clans = templates.map((template, index) => ({
    ...template,
    game: gameTitle,
    gameId,
    id: `${gameId}-clan-${index + 1}`,
    name: theme.names[index],
    tier: theme.tier,
  }))
  const roles: ClanRole[] = [
    'CONTROLLER',
    'DUELIST',
    'INITIATOR',
    'SENTINEL',
    'FLEX',
    'SUBSTITUTE',
  ]
  const members: ClanMember[] = roles.map((role, index) => ({
    id: `${gameId}-member-${index + 1}`,
    isCurrentUser: index === 0,
    nickname: index === 0 ? 'Morningstar' : theme.requesters[index - 1],
    role,
    tag: index === 0 ? '#Ghost' : index % 2 === 0 ? '#Arena' : '#Ghost',
  }))

  return {
    clans: hasMembership ? clans.slice(1) : clans,
    invites: theme.invites.map((name, index) => ({
      id: `${gameId}-invite-${index + 1}`,
      name,
    })),
    membership: hasMembership
      ? {
          clan: clans[0],
          clanRank: theme.clanRank,
          clanScore: theme.clanScore,
          members,
          wins: theme.wins,
        }
      : null,
    requests: theme.requesters.map((nickname, index) => ({
      id: `${gameId}-request-${index + 1}`,
      nickname,
      tag: index % 2 === 0 ? '#Ghost' : '#Arena',
    })),
  }
}
