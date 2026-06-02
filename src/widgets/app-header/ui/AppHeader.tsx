import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { useShop } from '../../../features/shop/model/useShop'
import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'
import { ShadowArenaLogo } from '../../../shared/ui/ShadowArenaLogo'
import { accountMenuItems, appHeaderLinks } from '../model/navigation'
import { MobileArenaMenu } from './MobileArenaMenu'

const accountItemClassName =
  'flex h-[35px] w-full items-center rounded-[3px] px-2 text-left text-arena-copy transition-colors hover:bg-white/[0.045] hover:text-arena-strong min-[1900px]:h-[46px] min-[1900px]:px-[10px]'

export function AppHeader() {
  const { isAuthenticated, logout, user } = useAuth()
  const activeGameData = useActiveGameData()
  const { balance } = useShop()
  const location = useLocation()
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const isAccountRoute = [
    '/store',
    '/friends',
    '/settings',
    '/privacy-security',
    '/profile',
  ].includes(location.pathname)
  const visibleProfile = isAccountRoute ? user?.profile : activeGameData.profile

  return (
    <header className="sticky top-0 z-30 flex h-[70px] items-center bg-[#0B0B0F] px-5 md:static md:z-auto md:px-7 xl:h-[86px] xl:px-8 2xl:h-[104px] 2xl:px-9 min-[1900px]:h-[144px] min-[1900px]:px-[40px]">
      <ShadowArenaLogo className="mr-8 block h-auto w-[84px] lg:hidden" />
      <nav className="hidden h-full items-center gap-9 md:flex xl:gap-12 2xl:gap-[58px] min-[1900px]:gap-[84px]">
        {appHeaderLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                'flex h-full items-center text-[11px] font-medium text-arena-muted transition-colors hover:text-arena-strong xl:text-[13px] 2xl:text-[15px] min-[1900px]:text-[20px]',
                isActive && 'text-crimson',
              )
            }
            key={link.label}
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="ml-auto hidden items-center gap-4 md:flex md:gap-6 xl:gap-8 2xl:gap-9 min-[1900px]:gap-[42px]">
        {isAuthenticated && user && visibleProfile ? (
          <>
            <Link
              aria-label={`${balance.toLocaleString('en-US')} Shadow Credits. Open store.`}
              className="flex h-[34px] items-center gap-2 rounded-[3px] border border-arena-outline bg-[#090a0e] px-3 transition-colors hover:border-crimson xl:h-[42px] xl:px-4 2xl:h-[46px] min-[1900px]:h-[58px] min-[1900px]:gap-[12px] min-[1900px]:px-[21px]"
              to="/store"
            >
              <span className="h-[9px] w-[9px] rounded-full bg-crimson shadow-[0_0_9px_rgb(255_45_45/0.8)] min-[1900px]:h-[13px] min-[1900px]:w-[13px]" />
              <span className="whitespace-nowrap text-[10px] font-semibold text-arena-strong xl:text-[12px] 2xl:text-[13px] min-[1900px]:text-[17px]">
                {balance.toLocaleString('en-US')}{' '}
                <span className="text-crimson">CR</span>
              </span>
            </Link>
            <ArenaIcon className="hidden h-[19px] w-[19px] text-arena-copy sm:block xl:h-[23px] xl:w-[23px] 2xl:h-[27px] 2xl:w-[27px] min-[1900px]:h-[38px] min-[1900px]:w-[38px]" name="bell" />
            <ArenaIcon className="hidden h-[22px] w-[25px] text-arena-copy sm:block xl:h-[27px] xl:w-[31px] 2xl:h-[31px] 2xl:w-[36px] min-[1900px]:h-[41px] min-[1900px]:w-[51px]" name="mail" />
            <div className="relative">
              <button
                aria-expanded={isAccountOpen}
                className="flex items-center gap-4 text-left md:gap-6 min-[1900px]:gap-[18px]"
                onClick={() => setIsAccountOpen((open) => !open)}
                type="button"
              >
                <span className="profile-orb h-[50px] w-[50px] rounded-full border border-crimson xl:h-[62px] xl:w-[62px] 2xl:h-[76px] 2xl:w-[76px] min-[1900px]:h-[118px] min-[1900px]:w-[118px]" />
                <span className="hidden lg:block">
                  <span className="block font-display text-[14px] text-arena-copy xl:text-[16px] 2xl:text-[19px] min-[1900px]:text-[28px]">
                    {visibleProfile.name}
                  </span>
                  <span className="block text-[9px] font-semibold text-crimson xl:text-[11px] 2xl:text-[12px] min-[1900px]:text-[16px]">
                    LEVEL {visibleProfile.level}
                  </span>
                </span>
              </button>
              {isAccountOpen && (
                <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[252px] rounded-[5px] border border-arena-outline bg-[#050609] p-3 shadow-[0_16px_38px_rgb(0_0_0/0.75)] min-[1900px]:w-[334px] min-[1900px]:p-[18px]">
                  <p className="font-display text-[13px] text-arena-strong min-[1900px]:text-[18px]">
                    {visibleProfile.name}
                  </p>
                  <p className="mt-1 truncate text-[9px] text-arena-muted min-[1900px]:text-[12px]">
                    {user.email}
                  </p>
                  <p className="mt-3 text-[9px] text-crimson min-[1900px]:text-[12px]">
                    {visibleProfile.rank} / LEVEL {visibleProfile.level}
                  </p>
                  {!isAccountRoute && (
                    <p className="mt-2 text-[8px] font-semibold tracking-[0.16em] text-arena-muted min-[1900px]:text-[11px]">
                      {activeGameData.game.title} PROFILE
                    </p>
                  )}
                  {isAccountRoute && (
                    <p className="mt-2 text-[8px] font-semibold tracking-[0.16em] text-arena-muted min-[1900px]:text-[11px]">
                      GLOBAL ACCOUNT
                    </p>
                  )}
                  <div className="mt-4 space-y-1 border-t border-arena-line pt-3 min-[1900px]:mt-[18px] min-[1900px]:space-y-[6px] min-[1900px]:pt-[15px]">
                    {accountMenuItems.map((item) => (
                      <Link
                        className={accountItemClassName}
                        key={item.label}
                        onClick={() => setIsAccountOpen(false)}
                        to={item.to}
                      >
                        <ArenaIcon
                          className="mr-3 h-[15px] w-[15px] text-arena-muted min-[1900px]:mr-[15px] min-[1900px]:h-[20px] min-[1900px]:w-[20px]"
                          name={item.icon}
                        />
                        <span className="flex-1 text-[10px] font-semibold min-[1900px]:text-[14px]">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <button
                    className="mt-3 flex h-[34px] w-full items-center justify-center gap-2 rounded-[3px] border border-crimson text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:mt-[16px] min-[1900px]:h-[45px] min-[1900px]:text-[14px]"
                    onClick={() => {
                      logout()
                      setIsAccountOpen(false)
                    }}
                    type="button"
                  >
                    <ArenaIcon className="h-4 w-4" name="logout" />
                    LOG OUT
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2 xl:gap-3 min-[1900px]:gap-[18px]">
            <Link
              className="flex h-[34px] items-center px-3 text-[10px] font-semibold text-arena-strong transition-colors hover:text-crimson xl:h-[42px] xl:px-4 xl:text-[12px] min-[1900px]:h-[54px] min-[1900px]:px-[22px] min-[1900px]:text-[16px]"
              state={{ from: location.pathname }}
              to="/login"
            >
              LOGIN
            </Link>
            <Link
              className="flex h-[34px] items-center rounded-[3px] border border-crimson px-4 text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[42px] xl:px-5 xl:text-[12px] min-[1900px]:h-[54px] min-[1900px]:px-[29px] min-[1900px]:text-[16px]"
              to="/register"
            >
              REGISTER
            </Link>
          </div>
        )}
      </div>
      <MobileArenaMenu />
    </header>
  )
}
