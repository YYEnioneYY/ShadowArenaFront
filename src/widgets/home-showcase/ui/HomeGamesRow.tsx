import { getMockGameData } from '../../../entities/game/model/mockGameData'
import { mockGames, type Game } from '../../../entities/game/model/mockGames'
import { GameIcon } from '../../../entities/game/ui/GameIcon'
import { TournamentArtwork } from '../../../entities/tournament/ui/TournamentArtwork'
import { useSelectedGame } from '../../../features/game-selection/model/useSelectedGame'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

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
      <h2 className="mb-3 font-display text-[14px] font-bold text-arena-copy xl:text-[17px] min-[1900px]:mb-[18px] min-[1900px]:text-[24px]">
        GAMES
      </h2>
      <div className="home-scroll-row flex gap-2 overflow-x-auto xl:gap-3 min-[1900px]:gap-[17px]">
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
  const tournament = getMockGameData(game.id).tournaments[0]

  return (
    <button
      className="w-[148px] shrink-0 text-left xl:w-[181px] 2xl:w-[205px] min-[1900px]:w-[262px]"
      onClick={onSelect}
      type="button"
    >
      <Panel
        className={cn(
          'overflow-hidden transition-colors hover:border-crimson/65',
          selected && 'border-crimson',
        )}
      >
        <div className="h-[77px] overflow-hidden xl:h-[91px] 2xl:h-[104px] min-[1900px]:h-[132px]">
          <TournamentArtwork
            featured
            format={tournament.gameMode}
            game={tournament.game}
            variant={tournament.artwork}
          />
        </div>
        <div className="flex h-[96px] flex-col items-center justify-center bg-black xl:h-[112px] min-[1900px]:h-[144px]">
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
              'mt-3 text-[7px] font-semibold text-crimson min-[1900px]:text-[11px]',
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
