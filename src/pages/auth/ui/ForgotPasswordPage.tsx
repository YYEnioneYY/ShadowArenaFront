import { useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../../features/auth/model/useAuth'
import { AuthField } from '../../../features/auth/ui/AuthField'
import { AuthHomeLink } from '../../../features/auth/ui/AuthHomeLink'
import { AuthBrandPanel } from '../../../widgets/auth-brand-panel/ui/AuthBrandPanel'

export function ForgotPasswordPage() {
  const { isAuthenticated } = useAuth()
  const [email, setEmail] = useState('')
  const [notice, setNotice] = useState('')

  if (isAuthenticated) {
    return <Navigate replace to="/" />
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice('Recovery instructions were sent to your email in demo mode.')
  }

  return (
    <main className="auth-scene flex min-h-screen items-center justify-center p-4 md:p-8 min-[1900px]:p-[54px]">
      <div className="auth-forest-shadow" />
      <AuthHomeLink />
      <div className="auth-frame relative z-10 grid w-full max-w-[1167px] overflow-hidden rounded-[34px] border border-[#707276] md:grid-cols-[42%_58%] min-[1900px]:max-w-[1167px]">
        <AuthBrandPanel mode="login" />
        <section className="auth-form-card m-4 rounded-[30px] border border-arena-line p-6 md:m-[26px] md:ml-0 md:p-8 lg:p-[32px] min-[1900px]:m-[26px] min-[1900px]:ml-0 min-[1900px]:p-[32px]">
          <Link
            className="text-[10px] font-semibold text-crimson transition-colors hover:text-red-400 min-[1900px]:text-[13px]"
            to="/login"
          >
            BACK TO LOGIN
          </Link>
          <header className="mt-12 min-[1900px]:mt-[54px]">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-crimson min-[1900px]:text-[13px]">
              ACCOUNT RECOVERY
            </p>
            <h2 className="mt-3 font-display text-[23px] text-arena-strong md:text-[26px] min-[1900px]:text-[30px]">
              RESTORE YOUR ACCESS
            </h2>
            <p className="mt-2 max-w-[440px] text-[12px] leading-[1.7] text-arena-copy min-[1900px]:text-[14px]">
              Enter your account email and we will send instructions to reset
              your password.
            </p>
          </header>
          <form className="mt-9 min-[1900px]:mt-[42px]" onSubmit={handleSubmit}>
            <AuthField
              autoComplete="email"
              icon="mail"
              label="EMAIL"
              onChange={(event) => {
                setEmail(event.target.value)
                setNotice('')
              }}
              placeholder="Enter your email address"
              required
              type="email"
              value={email}
            />
            {notice && (
              <p className="mt-5 rounded border border-crimson/55 bg-crimson/10 px-4 py-3 text-[11px] leading-relaxed text-red-300">
                {notice}
              </p>
            )}
            <button
              className="auth-submit mt-9 h-[58px] w-full rounded-[4px] border border-[#4c2628] font-display text-[22px] text-arena-strong transition-colors hover:border-crimson min-[1900px]:mt-[40px] min-[1900px]:h-[73px] min-[1900px]:text-[29px]"
              type="submit"
            >
              SEND RESET LINK
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
