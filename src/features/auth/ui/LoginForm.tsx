import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import discordIcon from '../../../assets/auth/discord.svg'
import googleIcon from '../../../assets/auth/google.svg'
import steamIcon from '../../../assets/auth/steam.svg'
import { useAuth } from '../model/useAuth'
import { AuthField } from './AuthField'

interface ReturnLocationState {
  from?: string
}

const socialProviders = [
  { icon: discordIcon, label: 'Discord' },
  { icon: googleIcon, label: 'Google' },
  { icon: steamIcon, label: 'Steam' },
]

export function LoginForm() {
  const { login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = login({ email, password, remember })

    if (!result.success) {
      setError(result.message ?? 'Login failed.')
      return
    }

    const returnTo = (location.state as ReturnLocationState | null)?.from ?? '/'
    navigate(returnTo, { replace: true })
  }

  return (
    <form className="mt-8 min-[1900px]:mt-[38px]" onSubmit={handleSubmit}>
      <div className="space-y-6 min-[1900px]:space-y-[27px]">
        <AuthField
          autoComplete="email"
          icon="mail"
          label="EMAIL"
          onChange={(event) => {
            setEmail(event.target.value)
            setError('')
          }}
          placeholder="Enter your mail"
          type="email"
          value={email}
        />
        <AuthField
          autoComplete="current-password"
          icon="lock"
          label="PASSWORD"
          onChange={(event) => {
            setPassword(event.target.value)
            setError('')
          }}
          passwordToggle
          placeholder="Enter your password"
          type="password"
          value={password}
        />
      </div>
      <div className="mt-5 flex items-center justify-between text-[10px] font-semibold md:text-[11px] min-[1900px]:text-[13px]">
        <label className="flex cursor-pointer items-center gap-3 text-arena-copy">
          <span>REMEMBER ME</span>
          <input
            checked={remember}
            className="h-[20px] w-[20px] accent-crimson min-[1900px]:h-[25px] min-[1900px]:w-[25px]"
            onChange={(event) => setRemember(event.target.checked)}
            type="checkbox"
          />
        </label>
        <Link className="text-crimson hover:text-red-400" to="/forgot-password">
          FORGOT PASSWORD ?
        </Link>
      </div>
      {error && (
        <p className="mt-4 rounded border border-crimson/55 bg-crimson/10 px-4 py-3 text-[11px] text-red-300">
          {error}
        </p>
      )}
      <button
        className="auth-submit mt-11 h-[58px] w-full rounded-[4px] border border-[#4c2628] font-display text-[23px] text-arena-strong transition-colors hover:border-crimson md:mt-12 min-[1900px]:h-[73px] min-[1900px]:text-[30px]"
        type="submit"
      >
        LOGIN
      </button>
      <SocialLogin />
    </form>
  )
}

function SocialLogin() {
  return (
    <div className="mt-7">
      <div className="flex items-center gap-2 text-[9px] text-arena-copy min-[1900px]:text-[12px]">
        <span className="h-px flex-1 bg-arena-copy" />
        OR CONTINUE WITH
        <span className="h-px flex-1 bg-arena-copy" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-6 min-[1900px]:gap-[39px]">
        {socialProviders.map((provider) => (
          <button
            aria-label={`Continue with ${provider.label}`}
            className="flex h-[55px] items-center justify-center rounded-[4px] border border-arena-outline transition-colors hover:border-crimson hover:bg-crimson/10 min-[1900px]:h-[62px]"
            key={provider.label}
            type="button"
          >
            <img
              alt=""
              aria-hidden="true"
              className="h-[31px] w-[31px] object-contain min-[1900px]:h-[38px] min-[1900px]:w-[38px]"
              draggable={false}
              src={provider.icon}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
