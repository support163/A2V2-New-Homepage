'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ElementType } from 'react'

export interface FeatureItem {
  Icon: ElementType
  title: string
  description: string
}

export default function FeatureList({ features }: { features: FeatureItem[] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="flex flex-col gap-1.5 justify-center">
      {features.map((item, i) => {
        const { Icon } = item
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`rounded-xl transition-colors duration-200 ${isOpen ? 'bg-gray-50' : ''}`}
          >
            <button
              onClick={() => setOpen(i, isOpen)}
              className="flex items-center gap-2.5 w-full px-4 py-3 text-left cursor-pointer"
            >
              <Icon
                size={17}
                className={`flex-shrink-0 transition-colors duration-200 ${isOpen ? 'text-gray-700' : 'text-gray-400'}`}
              />
              <span className={`flex-1 text-sm font-semibold transition-colors duration-200 ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                {item.title}
              </span>
              <ChevronDown
                size={14}
                className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-4 pb-3 text-sm text-gray-500 leading-relaxed pl-[43px] transition-opacity duration-300 ease-out ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  function setOpen(i: number, isOpen: boolean) {
    if (!isOpen) setOpenIndex(i)
  }
}
