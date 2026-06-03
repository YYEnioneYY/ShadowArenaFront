import { useMemo, useState } from 'react'
import type {
  StoreCategory,
  StoreItem,
} from '../../../entities/store/model/mockStoreItems'
import {
  mockStoreItems,
  storeCollections,
} from '../../../entities/store/model/mockStoreItems'
import { StoreItemCard } from '../../../entities/store/ui/StoreItemCard'
import { StoreItemVisual } from '../../../entities/store/ui/StoreItemVisual'
import { useShop } from '../../../features/shop/model/useShop'
import { cn } from '../../../shared/lib/cn'
import { ArenaIcon } from '../../../shared/ui/ArenaIcon'

type StoreFilter = 'all' | StoreCategory | 'owned'
type StoreSort = 'FEATURED' | 'PRICE: LOW TO HIGH' | 'PRICE: HIGH TO LOW'

const categoryTiles = [
  {
    description: 'Browse all items',
    icon: 'shield',
    label: 'ALL',
    value: 'all',
  },
  {
    description: 'Effects, avatars, banners',
    icon: 'user',
    label: 'PROFILE CUSTOMIZATION',
    value: 'decoration',
  },
  {
    description: 'Boost your entrance',
    icon: 'pulse',
    label: 'GAME ENHANCEMENTS',
    value: 'effect',
  },
  {
    description: 'Titles and identity plates',
    icon: 'settings',
    label: 'UTILITY',
    value: 'nameplate',
  },
  {
    description: 'Best value collections',
    icon: 'coin',
    label: 'BUNDLES',
    value: 'bundle',
  },
  {
    description: 'Owned cosmetics',
    icon: 'users',
    label: 'MY COLLECTION',
    value: 'owned',
  },
] as const satisfies ReadonlyArray<{
  description: string
  icon: 'shield' | 'user' | 'pulse' | 'settings' | 'coin' | 'users'
  label: string
  value: StoreFilter
}>

const filterTitles: Record<StoreFilter, string> = {
  all: 'TRENDING',
  bundle: 'BUNDLES',
  decoration: 'PROFILE CUSTOMIZATION',
  effect: 'GAME ENHANCEMENTS',
  nameplate: 'UTILITY',
  owned: 'MY COLLECTION',
}

const featuredLabels = ['EXCLUSIVE', 'NEW', 'RARE', 'POPULAR']
const featuredItems = mockStoreItems.slice(0, 4)

interface StoreCatalogProps {
  onSelect: (item: StoreItem) => void
  selectedId: string
}

