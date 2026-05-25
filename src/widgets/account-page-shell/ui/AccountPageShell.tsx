import type { ReactNode } from 'react'
import { Navigate, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'
import { Panel } from '../../../shared/ui/Panel'
import { ArenaPageLayout } from '../../arena-layout/ui/ArenaPageLayout'

interface AccountPageShellProps {
  children: ReactNode
  description: string
  title: string
}

const accountLinks = [
  { icon: 'user', label: 'PROFILE', to: '/profile' },
  { icon: 'users', label: 'FRIENDS', to: '/friends' },
  { icon: 'settings', label: 'SETTINGS', to: '/settings' },
  { icon: 'shield', label: 'PRIVACY & SECURITY', to: '/privacy-security' },
] as const

export function AccountPageShell({
  children,
  description,
  title,
}: AccountPageShellProps) {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()
  const { game } = useActiveGameData()

  if (!isAuthenticated || !user) {
    return <Navigate replace state={{ from: location.pathname }} to="/login" />
  }

  return (
    <ArenaPageLayout mainClassName="lg:col-span-2">
      <div className="px-3 pb-5 pt-3 md:px-5 md:pt-5 lg:px-[35px] lg:pt-0 2xl:px-[50px] min-[1900px]:px-[72px]">
        <Panel className="account-hero relative overflow-hidden px-7 py-8 xl:px-[46px] xl:py-[42px] min-[1900px]:px-[66px] min-[1900px]:py-[55px]">
          <p className="text-[9px] font-semibold tracking-[0.34em] text-crimson xl:text-[11px] min-[1900px]:text-[15px]">
            ACCOUNT CENTER
          </p>
          <h1 className="mt-3 font-display text-[34px] text-arena-strong xl:text-[43px] min-[1900px]:mt-[18px] min-[1900px]:text-[60px]">
            {title}
          </h1>
          <p className="mt-3 max-w-[600px] text-[12px] leading-relaxed text-arena-muted xl:text-[15px] min-[1900px]:mt-[19px] min-[1900px]:text-[19px]">
            {description}
          </p>
        </Panel>
        <div className="mt-4 grid gap-4 lg:grid-cols-[245px_minmax(0,1fr)] xl:mt-5 xl:grid-cols-[292px_minmax(0,1fr)] min-[1900px]:mt-[26px] min-[1900px]:grid-cols-[374px_minmax(0,1fr)] min-[1900px]:gap-[22px]">
          <aside>
            <Panel className="overflow-hidden p-4 xl:p-5 min-[1900px]:p-[25px]">
              <div className="flex items-center gap-3 min-[1900px]:gap-[16px]">
                <span className="profile-orb h-[52px] w-[52px] shrink-0 rounded-full border border-crimson min-[1900px]:h-[70px] min-[1900px]:w-[70px]" />
                <div className="min-w-0">
                  <h2 className="truncate font-display text-[15px] text-arena-strong min-[1900px]:text-[21px]">
                    {user.profile.name}
                  </h2>
                  <p className="truncate text-[9px] text-arena-muted min-[1900px]:text-[12px]">
                    {user.email}
                  </p>
                </div>
              </div>
              <p className="mt-4 border-t border-arena-line pt-4 text-[8px] font-semibold tracking-[0.18em] text-arena-muted min-[1900px]:mt-[20px] min-[1900px]:pt-[20px] min-[1900px]:text-[11px]">
                ACTIVE GAME / <span className="text-crimson">{game.title}</span>
              </p>
              <nav className="mt-5 space-y-1 min-[1900px]:mt-[24px] min-[1900px]:space-y-[7px]">
                {accountLinks.map((link) => (
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'flex h-[42px] items-center rounded-[4px] border border-transparent px-3 text-[10px] font-semibold text-arena-copy transition-colors hover:border-arena-outline hover:text-arena-strong min-[1900px]:h-[53px] min-[1900px]:px-[15px] min-[1900px]:text-[14px]',
                        isActive &&
                          'border-crimson/70 bg-crimson/10 text-crimson',
                      )
                    }
                    key={link.to}
                    to={link.to}
                  >
                    <ArenaIcon
                      className="mr-3 h-[16px] w-[16px] min-[1900px]:h-[21px] min-[1900px]:w-[21px]"
                      name={link.icon}
                    />
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </Panel>
          </aside>
          <section className="min-w-0">{children}</section>
        </div>
      </div>
    </ArenaPageLayout>
  )
}
