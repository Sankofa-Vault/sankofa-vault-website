import { useState, useEffect } from 'react';
import HomeEditor from '../../../components/editors/HomeEditor';
import { contentAPI } from '../../../utils/api';
import toast from 'react-hot-toast';

export default function HomePageEditor() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const content = await contentAPI.getContent('home');
      setData(content);
    } catch (error) {
      console.error('Failed to load home data:', error);
      toast.error('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (newData: any) => {
    try {
      // Optimistic update or wait?
      // Wait is safer for CMS.
      await contentAPI.updateContent('home', newData);
      setData(newData);
      toast.success('Changes saved successfully!');
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
      <HomeEditor data={data} onSave={handleSave} />
    </div>
  );
}
