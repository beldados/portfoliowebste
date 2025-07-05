import React, { useState } from 'react';
import { Heart, Calendar, Book, ArrowLeft, Quote } from 'lucide-react';

interface Devotion {
  id: string;
  title: string;
  date: string;
  passage: string;
  content: string;
  reflection: string;
  prayer: string;
}

const DevotionsApp: React.FC = () => {
  const [selectedDevotion, setSelectedDevotion] = useState<Devotion | null>(null);

  const devotions: Devotion[] = [
    {
      id: '1',
      title: 'Walking by Faith',
      date: '2024-01-20',
      passage: '2 Corinthians 5:7',
      content: `"For we walk by faith, not by sight."

In the journey of life, we are often called to move forward without seeing the full path ahead. This is particularly true in our spiritual walk, where God calls us to trust Him even when circumstances seem uncertain.

As a software engineer, I understand the importance of following specifications and documentation. When coding, we trust that the functions we call will work as documented, even if we can't see their internal implementation. Similarly, in our spiritual lives, we are called to trust in God's character and promises, even when we can't see the full picture.

The Ethiopian Orthodox tradition teaches us that faith is not blind acceptance, but rather a confident trust based on who God has revealed Himself to be. Through centuries of faithful witness, from the early church fathers to modern believers, we see that God is faithful to His promises.

Today, as I face decisions in my career, relationships, and personal growth, I'm reminded that walking by faith doesn't mean walking without wisdom. It means making decisions based on God's character and promises, trusting that He will guide my steps even when the path isn't clear.`,
      reflection: `How can I apply this principle of walking by faith in my current circumstances? What decisions am I facing where I need to trust God's guidance rather than relying solely on what I can see?`,
      prayer: `Lord, help me to trust in Your faithfulness even when I cannot see the full path ahead. Give me wisdom to make decisions that honor You, and courage to step forward in faith. Amen.`
    },
    {
      id: '2',
      title: 'The Gift of Wisdom',
      date: '2024-01-18',
      passage: 'James 1:5',
      content: `"If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him."

In my work as a developer, I encounter complex problems that require not just technical knowledge, but wisdom to know which solution is best. This verse reminds me that wisdom is not just human intelligence, but a gift from God that He freely gives to those who ask.

The Ethiopian church has always valued both learning and wisdom. From the ancient libraries of Axum to the theological schools of today, there has been a recognition that true wisdom comes from God. Yet this wisdom is not reserved for scholars alone - it is available to all who seek it.

When I face difficult bugs in my code, I've learned to pray for wisdom before diving into solutions. Often, the clarity comes not from working harder, but from stepping back and asking God for insight. The same principle applies to all areas of life - relationships, career decisions, and spiritual growth.

God's wisdom is different from worldly wisdom. It considers not just what works, but what is right. It looks not just at immediate results, but at eternal consequences. It values not just efficiency, but character.

As I continue to grow in both my technical skills and spiritual maturity, I'm learning that the greatest solutions often come when I combine technical knowledge with divine wisdom.`,
      reflection: `In what areas of my life do I need to seek God's wisdom? How can I cultivate a habit of asking for wisdom before making important decisions?`,
      prayer: `Father, I thank You for the promise that You give wisdom generously to all who ask. Help me to seek Your wisdom in all areas of my life, and give me a heart that values Your ways above worldly solutions. Amen.`
    },
    {
      id: '3',
      title: 'Created for Good Works',
      date: '2024-01-15',
      passage: 'Ephesians 2:10',
      content: `"For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them."

This verse beautifully captures the purpose of our existence. We are not accidents or products of chance, but carefully crafted by God for a specific purpose. Like a skilled craftsman who creates a tool for a particular function, God has created each of us with unique gifts and opportunities to serve.

In my journey as a software engineer, I've come to appreciate the beauty of well-designed code. When systems are architected thoughtfully, each component serves a purpose and contributes to the whole. Similarly, God has designed each of us with unique talents and placed us in specific contexts where we can make a meaningful contribution.

The phrase "prepared beforehand" is particularly encouraging. It suggests that God has already planned opportunities for us to serve Him and others. My skills in technology, my understanding of Ethiopian culture, my passion for learning - all of these are gifts that God can use for His purposes.

This doesn't mean that every line of code I write is sacred, but it does mean that God can use my work to serve others, support my family, and contribute to society. Whether I'm building APIs that serve thousands of users or mentoring young developers, these can all be expressions of the good works God has prepared for me.

The key is to approach our work with intentionality, excellence, and a heart to serve. When we do this, even seemingly mundane tasks can become part of God's greater purpose.`,
      reflection: `What unique gifts has God given me? How can I use my skills and opportunities to serve others and glorify God in my daily work?`,
      prayer: `Lord, thank You for creating me with purpose and for preparing good works for me to walk in. Help me to see my work as an opportunity to serve You and others. Give me excellence in my craft and compassion in my relationships. Amen.`
    },
    {
      id: '4',
      title: 'The Power of Community',
      date: '2024-01-12',
      passage: 'Hebrews 10:24-25',
      content: `"And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near."

Working in technology can sometimes feel isolating. Long hours in front of a screen, debugging complex problems, and focusing on abstract concepts can make it easy to withdraw from community. Yet this passage reminds us that we are created for relationship and mutual encouragement.

In the Ethiopian Orthodox tradition, community has always been central to spiritual life. The church serves not just as a place of worship, but as a center of mutual support, learning, and accountability. This same principle applies to all areas of life, including our professional development.

I've found that some of my greatest growth as a developer has come through collaboration with others. Code reviews, pair programming, and technical discussions with peers have challenged me to think differently and improve my skills. Similarly, my spiritual growth has been accelerated through fellowship with other believers who challenge me to love more deeply and serve more faithfully.

The phrase "stir up one another" suggests an active, intentional approach to encouragement. It's not enough to simply be present; we must actively look for ways to inspire and support one another. This might mean sharing a helpful resource with a colleague, offering to help with a difficult project, or simply checking in on someone who seems overwhelmed.

In both professional and spiritual contexts, we are called to be people who build others up rather than tear them down. This is especially important in our digital age, where it's easy to criticize from a distance but harder to offer constructive support.`,
      reflection: `Who in my life needs encouragement today? How can I be more intentional about building up others in my professional and spiritual communities?`,
      prayer: `God, thank You for the gift of community. Help me to be someone who encourages others and builds them up. Show me specific ways I can serve and support those around me. Amen.`
    },
    {
      id: '5',
      title: 'Excellence and Humility',
      date: '2024-01-10',
      passage: 'Colossians 3:23-24',
      content: `"Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ."

This passage has become foundational to how I approach my work as a software engineer. It reminds me that excellence is not about impressing others or building my reputation, but about honoring God through quality work.

When I write code, I often think about this principle. Clean, well-documented code that follows best practices is not just professional courtesy - it's a way of serving others who will maintain and extend the system. It reflects care for the end users who will depend on the application working correctly.

The Ethiopian Orthodox Church teaches that all honest work is dignified and can be a form of worship when done with the right heart. Whether someone is a priest, farmer, teacher, or developer, their work can glorify God when it's done with integrity and excellence.

Yet this passage also guards against pride. When we work "as for the Lord," we're reminded that our ultimate boss is God, not human managers or clients. This perspective helps maintain humility - we strive for excellence not to elevate ourselves, but to honor God and serve others.

This mindset has practical implications. It means taking time to write tests, considering security implications, and thinking about maintainability even when deadlines are tight. It means being honest about limitations and asking for help when needed. It means treating colleagues with respect and being generous with credit.

The promise of reward from the Lord is encouraging, but it's not the primary motivation. The primary motivation is love - love for God, love for the craft, and love for the people who will be affected by our work.`,
      reflection: `How does viewing my work as service to God change my approach to daily tasks? What areas of my work need more excellence and attention to detail?`,
      prayer: `Lord, help me to work with excellence and integrity in all that I do. May my work be a reflection of Your character and a service to others. Keep me humble and focused on serving rather than self-promotion. Amen.`
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {selectedDevotion ? (
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedDevotion(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Devotions</span>
            </button>

            <article className="bg-white rounded-lg shadow-lg p-8">
              <header className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {selectedDevotion.title}
                  </h1>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedDevotion.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Book className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Scripture</span>
                  </div>
                  <p className="text-blue-800 font-medium">{selectedDevotion.passage}</p>
                </div>
              </header>

              <div className="prose prose-lg max-w-none mb-8">
                {selectedDevotion.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Quote className="w-5 h-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Reflection</span>
                  </div>
                  <p className="text-yellow-800 italic">{selectedDevotion.reflection}</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Prayer</span>
                  </div>
                  <p className="text-green-800 italic">{selectedDevotion.prayer}</p>
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
                <Heart className="w-8 h-8 text-red-600" />
                <h1 className="text-3xl font-bold text-gray-900">Daily Devotions</h1>
              </div>
              <p className="text-gray-600 text-lg">
                Reflections on faith, technology, and life's journey
              </p>
            </div>

            <div className="grid gap-6">
              {devotions.map((devotion) => (
                <div
                  key={devotion.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                  onClick={() => setSelectedDevotion(devotion)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          {new Date(devotion.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-600 text-sm">
                        <Book className="w-4 h-4" />
                        <span>{devotion.passage}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {devotion.title}
                    </h2>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {devotion.content.split('\n\n')[1] || devotion.content.split('\n\n')[0]}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Read more →
                      </span>
                      <Heart className="w-4 h-4 text-red-500" />
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

export default DevotionsApp;