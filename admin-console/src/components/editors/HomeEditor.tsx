import { useState } from 'react';
import toast from 'react-hot-toast';

interface HomeEditorProps {
  data: any;
  onSave: (data: any) => void;
}

export default function HomeEditor({ data, onSave }: HomeEditorProps) {
  const [formData, setFormData] = useState(data);

  const handleSave = () => {
    onSave(formData);
    toast.success('Home page updated successfully!');
  };

  const updateSlide = (index: number, field: string, value: string) => {
    const newSlides = [...formData.hero.slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setFormData({ ...formData, hero: { ...formData.hero, slides: newSlides } });
  };

  const addSlide = () => {
    const newSlides = [...formData.hero.slides, { title: '', subtitle: '', image: '' }];
    setFormData({ ...formData, hero: { ...formData.hero, slides: newSlides } });
  };

  const removeSlide = (index: number) => {
    const newSlides = formData.hero.slides.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, hero: { ...formData.hero, slides: newSlides } });
  };

  const updateServiceCard = (index: number, field: string, value: string) => {
    const newCards = [...formData.services.cards];
    newCards[index] = { ...newCards[index], [field]: value };
    setFormData({ ...formData, services: { ...formData.services, cards: newCards } });
  };

  const addServiceCard = () => {
    const newCards = [...formData.services.cards, { icon: '', title: '', description: '' }];
    setFormData({ ...formData, services: { ...formData.services, cards: newCards } });
  };

  const removeServiceCard = (index: number) => {
    const newCards = formData.services.cards.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, services: { ...formData.services, cards: newCards } });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Home Page Editor</h2>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all whitespace-nowrap"
        >
          <i className="ri-save-line mr-2"></i>
          Save Changes
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <i className="ri-image-line mr-2 text-amber-500"></i>
          Hero Section
        </h3>
        
        {formData.hero.slides.map((slide: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-white">Slide {index + 1}</h4>
              <button
                onClick={() => removeSlide(index)}
                className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all text-sm whitespace-nowrap"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Remove
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={slide.title}
                  onChange={(e) => updateSlide(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={slide.subtitle}
                  onChange={(e) => updateSlide(index, 'subtitle', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                <input
                  type="text"
                  value={slide.image}
                  onChange={(e) => updateSlide(index, 'image', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={addSlide}
          className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-amber-600 hover:text-amber-500 transition-all whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Add Slide
        </button>
      </div>

      {/* Services Section */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <i className="ri-service-line mr-2 text-amber-500"></i>
          Services Section
        </h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Section Title</label>
            <input
              type="text"
              value={formData.services.title}
              onChange={(e) => setFormData({ ...formData, services: { ...formData.services, title: e.target.value } })}
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {formData.services.cards.map((card: any, index: number) => (
          <div key={index} className="mb-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium text-white">Service Card {index + 1}</h4>
              <button
                onClick={() => removeServiceCard(index)}
                className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all text-sm whitespace-nowrap"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Remove
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Icon (Remix Icon class)</label>
                <input
                  type="text"
                  value={card.icon}
                  onChange={(e) => updateServiceCard(index, 'icon', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="ri-archive-line"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={card.title}
                  onChange={(e) => updateServiceCard(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  value={card.description}
                  onChange={(e) => updateServiceCard(index, 'description', e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  rows={3}
                />
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={addServiceCard}
          className="w-full py-3 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-amber-600 hover:text-amber-500 transition-all whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Add Service Card
        </button>
      </div>

      {/* About Section */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <i className="ri-information-line mr-2 text-amber-500"></i>
          About Section
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
            <input
              type="text"
              value={formData.about.title}
              onChange={(e) => setFormData({ ...formData, about: { ...formData.about, title: e.target.value } })}
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.about.description}
              onChange={(e) => setFormData({ ...formData, about: { ...formData.about, description: e.target.value } })}
              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
