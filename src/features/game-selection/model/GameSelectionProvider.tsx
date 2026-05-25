import { useState, type PropsWithChildren } from 'react'
import {
  mockGames,
  type GameId,
} from '../../../entities/game/model/mockGames'
import { GameSelectionContext } from './GameSelectionContext'

const selectedGameStorageKey = 'shadow-arena.selected-game'
const fallbackGame = mockGames.find((game) => game.active) ?? mockGames[0]

function readSelectedGame() {
  const storedId = localStorage.getItem(selectedGameStorageKey) as GameId | null

  return mockGames.find((game) => game.id === storedId) ?? fallbackGame
}

export function GameSelectionProvider({ children }: PropsWithChildren) {
  const [selectedGame, setSelectedGame] = useState(readSelectedGame)

  function selectGame(gameId: GameId) {
    const game = mockGames.find((entry) => entry.id === gameId)

    if (!game) {
      return
    }

    localStorage.setItem(selectedGameStorageKey, gameId)
    setSelectedGame(game)
  }

  return (
    <GameSelectionContext.Provider value={{ selectGame, selectedGame }}>
      {children}
    </GameSelectionContext.Provider>
  )
}
