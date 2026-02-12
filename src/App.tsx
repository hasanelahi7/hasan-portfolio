import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Contact from './components/Contact'

/**
 * Main application component that manages theme and renders all sections
 * @returns Root application component with navigation, main content, and footer
 */
function App() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme || (prefersDark ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  /**
   * Toggles between light and dark theme
   * Saves preference to localStorage and updates DOM
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="min-h-screen">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>{t('footer.copyright')}</p>
      </footer>
    </div>
  )
}

export default App
