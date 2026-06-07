import { useMemo, useState } from 'react'
import {
  mockFriendRequests,
  mockFriends,
  type MockFriend,
} from '../../../entities/account/model/mockAccountData'
import { FriendAvatar } from '../../../entities/account/ui/FriendAvatar'
import { cn } from '../../../shared/lib/cn'
import { Panel } from '../../../shared/ui/Panel'

type FriendsTab = 'all' | 'online' | 'pending'

const tabs: Array<{ label: string; value: FriendsTab }> = [
  { label: 'ALL FRIENDS', value: 'all' },
  { label: 'ONLINE', value: 'online' },
  { label: 'PENDING', value: 'pending' },
]

export function FriendsDashboard() {
  const [tab, setTab] = useState<FriendsTab>('all')
  const [query, setQuery] = useState('')
  const [hiddenRequests, setHiddenRequests] = useState<number[]>([])
  const [notice, setNotice] = useState('')
  const requests = mockFriendRequests.filter(
    (request) => !hiddenRequests.includes(request.id),
  )
  const friends = useMemo(() => {
    const needle = query.toLowerCase().trim()

    return mockFriends.filter(
      (friend) =>
        (tab !== 'online' || friend.status !== 'offline') &&
        (!needle ||
          friend.name.toLowerCase().includes(needle) ||
          friend.game.toLowerCase().includes(needle)),
    )
  }, [query, tab])

  function resolveRequest(id: number, accepted: boolean, name: string) {
    setHiddenRequests((items) => [...items, id])
    setNotice(
      accepted
        ? `${name} has joined your allies.`
        : `Request from ${name} dismissed.`,
    )
  }

  return (
    <div className="space-y-4 min-[1900px]:space-y-[20px]">
      <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-[19px] text-arena-strong xl:text-[23px] min-[1900px]:text-[31px]">
              ALLIES
            </h2>
            <p className="mt-1 text-[10px] text-arena-muted min-[1900px]:text-[15px]">
              {mockFriends.filter((friend) => friend.status !== 'offline').length}{' '}
              warriors online
            </p>
          </div>
          <button
            className="h-[40px] rounded-[3px] border border-crimson px-5 text-[10px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong min-[1900px]:h-[52px] min-[1900px]:px-[28px] min-[1900px]:text-[15px]"
            onClick={() => setNotice('Invite code copied: MORNINGSTAR#3456')}
            type="button"
          >
            ADD FRIEND
          </button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 border-b border-arena-line min-[1900px]:mt-[28px]">
          {tabs.map((item) => (
            <button
              className={cn(
                'relative h-[39px] px-4 text-[10px] font-semibold text-arena-muted transition-colors hover:text-arena-strong min-[1900px]:h-[50px] min-[1900px]:px-[22px] min-[1900px]:text-[14px]',
                tab === item.value && 'text-crimson',
              )}
              key={item.value}
              onClick={() => setTab(item.value)}
              type="button"
            >
              {item.label}
              {tab === item.value && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-crimson" />
              )}
            </button>
          ))}
        </div>
        {tab !== 'pending' && (
          <input
            className="mt-5 h-[44px] w-full rounded-[4px] border border-arena-outline bg-[#07080c] px-4 text-[11px] text-arena-strong outline-none placeholder:text-arena-muted focus:border-crimson min-[1900px]:mt-[24px] min-[1900px]:h-[57px] min-[1900px]:text-[15px]"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search allies or games..."
            type="search"
            value={query}
          />
        )}
        {notice && (
          <p className="mt-4 rounded-[3px] border border-crimson/35 bg-crimson/10 px-4 py-3 text-[10px] text-arena-copy min-[1900px]:text-[14px]">
            {notice}
          </p>
        )}
      </Panel>
      {tab === 'pending' ? (
        <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
          <h2 className="font-display text-[18px] text-arena-strong min-[1900px]:text-[26px]">
            PENDING REQUESTS
          </h2>
          <div className="mt-5 space-y-3 min-[1900px]:space-y-[15px]">
            {requests.map((request) => (
            <div
                className="flex flex-wrap items-center gap-4 rounded-[4px] border border-arena-line bg-[#07080c] px-4 py-4 min-[1900px]:px-[21px] min-[1900px]:py-[19px]"
                key={request.id}
              >
                <FriendAvatar
                  className="h-[44px] w-[44px] rounded-full border border-crimson/65 min-[1900px]:h-[57px] min-[1900px]:w-[57px]"
                  friendId={request.id}
                  offset={2}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-arena-strong min-[1900px]:text-[17px]">
                    {request.name}
                  </p>
                  <p className="text-[9px] text-arena-muted min-[1900px]:text-[12px]">
                    {request.game} / {request.commonFriends} MUTUAL ALLIES
                  </p>
                </div>
                <button
                  className="h-[35px] rounded-[3px] border border-crimson bg-crimson/12 px-4 text-[9px] font-semibold text-crimson hover:bg-crimson hover:text-arena-strong min-[1900px]:h-[45px] min-[1900px]:text-[13px]"
                  onClick={() => resolveRequest(request.id, true, request.name)}
                  type="button"
                >
                  ACCEPT
                </button>
                <button
                  className="h-[35px] rounded-[3px] border border-arena-outline px-4 text-[9px] font-semibold text-arena-muted hover:text-arena-strong min-[1900px]:h-[45px] min-[1900px]:text-[13px]"
                  onClick={() => resolveRequest(request.id, false, request.name)}
                  type="button"
                >
                  DECLINE
                </button>
              </div>
            ))}
            {requests.length === 0 && (
              <p className="py-7 text-center text-[11px] text-arena-muted">
                No pending requests.
              </p>
            )}
          </div>
        </Panel>
      ) : (
        <Panel className="p-5 xl:p-6 min-[1900px]:p-[30px]">
          <div className="space-y-3 min-[1900px]:space-y-[15px]">
            {friends.map((friend) => (
              <FriendRow friend={friend} key={friend.id} onNotice={setNotice} />
            ))}
          </div>
        </Panel>
      )}
    </div>
  )
}