export function StoreCatalog({ onSelect, selectedId }: StoreCatalogProps) {
  const { isEquipped, isOwned } = useShop()
  const [filter, setFilter] = useState<StoreFilter>('all')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<StoreSort>('FEATURED')

  const filteredItems = useMemo(() => {
    const needle = query.toLowerCase().trim()
    const items = mockStoreItems.filter(
      (item) =>
        (filter === 'all' ||
          (filter === 'owned' ? isOwned(item) : item.category === filter)) &&
        (!needle ||
          item.name.toLowerCase().includes(needle) ||
          item.description.toLowerCase().includes(needle) ||
          storeCollections
            .find((collection) => collection.id === item.collectionId)
            ?.name.toLowerCase()
            .includes(needle)),
    )

    if (sort === 'PRICE: LOW TO HIGH') {
      return [...items].sort((first, second) => first.price - second.price)
    }

    if (sort === 'PRICE: HIGH TO LOW') {
      return [...items].sort((first, second) => second.price - first.price)
    }

    return items
  }, [filter, isOwned, query, sort])

  function getTileCount(value: StoreFilter) {
    if (value === 'all') {
      return mockStoreItems.length
    }

    if (value === 'owned') {
      return mockStoreItems.filter((item) => isOwned(item)).length
    }

    return mockStoreItems.filter((item) => item.category === value).length
  }

  return (
    <section className="mt-7 space-y-8 min-[1900px]:mt-[48px] min-[1900px]:space-y-[50px]">
      <section>
        <StoreSectionHeading title="FEATURED" />
        <div className="mt-4 grid gap-3 md:grid-cols-2 2xl:grid-cols-4 min-[1900px]:mt-[22px] min-[1900px]:gap-[18px]">
          {featuredItems.map((item, index) => (
            <FeaturedStoreCard
              equipped={isEquipped(item)}
              item={item}
              key={item.id}
              label={featuredLabels[index] ?? item.rarity}
              onSelect={onSelect}
              owned={isOwned(item)}
              selected={selectedId === item.id}
            />
          ))}
        </div>
      </section>

      <section>
        <StoreSectionHeading title="CATEGORIES" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 min-[1900px]:mt-[22px] min-[1900px]:gap-[18px]">
          {categoryTiles.map((category) => (
            <button
              className={cn(
                'store-category-tile group flex min-h-[96px] items-center gap-4 rounded-[5px] border bg-[#07080b]/92 px-4 text-left transition-colors xl:min-h-[112px] min-[1900px]:min-h-[150px] min-[1900px]:gap-[22px] min-[1900px]:px-[24px]',
                filter === category.value
                  ? 'border-crimson text-crimson'
                  : 'border-arena-line text-arena-copy hover:border-crimson/65 hover:text-arena-strong',
              )}
              key={category.value}
              onClick={() => setFilter(category.value)}
              type="button"
            >
              <span className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border border-current/30 bg-black/45 min-[1900px]:h-[62px] min-[1900px]:w-[62px]">
                <ArenaIcon
                  className="h-[20px] w-[20px] min-[1900px]:h-[29px] min-[1900px]:w-[29px]"
                  name={category.icon}
                />
              </span>
              <span className="min-w-0">
                <span className="block font-heading text-[12px] font-semibold leading-tight text-arena-strong min-[1900px]:text-[17px]">
                  {category.label}
                </span>
                <span className="mt-1 block text-[9px] leading-snug text-arena-muted min-[1900px]:text-[13px]">
                  {category.description}
                </span>
                <span className="mt-2 block text-[8px] font-semibold text-crimson min-[1900px]:text-[11px]">
                  {getTileCount(category.value)} ITEMS
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <StoreSectionHeading
            subtitle={`${filteredItems.length} ITEMS`}
            title={filterTitles[filter]}
          />
          <div className="flex gap-3 min-[1900px]:gap-[15px]">
            <label className="relative min-w-0 flex-1 md:w-[280px] xl:w-[330px] min-[1900px]:w-[430px]">
              <ArenaIcon
                className="pointer-events-none absolute left-4 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-arena-muted min-[1900px]:left-[22px] min-[1900px]:h-[21px] min-[1900px]:w-[21px]"
                name="search"
              />
              <input
                className="h-[42px] w-full rounded-[4px] border border-arena-line bg-[#090a0e] pl-10 pr-4 text-[11px] text-arena-strong outline-none placeholder:text-arena-muted focus:border-crimson xl:h-[48px] xl:text-[13px] min-[1900px]:h-[62px] min-[1900px]:pl-[54px] min-[1900px]:text-[16px]"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search..."
                type="search"
                value={query}
              />
            </label>
            <select
              className="h-[42px] rounded-[4px] border border-arena-line bg-[#090a0e] px-3 text-[10px] text-arena-copy outline-none focus:border-crimson xl:h-[48px] xl:text-[12px] min-[1900px]:h-[62px] min-[1900px]:px-[20px] min-[1900px]:text-[15px]"
              onChange={(event) => setSort(event.target.value as StoreSort)}
              value={sort}
            >
              <option>FEATURED</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 min-[1900px]:mt-[22px] min-[1900px]:gap-[18px]">
          {filteredItems.map((item) => (
            <StoreItemCard
              equipped={isEquipped(item)}
              item={item}
              key={item.id}
              onSelect={onSelect}
              owned={isOwned(item)}
              selected={selectedId === item.id}
            />
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full rounded-[5px] border border-arena-line bg-arena-panel p-8 text-center text-[12px] text-arena-muted">
              No cosmetics match this selection.
            </div>
          )}
        </div>
      </section>
    </section>
  )
}

function StoreSectionHeading({
  subtitle,
  title,
}: {
  subtitle?: string
  title: string
}) {
  return (
    <div className="store-section-heading flex min-w-0 items-center gap-3">
      <span className="h-px w-[24px] bg-crimson shadow-[0_0_8px_rgb(255_45_45/0.75)]" />
      <h2 className="font-heading text-[13px] font-semibold text-arena-copy xl:text-[16px] min-[1900px]:text-[22px]">
        {title}
      </h2>
      {subtitle && (
        <span className="text-[9px] text-arena-muted min-[1900px]:text-[13px]">
          {subtitle}
        </span>
      )}
      <span className="h-px min-w-[40px] flex-1 bg-arena-line" />
    </div>
  )
}

function FeaturedStoreCard({
  equipped,
  item,
  label,
  onSelect,
  owned,
  selected,
}: {
  equipped: boolean
  item: StoreItem
  label: string
  onSelect: (item: StoreItem) => void
  owned: boolean
  selected: boolean
}) {
  const collection = storeCollections.find(
    (entry) => entry.id === item.collectionId,
  )

  return (
    <button
      className={cn(
        'store-feature-card group relative min-h-[170px] overflow-hidden rounded-[5px] border bg-[#050609] p-4 text-left transition-colors xl:min-h-[198px] min-[1900px]:min-h-[258px] min-[1900px]:p-[24px]',
        selected
          ? 'border-crimson'
          : 'border-arena-line hover:border-crimson/70',
      )}
      onClick={() => onSelect(item)}
      type="button"
    >
      <span className="pointer-events-none absolute inset-y-0 right-0 h-full w-[56%] overflow-hidden">
        <StoreItemVisual
          className="h-full w-full rounded-none opacity-90 transition-transform duration-300 group-hover:scale-[1.04]"
          item={item}
        />
      </span>
      <span className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.94)_0%,rgb(0_0_0/0.72)_46%,rgb(0_0_0/0.15)_100%)]" />
      <span className="relative z-10 flex min-h-[138px] max-w-[57%] flex-col xl:min-h-[166px] min-[1900px]:min-h-[210px]">
        <span className="text-[8px] font-semibold tracking-[0.18em] text-crimson xl:text-[10px] min-[1900px]:text-[13px]">
          {label}
        </span>
        <span className="mt-3 block font-heading text-[17px] leading-tight text-arena-strong xl:text-[20px] min-[1900px]:text-[29px]">
          {item.name}
        </span>
        <span className="mt-2 line-clamp-2 text-[10px] leading-snug text-arena-muted xl:text-[12px] min-[1900px]:text-[16px]">
          {collection?.tagline ?? item.description}
        </span>
        <span className="mt-auto flex items-center justify-between gap-2 pt-5">
          <span className="text-[13px] font-semibold text-arena-strong min-[1900px]:text-[18px]">
            {item.price.toLocaleString('en-US')}
            <span className="text-crimson"> CR</span>
          </span>
          {(equipped || owned) && (
            <span className="text-[8px] font-semibold text-crimson min-[1900px]:text-[11px]">
              {equipped ? 'EQUIPPED' : 'OWNED'}
            </span>
          )}
        </span>
      </span>
    </button>
  )
}
