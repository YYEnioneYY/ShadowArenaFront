import { useState } from 'react'
import { SettingToggle } from '../../../shared/ui/SettingToggle'
import { Panel } from '../../../shared/ui/Panel'

const languages = ['ENGLISH', 'RUSSIAN', 'GERMAN']
const regions = ['EU', 'NA', 'CIS', 'APAC']

export function SettingsPanel() {
  const [language, setLanguage] = useState(languages[0])
  const [region, setRegion] = useState(regions[0])
  const [musicVolume, setMusicVolume] = useState(38)
  const [effectsVolume, setEffectsVolume] = useState(72)
  const [saved, setSaved] = useState(false)

  return (
    <div className="space-y-4 min-[1900px]:space-y-[20px]">
      <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
        <h2 className="font-display text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
          GENERAL
        </h2>
        <p className="mt-2 text-[10px] text-arena-muted xl:text-[12px] min-[1900px]:text-[15px]">
          Personalize your command hall and matchmaking preferences.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 min-[1900px]:mt-[27px] min-[1900px]:gap-[20px]">
          <SettingSelect
            label="LANGUAGE"
            onChange={setLanguage}
            options={languages}
            value={language}
          />
          <SettingSelect
            label="PREFERRED REGION"
            onChange={setRegion}
            options={regions}
            value={region}
          />
        </div>
      </Panel>
      <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
        <h2 className="font-display text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
          INTERFACE
        </h2>
        <div className="mt-5 space-y-3 min-[1900px]:mt-[26px] min-[1900px]:space-y-[14px]">
          <SettingToggle
            defaultEnabled
            description="Receive invitations and tournament alerts in the navbar."
            label="Arena Notifications"
          />
          <SettingToggle
            defaultEnabled
            description="Display your selected game's rank on account surfaces."
            label="Show Active Rank"
          />
          <SettingToggle
            description="Reduce glows, motion and decorative effects."
            label="Performance Mode"
          />
        </div>
      </Panel>
      <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
        <h2 className="font-display text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
          AUDIO
        </h2>
        <div className="mt-5 space-y-5 min-[1900px]:mt-[27px] min-[1900px]:space-y-[26px]">
          <VolumeControl
            label="MUSIC"
            onChange={setMusicVolume}
            value={musicVolume}
          />
          <VolumeControl
            label="ARENA EFFECTS"
            onChange={setEffectsVolume}
            value={effectsVolume}
          />
        </div>
        <button
          className="mt-7 h-[44px] w-full rounded-[3px] border border-crimson bg-crimson/15 text-[11px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:mt-[35px] min-[1900px]:h-[57px] min-[1900px]:text-[16px]"
          onClick={() => setSaved(true)}
          type="button"
        >
          SAVE CHANGES
        </button>
        {saved && (
          <p className="mt-3 text-center text-[10px] text-arena-copy min-[1900px]:text-[13px]">
            Preferences saved for this mock session.
          </p>
        )}
      </Panel>
    </div>
  )
}

interface SettingSelectProps {
  label: string
  onChange: (value: string) => void
  options: string[]
  value: string
}

function SettingSelect({
  label,
  onChange,
  options,
  value,
}: SettingSelectProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[9px] font-semibold tracking-[0.14em] text-arena-muted min-[1900px]:text-[12px]">
        {label}
      </span>
      <select
        className="h-[45px] w-full rounded-[4px] border border-arena-outline bg-[#07080c] px-4 text-[11px] text-arena-strong outline-none focus:border-crimson min-[1900px]:h-[57px] min-[1900px]:text-[15px]"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

interface VolumeControlProps {
  label: string
  onChange: (value: number) => void
  value: number
}

function VolumeControl({ label, onChange, value }: VolumeControlProps) {
  return (
    <label className="block">
      <span className="mb-3 flex justify-between text-[10px] font-semibold text-arena-copy min-[1900px]:text-[14px]">
        <span>{label}</span>
        <span className="text-crimson">{value}%</span>
      </span>
      <input
        className="h-[4px] w-full cursor-pointer accent-crimson min-[1900px]:h-[6px]"
        max={100}
        min={0}
        onChange={(event) => onChange(Number(event.target.value))}
        type="range"
        value={value}
      />
    </label>
  )
}
