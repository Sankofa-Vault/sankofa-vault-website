import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const navigation = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'ri-dashboard-line',
  },
  {
    name: 'Pages',
    icon: 'ri-pages-line',
    children: [
      { name: 'Home', path: '/dashboard/pages/home', icon: 'ri-home-line' },
      { name: 'About', path: '/dashboard/pages/about', icon: 'ri-information-line' },
      { name: 'Services', path: '/dashboard/pages/services', icon: 'ri-service-line' },
      { name: 'Team', path: '/dashboard/pages/team', icon: 'ri-team-line' },
      { name: 'Portfolio', path: '/dashboard/pages/portfolio', icon: 'ri-gallery-line' },
      { name: 'Contact', path: '/dashboard/pages/contact', icon: 'ri-contacts-line' },
    ],
  },
  {
    name: 'Global Settings',
    icon: 'ri-settings-3-line',
    children: [
      { name: 'Header', path: '/dashboard/global/header', icon: 'ri-layout-top-line' },
      { name: 'Footer', path: '/dashboard/global/footer', icon: 'ri-layout-bottom-line' },
      { name: 'Sponsors', path: '/dashboard/global/sponsors', icon: 'ri-award-line' },
    ],
  },
  {
    name: 'Media',
    path: '/dashboard/media',
    icon: 'ri-image-line',
  },
];

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-screen">
      <div className="p-6 border-b border-gray-800">
        <img 
          src="https://static.readdy.ai/image/12afcc28f12d5c500713622508071ed6/e6b1b7dcc3eb309bfbc5a34d73bba73a.png" 
          alt="Sankofa Vault" 
          className="h-12"
        />
        <p className="text-gray-400 text-sm mt-2">Content Management</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navigation.map((item) => (
          <div key={item.name}>
            {item.path ? (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <i className={`${item.icon} text-lg mr-3`}></i>
                {item.name}
              </NavLink>
            ) : (
              <div>
                <div className="flex items-center px-4 py-3 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  <i className={`${item.icon} text-lg mr-3`}></i>
                  {item.name}
                </div>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 rounded-lg transition-all text-sm whitespace-nowrap ${
                            isActive
                              ? 'bg-amber-600 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                          }`
                        }
                      >
                        <i className={`${child.icon} text-base mr-3`}></i>
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center px-4 py-3 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all whitespace-nowrap"
        >
          <i className="ri-logout-box-line text-lg mr-2"></i>
          Logout
        </button>
      </div>
    </div>
  );
}
