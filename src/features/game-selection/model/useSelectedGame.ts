import { useContext } from 'react'
import { GameSelectionContext } from './GameSelectionContext'

export function useSelectedGame() {
  const context = useContext(GameSelectionContext)

  if (!context) {
    throw new Error('useSelectedGame must be used within GameSelectionProvider')
  }

  return context
}
