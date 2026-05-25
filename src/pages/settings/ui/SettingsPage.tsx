import { SettingsPanel } from '../../../widgets/account-settings/ui/SettingsPanel'
import { AccountPageShell } from '../../../widgets/account-page-shell/ui/AccountPageShell'

export function SettingsPage() {
  return (
    <AccountPageShell
      description="Shape the way the Arena responds to you: interface, region and sound."
      title="SETTINGS"
    >
      <SettingsPanel />
    </AccountPageShell>
  )
}
