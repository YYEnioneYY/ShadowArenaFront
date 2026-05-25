import { AccountPageShell } from '../../../widgets/account-page-shell/ui/AccountPageShell'
import { FriendsDashboard } from '../../../widgets/friends-dashboard/ui/FriendsDashboard'

export function FriendsPage() {
  return (
    <AccountPageShell
      description="Gather trusted allies, answer invitations and enter the Arena together."
      title="FRIENDS"
    >
      <FriendsDashboard />
    </AccountPageShell>
  )
}
