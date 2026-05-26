import type { HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export function Panel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'arena-panel-surface rounded-[5px] border border-arena-line bg-arena-panel shadow-panel',
        className,
      )}
      {...props}
    />
  )
}
