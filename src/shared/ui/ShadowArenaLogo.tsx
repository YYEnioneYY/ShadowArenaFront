import logoUrl from '../assets/shadow-arena-logo.svg'

interface ShadowArenaLogoProps {
  className?: string
}

export function ShadowArenaLogo({ className }: ShadowArenaLogoProps) {
  return (
    <img
      alt="Shadow Arena"
      className={className}
      draggable={false}
      src={logoUrl}
    />
  )
}
