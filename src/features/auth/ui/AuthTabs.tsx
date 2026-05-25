import { Link } from 'react-router-dom'
import { cn } from '../../../shared/lib/cn'

export type AuthMode = 'login' | 'registration'

interface AuthTabsProps {
  mode: AuthMode
}

export function AuthTabs({ mode }: AuthTabsProps) {
  return (
    <div className="grid grid-cols-2 border-b border-arena-copy">
      <Link
        className={cn(
          'relative pb-3 text-center font-display text-[16px] text-arena-copy transition-colors hover:text-arena-strong md:text-[18px] min-[1900px]:text-[22px]',
          mode === 'login' && 'text-crimson',
        )}
        to="/login"
      >
        LOGIN
        {mode === 'login' && (
          <span className="absolute inset-x-0 bottom-[-2px] h-[3px] bg-crimson" />
        )}
      </Link>
      <Link
        className={cn(
          'relative pb-3 text-center font-display text-[16px] text-arena-copy transition-colors hover:text-arena-strong md:text-[18px] min-[1900px]:text-[22px]',
          mode === 'registration' && 'text-crimson',
        )}
        to="/register"
      >
        REGISTRATION
        {mode === 'registration' && (
          <span className="absolute inset-x-0 bottom-[-2px] h-[3px] bg-crimson" />
        )}
      </Link>
    </div>
  )
}
