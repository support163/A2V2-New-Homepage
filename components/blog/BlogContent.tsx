'use client'

import { useState } from 'react'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-posts'

const categories = [
  'All Category',
  "What's New",
  'Quick Guides',
  'Best Practices',
  'Privacy & Trust',
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
    <section
      className="pt-[88px] pb-8 md:pb-section-y min-h-screen"
      style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        {/* ── Mobile: Title + categories on top ── */}
        <div className="block md:hidden">
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-semibold leading-tight text-white">
              The Latest from A2V2.
            </h1>
            <p className="mt-4 text-btn leading-relaxed max-w-[480px] mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Guides, research, and updates on HIPAA-compliant AI for healthcare clinics — patient retention, protocol automation, and AI-assisted care.
            </p>
          </div>

          {/* Mobile Search */}
          <div className="mb-4">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#ffffff',
                }}
              />
            </div>
          </div>

          {/* Mobile horizontal scrollable categories */}
          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors"
                  style={
                    activeCategory === cat
                      ? { background: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }
                      : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.08)' }
                  }
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
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#ffffff',
                }}
              />
            </div>

            {/* Categories */}
            <p
              className="text-xs font-medium uppercase tracking-wider mb-3"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Categories
            </p>
            <nav className="flex flex-col gap-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="text-left text-sm py-2 px-3 rounded-lg w-full transition-colors"
                  style={
                    activeCategory === cat
                      ? { background: 'rgba(255,255,255,0.08)', color: '#ffffff' }
                      : { color: 'rgba(255,255,255,0.6)', background: 'transparent' }
                  }
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.color = '#ffffff'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Title — desktop only */}
            <div className="hidden md:block mb-10">
              <h1 className="text-[32px] md:text-h1 font-semibold leading-tight text-white">
                The Latest from A2V2.
              </h1>
              <p
                className="mt-4 text-btn md:text-body-lg leading-relaxed max-w-[600px]"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Guides, research, and updates on HIPAA-compliant AI for healthcare clinics — patient retention, protocol automation, and AI-assisted care.
              </p>
            </div>

            {/* Blog post grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.href}
                  className="flex flex-col"
                >
                  {/* Thumbnail */}
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={600}
                      height={450}
                      className="w-full aspect-[4/3] rounded-2xl object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  )}

                  {/* Category pill */}
                  <span
                    className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {post.category}
                  </span>

                  <h2 className="text-base font-semibold text-white leading-snug">
                    {post.title}
                  </h2>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    Read Post
                    <svg
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
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
              <p className="text-center py-20" style={{ color: 'rgba(255,255,255,0.5)' }}>
                No posts found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
