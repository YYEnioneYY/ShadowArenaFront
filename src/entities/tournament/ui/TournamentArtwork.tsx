import { cn } from '../../../shared/lib/cn'
import type { ArtworkVariant } from '../model/types'

interface TournamentArtworkProps {
  format: string
  game?: string
  variant: ArtworkVariant
  featured?: boolean
}

export function TournamentArtwork({
  format,
  game = 'SHADOW ARENA',
  variant,
  featured = false,
}: TournamentArtworkProps) {
  return (
    <div
      className={cn(
        'tournament-art relative isolate h-full min-h-[108px] overflow-hidden xl:min-h-[143px] 2xl:min-h-[160px] min-[1900px]:min-h-[196px]',
        `art-${variant}`,
        featured && 'min-h-[112px]',
      )}
    >
      <div className="art-noise absolute inset-0 opacity-40" />
      <div className="art-warrior art-warrior-left" />
      <div className="art-warrior art-warrior-right" />
      <div className="art-emblem absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="block text-[9px] font-semibold tracking-[0.22em] text-crimson xl:text-[11px] 2xl:text-[12px] min-[1900px]:text-[17px]">
          {game}
        </span>
        <span className="block text-[34px] font-bold leading-none tracking-tight text-white xl:text-[42px] 2xl:text-[48px] min-[1900px]:text-[68px]">
          {format.toUpperCase().replace('V', ' V ')}
        </span>
        <span className="block text-[7px] tracking-[0.35em] text-neutral-300 xl:text-[8px] 2xl:text-[9px] min-[1900px]:text-[12px]">
          TOURNAMENT
        </span>
      </div>
    </div>
  )
}
