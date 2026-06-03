import { cn } from '../../../shared/lib/cn'
import shadowRankIcon from '../../../assets/ranks/rank-01.svg'
import roninRankIcon from '../../../assets/ranks/rank-02.svg'
import samuraiRankIcon from '../../../assets/ranks/rank-03.svg'
import warlordRankIcon from '../../../assets/ranks/rank-04.svg'
import immortalRankIcon from '../../../assets/ranks/rank-05.svg'
import type { RankTier } from '../model/mockRanking'

interface RankEmblemProps {
  className?: string
  tier: RankTier
}

const rankIcons: Record<RankTier, string> = {
  SHADOW: shadowRankIcon,
  RONIN: roninRankIcon,
  SAMURAI: samuraiRankIcon,
  WARLORD: warlordRankIcon,
  IMMORTAL: immortalRankIcon,
}

export function RankEmblem({ className, tier }: RankEmblemProps) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={cn('object-contain', className)}
      draggable={false}
      src={rankIcons[tier]}
    />
  )
}
