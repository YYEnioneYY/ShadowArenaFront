export type RankTier = 'SHADOW' | 'RONIN' | 'SAMURAI' | 'WARLORD' | 'IMMORTAL'

export interface RankDivision {
  name: string
  tier: RankTier
  description: string
}

export interface RankingEntry {
  position: number
  nickname: string
  tag: string
  points: string
  rankName?: string
  tier: RankTier
  region: string
}

export interface TeamRankingEntry extends RankingEntry {
  members: number
}

export const mockRankDivisions: RankDivision[] = [
  {
    name: 'SHADOW',
    tier: 'SHADOW',
    description: 'The beginning of the journey. Players enter the Arena and learn its rules.',
  },
  {
    name: 'RONIN',
    tier: 'RONIN',
    description: 'Independent fighters. They rely on individual skill and adaptability.',
  },
  {
    name: 'SAMURAI',
    tier: 'SAMURAI',
    description: 'Skilled and disciplined warriors. They form the core of the competitive system.',
  },
  {
    name: 'WARLORD',
    tier: 'WARLORD',
    description: 'Top-tier players and leaders. They dominate the Arena and control the battlefield.',
  },
  {
    name: 'IMMORTAL',
    tier: 'IMMORTAL',
    description: 'The highest rank. Reserved for the absolute best who define the Arena.',
  },
]

export const mockRankingTop500: RankingEntry[] = [
  { position: 1, nickname: 'Enlone', tag: '#Ghost', points: '3,480', tier: 'IMMORTAL', region: 'EU' },
  { position: 2, nickname: 'Morningstar', tag: '#Ghost', points: '2,156', tier: 'IMMORTAL', region: 'EU' },
  { position: 3, nickname: 'Trex', tag: '#Ghost', points: '1,987', tier: 'IMMORTAL', region: 'NA' },
  { position: 4, nickname: 'Espada', tag: '#Ghost', points: '1,876', tier: 'IMMORTAL', region: 'CIS' },
  { position: 5, nickname: 'Sopledene', tag: '#Ghost', points: '1,754', tier: 'IMMORTAL', region: 'APAC' },
  { position: 6, nickname: 'Epsilone', tag: '#Ghost', points: '1,645', tier: 'IMMORTAL', region: 'EU' },
  { position: 7, nickname: 'Zeta', tag: '#Ghost', points: '1,569', tier: 'IMMORTAL', region: 'EU' },
  { position: 8, nickname: 'VoidR', tag: '#Ghost', points: '1,480', tier: 'IMMORTAL', region: 'NA' },
  { position: 9, nickname: 'RedShift', tag: '#Ghost', points: '1,422', tier: 'IMMORTAL', region: 'CIS' },
  { position: 10, nickname: 'Night Protocol', tag: '#Ghost', points: '1,366', tier: 'IMMORTAL', region: 'APAC' },
  { position: 11, nickname: 'Ashfall', tag: '#Ghost', points: '1,304', tier: 'IMMORTAL', region: 'EU' },
  { position: 12, nickname: 'Nova Strike', tag: '#Ghost', points: '1,248', tier: 'IMMORTAL', region: 'NA' },
]

