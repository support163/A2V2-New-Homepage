'use client'

import { useEffect } from 'react'
import { CHAT_WIDGET_URL, CHATBOT_ID } from '@/lib/constants'

export default function ChatWidget() {
  useEffect(() => {
    ;(window as any).A2V2WidgetConfig = {
      chatbotId: CHATBOT_ID,
      position: 'bottom-right',
    }

    const script = document.createElement('script')
    script.src = CHAT_WIDGET_URL
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
