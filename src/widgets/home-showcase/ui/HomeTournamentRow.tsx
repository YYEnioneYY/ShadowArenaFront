import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import initiationImage from '../../../assets/main/initiation.png'
import neonClashImage from '../../../assets/main/neonclash.png'
import phantomStrikeImage from '../../../assets/main/phantomstrike.png'
import shadowRushImage from '../../../assets/main/shadowrush.png'
import vanguardOpenImage from '../../../assets/main/vanguardopen.png'
import type { Tournament } from '../../../entities/tournament/model/types'
import { TournamentArtwork } from '../../../entities/tournament/ui/TournamentArtwork'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

const countdownStartsInSeconds = [
  14 * 60 * 60 + 55 * 60 + 41,
  1 * 24 * 60 * 60 + 3 * 60 * 60 + 18 * 60 + 9,
  8 * 60 * 60 + 22 * 60 + 34,
  2 * 24 * 60 * 60 + 6 * 60 * 60 + 5 * 60 + 52,
  20 * 60 * 60 + 48 * 60 + 17,
]

const valorantTournamentImages = [
  initiationImage,
  phantomStrikeImage,
  shadowRushImage,
  vanguardOpenImage,
  neonClashImage,
]

export function HomeTournamentRow() {
  const { game, tournaments } = useActiveGameData()
  const [timerStartedAt] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(Date.now())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const elapsedSeconds = Math.floor((now - timerStartedAt) / 1000)

  return (
    <section>
      <h2 className="mb-3 font-heading text-[14px] text-arena-copy xl:text-[17px] min-[1900px]:mb-[18px] min-[1900px]:text-[24px]">
        UPCOMING TOURNAMENT
      </h2>
      <div className="home-scroll-row flex gap-2 overflow-x-auto xl:gap-3 min-[1900px]:gap-[17px]">
        {tournaments.slice(0, 5).map((tournament, index) => (
          <HomeTournamentCard
            imageUrl={
              game.id === 'valorant'
                ? valorantTournamentImages[index]
                : undefined
            }
            key={tournament.id}
            remainingSeconds={Math.max(
              0,
              countdownStartsInSeconds[index] - elapsedSeconds,
            )}
            tournament={tournament}
          />
        ))}
      </div>
    </section>
  )
}

function HomeTournamentCard({
  imageUrl,
  remainingSeconds,
  tournament,
}: {
  imageUrl?: string
  remainingSeconds: number
  tournament: Tournament
}) {
  const countdown = formatCountdown(remainingSeconds)

  return (
    <Panel className="w-[220px] shrink-0 overflow-hidden p-2 xl:w-[254px] xl:p-3 2xl:w-[286px] min-[1900px]:w-[358px] min-[1900px]:p-[14px]">
      <div className="h-[94px] overflow-hidden rounded-[2px] xl:h-[112px] 2xl:h-[126px] min-[1900px]:h-[164px]">
        <TournamentArtwork
          featured
          format={tournament.gameMode}
          game={tournament.game}
          imageUrl={imageUrl}
          variant={tournament.artwork}
        />
      </div>
      <h3 className="mt-2 text-[17px] text-arena-strong xl:text-[20px] min-[1900px]:mt-[13px] min-[1900px]:text-[28px]">
        {tournament.title}
      </h3>
      <p className="text-[8px] text-arena-muted xl:text-[9px] min-[1900px]:text-[13px]">
        {tournament.game} - {tournament.region} - {tournament.gameMode}
      </p>
      <div className="mt-2 grid grid-cols-4 gap-2 min-[1900px]:mt-[12px] min-[1900px]:gap-[10px]">
        {countdown.map((item) => (
          <div
            className="rounded-[4px] border border-arena-outline py-1 text-center min-[1900px]:py-[7px]"
            key={item.unit}
          >
            <p className="text-[11px] font-bold text-arena-strong xl:text-[13px] min-[1900px]:text-[18px]">
              {item.value}
            </p>
            <p className="text-[6px] text-arena-muted min-[1900px]:text-[9px]">
              {item.unit}
            </p>
          </div>
        ))}
      </div>
      <Link
        className="mt-2 flex h-[26px] items-center justify-center rounded-[3px] border border-crimson text-[7px] font-semibold text-crimson transition-colors hover:bg-crimson hover:text-arena-strong xl:h-[29px] xl:text-[8px] min-[1900px]:mt-[11px] min-[1900px]:h-[39px] min-[1900px]:text-[11px]"
        to="/tournaments"
      >
        VIEW DETAILS
      </Link>
    </Panel>
  )
}

function formatCountdown(totalSeconds: number) {
  const days = Math.floor(totalSeconds / (24 * 60 * 60))
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  return [
    { unit: 'DAYS', value: String(days) },
    { unit: 'HRS', value: String(hours).padStart(2, '0') },
    { unit: 'MINS', value: String(minutes).padStart(2, '0') },
    { unit: 'SECS', value: String(seconds).padStart(2, '0') },
  ]
}
