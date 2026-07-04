'use client'

import { useState } from 'react'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-posts'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const categories = [
  'All',
  "What's New",
  'Quick Guides',
  'Best Practices',
  'Privacy & Trust',
]

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section
      style={{ background: '#FFFFFF', fontFamily: I }}
    >
      {/* Header */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 pt-32 pb-10">
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 400,
            color: '#0F0E0D',
            fontFamily: H,
            lineHeight: 1.05,
            letterSpacing: '-0.5px',
            marginBottom: 16,
          }}
        >
          The A2V2 Blog
        </h1>
        <p
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: '#68655E',
            fontFamily: I,
            letterSpacing: '-0.3px',
            lineHeight: 1.6,
            maxWidth: 520,
            marginBottom: 0,
          }}
        >
          Guides, updates, and best practices for running a modern clinic.
        </p>
      </div>

      {/* Filters + Search */}
      <div
        className="mx-auto max-w-[1400px] px-6 md:px-8 pb-8"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((cat) => {
              const active = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: I,
                    padding: '6px 14px',
                    borderRadius: 999,
                    border: active ? '1px solid #0F0E0D' : '1px solid rgba(0,0,0,0.15)',
                    background: active ? '#0F0E0D' : 'transparent',
                    color: active ? '#ffffff' : '#68655E',
                    cursor: 'pointer',
                    transition: 'all 150ms',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.35)'
                      e.currentTarget.style.color = '#0F0E0D'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
                      e.currentTarget.style.color = '#68655E'
                    }
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative flex-shrink-0 w-full sm:w-[220px]">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'rgba(0,0,0,0.35)' }}
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
              className="w-full rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none"
              style={{
                background: 'rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.10)',
                color: '#0F0E0D',
                fontFamily: I,
              }}
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-12 md:py-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={post.href}
                className="flex flex-col group"
                style={{ textDecoration: 'none' }}
              >
                {/* Thumbnail */}
                <div style={{ borderRadius: 12, overflow: 'hidden', background: 'rgba(0,0,0,0.04)' }}>
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={600}
                      height={450}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      quality={100}
                      unoptimized
                    />
                  ) : (
                    <div className="w-full aspect-[4/3]" />
                  )}
                </div>

                {/* Category pill */}
                <span
                  className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                  style={{
                    border: '1px solid rgba(0,0,0,0.15)',
                    color: '#0F0E0D',
                    fontFamily: I,
                    fontWeight: 500,
                  }}
                >
                  {post.category}
                </span>

                {/* Title */}
                <h2
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#0F0E0D',
                    fontFamily: I,
                    lineHeight: 1.45,
                    margin: 0,
                    transition: 'color 150ms',
                  }}
                  className="group-hover:opacity-80"
                >
                  {post.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    marginTop: 8,
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: '#68655E',
                    fontFamily: I,
                    letterSpacing: '-0.1px',
                  }}
                >
                  {post.description}
                </p>

                {/* Read link */}
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: '#0F0E0D', fontFamily: I }}
                >
                  Read Post
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p
            className="py-20 text-center"
            style={{ color: '#68655E', fontFamily: I, fontSize: 15 }}
          >
            No posts found.
          </p>
        )}
      </div>
    </section>
  )
}
