import { useState } from 'react';
import toast from 'react-hot-toast';

export default function MediaUpload() {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; url: string; size: string }>>([
    { name: 'hero-image.jpg', url: '/assets/img/hero-image.jpg', size: '2.4 MB' },
    { name: 'team-photo.jpg', url: '/assets/img/team-photo.jpg', size: '1.8 MB' },
  ]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      // Mock upload - replace with actual API call
      // const response = await mediaAPI.uploadFile(files[0]);
      
      setTimeout(() => {
        const newFile = {
          name: files[0].name,
          url: `/assets/img/${files[0].name}`,
          size: `${(files[0].size / 1024 / 1024).toFixed(1)} MB`,
        };
        setUploadedFiles([newFile, ...uploadedFiles]);
        toast.success('File uploaded successfully!');
        setUploading(false);
      }, 1500);
    } catch (error) {
      toast.error('Upload failed. Please try again.');
      setUploading(false);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied to clipboard!');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Media Upload</h1>
        <p className="text-gray-400">Upload and manage your media files</p>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
        <div className="border-2 border-dashed border-gray-700 rounded-xl p-12 text-center hover:border-amber-600 transition-all">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*"
            disabled={uploading}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-upload-cloud-2-line text-3xl text-amber-500"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {uploading ? 'Uploading...' : 'Upload Media'}
            </h3>
            <p className="text-gray-400 mb-4">
              Click to browse or drag and drop your files here
            </p>
            <p className="text-sm text-gray-500">
              Supports: JPG, PNG, GIF, SVG (Max 10MB)
            </p>
          </label>
        </div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <i className="ri-folder-image-line mr-2 text-amber-500"></i>
          Uploaded Files
        </h2>

        <div className="space-y-3">
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-amber-600/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-image-line text-xl text-amber-500"></i>
                </div>
                <div>
                  <p className="text-white font-medium">{file.name}</p>
                  <p className="text-sm text-gray-400">{file.size}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => copyToClipboard(file.url)}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all text-sm whitespace-nowrap"
                >
                  <i className="ri-file-copy-line mr-2"></i>
                  Copy URL
                </button>
                <button className="w-10 h-10 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all flex items-center justify-center">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
