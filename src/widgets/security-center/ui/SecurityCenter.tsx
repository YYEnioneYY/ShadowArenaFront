import { useState } from 'react'
import {
  mockConnectedApps,
  mockPrivacySessions,
} from '../../../entities/account/model/mockAccountData'
import { SettingToggle } from '../../../shared/ui/SettingToggle'
import { Panel } from '../../../shared/ui/Panel'

export function SecurityCenter() {
  const [terminated, setTerminated] = useState(false)
  const [notice, setNotice] = useState('')

  return (
    <div className="space-y-4 min-[1900px]:space-y-[20px]">
      <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
        <h2 className="font-display text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
          ACCOUNT PROTECTION
        </h2>
        <p className="mt-2 text-[10px] text-arena-muted xl:text-[12px] min-[1900px]:text-[15px]">
          Guard your identity and choose who can reach you in the Arena.
        </p>
        <div className="mt-5 space-y-3 min-[1900px]:mt-[26px] min-[1900px]:space-y-[14px]">
          <SettingToggle
            defaultEnabled
            description="Require a verification code on unfamiliar devices."
            label="Two-Factor Authentication"
          />
          <SettingToggle
            defaultEnabled
            description="Let allies send direct messages and squad invitations."
            label="Messages From Friends"
          />
          <SettingToggle
            description="Allow visible matchmaking history on your profile."
            label="Public Match History"
          />
        </div>
      </Panel>
      <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
            ACTIVE SESSIONS
          </h2>
          <button
            className="text-[9px] font-semibold text-crimson hover:text-red-400 min-[1900px]:text-[13px]"
            onClick={() => setTerminated(true)}
            type="button"
          >
            LOG OUT OTHER DEVICES
          </button>
        </div>
        <div className="mt-5 space-y-3 min-[1900px]:mt-[25px] min-[1900px]:space-y-[14px]">
          {mockPrivacySessions
            .filter((session) => !terminated || session.state === 'CURRENT SESSION')
            .map((session) => (
              <div
                className="flex items-center justify-between gap-4 rounded-[4px] border border-arena-line bg-[#07080c] px-4 py-3.5 min-[1900px]:px-[21px] min-[1900px]:py-[18px]"
                key={session.device}
              >
                <div>
                  <p className="text-[12px] font-semibold text-arena-strong min-[1900px]:text-[17px]">
                    {session.device}
                  </p>
                  <p className="mt-1 text-[9px] text-arena-muted min-[1900px]:text-[12px]">
                    {session.location} / {session.time}
                  </p>
                </div>
                <p className="text-[9px] font-semibold text-crimson min-[1900px]:text-[13px]">
                  {session.state}
                </p>
              </div>
            ))}
        </div>
      </Panel>
      <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
        <h2 className="font-display text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
          CONNECTED ACCOUNTS
        </h2>
        <div className="mt-5 space-y-3 min-[1900px]:mt-[25px] min-[1900px]:space-y-[14px]">
          {mockConnectedApps.map((application) => (
            <div
              className="flex items-center justify-between gap-4 rounded-[4px] border border-arena-line bg-[#07080c] px-4 py-3.5 min-[1900px]:px-[21px] min-[1900px]:py-[18px]"
              key={application.name}
            >
              <div>
                <p className="text-[12px] font-semibold text-arena-strong min-[1900px]:text-[17px]">
                  {application.name}
                </p>
                <p className="mt-1 text-[9px] text-arena-muted min-[1900px]:text-[12px]">
                  {application.permission}
                </p>
              </div>
              <button
                className="h-[34px] rounded-[3px] border border-arena-outline px-4 text-[9px] font-semibold text-arena-copy transition-colors hover:border-crimson hover:text-crimson min-[1900px]:h-[44px] min-[1900px]:text-[13px]"
                onClick={() =>
                  setNotice(
                    `${application.name} connection change saved for this mock session.`,
                  )
                }
                type="button"
              >
                {application.connected ? 'DISCONNECT' : 'CONNECT'}
              </button>
            </div>
          ))}
        </div>
        {notice && (
          <p className="mt-4 rounded-[3px] border border-crimson/35 bg-crimson/10 px-4 py-3 text-[10px] text-arena-copy min-[1900px]:text-[14px]">
            {notice}
          </p>
        )}
      </Panel>
    </div>
  )
}
