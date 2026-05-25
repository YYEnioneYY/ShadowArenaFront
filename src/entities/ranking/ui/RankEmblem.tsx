import { cn } from '../../../shared/lib/cn'
import type { RankTier } from '../model/mockRanking'

interface RankEmblemProps {
  className?: string
  tier: RankTier
}

const tierColors: Record<RankTier, string> = {
  SHADOW: 'text-[#657085]',
  RONIN: 'text-crimson',
  SAMURAI: 'text-[#fc2736]',
  WARLORD: 'text-[#9a4ce4]',
  IMMORTAL: 'text-arena-strong',
}

export function RankEmblem({ className, tier }: RankEmblemProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn(tierColors[tier], className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 76 86"
    >
      <path d="M38 3 65 27 60 57 38 82 16 57 11 27Z" opacity=".9" />
      <path d="M38 9 38 69 24 56 25 33Z" fill="currentColor" stroke="none" />
      <path d="M38 9 38 69 52 56 51 33Z" fill="currentColor" opacity=".65" stroke="none" />
      <path d="M38 19 31 47 38 58 45 47Z" fill="#050609" stroke="none" />
      <path d="M8 34 1 42 14 57M68 34 75 42 62 57" />
      <path d="M20 72h36" opacity=".75" />
    </svg>
  )
}
