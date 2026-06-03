import apexLogo from '../../../assets/gamelogos/Apex.png'
import cs2Logo from '../../../assets/gamelogos/CS2.png'
import dota2Logo from '../../../assets/gamelogos/Dota2.png'
import fortniteLogo from '../../../assets/gamelogos/Fortnite.png'
import lolLogo from '../../../assets/gamelogos/LOL.png'
import marvelLogo from '../../../assets/gamelogos/Marvel.png'
import pubgLogo from '../../../assets/gamelogos/PUBG.png'
import r6Logo from '../../../assets/gamelogos/R6.png'
import rlLogo from '../../../assets/gamelogos/RL.png'
import valorantLogo from '../../../assets/gamelogos/Valorant.png'
import { mockGames, type Game } from '../../../entities/game/model/mockGames'
import { GameIcon } from '../../../entities/game/ui/GameIcon'
import { useSelectedGame } from '../../../features/game-selection/model/useSelectedGame'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

const gameLogoUrls: Record<Game['id'], string> = {
  'apex-legends': apexLogo,
  'counter-strike-2': cs2Logo,
  'dota-2': dota2Logo,
  fortnite: fortniteLogo,
  'league-of-legends': lolLogo,
  'marvel-rivals': marvelLogo,
  pubg: pubgLogo,
  'rainbow-six-siege': r6Logo,
  'rocket-league': rlLogo,
  valorant: valorantLogo,
}

const wideGameIconIds = new Set<Game['id']>([
  'counter-strike-2',
  'marvel-rivals',
  'rocket-league',
])

const narrowGameIconIds = new Set<Game['id']>([
  'fortnite',
  'pubg',
  'rainbow-six-siege',
])

export function HomeGamesRow() {
  const { selectedGame, selectGame } = useSelectedGame()

  return (
    <section className="mt-8 min-[1900px]:mt-[50px]">
      <h2 className="mb-3 font-heading text-[14px] text-arena-copy xl:text-[17px] min-[1900px]:mb-[18px] min-[1900px]:text-[24px]">
        GAMES
      </h2>
      <div className="home-scroll-row flex gap-3 overflow-x-auto xl:gap-4 min-[1900px]:gap-[22px]">
        {mockGames.map((game) => (
          <HomeGameCard
            game={game}
            key={game.id}
            onSelect={() => selectGame(game.id)}
            selected={selectedGame.id === game.id}
          />
        ))}
      </div>
    </section>
  )
}

function HomeGameCard({
  game,
  onSelect,
  selected,
}: {
  game: Game
  onSelect: () => void
  selected: boolean
}) {
  return (
    <button
      className="w-[182px] shrink-0 text-left xl:w-[220px] 2xl:w-[250px] min-[1900px]:w-[326px]"
      onClick={onSelect}
      type="button"
    >
      <Panel
        className={cn(
          'overflow-hidden transition-colors hover:border-crimson/65',
          selected && 'border-crimson',
        )}
      >
        <div className="h-[98px] overflow-hidden xl:h-[118px] 2xl:h-[134px] min-[1900px]:h-[176px]">
          <img
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            draggable={false}
            src={gameLogoUrls[game.id]}
          />
        </div>
        <div className="flex h-[120px] flex-col items-center justify-center bg-black px-4 xl:h-[138px] 2xl:h-[154px] min-[1900px]:h-[204px] min-[1900px]:px-[24px]">
          <GameIcon
            className={cn(
              'h-[48px] w-[70px] text-[#B3B3B3]/70 transition-colors xl:h-[58px] xl:w-[86px] min-[1900px]:h-[76px] min-[1900px]:w-[114px]',
              wideGameIconIds.has(game.id) &&
                'w-[98px] xl:w-[122px] min-[1900px]:w-[162px]',
              narrowGameIconIds.has(game.id) &&
                'w-[46px] xl:w-[54px] min-[1900px]:w-[70px]',
              selected && 'text-crimson',
            )}
            gameId={game.id}
          />
          <span
            className={cn(
              'mt-4 text-center text-[8px] font-semibold text-crimson xl:text-[9px] min-[1900px]:mt-[20px] min-[1900px]:text-[12px]',
              !selected && 'text-arena-muted',
            )}
          >
            {game.title}
          </span>
        </div>
      </Panel>
    </button>
  )
}
