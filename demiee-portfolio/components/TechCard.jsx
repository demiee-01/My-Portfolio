/**
 * Tech skill card component
 * @param {Object} props
 * @param {string} props.name - Technology name
 * @param {Function} props.icon - React icon component
 * @param {string} props.description - Description
 * @param {string} props.brandColor - Brand color
 */
export default function TechCard({ name, icon: Icon, description, brandColor }) {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                    <Icon
                        className="w-full h-full"
                        style={{ color: brandColor }}
                        aria-label={name}
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
