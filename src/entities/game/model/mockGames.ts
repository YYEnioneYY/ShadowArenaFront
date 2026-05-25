export type GameId =
  | 'valorant'
  | 'counter-strike-2'
  | 'league-of-legends'
  | 'rainbow-six-siege'
  | 'dota-2'
  | 'apex-legends'
  | 'fortnite'
  | 'pubg'
  | 'marvel-rivals'
  | 'rocket-league'

export interface Game {
  id: GameId
  title: string
  mark: string
  active?: boolean
}

export const mockGames: Game[] = [
  { id: 'valorant', title: 'VALORANT', mark: 'V', active: true },
  { id: 'counter-strike-2', title: 'COUNTER-STRIKE 2', mark: 'CS' },
  { id: 'league-of-legends', title: 'LEAGUE OF LEGENDS', mark: 'L' },
  { id: 'rainbow-six-siege', title: 'RAINBOW SIX SIEGE', mark: '6' },
  { id: 'dota-2', title: 'DOTA 2', mark: 'D' },
  { id: 'apex-legends', title: 'APEX LEGENDS', mark: 'A' },
  { id: 'fortnite', title: 'FORTNITE', mark: 'F' },
  { id: 'pubg', title: 'PUBG', mark: 'P' },
  { id: 'marvel-rivals', title: 'MARVEL RIVALS', mark: 'M' },
  { id: 'rocket-league', title: 'ROCKET LEAGUE', mark: 'R' },
]

export const mainGames = mockGames.slice(0, 5)
export const moreGames = mockGames.slice(5)
