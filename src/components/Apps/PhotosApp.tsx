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

  const photos: Photo[] = [
    {
      id: '1',
      title: 'Ethiopian Highland Sunrise',
      description: 'The sun rises over the Simien Mountains, casting golden light across the ancient landscape.',
      url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'landscapes',
      date: '2024-01-20',
      likes: 42,
      views: 156
    },
    {
      id: '2',
      title: 'Coffee Culture',
      description: 'Traditional Ethiopian coffee ceremony - a beautiful cultural practice that brings communities together.',
      url: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'culture',
      date: '2024-01-18',
      likes: 38,
      views: 124
    },
    {
      id: '3',
      title: 'Rock-Hewn Churches',
      description: 'The incredible architecture of Lalibela, carved directly from volcanic rock in the 12th century.',
      url: 'https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'architecture',
      date: '2024-01-15',
      likes: 67,
      views: 203
    },
    {
      id: '4',
      title: 'Digital Workspace',
      description: 'My setup for coding and creative work - where technology meets inspiration.',
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'tech',
      date: '2024-01-12',
      likes: 29,
      views: 89
    },
    {
      id: '5',
      title: 'Ancient Manuscripts',
      description: 'Centuries-old Ge\'ez manuscripts preserving Ethiopia\'s rich literary and religious heritage.',
      url: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'culture',
      date: '2024-01-10',
      likes: 51,
      views: 178
    },
    {
      id: '6',
      title: 'Mountain Meditation',
      description: 'Finding peace and reflection in the quiet moments among Ethiopia\'s highlands.',
      url: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'landscapes',
      date: '2024-01-08',
      likes: 74,
      views: 241
    },
    {
      id: '7',
      title: 'Code & Coffee',
      description: 'Late night coding session with traditional Ethiopian coffee - fuel for creativity.',
      url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'tech',
      date: '2024-01-05',
      likes: 33,
      views: 112
    },
    {
      id: '8',
      title: 'Traditional Weaving',
      description: 'Master weavers creating beautiful textiles using techniques passed down through generations.',
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'culture',
      date: '2024-01-03',
      likes: 45,
      views: 167
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', count: photos.length },
    { id: 'landscapes', label: 'Landscapes', count: photos.filter(p => p.category === 'landscapes').length },
    { id: 'culture', label: 'Culture', count: photos.filter(p => p.category === 'culture').length },
    { id: 'architecture', label: 'Architecture', count: photos.filter(p => p.category === 'architecture').length },
    { id: 'tech', label: 'Technology', count: photos.filter(p => p.category === 'tech').length },
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
            <button className="bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center h-full p-8">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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
                A collection of moments capturing Ethiopia's beauty, culture, and my journey in technology
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
                  onClick={() => setSelectedPhoto(photo)}
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