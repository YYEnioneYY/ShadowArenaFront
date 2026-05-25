import { Link } from 'react-router-dom'
import { useActiveGameData } from '../../../features/game-selection/model/useActiveGameData'
import { Panel } from '../../../shared/ui/Panel'

export function HomeHero() {
  const { game, season, tournaments } = useActiveGameData()
  const marqueeTournament = tournaments[17] ?? tournaments[0]

  return (
    <Panel className="home-command-hero relative isolate min-h-[430px] overflow-hidden px-7 pb-6 pt-9 md:px-10 xl:min-h-[490px] xl:px-12 xl:pt-12 2xl:min-h-[560px] 2xl:px-[58px] min-[1900px]:min-h-[650px] min-[1900px]:px-[78px] min-[1900px]:pt-[72px]">
      <div className="home-hero-grid absolute inset-0 opacity-35" />
      <div className="home-hero-flare absolute right-[13%] top-[10%] h-[68%] w-[47%]" />
      <div className="home-hero-sigil absolute right-[12%] top-[15%] hidden aspect-square w-[39%] rounded-full md:block" />
      <div className="home-hero-warrior home-hero-warrior-back hidden md:block" />
      <div className="home-hero-warrior home-hero-warrior-front hidden md:block" />
      <div className="relative z-10">
        <p className="text-[10px] font-semibold tracking-[0.34em] text-crimson xl:text-[12px] min-[1900px]:text-[16px]">
          {season}
        </p>
        <h1 className="mt-5 font-display text-[44px] leading-[1.08] text-arena-strong sm:text-[52px] xl:text-[64px] 2xl:text-[74px] min-[1900px]:mt-8 min-[1900px]:text-[98px]">
          FORGE YOUR
          <br />
          <span className="home-title-glow text-white">LEGEND</span>
        </h1>
        <p className="mt-5 max-w-[380px] text-[12px] leading-[1.65] text-arena-copy xl:text-[15px] 2xl:text-[17px] min-[1900px]:mt-8 min-[1900px]:max-w-[540px] min-[1900px]:text-[21px]">
          Enter the arena, conquer the bracket and leave your mark among the
          champions of the shadows.
        </p>
        <div className="mt-7 flex gap-3 xl:mt-9 min-[1900px]:mt-[42px] min-[1900px]:gap-5">
          <Link
            className="flex h-[42px] items-center rounded-[3px] border border-crimson bg-crimson/85 px-6 text-[11px] font-semibold text-white transition-colors hover:bg-crimson xl:h-[50px] xl:px-8 xl:text-[13px] min-[1900px]:h-[60px] min-[1900px]:px-[38px] min-[1900px]:text-[17px]"
            to="/tournaments"
          >
            ENTER TOURNAMENT
          </Link>
          <Link
            className="flex h-[42px] items-center rounded-[3px] border border-arena-outline px-6 text-[11px] font-semibold text-arena-strong transition-colors hover:border-crimson xl:h-[50px] xl:px-8 xl:text-[13px] min-[1900px]:h-[60px] min-[1900px]:px-[38px] min-[1900px]:text-[17px]"
            to="/ranking"
          >
            VIEW RANKING
          </Link>
        </div>
      </div>
      <div className="relative z-10 mt-10 flex max-w-[620px] items-center gap-4 rounded-[4px] border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-sm xl:mt-12 xl:px-5 min-[1900px]:mt-[56px] min-[1900px]:max-w-[780px] min-[1900px]:gap-6 min-[1900px]:px-7 min-[1900px]:py-5">
        <span className="h-9 w-1 shrink-0 bg-crimson min-[1900px]:h-[52px]" />
        <div>
          <p className="text-[8px] font-semibold tracking-[0.22em] text-crimson xl:text-[10px] min-[1900px]:text-[13px]">
            GRAND EVENT / REGISTRATION OPEN
          </p>
          <p className="mt-1 text-[13px] text-arena-strong xl:text-[16px] min-[1900px]:text-[22px]">
            {marqueeTournament.title}
          </p>
          <p className="text-[8px] font-semibold tracking-[0.14em] text-arena-muted min-[1900px]:text-[11px]">
            {game.title}
          </p>
        </div>
        <div className="ml-auto hidden gap-4 text-center sm:flex min-[1900px]:gap-8">
          <EventValue value="06" label="DAYS" />
          <EventValue value="14" label="HRS" />
          <EventValue value="32" label="MIN" />
        </div>
      </div>
    </Panel>
  )
}

interface EventValueProps {
  label: string
  value: string
}

function EventValue({ label, value }: EventValueProps) {
  return (
    <span>
      <span className="block text-[17px] font-bold text-arena-strong min-[1900px]:text-[25px]">
        {value}
      </span>
      <span className="text-[7px] text-arena-muted min-[1900px]:text-[11px]">
        {label}
      </span>
    </span>
  )
}
