import type { ReactNode, SVGProps } from 'react'

type IconName =
  | 'bell'
  | 'calendar'
  | 'coin'
  | 'filter'
  | 'globe'
  | 'logout'
  | 'mail'
  | 'pulse'
  | 'shield'
  | 'settings'
  | 'user'
  | 'users'

interface ArenaIconProps extends SVGProps<SVGSVGElement> {
  name: IconName
}

export function ArenaIcon({ name, ...props }: ArenaIconProps) {
  const shapes: Record<IconName, ReactNode> = {
    bell: (
      <>
        <path d="M6 10a6 6 0 0 1 12 0v4l2 3H4l2-3z" />
        <path d="M9.8 19a2.4 2.4 0 0 0 4.4 0" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v5M16 3v5M3 10h18" />
      </>
    ),
    coin: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.3 8.8c-.6-.5-1.4-.8-2.4-.8-1.3 0-2.2.7-2.2 1.8 0 2.8 5 1.2 5 4 0 1.2-1.1 2.2-2.8 2.2-1.1 0-2.1-.4-2.9-1M12 6.4v11.2" />
      </>
    ),
    filter: <path d="M3 5h18l-7 8v6l-4-2v-4z" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
    logout: (
      <>
        <path d="M10 4H5v16h5M14 16l4-4-4-4M8 12h10" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    pulse: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M7 12h3l2-4 2 8 2-4h2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5.2-3.2 8.3-8 10-4.8-1.7-8-4.8-8-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    settings: (
      <>
        <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z" />
        <path d="M19 12a7.2 7.2 0 0 0-.1-1.2l2-1.5-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14.2 3h-4.4l-.4 2.7a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.5a7.2 7.2 0 0 0 0 2.4l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 2 1.2l.4 2.7h4.4l.4-2.7a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="9" r="3.5" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M15 6.2a3.4 3.4 0 0 1 0 5.7M16.5 14a5.2 5.2 0 0 1 4 5" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {shapes[name]}
    </svg>
  )
}
