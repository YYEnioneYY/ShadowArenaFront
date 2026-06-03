import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  mainGames,
  moreGames,
  type Game,
} from '../../../entities/game/model/mockGames'
import { GameIcon } from '../../../entities/game/ui/GameIcon'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useSelectedGame } from '../../../features/game-selection/model/useSelectedGame'
import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'
import { ShadowArenaLogo } from '../../../shared/ui/ShadowArenaLogo'

interface GameButtonProps {
  game: Game
  selected: boolean
  onSelect: (game: Game) => void
}

function GameButton({ game, selected, onSelect }: GameButtonProps) {
  return (
    <button
      className={cn(
        'flex h-[57px] w-full flex-col items-center justify-center rounded-[5px] border border-arena-outline bg-black text-arena-dim transition-colors hover:border-arena-copy hover:text-arena-copy xl:h-[65px] 2xl:h-[73px] min-[1900px]:h-[84px]',
        selected && 'border-crimson text-crimson',
      )}
      onClick={() => onSelect(game)}
      type="button"
    >
      <GameIcon
        className={cn(
          'mb-1 h-[28px] w-[42px] text-[#B3B3B3]/70 transition-colors xl:h-[31px] xl:w-[48px] 2xl:h-[36px] 2xl:w-[54px] min-[1900px]:h-[43px] min-[1900px]:w-[64px]',
          game.id === 'counter-strike-2' &&
            'w-[70px] xl:w-[78px] 2xl:w-[88px] min-[1900px]:w-[106px]',
          selected && 'text-crimson',
        )}
        gameId={game.id}
      />
      <span className="mt-1 text-[7px] font-medium xl:text-[8px] 2xl:text-[9px] min-[1900px]:text-[11px]">{game.title}</span>
    </button>
  )
}

export function GameSidebar() {
  const { isAuthenticated, logout } = useAuth()
  const { selectedGame, selectGame: changeSelectedGame } = useSelectedGame()
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const hasSelectedMoreGame = moreGames.some(
    (game) => game.id === selectedGame.id,
  )

  function selectGame(game: Game) {
    changeSelectedGame(game.id)
    setIsMoreOpen(false)
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[120px] flex-col border-r border-arena-line bg-[#040506] px-[3px] pb-4 pt-4 lg:flex xl:w-[144px] xl:px-[5px] 2xl:w-[170px] 2xl:px-[7px] min-[1900px]:w-[242px] min-[1900px]:px-[11px] min-[1900px]:pt-[30px]">
      <ShadowArenaLogo className="mx-auto mb-10 h-auto w-[82px] xl:w-[96px] 2xl:w-[116px] min-[1900px]:mb-[88px] min-[1900px]:w-[178px]" />
      <p className="mb-1 pl-2 text-[9px] text-arena-copy xl:text-[11px] 2xl:text-[13px] min-[1900px]:mb-2 min-[1900px]:pl-[18px] min-[1900px]:text-[18px]">GAMES</p>
      <div className="space-y-[3px]">
        {mainGames.map((game) => (
          <GameButton
            game={game}
            key={game.title}
            onSelect={selectGame}
            selected={selectedGame.id === game.id}
          />
        ))}
      </div>
      <div className="relative mt-[3px]">
        <button
          aria-expanded={isMoreOpen}
          aria-haspopup="menu"
          className={cn(
            'flex h-[52px] w-full flex-col items-center justify-center rounded-[5px] border border-arena-outline bg-black text-arena-muted transition-colors hover:border-arena-copy hover:text-arena-copy xl:h-[58px] 2xl:h-[64px] min-[1900px]:h-[70px]',
            (isMoreOpen || hasSelectedMoreGame) && 'border-crimson text-crimson',
          )}
          onClick={() => setIsMoreOpen((open) => !open)}
          type="button"
        >
          <span className="text-[23px] font-semibold leading-[14px] tracking-[0.14em] xl:text-[28px] min-[1900px]:text-[34px]">
            ...
          </span>
          <span className="mt-1 text-[7px] font-medium xl:text-[8px] 2xl:text-[9px] min-[1900px]:text-[11px]">MORE GAMES</span>
        </button>
        {isMoreOpen && (
          <div
            className="absolute bottom-0 left-[calc(100%+8px)] z-50 flex max-h-[min(360px,calc(100vh-24px))] w-[188px] flex-col rounded-[5px] border border-arena-outline bg-[#050609] p-2 shadow-[0_16px_36px_rgb(0_0_0/0.72)] xl:w-[216px] min-[1900px]:w-[270px]"
            role="menu"
          >
            <p className="mb-2 px-2 text-[9px] font-semibold text-arena-muted">
              MORE GAMES
            </p>
            <div className="sidebar-games-scroll min-h-0 space-y-1 overflow-y-auto">
              {moreGames.map((game) => (
                <button
                  className={cn(
                    'flex h-[40px] w-full items-center rounded-[3px] border border-transparent px-3 text-arena-muted transition-colors hover:border-arena-outline hover:bg-white/[0.03] hover:text-arena-strong',
                    selectedGame.id === game.id && 'border-crimson/70 text-crimson',
                  )}
                  key={game.title}
                  onClick={() => selectGame(game)}
                  role="menuitem"
                  type="button"
                >
                  <GameIcon
                    className={cn(
                      'mr-3 h-[21px] w-[28px] shrink-0 text-[#B3B3B3]/70 transition-colors',
                      game.id === 'counter-strike-2' && 'w-[42px]',
                      selectedGame.id === game.id && 'text-crimson',
                    )}
                    gameId={game.id}
                  />
                  <span className="text-[9px] font-medium">{game.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-auto space-y-[5px] px-1">
        <button className="sidebar-utility" type="button">
          <ArenaIcon className="h-[17px] w-[17px]" name="settings" />
          <span>SETTINGS</span>
        </button>
        {isAuthenticated ? (
          <button
            className="sidebar-utility hover:text-crimson"
            onClick={logout}
            type="button"
          >
            <ArenaIcon className="h-[17px] w-[17px]" name="logout" />
            <span>LOG OUT</span>
          </button>
        ) : (
          <Link className="sidebar-utility hover:text-crimson" to="/login">
            <ArenaIcon className="h-[17px] w-[17px]" name="logout" />
            <span>LOGIN</span>
          </Link>
        )}
      </div>
    </aside>
  )
}
