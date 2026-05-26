import { useState } from 'react'
import { cn } from '../lib/cn'

interface SettingToggleProps {
  defaultEnabled?: boolean
  description: string
  label: string
}

export function SettingToggle({
  defaultEnabled = false,
  description,
  label,
}: SettingToggleProps) {
  const [enabled, setEnabled] = useState(defaultEnabled)

  return (
    <div className="flex items-center justify-between gap-5 rounded-[4px] border border-arena-line bg-[#07080c] px-4 py-4 min-[1900px]:px-[22px] min-[1900px]:py-[19px]">
      <div>
        <p className="text-[12px] font-semibold text-arena-strong xl:text-[14px] min-[1900px]:text-[18px]">
          {label}
        </p>
        <p className="mt-1 text-[10px] leading-relaxed text-arena-muted xl:text-[11px] min-[1900px]:text-[14px]">
          {description}
        </p>
      </div>
      <button
        aria-checked={enabled}
        className={cn(
          'relative h-[25px] w-[47px] shrink-0 rounded-full border transition-colors min-[1900px]:h-[32px] min-[1900px]:w-[60px]',
          enabled
            ? 'border-crimson bg-crimson/30'
            : 'border-arena-outline bg-black',
        )}
        onClick={() => setEnabled((value) => !value)}
        role="switch"
        type="button"
      >
        <span
          className={cn(
            'absolute top-[3px] h-[17px] w-[17px] rounded-full transition-all min-[1900px]:top-[4px] min-[1900px]:h-[22px] min-[1900px]:w-[22px]',
            enabled
              ? 'left-[25px] bg-crimson shadow-[0_0_10px_rgb(255_45_45/0.65)] min-[1900px]:left-[33px]'
              : 'left-[4px] bg-arena-muted',
          )}
        />
      </button>
    </div>
  )
}
