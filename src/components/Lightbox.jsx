import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

/**
 * Full-screen viewer for a credential.
 * Tabs between documents when a credential has more than one scan.
 * Closes on Escape, on backdrop click, or via the close button.
 */
export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null)
  const [index, setIndex] = useState(0)

  // Always open on the first document, even when reopening a different card.
  useEffect(() => setIndex(0), [item])

  useEffect(() => {
    if (!item) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    // Freeze the page behind the overlay and move focus into it.
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [item, onClose])

  if (!item) return null

  const documents = item.documents ?? []
  const current = documents[index] ?? documents[0]
  const src = current?.src ?? item.badge

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} credential`}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
          <div className="min-w-0">
            <h3 className="truncate text-[0.98rem] font-bold">{item.title}</h3>
            <p className="mt-0.5 truncate text-[0.8rem] text-dim">
              {item.issuer}
              {item.date ? ` · ${item.date}` : ''}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {item.verify && (
              <a
                href={item.verify}
                target="_blank"
                rel="noreferrer noopener"
                className="hidden items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-[0.8rem] font-semibold text-accent transition-colors hover:bg-accent/20 sm:inline-flex"
              >
                <Icon name="shield" className="h-3.5 w-3.5" />
                Verify
              </a>
            )}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Only worth showing when there's a choice to make */}
        {documents.length > 1 && (
          <div className="flex gap-1.5 border-b border-line px-5 py-3">
            {documents.map((doc, i) => (
              <button
                key={doc.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={`rounded-full border px-3.5 py-1.5 text-[0.78rem] font-semibold transition-colors ${
                  i === index
                    ? 'border-accent/40 bg-accent/12 text-accent'
                    : 'border-line text-muted hover:text-text'
                }`}
              >
                {doc.label}
              </button>
            ))}
          </div>
        )}

        {/* Neutral light backing — certificates are printed on white */}
        <div className="flex items-center justify-center overflow-auto bg-[#f6f7fb] p-3 sm:p-6">
          <img
            key={src}
            src={src}
            alt={`${item.title} — ${current?.label ?? 'badge'}, issued by ${item.issuer}`}
            className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  )
}
