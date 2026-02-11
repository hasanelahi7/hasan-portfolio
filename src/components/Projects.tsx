import { useState } from 'react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0)

  const projects = [
    {
      title: 'Kartverket UI Library',
      description: 'Modernized Norway\'s national mapping agency website by conducting stakeholder interviews, designing in Figma, and building a reusable React component library with Storybook documentation. Implemented responsive design with Tailwind CSS.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Storybook'],
      image: '🗺️',
      github: '',
      demo: '',
    },
    {
      title: 'Brain Tumour Classification',
      description: 'Developed a deep learning model for classifying brain tumours using medical imaging data. Implemented using PyTorch and achieved high accuracy in tumor detection and classification.',
      tech: ['Python', 'PyTorch', 'OpenCV', 'TensorFlow'],
      image: '🧠',
      github: '',
      demo: '',
    },
    {
      title: 'ML Data Annotation Platform',
      description: 'Built and managed a data annotation platform for machine learning datasets. Improved labeling efficiency and data quality through collaborative workflows and automated validation.',
      tech: ['Python', 'Flask', 'SQL', 'APIs'],
      image: '🏷️',
      github: '',
      demo: '',
    },
    {
      title: 'Full-Stack Client Projects',
      description: 'Delivered multiple full-stack web applications for clients through Upwork. Integrated APIs, built responsive UIs, and implemented machine learning features for various business needs.',
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
          Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === index
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {project.title}
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
              <h3 className="text-3xl font-bold mb-4">{projects[activeTab].title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {projects[activeTab].description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary-600 dark:text-primary-400">
                  Technologies Used:
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {projects[activeTab].demo && (
                  <a
                    href={projects[activeTab].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          More projects available on{' '}
          <a
            href="https://github.com/hasanelahi7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}