interface FriendRowProps {
  friend: MockFriend
  onNotice: (message: string) => void
}

function FriendRow({ friend, onNotice }: FriendRowProps) {
  return (
    <div className="flex items-center gap-4 rounded-[4px] border border-arena-line bg-[#07080c] px-4 py-3.5 min-[1900px]:gap-[20px] min-[1900px]:px-[21px] min-[1900px]:py-[18px]">
      <span className="relative">
        <FriendAvatar
          className="block h-[46px] w-[46px] rounded-full border border-arena-outline min-[1900px]:h-[59px] min-[1900px]:w-[59px]"
          friendId={friend.id}
        />
        <span
          className={cn(
            'absolute bottom-0 right-0 h-[11px] w-[11px] rounded-full border-2 border-[#07080c] min-[1900px]:h-[14px] min-[1900px]:w-[14px]',
            friend.status === 'online'
              ? 'bg-crimson'
              : friend.status === 'away'
                ? 'bg-[#b57b30]'
                : 'bg-arena-dim',
          )}
        />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-arena-strong min-[1900px]:text-[18px]">
          {friend.name}
        </p>
        <p className="truncate text-[9px] text-arena-muted min-[1900px]:text-[12px]">
          {friend.game} / <span className="font-heading">{friend.rank}</span>
        </p>
      </div>
      <p className="hidden text-[9px] text-arena-muted sm:block min-[1900px]:text-[13px]">
        {friend.lastSeen ?? friend.activity}
      </p>
      <button
        className="h-[34px] rounded-[3px] border border-arena-outline px-4 text-[9px] font-semibold text-arena-copy hover:border-crimson hover:text-crimson min-[1900px]:h-[44px] min-[1900px]:text-[13px]"
        onClick={() => onNotice(`Message channel opened with ${friend.name}.`)}
        type="button"
      >
        MESSAGE
      </button>
    </div>
  )
}
