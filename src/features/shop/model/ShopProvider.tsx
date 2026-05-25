import { useEffect, useState, type PropsWithChildren } from 'react'
import type {
  StoreCategory,
  StoreItem,
} from '../../../entities/store/model/mockStoreItems'
import { useAuth } from '../../auth/model/useAuth'
import { ShopContext, type ShopResult } from './ShopContext'

interface StoredShopState {
  balance: number
  equipped: Partial<Record<StoreCategory, string>>
  giftCount: number
  ownedItemIds: string[]
}

const shopStorageKey = 'shadow-arena.mock-store'
const initialShopState: StoredShopState = {
  balance: 13450,
  equipped: {},
  giftCount: 0,
  ownedItemIds: [],
}

function loadShopState(): StoredShopState {
  const storedValue = localStorage.getItem(shopStorageKey)

  if (!storedValue) {
    return initialShopState
  }

  try {
    return { ...initialShopState, ...JSON.parse(storedValue) }
  } catch {
    return initialShopState
  }
}

export function ShopProvider({ children }: PropsWithChildren) {
  const { isAuthenticated } = useAuth()
  const [state, setState] = useState<StoredShopState>(loadShopState)

  useEffect(() => {
    localStorage.setItem(shopStorageKey, JSON.stringify(state))
  }, [state])

  function requireLogin(): ShopResult {
    return {
      success: false,
      requiresAuth: true,
      message: 'Log in to purchase cosmetics for your collection.',
    }
  }

  function buy(item: StoreItem): ShopResult {
    if (!isAuthenticated) {
      return requireLogin()
    }

    if (state.ownedItemIds.includes(item.id)) {
      return { success: false, message: 'This item is already in your collection.' }
    }

    if (
      item.category === 'bundle' &&
      item.bundleItemIds?.some((itemId) => state.ownedItemIds.includes(itemId))
    ) {
      return {
        success: false,
        message: 'Bundle unavailable after owning one of its items.',
      }
    }

    if (state.balance < item.price) {
      return { success: false, message: 'Not enough Shadow Coins.' }
    }

    const unlockedIds = [item.id, ...(item.bundleItemIds ?? [])]
    setState((current) => ({
      ...current,
      balance: current.balance - item.price,
      ownedItemIds: Array.from(
        new Set([...current.ownedItemIds, ...unlockedIds]),
      ),
    }))

    return { success: true, message: `${item.name} added to your collection.` }
  }

  function equip(item: StoreItem): ShopResult {
    if (!isAuthenticated) {
      return requireLogin()
    }

    if (!state.ownedItemIds.includes(item.id)) {
      return { success: false, message: 'Purchase this item before equipping it.' }
    }

    if (item.category === 'bundle') {
      return { success: false, message: 'Equip bundle items individually.' }
    }

    setState((current) => ({
      ...current,
      equipped: { ...current.equipped, [item.category]: item.id },
    }))

    return { success: true, message: `${item.name} equipped on your profile.` }
  }

  function gift(item: StoreItem): ShopResult {
    if (!isAuthenticated) {
      return requireLogin()
    }

    if (state.balance < item.price) {
      return { success: false, message: 'Not enough Shadow Coins for this gift.' }
    }

    setState((current) => ({
      ...current,
      balance: current.balance - item.price,
      giftCount: current.giftCount + 1,
    }))

    return { success: true, message: `${item.name} placed in your Gift Inventory.` }
  }

  return (
    <ShopContext.Provider
      value={{
        balance: state.balance,
        equipped: isAuthenticated ? state.equipped : {},
        giftCount: isAuthenticated ? state.giftCount : 0,
        ownedItemIds: isAuthenticated ? state.ownedItemIds : [],
        buy,
        equip,
        gift,
        isEquipped: (item) =>
          isAuthenticated && state.equipped[item.category] === item.id,
        isOwned: (item) =>
          isAuthenticated && state.ownedItemIds.includes(item.id),
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
