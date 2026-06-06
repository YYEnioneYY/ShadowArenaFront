import { useState, type InputHTMLAttributes } from 'react'

import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: 'lock' | 'mail' | 'user'
  label: string
  hint?: string
  passwordToggle?: boolean
}

export function AuthField({
  hint,
  icon,
  label,
  passwordToggle = false,
  type,
  ...props
}: AuthFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputType = passwordToggle
    ? isPasswordVisible
      ? 'text'
      : 'password'
    : type

  return (
    <label className="block">
      <span className="mb-2 block font-display text-[13px] font-bold text-arena-copy md:text-[15px] min-[1900px]:text-[18px]">
        {label}
      </span>
      <span className="relative block">
        {icon && (
          <ArenaIcon
            className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#ffffff] min-[1900px]:left-5 min-[1900px]:h-[21px] min-[1900px]:w-[21px]"
            name={icon}
          />
        )}
        <input
          className={cn(
            'h-[52px] w-full rounded-[4px] border border-arena-outline bg-black/55 px-5 text-[13px] text-arena-strong outline-none transition-colors placeholder:text-arena-muted focus:border-crimson md:h-[56px] md:text-[14px] min-[1900px]:h-[64px] min-[1900px]:text-[16px]',
            icon && 'pl-12 min-[1900px]:pl-[52px]',
            passwordToggle && 'pr-12 min-[1900px]:pr-[52px]',
          )}
          type={inputType}
          {...props}
        />
        {passwordToggle && (
          <button
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            className="absolute right-4 top-1/2 flex h-[28px] w-[28px] -translate-y-1/2 items-center justify-center text-[#ffffff] transition-colors hover:text-crimson min-[1900px]:right-5 min-[1900px]:h-[32px] min-[1900px]:w-[32px]"
            onClick={() => setIsPasswordVisible((value) => !value)}
            type="button"
          >
            <ArenaIcon
              className="h-[18px] w-[18px] min-[1900px]:h-[21px] min-[1900px]:w-[21px]"
              name={isPasswordVisible ? 'eye-off' : 'eye'}
            />
          </button>
        )}
      </span>
      {hint && (
        <span className="mt-1.5 block text-[10px] text-arena-muted min-[1900px]:text-[12px]">
          {hint}
        </span>
      )}
    </label>
  )
}
