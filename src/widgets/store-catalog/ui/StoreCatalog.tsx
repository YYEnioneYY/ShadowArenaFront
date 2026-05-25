import { useMemo, useState } from 'react'
import type { StoreCategory, StoreItem } from '../../../entities/store/model/mockStoreItems'
import { mockStoreItems, storeCollections } from '../../../entities/store/model/mockStoreItems'
import { StoreItemCard } from '../../../entities/store/ui/StoreItemCard'
import { useShop } from '../../../features/shop/model/useShop'
import { cn } from '../../../shared/lib/cn'

type StoreFilter = 'all' | StoreCategory | 'owned'
type StoreSort = 'FEATURED' | 'PRICE: LOW TO HIGH' | 'PRICE: HIGH TO LOW'

const filters: Array<{ label: string; value: StoreFilter }> = [
  { label: 'FEATURED', value: 'all' },
  { label: 'AVATAR DECORATIONS', value: 'decoration' },
  { label: 'PROFILE EFFECTS', value: 'effect' },
  { label: 'NAMEPLATES', value: 'nameplate' },
  { label: 'BUNDLES', value: 'bundle' },
  { label: 'MY COLLECTION', value: 'owned' },
]

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

  return (
    <section className="mt-5 min-[1900px]:mt-[34px]">
      <div className="flex flex-wrap gap-2 min-[1900px]:gap-[12px]">
        {filters.map((item) => (
          <button
            className={cn(
              'h-[35px] rounded-[3px] border px-4 text-[9px] font-semibold transition-colors xl:h-[42px] xl:text-[11px] min-[1900px]:h-[53px] min-[1900px]:px-[25px] min-[1900px]:text-[14px]',
              filter === item.value
                ? 'border-crimson bg-crimson/15 text-crimson'
                : 'border-arena-outline text-arena-muted hover:border-crimson/60 hover:text-arena-strong',
            )}
            key={item.value}
            onClick={() => setFilter(item.value)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-3 min-[1900px]:mt-[20px] min-[1900px]:gap-[15px]">
        <input
          className="h-[40px] min-w-0 flex-1 rounded-[4px] border border-arena-line bg-[#0d0e12] px-5 text-[11px] text-arena-strong outline-none placeholder:text-arena-muted focus:border-crimson xl:h-[47px] xl:text-[13px] min-[1900px]:h-[58px] min-[1900px]:text-[15px]"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search the Shop..."
          type="search"
          value={query}
        />
        <select
          className="h-[40px] rounded-[4px] border border-arena-line bg-[#0d0e12] px-3 text-[10px] text-arena-copy outline-none focus:border-crimson xl:h-[47px] xl:text-[12px] min-[1900px]:h-[58px] min-[1900px]:px-[20px] min-[1900px]:text-[14px]"
          onChange={(event) => setSort(event.target.value as StoreSort)}
          value={sort}
        >
          <option>FEATURED</option>
          <option>PRICE: LOW TO HIGH</option>
          <option>PRICE: HIGH TO LOW</option>
        </select>
      </div>
      <div className="mb-4 mt-7 flex items-center justify-between min-[1900px]:mb-[21px] min-[1900px]:mt-[35px]">
        <h2 className="font-display text-[17px] text-arena-strong xl:text-[21px] min-[1900px]:text-[28px]">
          {filter === 'owned' ? 'YOUR COLLECTION' : 'SHOP COLLECTIONS'}
        </h2>
        <p className="text-[9px] text-arena-muted min-[1900px]:text-[12px]">
          {filteredItems.length} ITEMS
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 min-[1900px]:gap-[18px]">
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
  )
}
