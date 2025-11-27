import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { ChevronRight } from 'lucide-react'
import type { ResourcesContent, ResourceItem } from '@/types/content'

function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-purple-50 p-[3px] rounded-[12px] shadow-[0_0_2px_rgba(0,0,0,0.05)]">
        <div className="h-[150px] w-full">
          <div className="relative h-full w-full overflow-hidden bg-purple-100 rounded-10">
            <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
          </div>
        </div>
        <div className="px-5 py-6 flex flex-col gap-4">
          <div>
            <h3 className="text-[18px] leading-[28px] font-semibold text-neutral-900">{item.title}</h3>
          </div>
          <p className="text-[14px] leading-5 text-neutral-500">{item.description}</p>
          <div className="inline-flex items-center gap-1">
            <span className="text-[14px] leading-5 font-medium text-purple-600">{item.linkText}</span>
            <ChevronRight className="w-4 h-4 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Resources({ headline, subcopy, items }: ResourcesContent) {
  return (
    <Section id="resources">
      <div className="px-4 py-4">
        <div className="rounded-[2rem] bg-white px-6 md:px-[5%] py-6 md:py-32">
          <Container className="max-w-[1280px]">
            <div className="mx-auto flex flex-col items-center gap-16">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-center font-museo text-[36px] leading-[40px] md:text-[40px] text-purple-600">{headline}</h2>
                <p className="text-center text-[20px] leading-7 text-neutral-500">{subcopy}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {items.map((it, idx) => (
                  <ResourceCard key={idx} item={it} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  )
}
