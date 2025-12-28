import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { mockCommonData } from '../../../../utils/mockData';

export default function HeaderEditor() {
  const [data, setData] = useState(mockCommonData.header);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(mockCommonData.header);
      setLoading(false);
    }, 500);
  }, []);

  const handleSave = () => {
    console.log('Saving header data:', data);
    toast.success('Header updated successfully!');
  };

  const updateNavItem = (index: number, field: string, value: string) => {
    const newNav = [...data.navigation];
    newNav[index] = { ...newNav[index], [field]: value };
    setData({ ...data, navigation: newNav });
  };

  const addNavItem = () => {
    const newNav = [...data.navigation, { label: '', path: '' }];
    setData({ ...data, navigation: newNav });
  };

  const removeNavItem = (index: number) => {
    const newNav = data.navigation.filter((_: any, i: number) => i !== index);
    setData({ ...data, navigation: newNav });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <i className="ri-loader-4-line text-4xl text-amber-500 animate-spin"></i>
          <p className="text-gray-400 mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Header Settings</h2>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all whitespace-nowrap"
        >
          <i className="ri-save-line mr-2"></i>
          Save Changes
        </button>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <i className="ri-image-line mr-2 text-amber-500"></i>
          Logo
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Logo URL</label>
          <input
            type="text"
            value={data.logo}
            onChange={(e) => setData({ ...data, logo: e.target.value })}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <i className="ri-navigation-line mr-2 text-amber-500"></i>
          Navigation Links
        </h3>

        {data.navigation.map((item: any, index: number) => (
          <div key={index} className="mb-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-white">Link {index + 1}</h4>
              <button
                onClick={() => removeNavItem(index)}
                className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all text-sm whitespace-nowrap"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Label</label>
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => updateNavItem(index, 'label', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Path</label>
                <input
                  type="text"
                  value={item.path}
                  onChange={(e) => updateNavItem(index, 'path', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addNavItem}
          className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-amber-600 hover:text-amber-500 transition-all whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Add Navigation Link
        </button>
      </div>
    </div>
  );
}
