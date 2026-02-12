import { useState } from 'react'
import { Sun, Moon, Menu, X, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface NavigationProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

/**
 * Navigation bar component with theme toggle, language switcher, and responsive menu
 * @param theme - Current theme ('light' or 'dark')
 * @param toggleTheme - Function to toggle theme
 * @returns Navigation component with links and controls
 */
export default function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  /**
   * Toggles between English and Norwegian language
   * Saves preference to localStorage
   */
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'nb' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#journey', label: t('nav.journey') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Hasan</span>
            {' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">Elahi</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1"
              aria-label="Toggle language"
              title={i18n.language === 'en' ? 'Switch to Norwegian' : 'Bytt til engelsk'}
            >
              <Languages className="w-5 h-5" />
              <span className="text-sm font-medium">{i18n.language === 'en' ? 'NB' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  theme === 'dark' ? 'translate-x-7' : ''
                }`}
              >
                {theme === 'light' ? (
                  <Sun className="w-4 h-4 text-yellow-500" fill="currentColor" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" fill="currentColor" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5" />
              <span className="text-xs font-medium">{i18n.language === 'en' ? 'NB' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  theme === 'dark' ? 'translate-x-7' : ''
                }`}
              >
                {theme === 'light' ? (
                  <Sun className="w-4 h-4 text-yellow-500" fill="currentColor" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" fill="currentColor" />
                )}
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
