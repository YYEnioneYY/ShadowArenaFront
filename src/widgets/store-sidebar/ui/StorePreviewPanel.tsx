import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  storeCollections,
  type StoreItem,
} from '../../../entities/store/model/mockStoreItems'
import { StoreItemVisual } from '../../../entities/store/ui/StoreItemVisual'
import { useAuth } from '../../../features/auth/model/useAuth'
import { useShop } from '../../../features/shop/model/useShop'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

interface StorePreviewPanelProps {
  item: StoreItem
}

const categoryNames = {
  decoration: 'AVATAR DECORATION',
  effect: 'PROFILE EFFECT',
  nameplate: 'NAMEPLATE',
  bundle: 'COLLECTION BUNDLE',
} as const

export function StorePreviewPanel({ item }: StorePreviewPanelProps) {
  const { isAuthenticated } = useAuth()
  const { buy, equip, gift, isEquipped, isOwned } = useShop()
  const [message, setMessage] = useState('')
  const collection = storeCollections.find(
    (entry) => entry.id === item.collectionId,
  )
  const owned = isOwned(item)
  const equipped = isEquipped(item)

  return (
    <Panel className="overflow-hidden p-3 xl:p-4 min-[1900px]:p-[20px]">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="font-display text-[15px] text-arena-copy xl:text-[18px] min-[1900px]:text-[24px]">
          LIVE PREVIEW
        </h2>
        <span className="text-[8px] font-semibold tracking-[0.16em] text-crimson min-[1900px]:text-[11px]">
          {item.rarity}
        </span>
      </div>
      <StoreItemVisual
        className="mt-3 h-[126px] rounded-[3px] xl:h-[154px] min-[1900px]:mt-[17px] min-[1900px]:h-[203px]"
        item={item}
        preview
      />
      <p className="mt-4 text-[8px] font-semibold tracking-[0.15em] text-crimson min-[1900px]:mt-[20px] min-[1900px]:text-[12px]">
        {categoryNames[item.category]}
      </p>
      <h3 className="mt-1 text-[18px] font-medium text-arena-strong xl:text-[21px] min-[1900px]:text-[29px]">
        {item.name}
      </h3>
      <p className="text-[9px] text-arena-dim min-[1900px]:text-[12px]">
        {collection?.name}
        {item.limited ? ' / LIMITED' : ''}
      </p>
      <p className="mt-3 text-[10px] leading-[1.6] text-arena-muted xl:text-[12px] min-[1900px]:mt-[16px] min-[1900px]:text-[15px]">
        {item.description}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-arena-line pt-3 min-[1900px]:mt-[20px] min-[1900px]:pt-[17px]">
        <span className="text-[9px] text-arena-muted min-[1900px]:text-[12px]">
          PRICE
        </span>
        <span className="text-[17px] font-semibold text-arena-strong min-[1900px]:text-[24px]">
          {item.price.toLocaleString('en-US')} <span className="text-crimson">CR</span>
        </span>
      </div>
      {!isAuthenticated ? (
        <Link
          className="mt-4 flex h-[37px] items-center justify-center rounded-[3px] border border-crimson bg-crimson/12 text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-white xl:h-[44px] min-[1900px]:mt-[21px] min-[1900px]:h-[55px] min-[1900px]:text-[15px]"
          state={{ from: '/store' }}
          to="/login"
        >
          LOGIN TO PURCHASE
        </Link>
      ) : (
        <>
          {owned ? (
            <button
              className={cn(
                'mt-4 h-[37px] w-full rounded-[3px] border text-[10px] font-semibold transition-colors xl:h-[44px] min-[1900px]:mt-[21px] min-[1900px]:h-[55px] min-[1900px]:text-[15px]',
                equipped || item.category === 'bundle'
                  ? 'border-arena-outline text-arena-muted'
                  : 'border-crimson bg-crimson/10 text-crimson hover:bg-crimson hover:text-white',
              )}
              disabled={equipped || item.category === 'bundle'}
              onClick={() => setMessage(equip(item).message)}
              type="button"
            >
              {equipped
                ? 'EQUIPPED'
                : item.category === 'bundle'
                  ? 'IN YOUR COLLECTION'
                  : 'EQUIP NOW'}
            </button>
          ) : (
            <button
              className="mt-4 h-[37px] w-full rounded-[3px] border border-crimson bg-[#3d080d] text-[10px] font-semibold text-arena-strong transition-colors hover:bg-crimson xl:h-[44px] min-[1900px]:mt-[21px] min-[1900px]:h-[55px] min-[1900px]:text-[15px]"
              onClick={() => setMessage(buy(item).message)}
              type="button"
            >
              PURCHASE
            </button>
          )}
          <button
            className="mt-2 h-[35px] w-full rounded-[3px] border border-arena-outline text-[9px] font-semibold text-arena-copy transition-colors hover:border-crimson hover:text-crimson xl:h-[41px] min-[1900px]:mt-[10px] min-[1900px]:h-[51px] min-[1900px]:text-[14px]"
            onClick={() => setMessage(gift(item).message)}
            type="button"
          >
            GIFT TO A WARRIOR
          </button>
        </>
      )}
      {message && (
        <p
          className={cn(
            'mt-3 text-center text-[9px] leading-relaxed min-[1900px]:mt-[15px] min-[1900px]:text-[12px]',
            message.includes('Not enough') ||
            message.includes('before') ||
            message.includes('unavailable')
              ? 'text-crimson'
              : 'text-arena-copy',
          )}
        >
          {message}
        </p>
      )}
    </Panel>
  )
}
