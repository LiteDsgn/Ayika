import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'icon' | 'white'
}

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-10 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors'
  
  let styles = ''
  switch (variant) {
    case 'primary':
      styles = 'bg-purple-600 text-white hover:bg-purple-700 focus-visible:ring-purple-400 px-8 py-3'
      break
    case 'secondary':
      styles = 'bg-purple-50 text-purple-600 hover:bg-purple-100 focus-visible:ring-purple-200 px-8 py-3'
      break
    case 'white':
      styles = 'bg-white text-purple-600 hover:bg-neutral-100 focus-visible:ring-purple-200 px-8 py-3'
      break
    case 'icon':
      styles = 'p-2 text-purple-600 hover:bg-purple-50 focus-visible:ring-purple-200'
      break
  }

  return <button className={`${base} ${styles} ${className}`} {...props} />
}