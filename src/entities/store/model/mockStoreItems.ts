export type StoreCategory =
  | 'decoration'
  | 'effect'
  | 'nameplate'
  | 'bundle'

export type StoreVisual =
  | 'crown'
  | 'embers'
  | 'runes'
  | 'wings'
  | 'veil'
  | 'spectral'
  | 'lotus'
  | 'eclipse'
  | 'storm'
  | 'ronin'

export interface StoreCollection {
  id: string
  name: string
  tagline: string
  description: string
}

export interface StoreItem {
  id: string
  name: string
  collectionId: string
  category: StoreCategory
  description: string
  price: number
  visual: StoreVisual
  rarity: 'RARE' | 'EPIC' | 'LEGENDARY'
  limited?: boolean
  bundleItemIds?: string[]
}

export const storeCollections: StoreCollection[] = [
  {
    id: 'crimson-veil',
    name: 'CRIMSON VEIL',
    tagline: 'Awaken the blood moon.',
    description:
      'Royal cosmetics forged for warriors who rule from the shadows.',
  },
  {
    id: 'phantom-order',
    name: 'PHANTOM ORDER',
    tagline: 'Walk unseen. Strike once.',
    description:
      'Spectral adornments and profile effects drawn from the silent order.',
  },
  {
    id: 'radiant-dynasty',
    name: 'RADIANT DYNASTY',
    tagline: 'Carry the ancient oath.',
    description:
      'Ceremonial nameplates and decorations inspired by immortal champions.',
  },
]

export const mockStoreItems: StoreItem[] = [
  {
    id: 'crimson-sovereign-bundle',
    name: 'SOVEREIGN SET',
    collectionId: 'crimson-veil',
    category: 'bundle',
    description:
      'A matching Crown of Embers decoration and Blood Moon profile effect.',
    price: 2750,
    visual: 'crown',
    rarity: 'LEGENDARY',
    limited: true,
    bundleItemIds: ['crown-of-embers', 'blood-moon-arrival'],
  },
  {
    id: 'crown-of-embers',
    name: 'CROWN OF EMBERS',
    collectionId: 'crimson-veil',
    category: 'decoration',
    description: 'An ember-lit crown that frames your warrior portrait.',
    price: 1450,
    visual: 'crown',
    rarity: 'LEGENDARY',
  },
  {
    id: 'blood-moon-arrival',
    name: 'BLOOD MOON ARRIVAL',
    collectionId: 'crimson-veil',
    category: 'effect',
    description: 'A crimson eclipse rolls across your profile on arrival.',
    price: 1700,
    visual: 'embers',
    rarity: 'EPIC',
  },
  {
    id: 'veiled-nameplate',
    name: 'VEILED THRONE',
    collectionId: 'crimson-veil',
    category: 'nameplate',
    description: 'An engraved nameplate pulsing with royal crimson light.',
    price: 850,
    visual: 'veil',
    rarity: 'RARE',
  },
  {
    id: 'spectral-horns',
    name: 'SPECTRAL HORNS',
    collectionId: 'phantom-order',
    category: 'decoration',
    description: 'Ghostly horns emerge behind your avatar in pale flame.',
    price: 1250,
    visual: 'spectral',
    rarity: 'EPIC',
  },
  {
    id: 'phantom-step',
    name: 'PHANTOM STEP',
    collectionId: 'phantom-order',
    category: 'effect',
    description: 'Mist and cold sparks trail through your profile card.',
    price: 1520,
    visual: 'storm',
    rarity: 'EPIC',
  },
  {
    id: 'order-sigil',
    name: 'ORDER SIGIL',
    collectionId: 'phantom-order',
    category: 'nameplate',
    description: 'A runic badge granted to agents of the hidden order.',
    price: 720,
    visual: 'runes',
    rarity: 'RARE',
  },
  {
    id: 'immortal-wings',
    name: 'IMMORTAL WINGS',
    collectionId: 'radiant-dynasty',
    category: 'decoration',
    description: 'Radiant blades unfold around the profile of a champion.',
    price: 1880,
    visual: 'wings',
    rarity: 'LEGENDARY',
    limited: true,
  },
  {
    id: 'lotus-awakening',
    name: 'LOTUS AWAKENING',
    collectionId: 'radiant-dynasty',
    category: 'effect',
    description: 'An arcane lotus blooms as your banner appears.',
    price: 1650,
    visual: 'lotus',
    rarity: 'EPIC',
  },
  {
    id: 'ronin-oath',
    name: 'RONIN OATH',
    collectionId: 'radiant-dynasty',
    category: 'nameplate',
    description: 'A steel-edged title fitting a solitary ranked warrior.',
    price: 920,
    visual: 'ronin',
    rarity: 'RARE',
  },
  {
    id: 'eclipse-legacy-bundle',
    name: 'ECLIPSE LEGACY',
    collectionId: 'radiant-dynasty',
    category: 'bundle',
    description: 'Immortal Wings and Lotus Awakening bundled for less.',
    price: 2990,
    visual: 'eclipse',
    rarity: 'LEGENDARY',
    bundleItemIds: ['immortal-wings', 'lotus-awakening'],
  },
]

export const featuredStoreItem =
  mockStoreItems.find((item) => item.id === 'crimson-sovereign-bundle') ??
  mockStoreItems[0]
