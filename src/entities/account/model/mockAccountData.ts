export interface MockFriend {
  activity: string
  game: string
  id: number
  lastSeen?: string
  name: string
  rank: string
  status: 'online' | 'away' | 'offline'
}

export const mockFriends: MockFriend[] = [
  {
    activity: 'In a tournament lobby',
    game: 'VALORANT',
    id: 1,
    name: 'Enlone',
    rank: 'IMMORTAL',
    status: 'online',
  },
  {
    activity: 'Playing Ranked',
    game: 'COUNTER-STRIKE 2',
    id: 2,
    name: 'Espada',
    rank: 'GLOBAL PHANTOM',
    status: 'online',
  },
  {
    activity: 'Browsing the store',
    game: 'DOTA 2',
    id: 3,
    name: 'Epsilone',
    rank: 'DIVINE',
    status: 'away',
  },
  {
    activity: 'Offline',
    game: 'APEX LEGENDS',
    id: 4,
    lastSeen: '3 HOURS AGO',
    name: 'Zeta',
    rank: 'APEX HUNTER',
    status: 'offline',
  },
  {
    activity: 'Offline',
    game: 'LEAGUE OF LEGENDS',
    id: 5,
    lastSeen: 'YESTERDAY',
    name: 'Nova Strike',
    rank: 'ARCANE',
    status: 'offline',
  },
]

export const mockFriendRequests = [
  { id: 11, name: 'Astra Veyl', game: 'VALORANT', commonFriends: 4 },
  { id: 12, name: 'Silent Vow', game: 'ROCKET LEAGUE', commonFriends: 2 },
]

export const mockPrivacySessions = [
  {
    device: 'Windows Desktop',
    location: 'Moscow, RU',
    state: 'CURRENT SESSION',
    time: 'ACTIVE NOW',
  },
  {
    device: 'Chrome / Laptop',
    location: 'Moscow, RU',
    state: 'TRUSTED',
    time: '2 DAYS AGO',
  },
  {
    device: 'Android App',
    location: 'Saint Petersburg, RU',
    state: 'VERIFIED',
    time: '12 DAYS AGO',
  },
]

export const mockConnectedApps = [
  { name: 'Discord', permission: 'Friends and status', connected: true },
  { name: 'Steam', permission: 'Game library', connected: true },
  { name: 'Riot Account', permission: 'Match history', connected: false },
]

export const mockProfileIdentity = {
  warriorId: '#SL245',
  joined: 'MAY 12, 2025',
  location: 'EUROPE',
  playTime: '248H',
  experience: 2450,
  experienceTarget: 2800,
}

export const mockProfileAchievements = [
  { id: 1, title: 'Crimson Champion', detail: 'Won Initiation', date: '22.09.2025' },
  { id: 2, title: 'Arena Veteran', detail: 'Completed 100 battles', date: '14.08.2025' },
  { id: 3, title: 'Shadow Collector', detail: 'Claimed a legendary cosmetic', date: '03.07.2025' },
]

export const mockProfileClan = {
  members: '24/50',
  name: 'SHADOW LEGION',
  rank: '#24',
  score: '15,680',
}
