import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import type { FooterContent } from '@/types/content'

export default function Footer({ backgroundImageUrl, logoSrc, wordmarkSrc, columns, cta, copyright }: FooterContent) {
  return (
    <Section>
      <div className="pt-24 px-6 md:px-[5%] rounded-t-[32px] bg-purple-900 relative overflow-hidden">
        {backgroundImageUrl ? (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image src={backgroundImageUrl} alt="Footer Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-transparent" />
          </div>
        ) : null}

        <Container className="max-w-[1280px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {columns.slice(0,2).map((col, idx) => (
                  <div key={idx} className="w-full max-w-[256px]">
                    <div>
                      <h4 className="text-white text-[16px] leading-6 font-semibold">{col.title}</h4>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                      {col.items.map((it, i) => (
                        <div key={i} className="text-neutral-400 text-[16px] leading-6 hover:text-white transition-colors cursor-pointer">{it.label}</div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex flex-col gap-4 md:col-span-2">
                  <div>
                    <h4 className="text-white text-[16px] leading-6 font-semibold">{cta.title}</h4>
                  </div>
                  <div className="pt-2 pb-6 flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <div className="relative h-14 w-full sm:flex-1 min-w-0 bg-white rounded-[10px] focus-within:ring-2 focus-within:ring-purple-400 focus-within:ring-offset-2 focus-within:ring-offset-purple-900">
                        <Input
                          type="email"
                          placeholder={cta.emailPlaceholder}
                          className="h-full bg-transparent focus:ring-0 focus:ring-offset-0"
                        />
                      </div>
                      <Button variant="white" className="h-14 w-full sm:w-auto text-[16px] leading-6">
                        {cta.ctaText}
                      </Button>
                    </div>
                    <div className="flex justify-center sm:justify-start">
                      <p className="text-neutral-400 text-[14px] leading-5 text-center sm:text-left">{cta.note}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-purple-600">
                <div className="flex justify-center">
                  <p className="text-neutral-400 text-[16px] leading-6">{copyright}</p>
                </div>
              </div>

              <div className="h-[230px] overflow-hidden">
                <div className="relative w-full h-full">
                  {wordmarkSrc ? (
                    <Image src={wordmarkSrc} alt="Ayika wordmark" fill className="object-contain object-bottom" />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  )
}