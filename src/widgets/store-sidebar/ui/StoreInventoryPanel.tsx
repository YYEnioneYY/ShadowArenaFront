import { Link } from 'react-router-dom'
import { mockStoreItems } from '../../../entities/store/model/mockStoreItems'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useShop } from '../../../features/shop/model/useShop'
import { Panel } from '../../../shared/ui/Panel'

const equippedCategories = [
  { id: 'decoration', name: 'DECORATION' },
  { id: 'effect', name: 'EFFECT' },
  { id: 'nameplate', name: 'NAMEPLATE' },
] as const

export function StoreInventoryPanel() {
  const { isAuthenticated } = useAuth()
  const { equipped, giftCount, ownedItemIds } = useShop()

  if (!isAuthenticated) {
    return (
      <Panel className="p-4 xl:p-5 min-[1900px]:p-[25px]">
        <h2 className="font-heading text-[16px] text-arena-copy xl:text-[19px] min-[1900px]:text-[25px]">
          YOUR COLLECTION
        </h2>
        <p className="mt-3 text-[10px] leading-relaxed text-arena-muted min-[1900px]:mt-[16px] min-[1900px]:text-[15px]">
          Log in to collect, gift and equip permanent Arena cosmetics.
        </p>
        <Link
          className="mt-4 flex h-[36px] items-center justify-center rounded-[3px] border border-crimson text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:mt-[22px] min-[1900px]:h-[52px] min-[1900px]:text-[15px]"
          state={{ from: '/store' }}
          to="/login"
        >
          ENTER THE ARENA
        </Link>
      </Panel>
    )
  }

  return (
    <Panel className="p-4 xl:p-5 min-[1900px]:p-[25px]">
      <div className="flex items-end justify-between">
        <h2 className="font-heading text-[16px] text-arena-copy xl:text-[19px] min-[1900px]:text-[25px]">
          YOUR COLLECTION
        </h2>
        <p className="text-[9px] text-arena-muted min-[1900px]:text-[12px]">
          {giftCount} GIFTS
        </p>
      </div>
      <div className="mt-4 border-t border-arena-line pt-4 min-[1900px]:mt-[21px] min-[1900px]:pt-[20px]">
        <div className="flex justify-between text-[9px] text-arena-muted min-[1900px]:text-[13px]">
          <span>OWNED COSMETICS</span>
          <span className="text-arena-strong">{ownedItemIds.length} ITEMS</span>
        </div>
        <h2 className="mt-5 font-heading text-[15px] text-arena-copy min-[1900px]:mt-[25px] min-[1900px]:text-[21px]">
          EQUIPPED LOADOUT
        </h2>
        <div className="mt-3 space-y-2 min-[1900px]:mt-[17px] min-[1900px]:space-y-[10px]">
          {equippedCategories.map((category) => {
            const equippedItem = mockStoreItems.find(
              (item) => item.id === equipped[category.id],
            )

            return (
              <div
                className="flex items-center justify-between rounded-[3px] border border-arena-line bg-[#090a0d] px-3 py-2.5 min-[1900px]:px-[16px] min-[1900px]:py-[13px]"
                key={category.id}
              >
                <span className="text-[8px] text-arena-muted min-[1900px]:text-[11px]">
                  {category.name}
                </span>
                <span className="max-w-[55%] truncate text-[9px] text-arena-copy min-[1900px]:text-[12px]">
                  {equippedItem?.name ?? 'NOT EQUIPPED'}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </Panel>
  )
}
