import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home Page', path: '/dashboard/pages/home', icon: 'ri-home-line', color: 'from-blue-600 to-blue-500' },
  { name: 'Team', path: '/dashboard/pages/team', icon: 'ri-team-line', color: 'from-purple-600 to-purple-500' },
  { name: 'Portfolio', path: '/dashboard/pages/portfolio', icon: 'ri-gallery-line', color: 'from-pink-600 to-pink-500' },
  { name: 'Services', path: '/dashboard/pages/services', icon: 'ri-service-line', color: 'from-green-600 to-green-500' },
  { name: 'Header', path: '/dashboard/global/header', icon: 'ri-layout-top-line', color: 'from-amber-600 to-amber-500' },
  { name: 'Media Upload', path: '/dashboard/media', icon: 'ri-image-line', color: 'from-red-600 to-red-500' },
];

const stats = [
  { label: 'Total Pages', value: '6', icon: 'ri-file-list-line' },
  { label: 'Media Files', value: '24', icon: 'ri-image-2-line' },
  { label: 'Last Updated', value: 'Today', icon: 'ri-time-line' },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Manage your Sankofa Vault content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center">
                <i className={`${stat.icon} text-2xl text-amber-500`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-amber-600 transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${link.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{link.name}</h3>
              <p className="text-gray-400 text-sm">Edit content</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 border border-amber-600/30 rounded-xl p-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <i className="ri-lightbulb-line text-2xl text-white"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>
            <p className="text-gray-300 mb-4">
              Welcome to Sankofa Vault CMS. Use the sidebar to navigate between different sections. 
              All changes are saved automatically when you click the Save button.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 rounded-full text-sm whitespace-nowrap">
                API-Driven
              </span>
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 rounded-full text-sm whitespace-nowrap">
                Real-time Updates
              </span>
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 rounded-full text-sm whitespace-nowrap">
                Easy to Use
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
