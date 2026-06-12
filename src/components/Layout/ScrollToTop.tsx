import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Dynamic SEO Title management
    const routeTitles: Record<string, string> = {
      '/': 'Lucky 4U Holdings | Global Investment & Operating Group Dubai',
      '/about': 'About Us | Lucky 4U Holdings',
      '/portfolio': 'Our Portfolio & Direct Investments | Lucky 4U Holdings',
      '/philosophy': 'Our Investment Philosophy | Lucky 4U Holdings',
      '/contact': 'Partner With Us | Lucky 4U Holdings',
    }

    document.title = routeTitles[pathname] || 'Lucky 4U Holdings'
  }, [pathname])

  return null
}
