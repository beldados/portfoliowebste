import React, { useState } from 'react';
import { Brain, Book, ArrowLeft, Quote, Star, Search } from 'lucide-react';

interface PhilosophicalWork {
  id: string;
  title: string;
  author: string;
  category: string;
  summary: string;
  keyInsights: string[];
  personalReflection: string;
  rating: number;
  dateRead: string;
  quotes: string[];
}

const PhilosophyApp: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<PhilosophicalWork | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const philosophicalWorks: PhilosophicalWork[] = [
    {
      id: 'hume-enquiry',
      title: 'An Enquiry Concerning Human Understanding',
      author: 'David Hume',
      category: 'Epistemology',
      summary: 'Hume\'s investigation into the nature of human knowledge, causation, and the limits of reason. A foundational work in empiricism that challenges our assumptions about what we can truly know.',
      keyInsights: [
        'The problem of induction - we cannot logically justify beliefs about the future based on past experience',
        'Causation is not directly observable, only constant conjunction',
        'The distinction between relations of ideas and matters of fact',
        'Skepticism about miracles and the role of testimony',
        'The is-ought problem in moral reasoning'
      ],
      personalReflection: `Hume's skepticism initially troubled me as a person of faith, but I've come to see it as valuable intellectual humility. His insights about the limits of reason actually strengthen my appreciation for faith as a legitimate way of knowing. In software engineering, I apply Hume's caution about induction when making assumptions about system behavior based on limited testing.`,
      rating: 5,
      dateRead: '2023-08-15',
      quotes: [
        'The Christian religion not only was at first attended with miracles, but even at this day cannot be believed by any reasonable person without one.',
        'Custom, then, is the great guide of human life.',
        'A wise man proportions his belief to the evidence.'
      ]
    },
    {
      id: 'russell-problems',
      title: 'The Problems of Philosophy',
      author: 'Bertrand Russell',
      category: 'Epistemology',
      summary: 'Russell\'s accessible introduction to fundamental philosophical questions about knowledge, reality, and the external world. Explores the relationship between appearance and reality.',
      keyInsights: [
        'The distinction between knowledge by acquaintance and knowledge by description',
        'The problem of the external world and our knowledge of it',
        'The nature of universals and particulars',
        'The value of philosophy lies in its questions, not its answers',
        'Philosophical thinking enlarges our conception of what is possible'
      ],
      personalReflection: `Russell's clarity of thought and writing style deeply influenced how I approach complex problems. His emphasis on precise definitions and logical analysis has shaped my approach to both theological study and software architecture. The idea that philosophy's value lies in the questions it raises resonates with my faith journey.`,
      rating: 5,
      dateRead: '2023-09-22',
      quotes: [
        'The man who has no tincture of philosophy goes through life imprisoned in the prejudices derived from common sense.',
        'Philosophy is to be studied, not for the sake of any definite answers to its questions, but rather for the sake of the questions themselves.',
        'The value of philosophy is, in fact, to be sought largely in its very uncertainty.'
      ]
    },
    {
      id: 'aquinas-summa',
      title: 'Summa Theologica (Selected Parts)',
      author: 'Thomas Aquinas',
      category: 'Theology',
      summary: 'Aquinas\'s systematic theology that harmonizes Aristotelian philosophy with Christian doctrine. A masterwork of scholastic method and rational theology.',
      keyInsights: [
        'The Five Ways - rational arguments for God\'s existence',
        'The principle of double effect in moral reasoning',
        'The relationship between faith and reason as complementary',
        'Natural law theory and its foundations',
        'The nature of virtue and the cardinal virtues'
      ],
      personalReflection: `Aquinas showed me that rigorous intellectual work can be an act of worship. His integration of reason and faith provides a model for how I approach the intersection of technology and spirituality. The systematic method he employs influences how I structure complex software projects and theological study.`,
      rating: 5,
      dateRead: '2023-11-10',
      quotes: [
        'To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.',
        'The things that we love tell us what we are.',
        'Three things are necessary for the salvation of man: to know what he ought to believe; to know what he ought to desire; and to know what he ought to do.'
      ]
    },
    {
      id: 'kierkegaard-fear',
      title: 'Fear and Trembling',
      author: 'Søren Kierkegaard',
      category: 'Existentialism',
      summary: 'Kierkegaard\'s exploration of faith through the story of Abraham and Isaac, examining the nature of religious commitment and the "leap of faith."',
      keyInsights: [
        'The concept of the "knight of faith" who lives fully in both finite and infinite',
        'The teleological suspension of the ethical',
        'Faith as a passionate, subjective commitment beyond reason',
        'The anxiety and responsibility of individual choice',
        'The paradox of faith in the face of objective uncertainty'
      ],
      personalReflection: `Kierkegaard's passionate subjectivity speaks to my Ethiopian Orthodox heritage, where faith is deeply personal and experiential. His insights about the individual before God resonate with my understanding of spiritual growth. The tension he describes between reason and faith mirrors my experience as a thinking believer in a technological age.`,
      rating: 4,
      dateRead: '2024-01-05',
      quotes: [
        'The function of prayer is not to influence God, but rather to change the nature of the one who prays.',
        'Life can only be understood backwards; but it must be lived forwards.',
        'The most painful state of being is remembering the future, particularly the one you\'ll never have.'
      ]
    },
    {
      id: 'plantinga-warrant',
      title: 'Warranted Christian Belief',
      author: 'Alvin Plantinga',
      category: 'Philosophy of Religion',
      summary: 'Plantinga\'s defense of the rationality of Christian belief, arguing that religious beliefs can be properly basic and warranted without evidential support.',
      keyInsights: [
        'The concept of proper basicality for religious beliefs',
        'Reformed epistemology and the sensus divinitatis',
        'Critique of classical foundationalism',
        'The Evolutionary Argument Against Naturalism',
        'Warrant as proper function in appropriate environment'
      ],
      personalReflection: `Plantinga's work liberated me from feeling that faith requires exhaustive rational justification. His insights about proper basicality help me understand how religious experience can be a legitimate source of knowledge. This has practical implications for how I approach both spiritual discernment and intuitive problem-solving in programming.`,
      rating: 4,
      dateRead: '2024-02-18',
      quotes: [
        'The Christian has the right to believe in God even if she has no good evidence for the existence of God.',
        'Could it be that the whole enterprise of natural theology is misguided?',
        'Belief in God is properly basic.'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Works', count: philosophicalWorks.length },
    { id: 'Epistemology', label: 'Epistemology', count: philosophicalWorks.filter(w => w.category === 'Epistemology').length },
    { id: 'Theology', label: 'Theology', count: philosophicalWorks.filter(w => w.category === 'Theology').length },
    { id: 'Existentialism', label: 'Existentialism', count: philosophicalWorks.filter(w => w.category === 'Existentialism').length },
    { id: 'Philosophy of Religion', label: 'Philosophy of Religion', count: philosophicalWorks.filter(w => w.category === 'Philosophy of Religion').length },
  ];

  const filteredWorks = selectedCategory === 'all' 
    ? philosophicalWorks 
    : philosophicalWorks.filter(w => w.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
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
              <span>Back to Philosophy Library</span>
            </button>

            <article className="bg-white rounded-lg shadow-lg p-8">
              <header className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedWork.title}
                    </h1>
                    <p className="text-xl text-gray-700 mb-2">by {selectedWork.author}</p>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {selectedWork.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        {renderStars(selectedWork.rating)}
                      </div>
                      <span className="text-gray-500 text-sm">
                        Read: {new Date(selectedWork.dateRead).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </header>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedWork.summary}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Insights</h3>
                  <ul className="space-y-2">
                    {selectedWork.keyInsights.map((insight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Brain className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Personal Reflection</h3>
                  <p className="text-yellow-800 leading-relaxed italic">{selectedWork.personalReflection}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Notable Quotes</h3>
                  <div className="space-y-4">
                    {selectedWork.quotes.map((quote, index) => (
                      <div key={index} className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                        <div className="flex items-start space-x-2">
                          <Quote className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 italic">"{quote}"</p>
                        </div>
                      </div>
                    ))}
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
                <Brain className="w-8 h-8 text-purple-600" />
                <h1 className="text-3xl font-bold text-gray-900">Philosophy Library</h1>
              </div>
              <p className="text-gray-600 text-lg">
                Exploring the intersection of reason, faith, and human understanding
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            <div className="grid gap-6">
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                          {work.title}
                        </h3>
                        <p className="text-gray-600 font-medium mb-2">by {work.author}</p>
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            {work.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            {renderStars(work.rating)}
                          </div>
                          <span className="text-gray-500 text-sm">
                            {new Date(work.dateRead).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {work.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-medium hover:text-purple-800 transition-colors">
                        Read more →
                      </span>
                      <Book className="w-5 h-5 text-purple-500" />
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

export default PhilosophyApp;