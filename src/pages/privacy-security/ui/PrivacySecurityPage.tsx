import { AccountPageShell } from '../../../widgets/account-page-shell/ui/AccountPageShell'
import { SecurityCenter } from '../../../widgets/security-center/ui/SecurityCenter'

export function PrivacySecurityPage() {
  return (
    <AccountPageShell
      description="Protect your identity, devices and connections beyond the battlefield."
      title="PRIVACY & SECURITY"
    >
      <SecurityCenter />
    </AccountPageShell>
  )
}
