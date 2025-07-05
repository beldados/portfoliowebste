import React, { useState } from 'react';
import { Palette, Music, Pen, Camera, Code, ArrowLeft, Star, Eye, Heart } from 'lucide-react';

interface CreativeWork {
  id: string;
  title: string;
  type: 'digital-art' | 'writing' | 'music' | 'photography' | 'code-art' | 'design';
  description: string;
  medium: string;
  dateCreated: string;
  inspiration: string;
  techniques: string[];
  imageUrl?: string;
  content?: string;
  likes: number;
  views: number;
}

const CreativeWorksApp: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<CreativeWork | null>(null);
  const [selectedType, setSelectedType] = useState('all');

  const creativeWorks: CreativeWork[] = [
    {
      id: 'ethiopian-patterns',
      title: 'Digital Ethiopian Textile Patterns',
      type: 'digital-art',
      description: 'A series of digital artworks inspired by traditional Ethiopian textile patterns, reimagined with modern geometric interpretations.',
      medium: 'Digital Art (Procreate, Adobe Illustrator)',
      dateCreated: '2024-01-15',
      inspiration: 'Traditional Ethiopian habesha kemis patterns and the geometric beauty found in ancient church architecture.',
      techniques: ['Vector illustration', 'Geometric pattern design', 'Color theory', 'Cultural research'],
      imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 45,
      views: 234
    },
    {
      id: 'code-poetry',
      title: 'Algorithmic Poetry Generator',
      type: 'code-art',
      description: 'An interactive web application that generates poetry using natural language processing, combining Ethiopian Amharic and English verse structures.',
      medium: 'JavaScript, Python, NLP',
      dateCreated: '2023-12-20',
      inspiration: 'The rhythmic patterns in traditional Ethiopian poetry and the mathematical beauty of algorithms.',
      techniques: ['Natural Language Processing', 'Markov Chains', 'Web Development', 'Cultural linguistics'],
      content: `// Poetry Generator Core Algorithm
function generateVerse(seedWords, language = 'amharic') {
  const patterns = getTraditionalPatterns(language);
  const rhythm = calculateSyllabicMeter(patterns);
  
  return weaveWords(seedWords, rhythm, culturalContext);
}

// Sample Output:
// "በሰማይ ላይ ኮከቦች ይጨፍራሉ / Stars dance in the digital sky"`,
      likes: 67,
      views: 412
    },
    {
      id: 'faith-tech-essay',
      title: 'The Sacred in Silicon: Technology as Spiritual Practice',
      type: 'writing',
      description: 'A philosophical essay exploring how software development can be understood as a form of spiritual discipline and creative worship.',
      medium: 'Long-form Essay',
      dateCreated: '2024-02-10',
      inspiration: 'The intersection of my Orthodox faith with daily work in technology, inspired by Brother Lawrence\'s "Practice of the Presence of God."',
      techniques: ['Philosophical writing', 'Theological reflection', 'Personal narrative', 'Cultural synthesis'],
      content: `In the quiet hours before dawn, when the only light comes from my monitor and the only sound is the gentle hum of processors, I find myself in a space that feels surprisingly sacred. The act of writing code—of bringing order from chaos, of creating something functional and beautiful from nothing—mirrors the divine act of creation itself.

The Ethiopian Orthodox tradition speaks of theosis, the process of becoming like God through participation in divine life. In my work as a software engineer, I've begun to see coding as a form of theosis—a way of participating in the ongoing creation of the world.

When I debug a complex system, I practice patience and humility. When I refactor code for clarity and elegance, I pursue beauty and truth. When I collaborate with others to build something greater than any of us could create alone, I experience communion.

The discipline required for good software development—attention to detail, commitment to excellence, service to users—these are spiritual disciplines. The joy of solving a difficult problem, the satisfaction of clean, working code, the gratitude for the tools and knowledge that make our work possible—these are forms of prayer.

In this light, my IDE becomes a chapel, my keyboard an altar, and my code a form of worship. Not because technology is divine, but because all honest work, done with love and skill, can become a means of grace...`,
      likes: 89,
      views: 567
    },
    {
      id: 'mountain-meditation',
      title: 'Simien Mountains Sunrise Series',
      type: 'photography',
      description: 'A photographic meditation on light, landscape, and the divine presence in Ethiopia\'s highland wilderness.',
      medium: 'Digital Photography',
      dateCreated: '2023-11-05',
      inspiration: 'Early morning hikes in the Simien Mountains, seeking to capture the interplay of light and landscape that speaks to God\'s presence in creation.',
      techniques: ['Golden hour photography', 'Landscape composition', 'Natural lighting', 'Contemplative practice'],
      imageUrl: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 123,
      views: 789
    },
    {
      id: 'ui-theology',
      title: 'Sacred Geometry in Interface Design',
      type: 'design',
      description: 'A design system that incorporates principles from Ethiopian Orthodox iconography and sacred geometry into modern user interface design.',
      medium: 'UI/UX Design, Figma',
      dateCreated: '2024-01-30',
      inspiration: 'The geometric patterns in Ethiopian church architecture and the theological significance of proportion and harmony in sacred art.',
      techniques: ['Sacred geometry', 'Design systems', 'Cultural research', 'Theological aesthetics'],
      imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 78,
      views: 345
    },
    {
      id: 'amharic-calligraphy',
      title: 'Digital Amharic Calligraphy',
      type: 'digital-art',
      description: 'Modern interpretations of traditional Ge\'ez and Amharic script, blending ancient letterforms with contemporary digital art techniques.',
      medium: 'Digital Calligraphy, iPad Pro',
      dateCreated: '2023-10-12',
      inspiration: 'Ancient Ethiopian manuscripts and the beauty of Ge\'ez script, combined with modern calligraphy movements.',
      techniques: ['Digital calligraphy', 'Typography design', 'Cultural preservation', 'Script analysis'],
      imageUrl: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 156,
      views: 892
    },
    {
      id: 'coffee-ceremony-music',
      title: 'Sounds of the Coffee Ceremony',
      type: 'music',
      description: 'An ambient music composition inspired by the Ethiopian coffee ceremony, incorporating field recordings and traditional instruments.',
      medium: 'Digital Audio Workstation, Field Recording',
      dateCreated: '2023-09-18',
      inspiration: 'The meditative quality of the traditional Ethiopian coffee ceremony and its role in community building.',
      techniques: ['Field recording', 'Ambient composition', 'Cultural documentation', 'Sound design'],
      content: `Track List:
1. "Preparation" - The sound of green beans being washed and sorted
2. "Roasting" - Crackling beans over charcoal, building intensity
3. "Grinding" - Rhythmic mortar and pestle, meditative and steady
4. "Brewing" - Water boiling, steam rising, anticipation building
5. "Sharing" - Gentle conversation, community, gratitude

The composition layers these natural sounds with subtle traditional instruments—the krar (Ethiopian lyre) and washint (flute)—creating a sonic meditation on one of Ethiopia's most sacred daily rituals.`,
      likes: 92,
      views: 456
    }
  ];

  const types = [
    { id: 'all', label: 'All Works', icon: <Palette className="w-4 h-4" />, count: creativeWorks.length },
    { id: 'digital-art', label: 'Digital Art', icon: <Palette className="w-4 h-4" />, count: creativeWorks.filter(w => w.type === 'digital-art').length },
    { id: 'writing', label: 'Writing', icon: <Pen className="w-4 h-4" />, count: creativeWorks.filter(w => w.type === 'writing').length },
    { id: 'photography', label: 'Photography', icon: <Camera className="w-4 h-4" />, count: creativeWorks.filter(w => w.type === 'photography').length },
    { id: 'code-art', label: 'Code Art', icon: <Code className="w-4 h-4" />, count: creativeWorks.filter(w => w.type === 'code-art').length },
    { id: 'design', label: 'Design', icon: <Palette className="w-4 h-4" />, count: creativeWorks.filter(w => w.type === 'design').length },
    { id: 'music', label: 'Music', icon: <Music className="w-4 h-4" />, count: creativeWorks.filter(w => w.type === 'music').length },
  ];

  const filteredWorks = selectedType === 'all' 
    ? creativeWorks 
    : creativeWorks.filter(w => w.type === selectedType);

  const getTypeColor = (type: string) => {
    const colors = {
      'digital-art': 'bg-purple-100 text-purple-800',
      'writing': 'bg-blue-100 text-blue-800',
      'photography': 'bg-green-100 text-green-800',
      'code-art': 'bg-orange-100 text-orange-800',
      'design': 'bg-pink-100 text-pink-800',
      'music': 'bg-yellow-100 text-yellow-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="h-full flex flex-col">
      {selectedWork ? (
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedWork(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Creative Works</span>
            </button>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {selectedWork.imageUrl && (
                <div className="w-full h-64 bg-gray-200">
                  <img
                    src={selectedWork.imageUrl}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8">
                <header className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedWork.title}
                      </h1>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedWork.type)}`}>
                          {selectedWork.type.replace('-', ' ')}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {selectedWork.medium}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(selectedWork.dateCreated).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{selectedWork.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{selectedWork.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedWork.description}</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Inspiration</h3>
                    <p className="text-blue-800 leading-relaxed italic">{selectedWork.inspiration}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Techniques & Approaches</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.techniques.map((technique, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedWork.content && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Content</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                          {selectedWork.content}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
                <h1 className="text-3xl font-bold text-gray-900">Creative Works</h1>
              </div>
              <p className="text-gray-600 text-lg">
                Exploring the intersection of technology, faith, and artistic expression
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {types.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedType === type.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {type.icon}
                  <span>{type.label} ({type.count})</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                  onClick={() => setSelectedWork(work)}
                >
                  {work.imageUrl && (
                    <div className="w-full h-48 bg-gray-200">
                      <img
                        src={work.imageUrl}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(work.type)}`}>
                        {work.type.replace('-', ' ')}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(work.dateCreated).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                      {work.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {work.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                        View details →
                      </span>
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{work.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{work.views}</span>
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

export default CreativeWorksApp;