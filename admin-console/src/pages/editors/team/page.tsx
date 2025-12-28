import { useState, useEffect } from 'react';
import TeamEditor from '../../../components/editors/TeamEditor';
import { contentAPI } from '../../../utils/api';
import toast from 'react-hot-toast';

export default function TeamPageEditor() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const content = await contentAPI.getContent('team');
      setData(content);
    } catch (error) {
      console.error('Failed to load team data:', error);
      toast.error('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (newData: any) => {
    try {
      await contentAPI.updateContent('team', newData);
      setData(newData);
      toast.success('Team updated successfully!');
    } catch (error) {
      console.error('Failed to save data:', error);
      toast.error('Failed to save changes');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <i className="ri-loader-4-line text-4xl text-amber-500 animate-spin"></i>
          <p className="text-gray-400 mt-4">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <TeamEditor data={data} onSave={handleSave} />
    </div>
  );
}
