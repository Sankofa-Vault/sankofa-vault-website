import { useState, useEffect } from 'react';
import PortfolioEditor from '../../../components/editors/PortfolioEditor';
import { contentAPI } from '../../../utils/api';
import toast from 'react-hot-toast';

export default function PortfolioPageEditor() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const content = await contentAPI.getContent('portfolio');
      setData(content);
    } catch (error) {
      console.error('Failed to load portfolio data:', error);
      toast.error('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (newData: any) => {
    try {
      await contentAPI.updateContent('portfolio', newData);
      setData(newData);
      toast.success('Portfolio updated successfully!');
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
      <PortfolioEditor data={data} onSave={handleSave} />
    </div>
  );
}
