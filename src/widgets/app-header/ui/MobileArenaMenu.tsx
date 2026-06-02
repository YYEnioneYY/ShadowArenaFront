import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { mockGames } from '../../../entities/game/model/mockGames'
import { GameIcon } from '../../../entities/game/ui/GameIcon'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { useSelectedGame } from '../../../features/game-selection/model/useSelectedGame'
import { useShop } from '../../../features/shop/model/useShop'
import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'
import { ShadowArenaLogo } from '../../../shared/ui/ShadowArenaLogo'
import { accountMenuItems, appHeaderLinks } from '../model/navigation'

export function MobileArenaMenu() {
  const { isAuthenticated, logout, user } = useAuth()
  const { balance } = useShop()
  const activeGameData = useActiveGameData()
  const { selectedGame, selectGame } = useSelectedGame()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const isAccountRoute = [
    '/store',
    '/friends',
    '/settings',
    '/privacy-security',
    '/profile',
  ].includes(location.pathname)
  const profile = isAccountRoute ? user?.profile : activeGameData.profile

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  function chooseGame(gameId: (typeof mockGames)[number]['id']) {
    selectGame(gameId)
    closeMenu()
  }

  return (
    <div className="ml-auto md:hidden">
      <button
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        className="flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-[4px] border border-arena-outline bg-[#111116] text-arena-strong"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span className="h-px w-[19px] bg-current" />
        <span className="h-px w-[19px] bg-current" />
        <span className="h-px w-[19px] bg-current" />
      </button>
      {isOpen && (
        <>
          <button
            aria-label="Close navigation menu"
            className="mobile-menu-backdrop fixed inset-0 z-50 bg-black/65"
            onClick={closeMenu}
            type="button"
          />
          <aside className="mobile-menu-drawer fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,370px)] flex-col border-l border-arena-outline bg-[#0B0B0F] shadow-[-18px_0_44px_rgb(0_0_0/0.8)]">
            <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-arena-line px-5">
              <ShadowArenaLogo className="h-auto w-[92px]" />
              <button
                aria-label="Close navigation menu"
                className="relative h-[42px] w-[42px] rounded-[4px] border border-arena-outline text-arena-copy"
                onClick={closeMenu}
                type="button"
              >
                <span className="absolute left-[11px] top-1/2 h-px w-[19px] -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-[11px] top-1/2 h-px w-[19px] -translate-y-1/2 -rotate-45 bg-current" />
              </button>
            </div>
            <div className="sidebar-games-scroll min-h-0 flex-1 overflow-y-auto px-5 pb-6 pt-5">
              {isAuthenticated && user && profile ? (
                <div className="rounded-[5px] border border-arena-outline bg-black/35 p-3">
                  <div className="flex items-center gap-3">
                    <span className="profile-orb h-[47px] w-[47px] shrink-0 rounded-full border border-crimson" />
                    <span className="min-w-0">
                      <span className="block truncate font-heading text-[14px] text-arena-strong">
                        {profile.name}
                      </span>
                      <span className="block text-[9px] font-semibold text-crimson">
                        LEVEL {profile.level} / {profile.rank}
                      </span>
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-arena-line pt-3">
                    <span className="text-[9px] tracking-[0.12em] text-arena-muted">
                      {selectedGame.title}
                    </span>
                    <Link
                      className="text-[11px] font-semibold text-arena-strong"
                      onClick={closeMenu}
                      to="/store"
                    >
                      {balance.toLocaleString('en-US')}{' '}
                      <span className="text-crimson">CR</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    className="flex h-[40px] items-center justify-center rounded-[4px] border border-arena-outline text-[11px] font-semibold text-arena-strong"
                    onClick={closeMenu}
                    state={{ from: location.pathname }}
                    to="/login"
                  >
                    LOGIN
                  </Link>
                  <Link
                    className="flex h-[40px] items-center justify-center rounded-[4px] border border-crimson text-[11px] font-semibold text-crimson"
                    onClick={closeMenu}
                    to="/register"
                  >
                    REGISTER
                  </Link>
                </div>
              )}
              <p className="mb-3 mt-6 text-[9px] font-semibold tracking-[0.25em] text-arena-dim">
                NAVIGATION
              </p>
              <nav className="space-y-1">
                {appHeaderLinks.map((link) => (
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'flex h-[42px] items-center rounded-[4px] border border-transparent px-4 text-[12px] font-semibold text-arena-copy transition-colors',
                        isActive &&
                          'border-crimson/55 bg-crimson/10 text-crimson',
                      )
                    }
                    key={link.label}
                    onClick={closeMenu}
                    to={link.to}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <p className="mb-3 mt-7 text-[9px] font-semibold tracking-[0.25em] text-arena-dim">
                SELECT GAME
              </p>
              <div className="grid grid-cols-2 gap-2">
                {mockGames.map((game) => (
                  <button
                    className={cn(
                      'flex h-[55px] items-center rounded-[4px] border border-arena-outline bg-black/30 px-3 text-left text-arena-muted transition-colors',
                      selectedGame.id === game.id &&
                        'border-crimson bg-crimson/10 text-crimson',
                    )}
                    key={game.id}
                    onClick={() => chooseGame(game.id)}
                    type="button"
                  >
                    <GameIcon
                      className={cn(
                        'mr-3 h-[24px] w-[30px] shrink-0 text-[#B3B3B3]/70 transition-colors',
                        game.id === 'counter-strike-2' && 'w-[46px]',
                        selectedGame.id === game.id && 'text-crimson',
                      )}
                      gameId={game.id}
                    />
                    <span className="text-[8px] font-semibold">
                      {game.title}
                    </span>
                  </button>
                ))}
              </div>
              {isAuthenticated && (
                <>
                  <p className="mb-3 mt-7 text-[9px] font-semibold tracking-[0.25em] text-arena-dim">
                    ACCOUNT
                  </p>
                  <div className="space-y-1">
                    {accountMenuItems.map((item) => (
                      <Link
                        className="flex h-[42px] items-center rounded-[4px] px-3 text-arena-copy transition-colors hover:bg-white/[0.04]"
                        key={item.label}
                        onClick={closeMenu}
                        to={item.to}
                      >
                        <ArenaIcon
                          className="mr-3 h-[16px] w-[16px] text-arena-muted"
                          name={item.icon}
                        />
                        <span className="text-[11px] font-semibold">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                    <button
                      className="mt-3 flex h-[42px] w-full items-center justify-center gap-2 rounded-[4px] border border-crimson text-[11px] font-semibold text-crimson"
                      onClick={() => {
                        logout()
                        closeMenu()
                      }}
                      type="button"
                    >
                      <ArenaIcon className="h-[16px] w-[16px]" name="logout" />
                      LOG OUT
                    </button>
                  </div>
                </>
              )}
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
