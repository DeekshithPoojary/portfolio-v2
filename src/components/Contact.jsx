import { useState } from 'react'
import Section, { Reveal } from './Section'
import Icon from './Icon'
import { profile } from '../data/profile'

const FORM_NAME = 'contact'

const details = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: 'pin', label: 'Location', value: profile.location },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    // Netlify Forms expects a urlencoded POST carrying the form's name.
    const body = new URLSearchParams(new FormData(form))
    body.set('form-name', FORM_NAME)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`Netlify responded ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Open to backend and Python roles, freelance work and interesting collaborations. Drop a note and I'll reply."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Details */}
        <Reveal>
          <div className="card flex h-full flex-col p-6 sm:p-7">
            <ul className="space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/8 text-accent">
                    <Icon name={item.icon} className="h-[1.05rem] w-[1.05rem]" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.68rem] tracking-[0.14em] text-dim uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block truncate text-[0.92rem] font-medium transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[0.92rem] font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="my-7 hairline" />

            <div>
              <p className="mb-3 font-mono text-[0.68rem] tracking-[0.14em] text-dim uppercase">
                Elsewhere
              </p>
              <div className="flex items-center gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    <Icon name={s.icon} className="h-[1.05rem] w-[1.05rem]" />
                  </a>
                ))}
              </div>
            </div>

            <a
              href={profile.resume}
              download
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-5 py-3 text-sm font-semibold transition-all hover:border-accent/50 hover:bg-surface"
            >
              <Icon name="download" className="h-4 w-4" />
              Download résumé (PDF)
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={90}>
          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="card p-6 sm:p-8"
          >
            {/* Required by Netlify when the form is rendered by JavaScript */}
            <input type="hidden" name="form-name" value={FORM_NAME} />
            {/* Spam trap — real people never fill a hidden field */}
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} />
              </label>
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="mt-5">
              <Field label="Subject" name="subject" placeholder="What's this about?" />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-[0.82rem] font-medium text-muted">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about the role, project or idea…"
                className="w-full resize-y rounded-xl border border-line bg-ink-2/70 px-4 py-3 text-[0.92rem] text-text placeholder:text-dim/70 transition-colors focus:border-accent/60 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 text-sm font-bold text-ink shadow-lg shadow-accent/20 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {sending ? (
                <>
                  <Icon name="spinner" className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Icon name="send" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-accent-3/25 bg-accent-3/8 px-4 py-3 text-[0.87rem] text-accent-3">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" />
                Thanks — your message is on its way. I&apos;ll get back to you shortly.
              </p>
            )}

            {status === 'error' && (
              <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#f0717840] bg-[#f0717812] px-4 py-3 text-[0.87rem] text-[#f07178]">
                <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  That didn&apos;t send. Please email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="font-semibold underline">
                    {profile.email}
                  </a>
                  .
                </span>
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[0.82rem] font-medium text-muted">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : 'off'}
        className="w-full rounded-xl border border-line bg-ink-2/70 px-4 py-3 text-[0.92rem] text-text placeholder:text-dim/70 transition-colors focus:border-accent/60 focus:outline-none"
      />
    </div>
  )
}
