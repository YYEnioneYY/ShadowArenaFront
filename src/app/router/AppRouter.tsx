import { Route, Routes } from 'react-router-dom'
import { AuthPage, ForgotPasswordPage } from '../../pages/auth'
import { ClansPage } from '../../pages/clans'
import { FriendsPage } from '../../pages/friends'
import { HomePage } from '../../pages/home'
import { NotFoundPage } from '../../pages/not-found'
import { PrivacySecurityPage } from '../../pages/privacy-security'
import { ProfilePage } from '../../pages/profile'
import { RankingPage } from '../../pages/ranking'
import { SettingsPage } from '../../pages/settings'
import { StorePage } from '../../pages/store'
import { TournamentsPage } from '../../pages/tournaments'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tournaments" element={<TournamentsPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/clans" element={<ClansPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/privacy-security" element={<PrivacySecurityPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/register" element={<AuthPage mode="registration" />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
