import { useTranslation } from 'react-i18next'

/**
 * Skills section displaying technical skills organized by category
 * Shows frontend, backend, databases, ML/AI, and tools/platforms
 * @returns Skills section with categorized skill badges
 */
export default function Skills() {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Wireframing', 'Prototyping'],
    },
    {
      title: t('skills.categories.backend'),
      skills: ['Laravel', 'Node.js', 'Flask', 'REST APIs'],
    },
    {
      title: t('skills.categories.databases'),
      skills: ['SQL', 'MySQL', 'Firebase', 'Firestore'],
    },
    {
      title: t('skills.categories.ml'),
      skills: ['PyTorch', 'Scikit-learn', 'TensorFlow', 'OpenCV'],
    },
    {
      title: t('skills.categories.tools'),
      skills: ['Git', 'Google Cloud Platform', 'Storybook', 'Power BI', 'Tableau'],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t('skills.title')} <span className="text-primary-600 dark:text-primary-400">{t('skills.title_highlight')}</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
