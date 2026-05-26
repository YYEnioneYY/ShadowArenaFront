import type { ReactNode } from 'react'
import type {
  ClanGameMode,
  ClanLanguage,
  ClanRank,
  ClanRegion,
  ClanRole,
} from '../../../entities/clan/model/types'
import { cn } from '../../../shared/lib/cn'
import type { ClanFilters } from '../model/types'

interface ClanFilterPanelProps {
  filters: ClanFilters
  onApply: () => void
  onChange: (filters: ClanFilters) => void
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
        'h-[39px] rounded-[4px] border border-arena-outline px-5 text-[11px] font-medium text-arena-copy transition-colors hover:border-crimson/70 hover:text-arena-strong xl:h-[46px] xl:text-[13px] min-[1900px]:h-[53px] min-[1900px]:text-[17px]',
        active && 'border-crimson bg-crimson/20 text-arena-strong',
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

function FilterSection({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <fieldset>
      <legend className="mb-3 font-heading text-[12px] font-bold text-arena-strong xl:text-[14px] min-[1900px]:text-[18px]">
        {title}
      </legend>
      <div className="flex flex-wrap gap-3 xl:gap-4 min-[1900px]:gap-[20px]">
        {children}
      </div>
    </fieldset>
  )
}

export function ClanFilterPanel({
  filters,
  onApply,
  onChange,
  onReset,
}: ClanFilterPanelProps) {
  function toggle<K extends Exclude<keyof ClanFilters, 'rank'>>(
    key: K,
    value: NonNullable<ClanFilters[K]>,
  ) {
    onChange({ ...filters, [key]: filters[key] === value ? null : value })
  }

  function setRank(rank: ClanRank) {
    onChange({ ...filters, rank })
  }

  return (
    <section className="filters-drawer fixed inset-y-0 right-0 z-50 w-full max-w-[390px] overflow-y-auto border-l border-arena-outline bg-[#090a0f] p-4 shadow-[-20px_0_54px_rgb(0_0_0/0.8)] xl:max-w-[450px] xl:p-5 min-[1900px]:max-w-[610px] min-[1900px]:p-[22px]">
      <div className="space-y-5 min-[1900px]:space-y-[20px]">
        <FilterSection title="GAME MODE">
          {(['5V5', 'PREMIER', 'DEATHMATCH'] as ClanGameMode[]).map(
            (value) => (
              <FilterButton
                active={filters.gameMode === value}
                key={value}
                onClick={() => toggle('gameMode', value)}
              >
                {value}
              </FilterButton>
            ),
          )}
        </FilterSection>
        <FilterSection title="REGION">
          {(['EU', 'NA', 'CIS', 'APAC'] as ClanRegion[]).map((value) => (
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
          {(['ANY', 'GOLD+', 'PLATINUM+', 'DIAMOND+'] as ClanRank[]).map(
            (value) => (
              <FilterButton
                active={filters.rank === value}
                key={value}
                onClick={() => setRank(value)}
              >
                {value}
              </FilterButton>
            ),
          )}
        </FilterSection>
        <FilterSection title="LANGUAGES">
          {(
            [
              'ENG',
              'ESP',
              'RUS',
              'FRA',
              'ITA',
              'TUR',
              'CHN',
              'POL',
              'JPN',
              'DEU',
              'KOR',
              'NLD',
              'SWE',
              'UKR',
              'HEB',
            ] as ClanLanguage[]
          ).map((value) => (
            <FilterButton
              active={filters.language === value}
              key={value}
              onClick={() => toggle('language', value)}
            >
              {value}
            </FilterButton>
          ))}
        </FilterSection>
        <FilterSection title="ROLE">
          {(
            [
              'DUELIST',
              'CONTROLLER',
              'INITIATOR',
              'SENTINEL',
              'FLEX',
              'SUBSTITUTE',
            ] as ClanRole[]
          ).map((value) => (
            <FilterButton
              active={filters.role === value}
              key={value}
              onClick={() => toggle('role', value)}
            >
              {value}
            </FilterButton>
          ))}
        </FilterSection>
      </div>
      <div className="mt-8 flex gap-4 min-[1900px]:mt-[41px] min-[1900px]:gap-[20px]">
        <button
          className="h-[45px] flex-1 rounded-[4px] border border-arena-outline bg-white/10 font-heading text-[12px] text-arena-strong transition-colors hover:bg-white/15 min-[1900px]:h-[53px] min-[1900px]:text-[18px]"
          onClick={onReset}
          type="button"
        >
          RESET
        </button>
        <button
          className="h-[45px] flex-[1.45] rounded-[4px] border border-crimson bg-crimson/65 font-heading text-[12px] text-arena-strong transition-colors hover:bg-crimson min-[1900px]:h-[53px] min-[1900px]:text-[18px]"
          onClick={onApply}
          type="button"
        >
          APPLY FILTERS
        </button>
      </div>
    </section>
  )
}
