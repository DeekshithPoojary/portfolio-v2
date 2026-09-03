import { useEffect, useState } from 'react'
import Icon from './Icon'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/90 text-muted backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:text-accent sm:right-8 sm:bottom-8 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Icon name="arrowUp" className="h-4 w-4" />
    </button>
  )
}
