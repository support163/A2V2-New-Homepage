'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = [
  'All Category',
  "What's New",
  'Quick Guides',
  'Best Practices',
  'Privacy & Trust',
]

const blogPosts = [
  {
    id: 1,
    title: 'The Silent Revenue Killer in Longevity Medicine—and What\'s Finally Fixing It',
    description:
      'Most longevity clinics don\'t have a patient acquisition problem. They have a patient disappearance problem.',
    category: 'Best Practices',
    href: '/blog/silent-revenue-killer-longevity-medicine',
    thumbnail: '/images/Blog_post_photo1.png',
  },
  {
    id: 2,
    title: 'From Chatbots to Smart AI Agents: Introducing the New A2V2 Platform',
    description:
      'The new A2V2 platform: AI agents built to elevate customer experiences.',
    category: 'Quick Guides',
    href: '#',
  },
  {
    id: 3,
    title: 'From Chatbots to Smart AI Agents: Introducing the New A2V2 Platform',
    description:
      'The new A2V2 platform: AI agents built to elevate customer experiences.',
    category: 'Best Practices',
    href: '#',
  },
  {
    id: 4,
    title: 'From Chatbots to Smart AI Agents: Introducing the New A2V2 Platform',
    description:
      'The new A2V2 platform: AI agents built to elevate customer experiences.',
    category: 'Privacy & Trust',
    href: '#',
  },
]

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('All Category')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All Category' || post.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
        {/* ── Mobile: Title + categories on top ── */}
        <div className="block md:hidden">
          <div data-animate="" className="text-center mb-8">
            <h1 className="text-[32px] font-bold text-text-primary leading-tight">
              The Latest from A2V2.
            </h1>
            <p className="mt-4 text-btn text-text-secondary leading-relaxed max-w-[480px] mx-auto">
              Explore news, updates, and guides on how to turn your bio into an
              AI-powered engagement tool.
            </p>
          </div>

          {/* Search */}
          <div className="mb-4">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Horizontal scrollable categories */}
          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-text-primary text-white'
                      : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                  }`}
                >
                  {cat === 'All Category' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Desktop: Two-column layout ── */}
        <div className="flex gap-12">
          {/* Left sidebar — desktop only */}
          <aside className="hidden md:block w-[200px] flex-shrink-0 sticky top-[88px] self-start">
            {/* Search */}
            <div className="relative mb-8">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-text-primary placeholder-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>

            {/* Categories */}
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
              Categories
            </p>
            <nav className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left text-sm py-1.5 pl-3 border-l-2 transition-colors ${
                    activeCategory === cat
                      ? 'border-primary font-bold text-text-primary'
                      : 'border-transparent text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Title — desktop only */}
            <div data-animate="" className="hidden md:block mb-10">
              <h1 className="text-[32px] md:text-h1 font-bold text-text-primary leading-tight">
                The Latest from A2V2.
              </h1>
              <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed max-w-[600px]">
                Explore news, updates, and guides on how to turn your bio into
                an AI-powered engagement tool.
              </p>
            </div>

            {/* Blog post grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, i) => (
                <a
                  key={post.id}
                  href={post.href}
                  className="flex flex-col rounded-xl transition-transform duration-200 hover:scale-[1.02]"
                >
                  {/* Thumbnail */}
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={600}
                      height={450}
                      className="w-full aspect-[4/3] rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl" />
                  )}

                  <h2 className="mt-4 text-btn md:text-body-lg font-bold text-text-primary leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-text-primary">
                    Read Post
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            {/* Empty state */}
            {filteredPosts.length === 0 && (
              <p className="text-center text-text-secondary py-20">
                No posts found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
