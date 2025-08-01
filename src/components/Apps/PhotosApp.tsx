import React, { useState } from 'react';
import { Camera, ArrowLeft, Download, Heart, Eye } from 'lucide-react';

interface Photo {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  likes: number;
  views: number;
}

const PhotosApp: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: '1',
      title: 'Self Portrait',
      description: 'A professional portrait capturing my authentic self - representing who I am as a person and developer.',
      url: '/IMG_14903.jpeg',
      category: 'personal',
      date: '2024-12-26',
      likes: 42,
      views: 156
    },
    {
      id: '2',
      title: 'AI-Enhanced Portrait',
      description: 'My portrait with AI artistic enhancement - showcasing the intersection of technology and creativity.',
      url: '/Image.jpeg',
      category: 'personal',
      date: '2024-12-26',
      likes: 38,
      views: 124
    },
    {
      id: '3',
      title: 'Lifelong Learning Spirit',
      description: 'AI-generated artwork representing the spirit of lifelong learning - continuous growth, curiosity, and the pursuit of knowledge.',
      url: '/photo_2024-12-26_12-17-47.jpg',
      category: 'personal',
      date: '2024-12-26',
      likes: 67,
      views: 203
    }
  ]);

  // Function to increment views when photo is clicked
  const handlePhotoClick = (photo: Photo) => {
    setPhotos(prevPhotos => 
      prevPhotos.map(p => 
        p.id === photo.id 
          ? { ...p, views: p.views + 1 }
          : p
      )
    );
    setSelectedPhoto(photo);
  };

  // Function to handle like
  const handleLike = (photoId: string) => {
    setPhotos(prevPhotos => 
      prevPhotos.map(p => 
        p.id === photoId 
          ? { ...p, likes: p.likes + 1 }
          : p
      )
    );
  };

  const categories = [
    { id: 'all', label: 'All Photos', count: photos.length },
    { id: 'personal', label: 'Personal', count: photos.filter(p => p.category === 'personal').length },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  return (
    <div className="h-full flex flex-col">
      {selectedPhoto ? (
        <div className="flex-1 bg-black relative">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <button className="bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-all">
              <Download className="w-5 h-5" />
            </button>
            <button 
              onClick={() => selectedPhoto && handleLike(selectedPhoto.id)}
              className="bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-all"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center h-full p-8">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              style={{ 
                maxHeight: '80vh',
                maxWidth: '90vw',
                objectFit: 'contain'
              }}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
              <p className="text-gray-300 mb-4">{selectedPhoto.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>{new Date(selectedPhoto.date).toLocaleDateString()}</span>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{selectedPhoto.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedPhoto.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Camera className="w-8 h-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
              </div>
              <p className="text-gray-600 text-lg">
                A collection of personal moments and memories from my journey
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map(photo => (
                <div
                  key={photo.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handlePhotoClick(photo)}
                >
                  <div className="relative">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {photo.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{photo.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{photo.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(photo.date).toLocaleDateString()}</span>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{photo.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{photo.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosApp;