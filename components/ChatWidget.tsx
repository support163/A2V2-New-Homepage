'use client'

import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    ;(window as any).A2V2WidgetConfig = {
      chatbotId: '6997ccdf7498815679b412d8',
      position: 'bottom-right',
    }

    const script = document.createElement('script')
    script.src = 'https://chat-widget.a2v2.ai/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
