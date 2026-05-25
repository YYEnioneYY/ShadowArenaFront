import type { InputHTMLAttributes } from 'react'

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  hint?: string
}

export function AuthField({ hint, label, ...props }: AuthFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block font-display text-[13px] font-bold text-arena-copy md:text-[15px] min-[1900px]:text-[18px]">
        {label}
      </span>
      <input
        className="h-[52px] w-full rounded-[4px] border border-arena-outline bg-black/55 px-5 text-[13px] text-arena-strong outline-none transition-colors placeholder:text-arena-muted focus:border-crimson md:h-[56px] md:text-[14px] min-[1900px]:h-[64px] min-[1900px]:text-[16px]"
        {...props}
      />
      {hint && (
        <span className="mt-1.5 block text-[10px] text-arena-muted min-[1900px]:text-[12px]">
          {hint}
        </span>
      )}
    </label>
  )
}
