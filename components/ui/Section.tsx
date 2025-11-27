import { ReactNode } from 'react'

export default function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`w-full scroll-mt-28 ${className}`}>
      {children}
    </section>
  )
}
