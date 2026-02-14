import { useState } from 'react'
import { Github, ExternalLink, Package } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Projects section with tabbed interface to showcase portfolio work
 * Displays project details, technologies used, and links
 * @returns Projects section with tab navigation and project cards
 */
export default function Projects() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(0)

  const projects = [
    {
      key: 'elahi_ui',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vite'],
      imageUrl: '/storybook.svg',
      imageType: 'url' as const,
      github: 'https://github.com/hasanelahi7/elahi-ui',
      demo: 'https://elahi-ui.vercel.app/',
      npm: 'https://www.npmjs.com/package/elahi-ui',
    },
    {
      key: 'portfolio',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18n'],
      imageUrl: '/profile.jpg',
      imageType: 'url' as const,
      github: 'https://github.com/hasanelahi7/hasan-portfolio',
      demo: window.location.origin,
    },
    {
      key: 'kartverket',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Storybook'],
      image: '🗺️',
      imageType: 'emoji' as const,
      github: '',
      demo: '',
    },
    {
      key: 'brain_tumour',
      tech: ['Python', 'PyTorch', 'OpenCV', 'TensorFlow'],
      image: '🧠',
      imageType: 'emoji' as const,
      github: '',
      demo: '',
    },
    {
      key: 'annotation',
      tech: ['Python', 'Flask', 'SQL', 'APIs'],
      imageUrl: '/machine-learning.svg',
      imageType: 'url' as const,
      github: '',
      demo: '',
    },
    {
      key: 'fullstack_client',
      tech: ['React', 'Node.js', 'Firebase', 'APIs'],
      image: '💼',
      imageType: 'emoji' as const,
      github: '',
      demo: '',
    },
  ]

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center">
          {t('projects.title')} <span className="text-primary-600 dark:text-primary-400">{t('projects.title_highlight')}</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projects.map((project, index) => (
            <button
              key={project.key}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === index
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {t(`projects.items.${project.key}.title`)}
            </button>
          ))}
        </div>

        {/* Project Content */}
        <div className="p-8 bg-white rounded-lg shadow-xl dark:bg-gray-900">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <div className="flex items-center justify-center p-8 text-center rounded-lg text-9xl bg-gradient-to-br from-primary-400 to-primary-600">
                {projects[activeTab].imageType === 'emoji' ? (
                  projects[activeTab].image
                ) : projects[activeTab].key === 'portfolio' ? (
                  <div className="w-48 h-48 overflow-hidden bg-gray-100 border-4 border-white rounded-full shadow-xl dark:bg-gray-800">
                    <img
                      src={projects[activeTab].imageUrl}
                      alt={t(`projects.items.${projects[activeTab].key}.title`)}
                      className="object-cover w-full h-full"
                      style={{
                        transform: 'scale(3) translateX(2%)',
                        objectPosition: 'center 70%',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={projects[activeTab].imageUrl}
                    alt={t(`projects.items.${projects[activeTab].key}.title`)}
                    className="object-contain w-full h-full rounded-lg"
                    style={{ maxHeight: '200px' }}
                  />
                )}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-3xl font-bold">{t(`projects.items.${projects[activeTab].key}.title`)}</h3>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                {t(`projects.items.${projects[activeTab].key}.description`)}
              </p>
              <div className="mb-6">
                <h4 className="mb-2 font-semibold text-primary-600 dark:text-primary-400">
                  {t('projects.tech_used')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeTab].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {projects[activeTab].github && (
                  <a
                    href={projects[activeTab].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white transition-colors bg-gray-800 rounded-md shadow-sm dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-md"
                  >
                    <Github className="w-4 h-4" />
                    {t('projects.github')}
                  </a>
                )}
                {projects[activeTab].demo && (
                  <a
                    href={projects[activeTab].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white transition-colors rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 hover:shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.live_demo')}
                  </a>
                )}
                {projects[activeTab].npm && (
                  <a
                    href={projects[activeTab].npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white transition-colors bg-red-700 rounded-md shadow-sm hover:bg-red-600 hover:shadow-md"
                  >
                    <Package className="w-4 h-4" />
                    {t('projects.npm')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
          {t('projects.more_projects')}{' '}
          <a
            href="https://github.com/hasanelahi7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            {t('projects.github')}
          </a>
        </p>
      </div>
    </section>
  )
}
