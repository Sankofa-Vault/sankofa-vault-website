import { useState } from 'react';
import toast from 'react-hot-toast';

interface PortfolioEditorProps {
  data: any;
  onSave: (data: any) => void;
}

export default function PortfolioEditor({ data, onSave }: PortfolioEditorProps) {
  const [formData, setFormData] = useState(data);

  const handleSave = () => {
    onSave(formData);
    setTimeout(() => {
      toast.success('Portfolio updated successfully!');
    }, 0);
  };

  const updateProject = (index: number, field: string, value: string) => {
    const newItems = [...formData.portfolioItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData({ ...formData, portfolioItems: newItems });
  };

  const updateCategories = (index: number, value: string) => {
    const newItems = [...formData.portfolioItems];
    newItems[index] = { ...newItems[index], categories: value.split(',').map((c: string) => c.trim()) };
    setFormData({ ...formData, portfolioItems: newItems });
  };

  const addProject = () => {
    const newItems = [...formData.portfolioItems, { title: '', description: '', image: '', categories: [], date: '' }];
    setFormData({ ...formData, portfolioItems: newItems });
  };

  const removeProject = (index: number) => {
    const newItems = formData.portfolioItems.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, portfolioItems: newItems });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Portfolio Editor</h2>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all whitespace-nowrap"
        >
          <i className="ri-save-line mr-2"></i>
          Save Changes
        </button>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <i className="ri-gallery-line mr-2 text-amber-500"></i>
          Portfolio Projects
        </h3>

        {formData.portfolioItems && formData.portfolioItems.map((project: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-white">Project {index + 1}</h4>
              <button
                onClick={() => removeProject(index)}
                className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all text-sm whitespace-nowrap"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="text"
                  value={project.date}
                  onChange={(e) => updateProject(index, 'date', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  rows={3}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                <input
                  type="text"
                  value={project.image}
                  onChange={(e) => updateProject(index, 'image', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Categories (comma-separated)</label>
                <input
                  type="text"
                  value={project.categories.join(', ')}
                  onChange={(e) => updateCategories(index, e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Archiving, Research"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addProject}
          className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-amber-600 hover:text-amber-500 transition-all whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Add Project
        </button>
      </div>
    </div>
  );
}
