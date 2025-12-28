import { useState } from 'react';
import toast from 'react-hot-toast';

interface TeamEditorProps {
  data: any;
  onSave: (data: any) => void;
}

export default function TeamEditor({ data, onSave }: TeamEditorProps) {
  const [formData, setFormData] = useState(data);

  const handleSave = () => {
    onSave(formData);
    setTimeout(() => {
      toast.success('Team page updated successfully!');
    }, 0);
  };

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...formData.teamMembers];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, teamMembers: newMembers });
  };

  const addMember = () => {
    const newMembers = [...formData.teamMembers, { name: '', role: '', bio: '', image: '', social: [] }];
    setFormData({ ...formData, teamMembers: newMembers });
  };

  const removeMember = (index: number) => {
    const newMembers = formData.teamMembers.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, teamMembers: newMembers });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Team Members Editor</h2>
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
          <i className="ri-team-line mr-2 text-amber-500"></i>
          Team Members
        </h3>

        {formData.teamMembers && formData.teamMembers.map((member: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-white">Member {index + 1}</h4>
              <button
                onClick={() => removeMember(index)}
                className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all text-sm whitespace-nowrap"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(index, 'name', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => updateMember(index, 'role', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                <textarea
                  value={member.bio}
                  onChange={(e) => updateMember(index, 'bio', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  rows={3}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                <input
                  type="text"
                  value={member.image}
                  onChange={(e) => updateMember(index, 'image', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addMember}
          className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-amber-600 hover:text-amber-500 transition-all whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Add Team Member
        </button>
      </div>
    </div>
  );
}
