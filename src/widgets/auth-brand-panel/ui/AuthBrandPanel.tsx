import { cn } from '../../../shared/lib/cn'
import type { AuthMode } from '../../../features/auth/ui/AuthTabs'

interface AuthBrandPanelProps {
  mode: AuthMode
}

export function AuthBrandPanel({ mode }: AuthBrandPanelProps) {
  return (
    <aside className="relative hidden flex-col p-8 md:flex lg:p-[34px] min-[1900px]:p-[44px]">
      <h1 className="auth-logo font-display text-[42px] leading-[0.86] text-white lg:text-[56px] min-[1900px]:text-[68px]">
        SHADOW
        <br />
        ARENA
      </h1>
      <div className="mt-auto pb-[118px] min-[1900px]:pb-[126px]">
        <h2 className="font-display text-[27px] leading-[1.7] text-arena-strong min-[1900px]:text-[31px]">
          {mode === 'login' ? (
            <>
              BEYOND THE MAP,
              <br />
              BEYOND THE <span className="text-crimson">LEGENDS.</span>
            </>
          ) : (
            <>
              BECOME <span className="text-crimson">LEGEND.</span>
              <br />
              LEAVE YOUR <span className="text-crimson">MARK.</span>
            </>
          )}
        </h2>
        {mode === 'login' ? (
          <p className="mt-4 max-w-[245px] text-[13px] leading-[1.65] text-arena-copy min-[1900px]:text-[14px]">
            A world where warriors are forged,
            <br />
            legends are born,
            <br />
            and only the strongest rise.
          </p>
        ) : (
          <div className="mt-5 w-[308px] rounded-[6px] border border-arena-outline bg-black/50 p-5 text-center">
            <p className="text-[11px] text-crimson">THE ARENA AWAITS</p>
            <p className="mt-5 text-[13px] leading-[1.7] text-arena-copy">
              Only those who prove themselves
              <br />
              will be remembered.
            </p>
          </div>
        )}
      </div>
      <p
        className={cn(
          'absolute bottom-6 left-8 text-[12px] text-arena-copy min-[1900px]:bottom-[28px] min-[1900px]:left-[44px] min-[1900px]:text-[14px]',
          mode === 'registration' && 'hidden',
        )}
      >
        JOIN. FIGHT. BECOME LEGEND.
      </p>
    </aside>
  )
}
