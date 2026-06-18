import { appConfig } from "@/config/app.config";

export const metadata = {
  title: `${appConfig.brand.name} — Home`,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-brand-500">{appConfig.brand.name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {appConfig.brand.tagline}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {appConfig.navigation.mainNav.map((item) => (
            <div 
              key={item.id}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition bg-gray-50 dark:bg-gray-900"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.label}</h3>
              <p className="text-gray-500 text-sm mt-2">Navigate to {item.label.toLowerCase()}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-brand-50 dark:bg-brand-900/20 rounded-lg border border-brand-200 dark:border-brand-800">
          <h2 className="text-2xl font-bold text-brand-700 dark:text-brand-300 mb-4">✨ Getting Started</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is the home page. Update it with your content and build amazing features!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All configuration is in <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">frontend/config/app.config.ts</code>
          </p>
        </div>
      </div>
    </div>
  );
}
