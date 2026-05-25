import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthField } from './AuthField'

export function RegistrationForm() {
  const [username, setUsername] = useState('')
  const [notice, setNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice(
      'Registration is unavailable in demo mode. Use the existing warrior account to log in.',
    )
  }

  return (
    <form className="mt-8 min-[1900px]:mt-[36px]" onSubmit={handleSubmit}>
      <div className="space-y-5 min-[1900px]:space-y-[22px]">
        <AuthField
          hint={`4 - 32 characters, letters, numbers and _                         ${username.length}/32`}
          label="USERNAME"
          maxLength={32}
          onChange={(event) => {
            setUsername(event.target.value)
            setNotice('')
          }}
          placeholder="Choose your warrior name"
          value={username}
        />
        <AuthField
          autoComplete="email"
          label="EMAIL"
          placeholder="Enter your email address"
          type="email"
        />
        <AuthField
          autoComplete="new-password"
          label="PASSWORD"
          placeholder="Create a strong password"
          type="password"
        />
        <AuthField
          autoComplete="new-password"
          label="CONFIRM PASSWORD"
          placeholder="Confirm your password"
          type="password"
        />
      </div>
      {notice && (
        <p className="mt-4 rounded border border-crimson/55 bg-crimson/10 px-4 py-3 text-[11px] text-red-300">
          {notice}
        </p>
      )}
      <button
        className="auth-submit mt-8 h-[58px] w-full rounded-[4px] border border-[#4c2628] font-display text-[23px] text-arena-strong transition-colors hover:border-crimson min-[1900px]:mt-[34px] min-[1900px]:h-[73px] min-[1900px]:text-[30px]"
        type="submit"
      >
        CONFIRM
      </button>
      <p className="mt-4 text-center text-[11px] text-arena-copy min-[1900px]:text-[14px]">
        Already a warrior?{' '}
        <Link className="font-semibold text-crimson" to="/login">
          LOGIN IN
        </Link>
      </p>
    </form>
  )
}