export const mockRankingPlayers: RankingEntry[] = [
  ...mockRankingTop500,
  { position: 13, nickname: 'Astra Veyl', tag: '#VOW', points: '1,108', tier: 'SAMURAI', region: 'EU' },
  { position: 14, nickname: 'Kurohime', tag: '#NOVA', points: '1,054', tier: 'SAMURAI', region: 'APAC' },
  { position: 15, nickname: 'Dreadmark', tag: '#HEX', points: '998', tier: 'RONIN', region: 'NA' },
  { position: 16, nickname: 'Seraph Zero', tag: '#VOID', points: '952', tier: 'RONIN', region: 'CIS' },
  { position: 17, nickname: 'Nyx Revenant', tag: '#MOON', points: '918', tier: 'RONIN', region: 'EU' },
  { position: 18, nickname: 'Crimson Ode', tag: '#BLOOD', points: '875', tier: 'RONIN', region: 'NA' },
  { position: 19, nickname: 'Oni Spectre', tag: '#RONIN', points: '832', tier: 'SHADOW', region: 'APAC' },
  { position: 20, nickname: 'Velmora', tag: '#ASH', points: '798', tier: 'SHADOW', region: 'EU' },
  { position: 21, nickname: 'Noctis Crown', tag: '#CROWN', points: '764', tier: 'SHADOW', region: 'CIS' },
  { position: 22, nickname: 'Ardent Shade', tag: '#EMBER', points: '728', tier: 'SHADOW', region: 'NA' },
  { position: 23, nickname: 'Raven Saint', tag: '#WING', points: '690', tier: 'SHADOW', region: 'EU' },
  { position: 24, nickname: 'Hollow Queen', tag: '#NIGHT', points: '654', tier: 'SHADOW', region: 'APAC' },
  { position: 25, nickname: 'Sable Crown', tag: '#KING', points: '618', tier: 'SHADOW', region: 'EU' },
  { position: 26, nickname: 'Akari Hex', tag: '#FATE', points: '587', tier: 'SHADOW', region: 'APAC' },
  { position: 27, nickname: 'Silent Vow', tag: '#OATH', points: '552', tier: 'SHADOW', region: 'CIS' },
  { position: 28, nickname: 'Aether Coil', tag: '#Steel', points: '511', tier: 'SHADOW', region: 'EU' },
  { position: 29, nickname: 'Iris Fang', tag: '#Blade', points: '486', tier: 'SHADOW', region: 'APAC' },
  { position: 30, nickname: 'Glass Ronin', tag: '#Dusk', points: '452', tier: 'SHADOW', region: 'NA' },
  { position: 31, nickname: 'Cerulean', tag: '#Wave', points: '419', tier: 'SHADOW', region: 'CIS' },
  { position: 32, nickname: 'Lunar Static', tag: '#Mist', points: '386', tier: 'SHADOW', region: 'EU' },
  { position: 33, nickname: 'Kitsune Run', tag: '#Fox', points: '351', tier: 'SHADOW', region: 'APAC' },
  { position: 34, nickname: 'Winter Cipher', tag: '#Frost', points: '319', tier: 'SHADOW', region: 'CIS' },
  { position: 35, nickname: 'Pale Echo', tag: '#Echo', points: '282', tier: 'SHADOW', region: 'EU' },
  { position: 36, nickname: 'Rift Ember', tag: '#Spark', points: '245', tier: 'SHADOW', region: 'NA' },
]

export const mockRankingTeams: TeamRankingEntry[] = [
  { position: 1, nickname: 'Night Protocol', tag: '#TEAM', points: '8,420', tier: 'IMMORTAL', region: 'EU', members: 5 },
  { position: 2, nickname: 'Red Shift', tag: '#TEAM', points: '7,610', tier: 'WARLORD', region: 'NA', members: 5 },
  { position: 3, nickname: 'Team Eclipse', tag: '#TEAM', points: '6,980', tier: 'WARLORD', region: 'EU', members: 5 },
  { position: 4, nickname: 'Dusk Runners', tag: '#TEAM', points: '5,744', tier: 'SAMURAI', region: 'CIS', members: 5 },
  { position: 5, nickname: 'Crimson Five', tag: '#TEAM', points: '5,202', tier: 'SAMURAI', region: 'APAC', members: 5 },
]

export const mockCurrentRank = {
  position: 2,
  scope: 'GLOBAL',
  tier: 'IMMORTAL' as RankTier,
  rankName: 'IMMORTAL',
  level: 27,
  experience: 2450,
  experienceTarget: 2800,
  matchesPlayed: 248,
  wins: 156,
  winRate: '63%',
  kills: '1,254',
}
