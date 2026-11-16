import { socialsData } from "@/data/socials";
import SocialCard from "@/components/SocialCard";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent text-gray-900 dark:text-gray-100 relative">
            <div className="max-w-5xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Contact
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                        Let&apos;s connect! Find me on these platforms
                    </p>
                </div>

                {/* Background Blobs for Glass Effect */}
                <div className="relative">
                    {/* Decorative gradient blobs */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200/30 dark:bg-pink-500/10 rounded-full blur-3xl" />

                    {/* Social Cards Grid */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {socialsData.map((social) => (
                            <SocialCard
                                key={social.platform}
                                platform={social.platform}
                                url={social.url}
                                handle={social.handle}
                                icon={social.icon}
                                brandColor={social.brandColor}
                            />
                        ))}
                    </div>
                </div>

                {/* Instructions Note */}
                <div className="mt-16 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                        🔗 Update Your Social Links
                    </h3>
                    <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                        Replace the placeholder links with your actual social media profiles in:
                    </p>
                    <code className="block text-xs bg-white dark:bg-gray-900 px-3 py-2 rounded">
                        data/socials.js
                    </code>
                    <p className="text-sm text-green-800 dark:text-green-200 mt-3">
                        Edit the URL and handle fields for each platform.
                    </p>
                </div>
            </div>
        </main>
    );
}
