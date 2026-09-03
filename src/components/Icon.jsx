/**
 * Inline SVG icon set (stroke-based, 24x24 grid).
 * Kept local so the site ships with zero icon dependencies.
 */
const paths = {
  github: (
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 4.94-2.22 4.94-6a4.67 4.67 0 0 0-1.3-3.22 4.36 4.36 0 0 0-.08-3.23s-1.28-.37-4.2 1.6a12.1 12.1 0 0 0-6.24 0C6.26 1.7 4.98 2.07 4.98 2.07a4.36 4.36 0 0 0-.08 3.23A4.67 4.67 0 0 0 3.6 8.55c0 3.75 1.8 5.62 4.94 5.97a3.37 3.37 0 0 0-.94 2.61V21"
      strokeWidth="1.7"
    />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" strokeWidth="1.7" />
      <rect x="2" y="9" width="4" height="12" rx="1" strokeWidth="1.7" />
      <circle cx="4" cy="4" r="2" strokeWidth="1.7" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2.5" strokeWidth="1.7" />
      <path d="m3 7 8.2 5.9a1.4 1.4 0 0 0 1.6 0L21 7" strokeWidth="1.7" />
    </>
  ),
  phone: (
    <path
      d="M4.5 3h3l1.6 4-2.1 1.5a12 12 0 0 0 5.5 5.5L14 11.9l4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3Z"
      strokeWidth="1.7"
    />
  ),
  pin: (
    <>
      <path d="M20 10c0 5.2-6.3 10.6-8 11.9-1.7-1.3-8-6.7-8-11.9a8 8 0 1 1 16 0Z" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.6" strokeWidth="1.7" />
    </>
  ),
  download: (
    <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" strokeWidth="1.7" />
  ),
  arrowRight: <path d="M4 12h15m0 0-6-6m6 6-6 6" strokeWidth="1.7" />,
  arrowUpRight: <path d="M7 17 17 7m0 0h-7m7 0v7" strokeWidth="1.7" />,
  arrowUp: <path d="M12 20V4m0 0 6 6m-6-6-6 6" strokeWidth="1.7" />,
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" strokeWidth="1.7" />,
  server: (
    <>
      <rect x="2.5" y="3" width="19" height="7" rx="2" strokeWidth="1.7" />
      <rect x="2.5" y="14" width="19" height="7" rx="2" strokeWidth="1.7" />
      <path d="M6.5 6.5h.01M6.5 17.5h.01" strokeWidth="2.2" />
    </>
  ),
  chart: <path d="M4 20V4m0 16h16M8 16v-5m4.5 5V7m4.5 9v-7" strokeWidth="1.7" />,
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" strokeWidth="1.7" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" strokeWidth="1.7" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="1.7" />
      <rect x="10" y="10" width="4" height="4" rx="0.7" strokeWidth="1.7" />
      <path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3" strokeWidth="1.7" />
    </>
  ),
  terminal: <path d="M6 8.5l3.5 3.5L6 15.5M12.5 16H18M3 4h18v16H3z" strokeWidth="1.7" />,
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2.5" strokeWidth="1.7" />
      <path d="M8.5 7V5.5A2 2 0 0 1 10.5 3.5h3a2 2 0 0 1 2 2V7M2.5 12.5h19" strokeWidth="1.7" />
    </>
  ),
  graduation: (
    <path d="M12 3 2 8l10 5 10-5-10-5Zm8 6.5V15c0 1.7-3.6 3.5-8 3.5S4 16.7 4 15V9.5" strokeWidth="1.7" />
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" strokeWidth="1.7" />
      <path d="m8.2 14.2-1.7 7 5.5-3 5.5 3-1.7-7" strokeWidth="1.7" />
    </>
  ),
  trophy: (
    <path
      d="M8 4h8v6a4 4 0 0 1-8 0V4Zm0 2H5.5A2.5 2.5 0 0 0 8 10.5M16 6h2.5A2.5 2.5 0 0 1 16 10.5M12 14v3m-3.5 3h7"
      strokeWidth="1.7"
    />
  ),
  quote: (
    <path
      d="M9.5 6C6.5 7 5 9.4 5 13v5h5v-6H7.6c.2-2.2 1.1-3.6 2.9-4.3L9.5 6Zm9 0c-3 1-4.5 3.4-4.5 7v5h5v-6h-2.4c.2-2.2 1.1-3.6 2.9-4.3L18.5 6Z"
      strokeWidth="1.4"
    />
  ),
  sparkles: (
    <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3Zm7 9.5.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" strokeWidth="1.5" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" strokeWidth="1.7" />
      <path d="m16.5 16.5 4 4M8.5 11h5m-2.5-2.5v5" strokeWidth="1.7" />
    </>
  ),
  shield: <path d="M12 3l8 3v6c0 4.4-3.2 7.9-8 9-4.8-1.1-8-4.6-8-9V6l8-3Zm-3 8.5 2.2 2.2L15.5 10" strokeWidth="1.7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" />,
  close: <path d="M6 6l12 12M18 6 6 18" strokeWidth="1.8" />,
  check: <path d="m4 12.5 5 5L20 6.5" strokeWidth="1.9" />,
  send: <path d="M4.5 12 20 4.5 14 20l-2.6-5.4L4.5 12Z" strokeWidth="1.7" />,
  spinner: <path d="M12 3a9 9 0 1 0 9 9" strokeWidth="2" />,
  alert: <path d="M12 8v5m0 3.5h.01M12 3 2 20h20L12 3Z" strokeWidth="1.7" />,
}

export default function Icon({ name, className = 'h-5 w-5', ...rest }) {
  const glyph = paths[name]
  if (!glyph) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {glyph}
    </svg>
  )
}
