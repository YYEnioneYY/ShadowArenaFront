import type { ReactNode } from 'react'
import type {
  TournamentDate,
  TournamentFormat,
  TournamentGameMode,
  TournamentPrizeTier,
  TournamentRank,
  TournamentRegion,
  TournamentStatus,
} from '../../../entities/tournament/model/types'
import { cn } from '../../../shared/lib/cn'
import type { AdvancedTournamentFilters } from '../model/types'

interface TournamentFilterPanelProps {
  filters: AdvancedTournamentFilters
  onApply: () => void
  onChange: (filters: AdvancedTournamentFilters) => void
  onReset: () => void
}

interface FilterButtonProps {
  active: boolean
  children: ReactNode
  onClick: () => void
}

function FilterButton({ active, children, onClick }: FilterButtonProps) {
  return (
    <button
      className={cn(
        'h-[43px] rounded-[4px] border border-arena-outline px-5 text-[12px] font-medium text-arena-copy transition-colors hover:border-crimson/70 hover:text-arena-strong xl:h-[50px] xl:text-[14px] min-[1900px]:h-[53px] min-[1900px]:text-[17px]',
        active && 'border-crimson bg-crimson/20 text-arena-strong',
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

interface FilterSectionProps {
  children: ReactNode
  title: string
}

function FilterSection({ children, title }: FilterSectionProps) {
  return (
    <fieldset>
      <legend className="mb-3 font-display text-[13px] font-bold text-arena-strong xl:text-[15px] min-[1900px]:mb-[17px] min-[1900px]:text-[18px]">
        {title}
      </legend>
      <div className="flex flex-wrap gap-3 xl:gap-4 min-[1900px]:gap-[20px]">
        {children}
      </div>
    </fieldset>
  )
}

export function TournamentFilterPanel({
  filters,
  onApply,
  onChange,
  onReset,
}: TournamentFilterPanelProps) {
  function update<K extends keyof AdvancedTournamentFilters>(
    key: K,
    value: AdvancedTournamentFilters[K],
  ) {
    onChange({ ...filters, [key]: value })
  }

  function toggle<K extends Exclude<keyof AdvancedTournamentFilters, 'rank'>>(
    key: K,
    value: NonNullable<AdvancedTournamentFilters[K]>,
  ) {
    update(key, filters[key] === value ? null : value)
  }

  return (
    <section className="filters-drawer fixed inset-y-0 right-0 z-50 w-full max-w-[410px] overflow-y-auto border-l border-arena-outline bg-[#090a0f] p-5 shadow-[-20px_0_54px_rgb(0_0_0/0.8)] xl:max-w-[470px] xl:p-6 min-[1900px]:max-w-[627px] min-[1900px]:p-[23px]">
      <div className="space-y-5 xl:space-y-6 min-[1900px]:space-y-[19px]">
        <FilterSection title="GAME MODE">
          {([
            ['5v5', '5V5'],
            ['PREMIER', 'PREMIER'],
            ['DEATHMATCH', 'DEATHMATCH'],
          ] as Array<[TournamentGameMode, string]>).map(([value, label]) => (
            <FilterButton
              active={filters.gameMode === value}
              key={value}
              onClick={() => toggle('gameMode', value)}
            >
              {label}
            </FilterButton>
          ))}
        </FilterSection>
        <FilterSection title="REGION">
          {(['EU', 'NA', 'CIS', 'APAC'] as TournamentRegion[]).map((value) => (
            <FilterButton
              active={filters.region === value}
              key={value}
              onClick={() => toggle('region', value)}
            >
              {value}
            </FilterButton>
          ))}
        </FilterSection>
        <FilterSection title="RANK">
          {(['ANY', 'GOLD+', 'PLATINUM+', 'DIAMOND+'] as TournamentRank[]).map(
            (value) => (
              <FilterButton
                active={filters.rank === value}
                key={value}
                onClick={() => update('rank', value)}
              >
                {value}
              </FilterButton>
            ),
          )}
        </FilterSection>
        <FilterSection title="FORMAT">
          {(['SOLO', 'DUO', 'TEAM'] as TournamentFormat[]).map((value) => (
            <FilterButton
              active={filters.format === value}
              key={value}
              onClick={() => toggle('format', value)}
            >
              {value}
            </FilterButton>
          ))}
        </FilterSection>
        <FilterSection title="PRIZE POOL">
          {(['FREE', '1K-5K CR', '5K+ CR'] as TournamentPrizeTier[]).map(
            (value) => (
              <FilterButton
                active={filters.prizeTier === value}
                key={value}
                onClick={() => toggle('prizeTier', value)}
              >
                {value}
              </FilterButton>
            ),
          )}
        </FilterSection>
        <FilterSection title="STATUS">
          {([
            ['upcoming', 'UPCOMING'],
            ['ended', 'ENDED'],
            ['live', 'LIVE'],
          ] as Array<[TournamentStatus, string]>).map(([value, label]) => (
            <FilterButton
              active={filters.status === value}
              key={value}
              onClick={() => toggle('status', value)}
            >
              {label}
            </FilterButton>
          ))}
        </FilterSection>
        <FilterSection title="DATE">
          {(['TODAY', 'THIS WEEK', 'THIS MONTH'] as TournamentDate[]).map(
            (value) => (
              <FilterButton
                active={filters.date === value}
                key={value}
                onClick={() => toggle('date', value)}
              >
                {value}
              </FilterButton>
            ),
          )}
        </FilterSection>
      </div>
      <div className="mt-7 flex gap-4 min-[1900px]:mt-[41px] min-[1900px]:gap-[27px]">
        <button
          className="h-[48px] flex-1 rounded-[4px] border border-arena-outline bg-white/10 font-display text-[13px] text-arena-strong transition-colors hover:bg-white/15 min-[1900px]:h-[53px] min-[1900px]:text-[18px]"
          onClick={onReset}
          type="button"
        >
          RESET
        </button>
        <button
          className="h-[48px] flex-[1.5] rounded-[4px] border border-crimson bg-[#a6080c] font-display text-[13px] text-arena-strong transition-colors hover:bg-crimson min-[1900px]:h-[53px] min-[1900px]:text-[18px]"
          onClick={onApply}
          type="button"
        >
          APPLY FILTERS
        </button>
      </div>
    </section>
  )
}
