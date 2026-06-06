import initiationImage from '../../../assets/main/initiation.png'
import neonClashImage from '../../../assets/main/neonclash.png'
import phantomStrikeImage from '../../../assets/main/phantomstrike.png'
import shadowRushImage from '../../../assets/main/shadowrush.png'
import vanguardOpenImage from '../../../assets/main/vanguardopen.png'
import radiantTrialsImage from '../../../assets/tournaments/06-radiant-trials.webp'
import crimsonCrownImage from '../../../assets/tournaments/07-crimson-crown.webp'
import obsidianCupImage from '../../../assets/tournaments/08-obsidian-cup.webp'
import fallenLegendsImage from '../../../assets/tournaments/09-fallen-legends.webp'
import ironEclipseImage from '../../../assets/tournaments/10-iron-eclipse.webp'
import ashenDuelImage from '../../../assets/tournaments/11-ashen-duel.webp'
import nightfallSeriesImage from '../../../assets/tournaments/12-nightfall-series.webp'
import scarletPairImage from '../../../assets/tournaments/13-scarlet-pair.webp'
import frostbiteArenaImage from '../../../assets/tournaments/14-frostbite-arena.webp'
import voidRunnersImage from '../../../assets/tournaments/15-void-runners.webp'
import legionAscentImage from '../../../assets/tournaments/16-legion-ascent.webp'
import emberDuoImage from '../../../assets/tournaments/17-ember-duo.webp'
import sovereignFiveImage from '../../../assets/tournaments/18-sovereign-five.webp'
import { Panel } from '../../../shared/ui/Panel'
import type { Tournament } from '../model/types'
import { TournamentArtwork } from './TournamentArtwork'

interface TournamentCardProps {
  tournament: Tournament
}

const tournamentImageUrls: Record<number, string> = {
  1: initiationImage,
  2: phantomStrikeImage,
  3: shadowRushImage,
  4: vanguardOpenImage,
  5: neonClashImage,
  6: radiantTrialsImage,
  7: crimsonCrownImage,
  8: obsidianCupImage,
  9: fallenLegendsImage,
  10: ironEclipseImage,
  11: ashenDuelImage,
  12: nightfallSeriesImage,
  13: scarletPairImage,
  14: frostbiteArenaImage,
  15: voidRunnersImage,
  16: legionAscentImage,
  17: emberDuoImage,
  18: sovereignFiveImage,
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  const details = [
    { label: 'STARTS IN', value: tournament.startsIn },
    { label: 'TEAMS', value: String(tournament.teams) },
    { label: 'ENTRY FEE', value: tournament.entryFee },
    { label: 'PRIZE POOL', value: tournament.prizePool },
    { label: 'RANK', value: tournament.rank },
  ]

  return (
    <Panel className="group grid overflow-hidden md:grid-cols-[minmax(305px,1fr)_44%]">
      <div className="px-5 py-4 md:py-3.5 xl:px-7 xl:py-5 2xl:px-8 min-[1900px]:px-[70px] min-[1900px]:py-[32px]">
        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-crimson xl:text-[12px] 2xl:text-[13px] min-[1900px]:text-[16px]">
          {tournament.status}
        </p>
        <h3 className="text-[23px] font-medium leading-none text-arena-strong xl:text-[28px] 2xl:text-[31px] min-[1900px]:mt-2 min-[1900px]:text-[43px]">
          {tournament.title}
        </h3>
        <p className="mt-1.5 text-[10px] text-arena-muted xl:text-[12px] 2xl:text-[13px] min-[1900px]:mt-3 min-[1900px]:text-[19px]">
          {tournament.game} - {tournament.region} - {tournament.gameMode}
        </p>
        <div className="mt-3.5 grid grid-cols-5 gap-2 xl:mt-5 min-[1900px]:mt-[26px]">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="text-[7px] font-semibold text-arena-dim xl:text-[8px] 2xl:text-[9px] min-[1900px]:text-[12px]">
                {detail.label}
              </p>
              <p className="mt-1 text-[8px] font-medium text-arena-copy xl:text-[10px] 2xl:text-[11px] min-[1900px]:text-[14px]">
                {detail.label === 'RANK' ? (
                  <span className="font-heading">{detail.value}</span>
                ) : (
                  detail.value
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TournamentArtwork
        format={tournament.gameMode}
        game={tournament.game}
        imageUrl={tournamentImageUrls[tournament.id]}
        variant={tournament.artwork}
      />
    </Panel>
  )
}
