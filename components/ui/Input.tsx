import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = '', ...props }: Props) {
  const base = 'w-full rounded-[10px] px-4 text-sm text-neutral-500 outline-none placeholder:text-neutral-400 transition-all duration-200'
  const focus = 'focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white'
  return <input className={`${base} ${focus} ${className}`} {...props} />
}
