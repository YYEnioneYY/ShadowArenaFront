import { createContext } from 'react'
import type { StoreCategory, StoreItem } from '../../../entities/store/model/mockStoreItems'

export interface ShopResult {
  success: boolean
  requiresAuth?: boolean
  message: string
}

export interface ShopContextValue {
  balance: number
  equipped: Partial<Record<StoreCategory, string>>
  giftCount: number
  ownedItemIds: string[]
  buy: (item: StoreItem) => ShopResult
  equip: (item: StoreItem) => ShopResult
  gift: (item: StoreItem) => ShopResult
  isEquipped: (item: StoreItem) => boolean
  isOwned: (item: StoreItem) => boolean
}

export const ShopContext = createContext<ShopContextValue | null>(null)
