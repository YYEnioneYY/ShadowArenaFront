import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../features/auth/model/useAuth'
import { AuthHomeLink } from '../../../features/auth/ui/AuthHomeLink'
import { AuthTabs, type AuthMode } from '../../../features/auth/ui/AuthTabs'
import { LoginForm } from '../../../features/auth/ui/LoginForm'
import { RegistrationForm } from '../../../features/auth/ui/RegistrationForm'
import { AuthBrandPanel } from '../../../widgets/auth-brand-panel/ui/AuthBrandPanel'

interface AuthPageProps {
  mode: AuthMode
}

export function AuthPage({ mode }: AuthPageProps) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate replace to="/" />
  }

  return (
    <main className="auth-scene flex min-h-screen items-center justify-center p-4 md:p-8 min-[1900px]:p-[54px]">
      <div className="auth-forest-shadow" />
      <AuthHomeLink />
      <div className="auth-frame relative z-10 grid w-full max-w-[1167px] overflow-hidden rounded-[34px] border border-[#707276] md:grid-cols-[42%_58%] min-[1900px]:max-w-[1167px]">
        <AuthBrandPanel mode={mode} />
        <section className="auth-form-card m-4 rounded-[30px] border border-arena-line p-6 md:m-[26px] md:ml-0 md:p-8 lg:p-[32px] min-[1900px]:m-[26px] min-[1900px]:ml-0 min-[1900px]:p-[32px]">
          <AuthTabs mode={mode} />
          <header
            className={
              mode === 'login'
                ? 'mt-7 min-[1900px]:mt-[29px]'
                : 'mt-12 text-center min-[1900px]:mt-[51px]'
            }
          >
            <h2 className="font-display text-[23px] text-arena-strong md:text-[26px] min-[1900px]:text-[30px]">
              {mode === 'login'
                ? 'WELCOME BACK, WARRIOR'
                : 'BEGIN YOUR PATH'}
            </h2>
            <p className="mt-1 text-[12px] text-arena-copy min-[1900px]:text-[14px]">
              {mode === 'login'
                ? 'Login to continue your journey in the Arena.'
                : 'Create your identity and step into the Arena.'}
            </p>
          </header>
          {mode === 'login' ? <LoginForm /> : <RegistrationForm />}
        </section>
      </div>
    </main>
  )
}
