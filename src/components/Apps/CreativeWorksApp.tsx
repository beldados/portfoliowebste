import React, { useState } from 'react';
import { BookOpen, Pen, ArrowLeft, Eye, Heart, Calendar, Tag } from 'lucide-react';

interface Poem {
  id: string;
  title: string;
  type: 'personal' | 'philosophical' | 'spiritual' | 'nature' | 'technology' | 'cultural';
  description: string;
  dateCreated: string;
  inspiration: string;
  tags: string[];
  content: string;
}

const PoemsApp: React.FC = () => {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [selectedType, setSelectedType] = useState('all');

  const poems: Poem[] = [
    {
      id: '1',
      title: 'ቃልህ',
      type: 'philosophical',
      description: 'A philosophical reflection on the power and impact of words in Amharic.',
      dateCreated: '2024-12-26',
      inspiration: 'The profound influence that words have on individuals and society, exploring both their constructive and destructive potential.',
      tags: ['amharic', 'philosophy', 'words', 'power', 'wisdom'],
      content: `ያ-ቃልህ፣
ከአፍ ሲወጣ የማይታይ፣ በጆሮ የሚሰማ፣
በልብ ሰሌዳ ላይ፣ የሚቀርጸው ደማቅ ምስል አለማ።
በምናብ የሚታነጽ፣ ከሀሳብ የሚገነባ፣
የማይዙት የማይጨበጥ፣ ረቂቅ የነፍስ ካባ።

ያ-ቃልህ፣
ለዕውቀት መሰረት ነው፣ ለጥበብም አናጺ፣
ሀገር የሚያቆም ነው፣ ትውልድንም ቀራጺ።
ግን ያው ቃል ሲገለበጥ፣ ይሆናል እንደ ሰይፍ፣
ያፈርሳል የጸናውን፣ ያደርገዋል እንደ ቅጠል ረግፍ።

ያ-ቃልህ፣
ጠቢብ የሚል ስም ሰጥቶ፣ ርኩስ ብሎ የሚፈርጅ፣
በቃላት መረብ ውስጥ፣ ማንነትን የሚያስወጣ የሚያስገባ።
በሰው አምሳል ተፈጥሮ፣ ሰውን መልሶ ይፈጥራል፣
በሕይወት ዙፋን ላይ አስቀምጦ፣ በሞት ሸለቆም ይከታል።`
    },
    {
      id: '2',
      title: 'ርቀት እንደ ፈውስ',
      type: 'philosophical',
      description: 'A philosophical reflection on distance as healing, patience, and the power of truth in relationships.',
      dateCreated: '2024-12-26',
      inspiration: 'The understanding that some wounds heal through distance and time, and that truth and patience are essential for genuine reconciliation.',
      tags: ['amharic', 'philosophy', 'healing', 'patience', 'truth', 'relationships'],
      content: `ስንጥቆችን በጣፋጭ ቃልና ፈገግታ አትፈውስም።
ሁሉም ቁስሎች በገርነት አይድኑም።
አንዳንድ ግንኙነቶች የሚበጣጠሱት በስርአት እጦት ሳይሆን፥
በአንድ ስፍራ ረጅም ጊዜ በመቆየት ነው።

ስለዚህ ሰላምን ከትሁት መሆን ጋር አታምታታው 

አንዳንድ ድልድዮች የሚናዱት ብርሃንን መልሶ ለማምጣት ነው።

የተበላሸውን ነገር በእውነት ለማስተካከል፥
አንዳንድ ጊዜ ሄዶ መቅረት ብርታት ነው።`
    },
    {
      id: '3',
      title: 'Sample Poem 3',
      type: 'spiritual',
      description: 'A spiritual meditation on faith and purpose.',
      dateCreated: '2024-12-26',
      inspiration: 'Spiritual journey and faith experiences.',
      tags: ['spiritual', 'faith', 'meditation'],
      content: `Your third poem here
With spiritual themes.

You can write about
Faith, purpose, and meaning.

The format preserves
Your poetic structure.`
    }
  ];

  const types = [
    { id: 'all', label: 'All Poems', icon: <BookOpen className="w-4 h-4" />, count: poems.length },
    { id: 'personal', label: 'Personal', icon: <Pen className="w-4 h-4" />, count: poems.filter(p => p.type === 'personal').length },
    { id: 'philosophical', label: 'Philosophical', icon: <BookOpen className="w-4 h-4" />, count: poems.filter(p => p.type === 'philosophical').length },
    { id: 'spiritual', label: 'Spiritual', icon: <BookOpen className="w-4 h-4" />, count: poems.filter(p => p.type === 'spiritual').length },
    { id: 'nature', label: 'Nature', icon: <BookOpen className="w-4 h-4" />, count: poems.filter(p => p.type === 'nature').length },
    { id: 'technology', label: 'Technology', icon: <BookOpen className="w-4 h-4" />, count: poems.filter(p => p.type === 'technology').length },
    { id: 'cultural', label: 'Cultural', icon: <BookOpen className="w-4 h-4" />, count: poems.filter(p => p.type === 'cultural').length },
  ];

  const filteredPoems = selectedType === 'all' 
    ? poems 
    : poems.filter(p => p.type === selectedType);

  const getTypeColor = (type: string) => {
    const colors = {
      'personal': 'bg-blue-100 text-blue-800',
      'philosophical': 'bg-purple-100 text-purple-800',
      'spiritual': 'bg-green-100 text-green-800',
      'nature': 'bg-emerald-100 text-emerald-800',
      'technology': 'bg-orange-100 text-orange-800',
      'cultural': 'bg-red-100 text-red-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="h-full flex flex-col">
      {selectedPoem ? (
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPoem(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Poems</span>
            </button>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <header className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedPoem.title}
                      </h1>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedPoem.type)}`}>
                          {selectedPoem.type.replace('-', ' ')}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(selectedPoem.dateCreated).toLocaleDateString()}
                        </span>
                      </div>

                    </div>
                  </div>
                </header>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedPoem.description}</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Inspiration</h3>
                    <p className="text-blue-800 leading-relaxed italic">{selectedPoem.inspiration}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPoem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Poem</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-serif leading-relaxed">
                        {selectedPoem.content}
                      </pre>
                    </div>
                  </div>
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
                <BookOpen className="w-8 h-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Poems</h1>
              </div>
              <p className="text-gray-600 text-lg">
                A collection of my poetic expressions and creative writing
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {types.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {type.icon}
                  <span>{type.label} ({type.count})</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPoems.map((poem) => (
                <div
                  key={poem.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                  onClick={() => setSelectedPoem(poem)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(poem.type)}`}>
                        {poem.type.replace('-', ' ')}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(poem.dateCreated).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {poem.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {poem.description}
                    </p>
                    
                    <div className="flex items-center justify-end">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Read poem →
                      </span>
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

export default PoemsApp;