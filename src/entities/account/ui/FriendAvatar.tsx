import leaderboardAvatar01 from '../../../assets/avatars/leaderboard-avatar-01.png'
import leaderboardAvatar02 from '../../../assets/avatars/leaderboard-avatar-02.png'
import leaderboardAvatar03 from '../../../assets/avatars/leaderboard-avatar-03.png'
import leaderboardAvatar04 from '../../../assets/avatars/leaderboard-avatar-04.png'
import leaderboardAvatar05 from '../../../assets/avatars/leaderboard-avatar-05.png'
import leaderboardAvatar06 from '../../../assets/avatars/leaderboard-avatar-06.png'
import leaderboardAvatar07 from '../../../assets/avatars/leaderboard-avatar-07.png'
import leaderboardAvatar08 from '../../../assets/avatars/leaderboard-avatar-08.png'
import { cn } from '../../../shared/lib/cn'

interface FriendAvatarProps {
  className?: string
  friendId: number
  offset?: number
}

const friendAvatars = [
  leaderboardAvatar01,
  leaderboardAvatar02,
  leaderboardAvatar03,
  leaderboardAvatar04,
  leaderboardAvatar05,
  leaderboardAvatar06,
  leaderboardAvatar07,
  leaderboardAvatar08,
]

export function FriendAvatar({
  className,
  friendId,
  offset = 0,
}: FriendAvatarProps) {
  const avatar = friendAvatars[(friendId + offset - 1) % friendAvatars.length]

  return (
    <img
      alt=""
      aria-hidden="true"
      className={cn('object-cover', className)}
      draggable={false}
      src={avatar}
    />
  )
}
