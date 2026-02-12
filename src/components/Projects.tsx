import { useState } from 'react'
import { Github } from 'lucide-react'
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
      key: 'kartverket',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Storybook'],
      image: '🗺️',
      github: '',
      demo: '',
    },
    {
      key: 'brain_tumour',
      tech: ['Python', 'PyTorch', 'OpenCV', 'TensorFlow'],
      image: '🧠',
      github: '',
      demo: '',
    },
    {
      key: 'annotation',
      tech: ['Python', 'Flask', 'SQL', 'APIs'],
      image: '🏷️',
      github: '',
      demo: '',
    },
    {
      key: 'fullstack_client',
      tech: ['React', 'Node.js', 'Firebase', 'APIs'],
      image: '💼',
      github: '',
      demo: '',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
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
        <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <div className="text-9xl text-center bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg p-8">
                {projects[activeTab].image}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">{t(`projects.items.${projects[activeTab].key}.title`)}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {t(`projects.items.${projects[activeTab].key}.description`)}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary-600 dark:text-primary-400">
                  {t('projects.tech_used')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeTab].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {projects[activeTab].github && (
                  <a
                    href={projects[activeTab].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    {t('projects.github')}
                  </a>
                )}
                {projects[activeTab].demo && (
                  <a
                    href={projects[activeTab].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {t('projects.live_demo')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
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
