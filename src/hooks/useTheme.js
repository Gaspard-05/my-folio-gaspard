import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

const getStoredTheme = () => {
  if (typeof window === 'undefined') return 'system'

  const storedTheme = window.localStorage.getItem(STORAGE_KEY)
  if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
    return storedTheme
  }

  return 'system'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)
  const [resolvedTheme, setResolvedTheme] = useState('light')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (nextTheme) => {
      const resolved = nextTheme === 'system'
        ? (media.matches ? 'dark' : 'light')
        : nextTheme

      setResolvedTheme(resolved)
      document.documentElement.classList.toggle('dark', resolved === 'dark')
      document.documentElement.style.colorScheme = resolved === 'dark' ? 'dark' : 'light'
    }

    applyTheme(theme)

    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }

    media.addEventListener?.('change', handleChange)

    return () => media.removeEventListener?.('change', handleChange)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = window.localStorage.getItem(STORAGE_KEY)
    if (!storedTheme) {
      window.localStorage.setItem(STORAGE_KEY, 'system')
      setTheme('system')
    }
  }, [])

  const cycleTheme = () => {
    setTheme((current) => {
      if (current === 'light') return 'dark'
      if (current === 'dark') return 'system'
      return 'light'
    })
  }

  return { theme, resolvedTheme, setTheme, cycleTheme }
}
