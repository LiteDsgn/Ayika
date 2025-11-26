"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Community', href: '#community' },
  { label: 'Blog', href: '#resources' },
  { label: 'FAQ', href: '#faq' }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const base = 'w-full mx-auto max-w-screen-xl px-6 py-[18px] rounded-[12px] flex items-center justify-between transition-all duration-300'
  // Use explicit hex/rgba to ensure opacity works as intended
  // purple-100 is #F0EBF8 (240, 235, 248)
  const atTop = 'bg-[#F0EBF8] shadow-[0_0_2px_rgba(0,0,0,0.05)]'
  const onScrollCls = 'bg-[rgba(240,235,248,0.95)] backdrop-blur-sm shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10)]'

  return (
    <>
      {/* Spacer to prevent layout shift since Nav is fixed */}
      <div className="h-[100px] w-full" aria-hidden="true" />
      
      <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-[100px] pt-5 pb-1 pointer-events-none">
        <div className={`${base} ${scrolled ? onScrollCls : atTop} pointer-events-auto relative`}>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-[5px] overflow-hidden bg-purple-600">
                <Image src="https://placehold.co/26x27" alt="Ayika" width={26} height={27} className="absolute left-[6.25px] top-[6.25px]" />
              </div>
              <div className="inline-flex flex-col">
                <span className="font-museo text-[20px] leading-[28px] font-bold text-purple-600">Ayika</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link key={l.label} href={l.href} className="text-[16px] leading-6 font-normal text-neutral-900 hover:text-purple-600 transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button variant="white" className="h-10 rounded-[10px] text-[16px] leading-6 font-medium px-4 border border-purple-50">
                Join Waitlist
              </Button>
              <Button className="h-10 rounded-[10px] text-[14px] leading-5 font-medium px-4">
                Try Calculator
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-[12px] shadow-lg md:hidden flex flex-col gap-4 border border-purple-100">
              <nav className="flex flex-col gap-4">
                {links.map((l) => (
                  <Link 
                    key={l.label} 
                    href={l.href} 
                    className="text-[16px] leading-6 font-normal text-neutral-900 hover:text-purple-600 transition-colors py-2 border-b border-purple-50 last:border-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-2">
                <Button variant="secondary" className="h-10 w-full rounded-[10px] bg-purple-50 text-purple-600 text-[16px] leading-6 font-medium px-4">
                  Join Waitlist
                </Button>
                <Button className="h-10 w-full rounded-[10px] text-[14px] leading-5 font-medium px-4">
                  Try Calculator
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

