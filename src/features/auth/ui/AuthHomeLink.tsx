import { Link } from 'react-router-dom'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'

export function AuthHomeLink() {
  return (
    <Link
      aria-label="Back to home"
      className="fixed left-4 top-4 z-30 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-arena-outline bg-black/60 text-[#ffffff] shadow-[0_10px_28px_rgb(0_0_0/0.5)] backdrop-blur-sm transition-colors hover:border-crimson hover:text-crimson md:left-7 md:top-7 min-[1900px]:left-[38px] min-[1900px]:top-[38px] min-[1900px]:h-[54px] min-[1900px]:w-[54px]"
      to="/"
    >
      <ArenaIcon
        className="h-[20px] w-[20px] min-[1900px]:h-[26px] min-[1900px]:w-[26px]"
        name="arrow-left"
      />
    </Link>
  )
}
