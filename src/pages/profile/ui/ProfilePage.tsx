import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../features/auth/model/useAuth'
import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'
import { ProfileHero } from '../../../widgets/profile-hero/ui/ProfileHero'
import { ProfileSidebar } from '../../../widgets/profile-sidebar/ui/ProfileSidebar'
import { ProfileStats } from '../../../widgets/profile-stats/ui/ProfileStats'

export function ProfilePage() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location.pathname }} to="/login" />
  }

  return (
    <ArenaPageLayout rightRail={<ProfileSidebar />}>
      <div className="px-3 pb-5 pt-3 md:px-5 md:pt-5 lg:px-0 lg:pt-0">
        <ProfileHero />
        <ProfileStats />
        <ProfileSidebar compact />
      </div>
    </ArenaPageLayout>
  )
}
