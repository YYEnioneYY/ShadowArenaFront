export const appHeaderLinks = [
  { label: 'HOME', to: '/' },
  { label: 'TOURNAMENTS', to: '/tournaments' },
  { label: 'RANKING', to: '/ranking' },
  { label: 'CLANS', to: '/clans' },
  { label: 'STORE', to: '/store' },
] as const

export const accountMenuItems = [
  { icon: 'user', label: 'PROFILE', to: '/profile' },
  { icon: 'users', label: 'FRIENDS', to: '/friends' },
  { icon: 'settings', label: 'SETTINGS', to: '/settings' },
  { icon: 'shield', label: 'PRIVACY & SECURITY', to: '/privacy-security' },
] as const
