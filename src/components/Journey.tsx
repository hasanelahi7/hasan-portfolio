import {
  Briefcase,
  GraduationCap,
  Building,
  MapPin,
  Calendar,
} from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Journey section displaying professional and educational timeline
 * Shows work experience and education in chronological order with details
 * @returns Journey section with timeline visualization
 */
export default function Journey() {
  const { t } = useTranslation();

  const timeline = [
    { type: "work", key: "ta_nmbu" },
    { type: "work", key: "intern_kartverket" },
    { type: "work", key: "upwork" },
    { type: "work", key: "tarabut" },
    { type: "work", key: "patent" },
    { type: "education", key: "masters" },
    { type: "education", key: "bachelors" },
  ];

  return (
    <section
      id="journey"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t("journey.title")}{" "}
          <span className="text-primary-600 dark:text-primary-400">
            {t("journey.title_highlight")}
          </span>
        </h2>
        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 dark:from-primary-700 dark:via-primary-600 dark:to-primary-700 transform -translate-x-1/2 rounded-full"></div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 dark:from-primary-700 dark:via-primary-600 dark:to-primary-700 rounded-full"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.key} className="relative">
                {/* Enhanced Timeline Dot - Positioned at center */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-20">
                  <div className="w-5 h-5 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="absolute w-9 h-9 bg-primary-200 dark:bg-primary-800 rounded-full animate-pulse opacity-50"></div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-[1.625rem] transform -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-5 h-5 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="absolute w-9 h-9 bg-primary-200 dark:bg-primary-800 rounded-full animate-pulse opacity-50"></div>
                </div>

                <div
                  className={`flex items-start md:items-center w-full ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 ml-16 md:ml-0 md:max-w-[calc(50%-1rem)]">
                    <div
                      className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:scale-[1.02] ${
                        index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                            item.type === "work"
                              ? "bg-primary-500 dark:bg-primary-600 text-white"
                              : "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
                          }`}
                        >
                          {item.type === "work" ? (
                            <>
                              <Briefcase className="w-3 h-3" />
                              {t("journey.work")}
                            </>
                          ) : (
                            <>
                              <GraduationCap className="w-3 h-3" />
                              {t("journey.education")}
                            </>
                          )}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {t(`journey.timeline.${item.key}.title`)}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2 flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {t(`journey.timeline.${item.key}.organization`)}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {t(`journey.timeline.${item.key}.location`)}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {t(`journey.timeline.${item.key}.period`)}
                        </span>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t(`journey.timeline.${item.key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
