import { createContext } from 'react'
import type { Game, GameId } from '../../../entities/game/model/mockGames'

export interface GameSelectionContextValue {
  selectedGame: Game
  selectGame: (gameId: GameId) => void
}

export const GameSelectionContext =
  createContext<GameSelectionContextValue | null>(null)
