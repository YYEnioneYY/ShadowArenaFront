import morningstarAvatarUrl from '../../../assets/avatars/leaderboard-avatar-02.png'
import { cn } from '../../../shared/lib/cn'

interface MorningstarAvatarProps {
  className?: string
  variant?: 'orb' | 'portrait'
}

export function MorningstarAvatar({
  className,
  variant = 'orb',
}: MorningstarAvatarProps) {
  return (
    <span
      aria-label="Morningstar avatar"
      className={cn(
        variant === 'portrait' ? 'profile-portrait' : 'profile-orb',
        'profile-avatar-image block overflow-hidden bg-cover bg-center',
        className,
      )}
      role="img"
      style={{ backgroundImage: `url(${morningstarAvatarUrl})` }}
    />
  )
}
