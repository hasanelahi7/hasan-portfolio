import { useState, useEffect } from 'react'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Hero section component with animated typing effect for role titles
 * Features profile image, call-to-action buttons, and social links
 * @returns Hero section with animated text and profile information
 */
export default function Hero() {
  const { t } = useTranslation()
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  /**
   * Typing animation effect that cycles through role titles
   * Types forward, pauses, deletes, then moves to next role
   */
  useEffect(() => {
    const roles = [
      t('hero.roles.software_engineer'),
      t('hero.roles.fullstack_developer'),
      t('hero.roles.uiux_designer'),
      t('hero.roles.ml_engineer'),
      t('hero.roles.data_scientist'),
      t('hero.roles.react_developer'),
    ]
    const currentWord = roles[currentRole]
    const typingSpeed = isDeleting ? 30 : 60
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        // Typing forward
        setDisplayText(currentWord.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end before deleting
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setDisplayText(currentWord.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentRole, t])

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center md:text-left space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {t('hero.greeting')}{' '}
              <span className="text-primary-600 dark:text-primary-400">
                {t('hero.name')}
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 min-h-[2rem]">
              {t('hero.role_prefix')}{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold inline-block">
                {displayText}
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <a
                href="#projects"
                className="px-7 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:scale-105 font-medium shadow-lg shadow-primary-600/30"
              >
                {t('hero.view_projects')}
              </a>
              <a
                href="#contact"
                className="px-7 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105 font-medium shadow-lg border border-gray-200 dark:border-gray-700"
              >
                {t('hero.get_in_touch')}
              </a>
              <a
                href="/CV.pdf"
                download="Hasan_Elahi_CV.pdf"
                className="px-7 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105 font-medium shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('hero.download_cv')}
              </a>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/hasanelahi7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sheikh-hasan-elahi-4b3180a3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:sheikh.hasan7@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400 shadow-2xl relative bg-gray-100 dark:bg-gray-800">
              <img
                src="/profile.jpg"
                alt="Hasan Elahi"
                className="w-full h-full object-cover"
                style={{
                  transform: 'scale(3) translateX(2%)',
                  objectPosition: 'center 70%',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
