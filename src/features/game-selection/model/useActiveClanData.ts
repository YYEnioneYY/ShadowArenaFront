import { getMockClanData } from '../../../entities/clan/model/mockClans'
import { useSelectedGame } from './useSelectedGame'

export function useActiveClanData() {
  const { selectedGame } = useSelectedGame()

  return getMockClanData(selectedGame.id)
}
