'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { MessageCircle, ShieldCheck, ArrowUpRight, ArrowUp } from 'lucide-react'

const CONVERSATION = [
  { role: 'ai' as const,      text: "Hi Sarah! How are you feeling after your NAD+ infusion yesterday?" },
  { role: 'patient' as const, text: "Pretty good, but I've had a mild headache since this morning." },
  { role: 'ai' as const,      text: "That's very common in the first few sessions and usually resolves within 24 to 48 hours. Are you staying hydrated? Aim for at least 80oz of water today." },
  { role: 'patient' as const, text: "Yes, drinking plenty. Should I be worried?" },
  { role: 'ai' as const,      text: "Not at all. Headaches are a normal response as your body adjusts. I'll note this for Dr. Martinez to review at your next visit. Anything else I can help with?" },
  { role: 'patient' as const, text: "Nope, that's all. Thanks!" },
  { role: 'ai' as const,      text: "You're all set. See you Thursday for session 3!" },
]

type Message = { role: 'ai' | 'patient'; text: string; key: number }

const POINTS = [
  { Icon: MessageCircle, text: "Responds in your clinic's voice, 24/7" },
  { Icon: ShieldCheck,   text: 'HIPAA-compliant conversations' },
  { Icon: ArrowUpRight,  text: 'Escalates to your team when it matters' },
]

export default function TestHomepage2ChatSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted]   = useState(false)

  const sectionRef      = useRef<HTMLDivElement>(null)
  // Ref to the scrollable messages container — we set scrollTop directly, never scrollIntoView
  const msgsContainerRef = useRef<HTMLDivElement>(null)
  const generationRef    = useRef(0)

  // One-shot IntersectionObserver — starts the loop on first scroll-into-view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Conversation loop — restarts on completion, cancels on unmount
  useEffect(() => {
    if (!started) return
    const gen = ++generationRef.current
    const valid = () => generationRef.current === gen
    const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms))

    async function run() {
      setMessages([])
      setIsTyping(false)

      for (let i = 0; i < CONVERSATION.length; i++) {
        if (!valid()) return
        const msg = CONVERSATION[i]

        if (msg.role === 'ai') {
          setIsTyping(true)
          await delay(1300)
          if (!valid()) return
          setIsTyping(false)
          await delay(60)
        } else {
          await delay(700)
        }

        if (!valid()) return
        setMessages((prev) => [...prev, { ...msg, key: i }])
        await delay(900)
      }

      await delay(3000)
      if (!valid()) return
      run()
    }

    run()
    return () => { generationRef.current++ }
  }, [started])

  // Scroll only the messages container — never the page
  useEffect(() => {
    const el = msgsContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isTyping])

  return (
    <section ref={sectionRef} className="w-full" style={{ background: '#ffffff' }}>
      <style>{`
        @keyframes msg-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tdot {
          0%, 60%, 100% { transform: translateY(0);    opacity: 0.35; }
          30%            { transform: translateY(-4px); opacity: 1;    }
        }
        .chat-msg-in { animation: msg-in 280ms ease forwards; }
        .chat-tdot   { animation: tdot 1.1s ease-in-out infinite; }
        .chat-msgs::-webkit-scrollbar { display: none; }
        .chat-msgs   { scrollbar-width: none; }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
        <div
          className="flex flex-col md:grid gap-12 items-start"
          style={{ gridTemplateColumns: '40% 60%' }}
        >

          {/* LEFT — header + points */}
          <div style={{ minWidth: 0 }}>
            <h2
              className="font-normal leading-[1.05]"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#0F0E0D',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              Conversations that keep patients engaged
            </h2>
            <p
              className="leading-relaxed"
              style={{
                marginTop: 20,
                fontSize: 16,
                fontWeight: 500,
                color: '#68655E',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.3px',
              }}
            >
              Your AI answers patient questions, checks in after treatments, and handles routine
              communication in your clinic&apos;s voice. Anything clinical escalates to your team.
            </p>

            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {POINTS.map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={16} color="#0F0E0D" style={{ flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#0F0E0D',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — chat card floating on background image, bottom cut off */}
          <div
            className="relative overflow-hidden"
            style={{
              height: 760,
              minWidth: 0,
              contain: 'layout',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: 105,
              paddingLeft: 28,
              paddingRight: 28,
            }}
          >
            {/* Background image */}
            <Image
              src="/images/Background-website-3.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              unoptimized
            />

            {/* Gradient border wrapper — explicit height matches card + 2px padding each side */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 480,
                height: 724,
                flexShrink: 0,
                borderRadius: 20,
                padding: 2,
                background: 'linear-gradient(135deg, #F5A623, #EF8A3E, #E05A2B, #9B5CFF, #7C5CFC)',
                boxShadow: '0 0 40px rgba(239,138,62,0.22), 0 0 70px rgba(124,92,252,0.18)',
              }}
            >

            {/* Chat card — all three size props pin it so typing-state reflows can't change its height */}
            <div
              style={{
                width: '100%',
                height: 720,
                minHeight: 720,
                maxHeight: 720,
                background: '#ffffff',
                borderRadius: 18,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >

              {/* Header */}
              <div
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/profile-image1.jpg"
                    alt="A2V2 Care Assistant"
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#0F0E0D',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    A2V2 Care Assistant
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                    <div
                      style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }}
                    />
                    <span
                      style={{ fontSize: 11, color: '#68655E', fontFamily: "'Inter', sans-serif" }}
                    >
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages — explicit height so typing-state changes can't affect card size */}
              <div
                ref={msgsContainerRef}
                className="chat-msgs"
                style={{
                  flex: 1,
                  minHeight: 0,
                  padding: '16px',
                  overflowY: 'scroll',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.key}
                    className="chat-msg-in"
                    style={{
                      display: 'flex',
                      justifyContent: msg.role === 'patient' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '75%',
                        padding: '10px 14px',
                        borderRadius:
                          msg.role === 'patient'
                            ? '18px 18px 4px 18px'
                            : '18px 18px 18px 4px',
                        background: msg.role === 'patient' ? '#0F0E0D' : 'rgba(0,0,0,0.05)',
                        color: msg.role === 'patient' ? '#ffffff' : '#0F0E0D',
                        fontSize: 14,
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1.5,
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div
                      style={{
                        padding: '12px 14px',
                        borderRadius: '18px 18px 18px 4px',
                        background: 'rgba(0,0,0,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                      }}
                    >
                      {[0, 160, 320].map((d) => (
                        <div
                          key={d}
                          className="chat-tdot"
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            background: 'rgba(0,0,0,0.4)',
                            animationDelay: `${d}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div
                style={{
                  padding: '10px 12px',
                  borderTop: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    borderRadius: 999,
                    background: 'rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    padding: '9px 16px',
                    fontSize: 14,
                    color: 'rgba(0,0,0,0.3)',
                    fontFamily: "'Inter', sans-serif",
                    userSelect: 'none',
                  }}
                >
                  Type a message...
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#0F0E0D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ArrowUp size={16} color="#ffffff" />
                </div>
              </div>

            </div>
            </div>{/* end gradient wrapper */}
          </div>

        </div>
      </div>
    </section>
  )
}
