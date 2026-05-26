import { Link, useLocation } from 'react-router-dom'
import { useSelectedGame } from '../../../features/game-selection/model/useSelectedGame'
import { Panel } from '../../../shared/ui/Panel'
import { ArenaPageLayout } from '../../../widgets/arena-layout/ui/ArenaPageLayout'

export function NotFoundPage() {
  const location = useLocation()
  const { selectedGame } = useSelectedGame()

  return (
    <ArenaPageLayout mainClassName="lg:col-span-2">
      <div className="flex min-h-[calc(100vh-70px)] items-center justify-center px-4 py-8 md:px-7 xl:min-h-[calc(100vh-86px)] min-[1900px]:min-h-[calc(100vh-144px)] min-[1900px]:px-[70px]">
        <Panel className="not-found-scene relative isolate w-full max-w-[1220px] overflow-hidden px-6 py-12 text-center sm:px-12 xl:py-[74px] min-[1900px]:max-w-[1560px] min-[1900px]:py-[96px]">
          <div className="not-found-grid absolute inset-0 opacity-45" />
          <div className="not-found-sigil absolute left-1/2 top-[42%] aspect-square w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:w-[310px] xl:w-[390px] min-[1900px]:w-[510px]" />
          <div className="relative z-10">
            <p className="text-[10px] font-semibold tracking-[0.42em] text-crimson xl:text-[13px] min-[1900px]:text-[17px]">
              LOST BEYOND THE ARENA
            </p>
            <h1 className="not-found-number mt-5 font-display text-[102px] leading-none text-arena-strong sm:text-[140px] xl:text-[194px] min-[1900px]:mt-[30px] min-[1900px]:text-[248px]">
              404
            </h1>
            <h2 className="mt-1 font-display text-[23px] text-arena-strong sm:text-[29px] xl:text-[36px] min-[1900px]:text-[48px]">
              THE PATH HAS VANISHED
            </h2>
            <p className="mx-auto mt-5 max-w-[550px] text-[12px] leading-[1.7] text-arena-muted xl:text-[15px] min-[1900px]:mt-[28px] min-[1900px]:max-w-[720px] min-[1900px]:text-[19px]">
              No battleground exists at{' '}
              <span className="text-arena-copy">{location.pathname}</span>.
              Return to the command hall or seek glory in{' '}
              <span className="text-crimson">{selectedGame.title}</span>.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row xl:mt-10 min-[1900px]:mt-[52px] min-[1900px]:gap-[18px]">
              <Link
                className="flex h-[44px] min-w-[190px] items-center justify-center rounded-[3px] border border-crimson bg-crimson/80 px-7 text-[11px] font-semibold text-arena-strong transition-colors hover:bg-crimson xl:h-[52px] xl:min-w-[225px] xl:text-[13px] min-[1900px]:h-[66px] min-[1900px]:min-w-[288px] min-[1900px]:text-[17px]"
                to="/"
              >
                RETURN HOME
              </Link>
              <Link
                className="flex h-[44px] min-w-[190px] items-center justify-center rounded-[3px] border border-arena-outline bg-black/20 px-7 text-[11px] font-semibold text-arena-copy transition-colors hover:border-crimson hover:text-arena-strong xl:h-[52px] xl:min-w-[225px] xl:text-[13px] min-[1900px]:h-[66px] min-[1900px]:min-w-[288px] min-[1900px]:text-[17px]"
                to="/tournaments"
              >
                FIND TOURNAMENTS
              </Link>
            </div>
          </div>
          <p className="relative z-10 mt-11 text-[8px] font-semibold tracking-[0.36em] text-arena-dim xl:text-[10px] min-[1900px]:mt-[64px] min-[1900px]:text-[13px]">
            SHADOW ARENA / ERROR CODE 404
          </p>
        </Panel>
      </div>
    </ArenaPageLayout>
  )
}
