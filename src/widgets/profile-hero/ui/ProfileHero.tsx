import {
  mockProfileIdentity,
} from '../../../entities/account/model/mockAccountData'
import { useAuth } from '../../../features/auth/model/useAuth'
import { Panel } from '../../../shared/ui/Panel'

export function ProfileHero() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  const { profile } = user
  const progress =
    (mockProfileIdentity.experience / mockProfileIdentity.experienceTarget) * 100
  const identityDetails = [
    { label: 'WARRIOR ID', value: mockProfileIdentity.warriorId },
    { label: 'JOINED', value: mockProfileIdentity.joined },
    { label: 'LOCATION', value: mockProfileIdentity.location },
    { label: 'PLAY TIME', value: mockProfileIdentity.playTime },
  ]

  return (
    <Panel className="profile-banner relative min-h-[370px] overflow-hidden px-6 pb-6 pt-[215px] sm:min-h-[270px] sm:pl-[198px] sm:pt-[126px] xl:min-h-[302px] xl:pl-[222px] xl:pt-[145px] min-[1900px]:min-h-[356px] min-[1900px]:pl-[278px] min-[1900px]:pt-[170px]">
      <div className="profile-banner-art absolute inset-0" />
      <div className="profile-portrait absolute left-6 top-[54px] h-[145px] w-[145px] rounded-full border border-crimson sm:left-[32px] sm:top-[65px] xl:h-[172px] xl:w-[172px] min-[1900px]:left-[42px] min-[1900px]:top-[73px] min-[1900px]:h-[208px] min-[1900px]:w-[208px]" />
      <div className="relative z-10">
        <h1 className="font-display text-[27px] text-arena-strong xl:text-[34px] min-[1900px]:text-[45px]">
          {profile.name.toUpperCase()}
        </h1>
        <div className="mt-3 flex max-w-[440px] items-center justify-between gap-4 text-[9px] min-[1900px]:mt-[17px] min-[1900px]:max-w-[570px] min-[1900px]:text-[13px]">
          <span className="font-semibold text-crimson">LEVEL {profile.level}</span>
          <span className="text-arena-muted">
            {mockProfileIdentity.experience}/{mockProfileIdentity.experienceTarget}XP
          </span>
        </div>
        <div className="mt-1 h-[3px] max-w-[440px] bg-arena-outline min-[1900px]:max-w-[570px] min-[1900px]:h-[4px]">
          <div
            className="h-full bg-crimson shadow-[0_0_9px_rgb(229_30_45/0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-5 grid max-w-[510px] grid-cols-2 gap-3 sm:grid-cols-4 min-[1900px]:mt-[23px] min-[1900px]:max-w-[645px]">
          {identityDetails.map((detail) => (
            <div key={detail.label}>
              <p className="text-[7px] font-semibold text-arena-dim min-[1900px]:text-[10px]">
                {detail.label}
              </p>
              <p className="mt-1 text-[10px] text-arena-copy min-[1900px]:text-[14px]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  )
}
