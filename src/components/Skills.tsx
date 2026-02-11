export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & UI/UX',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Wireframing', 'Prototyping'],
    },
    {
      title: 'Backend',
      skills: ['Laravel', 'Node.js', 'Flask', 'REST APIs'],
    },
    {
      title: 'Databases',
      skills: ['SQL', 'MySQL', 'Firebase', 'Firestore'],
    },
    {
      title: 'Machine Learning & AI',
      skills: ['PyTorch', 'Scikit-learn', 'TensorFlow', 'OpenCV'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Google Cloud Platform', 'Storybook', 'Power BI', 'Tableau'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills <span className="text-primary-600 dark:text-primary-400">Toolkit</span>
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
