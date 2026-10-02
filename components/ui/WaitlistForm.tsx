"use client"
import { FormEvent, useId, useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

// Must match the form declared in public/__forms.html, which is what Netlify scans at deploy time.
const FORM_NAME = 'waitlist'
const FORM_ENDPOINT = '/__forms.html'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Props = {
  source: string
  placeholder: string
  ctaText: string
  tone?: 'light' | 'dark'
  buttonVariant?: 'primary' | 'white'
  inputWrapperClassName?: string
  inputClassName?: string
  buttonClassName?: string
}

export default function WaitlistForm({
  source,
  placeholder,
  ctaText,
  tone = 'light',
  buttonVariant = 'primary',
  inputWrapperClassName,
  inputClassName = '',
  buttonClassName = ''
}: Props) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return
    const data = new FormData(e.currentTarget)
    const body = new URLSearchParams()
    data.forEach((value, key) => body.append(key, String(value)))

    setStatus('submitting')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      })
      if (!res.ok) throw new Error(`Waitlist submit failed: ${res.status}`)
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const successColor = tone === 'dark' ? 'text-white' : 'text-purple-600'
  const errorColor = tone === 'dark' ? 'text-red-300' : 'text-red-700'

  const input = (
    <Input
      id={`${id}-email`}
      type="email"
      name="email"
      required
      autoComplete="email"
      placeholder={placeholder}
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
        if (status !== 'idle') setStatus('idle')
      }}
      disabled={status === 'submitting'}
      aria-describedby={`${id}-status`}
      className={inputClassName}
    />
  )

  return (
    <form name={FORM_NAME} onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="source" value={source} />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        {inputWrapperClassName ? <div className={inputWrapperClassName}>{input}</div> : input}
        <Button
          type="submit"
          variant={buttonVariant}
          disabled={status === 'submitting'}
          className={`disabled:opacity-70 disabled:cursor-not-allowed ${buttonClassName}`}
        >
          {status === 'submitting' ? 'Joining…' : ctaText}
        </Button>
      </div>
      <p id={`${id}-status`} role="status" aria-live="polite" className={`text-sm empty:hidden ${status === 'error' ? errorColor : successColor}`}>
        {status === 'success' ? "You're on the list. We'll email you when early access opens." : null}
        {status === 'error' ? 'Something went wrong. Please try again.' : null}
      </p>
    </form>
  )
}
