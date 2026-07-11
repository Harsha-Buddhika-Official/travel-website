import { useCallback, useEffect, useRef, useState } from 'react'

export default function useToast() {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef(new Map())

  const removeToast = useCallback((id) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))

    const timer = timersRef.current.get(id)
    if (timer) {
      window.clearTimeout(timer)
      timersRef.current.delete(id)
    }
  }, [])

  const showToast = useCallback(
    (message, type = 'info', duration = 3500) => {
      const id = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`
      const toast = { id, message, type }

      setToasts((currentToasts) => [...currentToasts, toast])

      const timer = window.setTimeout(() => {
        removeToast(id)
      }, duration)

      timersRef.current.set(id, timer)

      return id
    },
    [removeToast],
  )

  const clearToasts = useCallback(() => {
    setToasts([])
    timersRef.current.forEach((timer) => window.clearTimeout(timer))
    timersRef.current.clear()
  }, [])

  useEffect(() => clearToasts, [clearToasts])

  return {
    toasts,
    showToast,
    removeToast,
    clearToasts,
  }
}
