import type { ReactNode } from 'react'
import { cn } from '../../../shared/lib/cn'
import { AppHeader } from '../../app-header/ui/AppHeader'
import { GameSidebar } from '../../game-sidebar/ui/GameSidebar'

interface ArenaPageLayoutProps {
  children: ReactNode
  rightRail?: ReactNode
  mainClassName?: string
}

export function ArenaPageLayout({
  children,
  rightRail,
  mainClassName,
}: ArenaPageLayoutProps) {
  return (
    <div className="arena-shell min-h-screen w-full bg-arena-base text-arena-copy">
      <GameSidebar />
      <div className="grid min-h-screen w-full lg:grid-cols-[minmax(0,1fr)_270px] lg:grid-rows-[70px_1fr] lg:pl-[120px] xl:grid-cols-[minmax(0,1fr)_320px] xl:grid-rows-[86px_1fr] xl:pl-[144px] 2xl:grid-cols-[minmax(0,1fr)_390px] 2xl:grid-rows-[104px_1fr] 2xl:pl-[170px] min-[1900px]:grid-cols-[minmax(0,1fr)_532px] min-[1900px]:grid-rows-[144px_1fr] min-[1900px]:pl-[242px]">
        <div className="h-[70px] lg:col-span-2 lg:col-start-1 lg:row-start-1 xl:h-[86px] 2xl:h-[104px] min-[1900px]:h-[144px]">
          <AppHeader />
        </div>
        <main
          className={cn(
            'min-w-0 pb-5 lg:col-start-1 lg:row-start-2',
            mainClassName,
          )}
        >
          {children}
        </main>
        {rightRail}
      </div>
    </div>
  )
}
