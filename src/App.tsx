import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './app/router/AppRouter'
import { AuthProvider } from './features/auth/model/AuthProvider'
import { GameSelectionProvider } from './features/game-selection/model/GameSelectionProvider'
import { ShopProvider } from './features/shop/model/ShopProvider'

function App() {
  return (
    <BrowserRouter>
      <GameSelectionProvider>
        <AuthProvider>
          <ShopProvider>
            <AppRouter />
          </ShopProvider>
        </AuthProvider>
      </GameSelectionProvider>
    </BrowserRouter>
  )
}

export default App
