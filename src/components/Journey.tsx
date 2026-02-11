export default function Journey() {
  const timeline = [
    {
      type: 'work',
      title: 'Teaching Assistant',
      organization: 'NMBU',
      location: 'Ås, Norway',
      period: 'August 2025 – Present',
      description: 'Teaching DAT200 (Advanced Machine Learning) and INF230 (Data Handling and Analysis). Assisting students with Python, ML frameworks, and MySQL.',
    },
    {
      type: 'work',
      title: 'Software Engineer Internship',
      organization: 'Kartverket',
      location: 'Skøyen, Norway',
      period: 'September 2025 – December 2025',
      description: 'Conducted stakeholder interviews, designed UI/UX in Figma, and modernized Norgeskart website using React and Tailwind CSS. Built reusable component library with Storybook.',
    },
    {
      type: 'work',
      title: 'Full-Stack Developer & ML Engineer',
      organization: 'Upwork',
      location: 'Remote',
      period: 'May 2023 – Present',
      description: 'Providing full-stack development and UI/UX services. Training ML algorithms and developing APIs for backend services.',
    },
    {
      type: 'work',
      title: 'Associate ML Engineer',
      organization: 'Tarabut Gateway',
      location: 'Remote',
      period: 'December 2023 – July 2024',
      description: 'Managed annotation of textual and image datasets for machine learning. Collaborated on data labeling process improvements.',
    },
    {
      type: 'work',
      title: 'Patent Engineer',
      organization: 'Boehmert & Boehmert',
      location: 'Remote',
      period: 'July 2023 – December 2023',
      description: 'Contributed to patent filings for Microsoft and Huawei. Analyzed technical documents related to AI.',
    },
    {
      type: 'education',
      title: 'Master\'s Degree in Data Science',
      organization: 'NMBU',
      location: 'Ås, Norway',
      period: 'August 2024 – May 2026',
      description: 'Currently pursuing advanced studies in data science and machine learning.',
    },
    {
      type: 'education',
      title: 'Bachelor\'s in Computer Science',
      organization: 'Bahria University',
      location: 'Pakistan',
      period: '2019 – 2023',
      description: 'CGPA: 3.59/4.0. Thesis: Classification of Brain Tumour Using Deep Learning.',
    },
  ]

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-primary-600 dark:text-primary-400">Journey</span>
        </h2>
        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 dark:from-primary-700 dark:via-primary-600 dark:to-primary-700 transform -translate-x-1/2 rounded-full"></div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 dark:from-primary-700 dark:via-primary-600 dark:to-primary-700 rounded-full"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Enhanced Timeline Dot - Positioned at center */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-20">
                  <div className="w-5 h-5 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="absolute w-9 h-9 bg-primary-200 dark:bg-primary-800 rounded-full animate-pulse opacity-50"></div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-6 flex items-center justify-center z-20">
                  <div className="w-5 h-5 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="absolute w-9 h-9 bg-primary-200 dark:bg-primary-800 rounded-full animate-pulse opacity-50"></div>
                </div>

                <div className={`flex items-start md:items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content Card */}
                  <div className="flex-1 ml-16 md:ml-0 md:max-w-[calc(50%-1rem)]">
                    <div className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:scale-[1.02] ${
                      index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                    }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === 'work'
                          ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300'
                          : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                      }`}>
                        {item.type === 'work' ? (
                          <>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            Work
                          </>
                        ) : (
                          <>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            Education
                          </>
                        )}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      {item.organization}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {item.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {item.period}
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
