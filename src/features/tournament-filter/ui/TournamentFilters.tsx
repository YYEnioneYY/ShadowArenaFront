import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'
import type { TournamentFilter } from '../../../entities/tournament/model/types'

const filters: Array<{ value: TournamentFilter; label: string }> = [
  { value: 'all', label: 'ALL' },
  { value: 'upcoming', label: 'UPCOMING' },
  { value: 'live', label: 'LIVE' },
  { value: 'ended', label: 'ENDED' },
]

interface TournamentFiltersProps {
  selected: TournamentFilter
  advancedFilterCount: number
  isPanelOpen: boolean
  onChange: (filter: TournamentFilter) => void
  onTogglePanel: () => void
}

export function TournamentFilters({
  selected,
  advancedFilterCount,
  isPanelOpen,
  onChange,
  onTogglePanel,
}: TournamentFiltersProps) {
  return (
    <div className="flex h-[47px] items-center justify-between rounded-[5px] border border-arena-line bg-arena-panel px-5 xl:h-[56px] xl:px-7 2xl:h-[61px] min-[1900px]:h-[70px] min-[1900px]:px-[42px]">
      <div className="flex h-full items-center gap-8 sm:gap-11 xl:gap-[52px] 2xl:gap-[63px] min-[1900px]:gap-[82px]">
        {filters.map((filter) => (
          <button
            className={cn(
              'relative h-full text-[10px] font-semibold tracking-wide text-arena-muted transition-colors hover:text-arena-strong xl:text-[12px] 2xl:text-[14px] min-[1900px]:text-[17px]',
              selected === filter.value && 'text-crimson',
            )}
            key={filter.value}
            onClick={() => onChange(filter.value)}
            type="button"
          >
            {filter.label}
            {selected === filter.value && (
              <span className="absolute inset-x-[-9px] bottom-0 h-px bg-crimson" />
            )}
          </button>
        ))}
      </div>
      <button
        aria-expanded={isPanelOpen}
        className={cn(
          'flex h-8 items-center gap-2 rounded-[3px] border border-crimson px-3 text-[9px] font-semibold text-arena-copy transition-colors hover:bg-crimson/15 xl:h-[39px] xl:px-5 xl:text-[11px] 2xl:h-[44px] 2xl:text-[13px] min-[1900px]:h-[59px] min-[1900px]:gap-4 min-[1900px]:px-[27px] min-[1900px]:text-[17px]',
          isPanelOpen && 'bg-crimson/15 text-arena-strong',
        )}
        onClick={onTogglePanel}
        type="button"
      >
        <ArenaIcon className="h-3.5 w-3.5 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5 min-[1900px]:h-6 min-[1900px]:w-6" name="filter" />
        FILTERS
        {advancedFilterCount > 0 && (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-crimson px-1 text-[8px] text-arena-strong xl:h-5 xl:min-w-5 xl:text-[10px]">
            {advancedFilterCount}
          </span>
        )}
      </button>
    </div>
  )
}
