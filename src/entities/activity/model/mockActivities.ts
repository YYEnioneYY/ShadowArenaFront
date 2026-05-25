export interface ArenaActivity {
  id: number
  actor: string
  verb: string
  target: string
  time: string
}

export const mockRecentActivities: ArenaActivity[] = [
  { id: 1, actor: 'Team Eclipse', verb: 'joined', target: 'Night Protocol', time: '10m ago' },
  { id: 2, actor: 'Nova Strike', verb: 'registered for', target: 'Red Shift', time: '22m ago' },
  { id: 3, actor: 'VoidR', verb: 'reached', target: 'Elite 1', time: '1h ago' },
  { id: 4, actor: 'Dusk Runners', verb: 'won', target: 'Neon Clash', time: '2h ago' },
  { id: 5, actor: 'Team SBN', verb: 'joined', target: 'Initiation', time: '3h ago' },
  { id: 6, actor: 'Team Clowns', verb: 'won', target: 'Shadow Rush', time: '4h ago' },
]

export const mockTournamentActivities: ArenaActivity[] = [
  { id: 7, actor: 'Morningstar', verb: 'entered', target: 'Initiation', time: '8m ago' },
  { id: 8, actor: 'Crimson Five', verb: 'registered for', target: 'Vanguard Open', time: '32m ago' },
  { id: 9, actor: 'Ashfall', verb: 'claimed entry to', target: 'Radiant Trials', time: '1h ago' },
  { id: 10, actor: 'Nova Strike', verb: 'won', target: 'Phantom Strike', time: '3h ago' },
]
