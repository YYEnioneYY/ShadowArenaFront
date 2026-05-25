import { getMockGameData } from '../../../entities/game/model/mockGameData'
import { useSelectedGame } from './useSelectedGame'

export function useActiveGameData() {
  const { selectedGame } = useSelectedGame()

  return getMockGameData(selectedGame.id)
}
