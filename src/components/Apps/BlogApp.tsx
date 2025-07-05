import React, { useState } from 'react';
import { Calendar, Clock, ArrowLeft, BookOpen, Heart, Brain } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const BlogApp: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'ai-future-jobs',
      title: 'AI and the Future of Jobs: Adaptation Over Replacement',
      excerpt: 'Exploring how artificial intelligence will reshape the job market and why adaptation, not replacement, is the key to thriving in an AI-driven world.',
      content: `# AI and the Future of Jobs: Adaptation Over Replacement

The conversation around AI and employment often centers on fear - fear of job displacement, economic disruption, and technological unemployment. But as someone working at the intersection of AI development and practical applications, I believe we're looking at this from the wrong angle.

## The Real Question Isn't "Will AI Replace Jobs?"

The real question is: "How will AI transform the way we work?" History shows us that technological revolutions don't just destroy jobs - they create new ones, often in ways we couldn't have imagined.

## What I've Learned Building AI Systems

In developing projects like HeartSync (an AI relationship coach) and the EthiopicBible API, I've seen firsthand how AI augments human capabilities rather than replacing them:

### 1. AI Handles the Routine, Humans Handle the Creative
- AI excels at pattern recognition and data processing
- Humans excel at context, creativity, and emotional intelligence
- The magic happens when these strengths combine

### 2. New Skills, Not New People
- Programming is becoming more accessible through AI assistance
- Data literacy is becoming as important as traditional literacy
- Emotional intelligence and critical thinking are more valuable than ever

## The Ethiopian Context

In Ethiopia, we have a unique opportunity to leapfrog traditional development patterns:

- **Education**: AI can personalize learning at scale (like in my LifelongLearners platform)
- **Healthcare**: AI diagnostics can extend specialist knowledge to rural areas
- **Agriculture**: AI can optimize crop yields and predict weather patterns
- **Language**: AI can preserve and promote local languages like Amharic and Ge'ez

## Preparing for the AI Future

### For Individuals:
1. **Embrace Continuous Learning**: The half-life of skills is shrinking
2. **Develop AI Literacy**: Understand what AI can and cannot do
3. **Focus on Human Skills**: Creativity, empathy, complex problem-solving
4. **Learn to Collaborate with AI**: Think of AI as a powerful tool, not a replacement

### For Organizations:
1. **Invest in Reskilling**: Help employees adapt to AI-augmented workflows
2. **Focus on Human-AI Collaboration**: Design systems that leverage both strengths
3. **Ethical AI Development**: Ensure AI systems are fair, transparent, and beneficial

## The Philosophical Dimension

As someone who studies philosophy alongside technology, I'm reminded of the ancient Greek concept of techne - the marriage of skill and knowledge. AI represents a new form of techne, but it still requires human wisdom to guide it.

The question isn't whether AI will change work - it already has. The question is whether we'll adapt thoughtfully and ethically, ensuring that technological progress serves human flourishing.

## Conclusion

The future of work in an AI world isn't about humans versus machines. It's about humans with machines, creating possibilities we couldn't achieve alone. The key is to approach this transformation with curiosity rather than fear, wisdom rather than haste, and always with human dignity at the center.

As we build these systems, we have the responsibility to ensure they amplify the best of human potential rather than diminish it. That's not just a technical challenge - it's a moral one.`,
      date: '2024-01-25',
      readTime: '8 min read',
      category: 'Technology & Society',
      tags: ['AI', 'Future of Work', 'Technology', 'Ethics', 'Career Development']
    },
    {
      id: 'make-it-stick-notes',
      title: 'Make It Stick: Learning That Lasts',
      excerpt: 'Key insights from "Make It Stick" on effective learning strategies, retrieval practice, and how to build lasting knowledge in both programming and life.',
      content: `# Make It Stick: Learning That Lasts

Recently finished reading "Make It Stick" by Peter Brown, Henry Roediger, and Mark McDaniel. As someone constantly learning new technologies and deepening my understanding of both code and faith, the insights from this book have been transformative.

## Key Principles

### 1. Retrieval Practice
Testing yourself frequently is more effective than re-reading. Instead of reviewing code examples, try to write them from memory first.

### 2. Spaced Repetition
Spacing out learning sessions over time strengthens memory more than cramming. This applies to learning new programming languages or theological concepts.

### 3. Interleaving
Mixing different types of problems or topics in a single study session improves discrimination and transfer of learning.

## Application in Programming

When learning a new framework:
- **Don't just read documentation** - Try to implement features from memory
- **Mix different concepts** - Don't just focus on React hooks; mix in state management, routing, etc.
- **Test frequently** - Build small projects that challenge your understanding

## Application in AI/ML Learning

In my journey through data science and AI:
- **Practice coding algorithms from scratch** before using libraries
- **Alternate between theory and implementation** in the same session
- **Explain concepts to others** - teaching forces retrieval and reveals gaps

## Application in Faith

The same principles apply to spiritual growth:
- **Active engagement** with scripture through journaling and discussion
- **Spaced reflection** on lessons learned rather than intensive but infrequent study
- **Connecting different areas** of faith, theology, and daily life

## The Illusion of Knowing

One of the most powerful insights from the book is recognizing the "illusion of knowing" - when we confuse familiarity with understanding. This happens in code when we think we understand a concept because we've seen it many times, but we struggle to implement it independently.

## Practical Takeaways

1. **Embrace difficulty** - If learning feels hard, you're probably doing it right
2. **Test early and often** - Don't wait until you feel ready
3. **Connect new learning to existing knowledge** - Build bridges between concepts
4. **Be patient with the process** - Lasting learning takes time

Learning is not about cramming information but about building durable, flexible knowledge that can be applied in new situations. Whether we're debugging code, training ML models, or deepening our faith, these principles help us grow in wisdom and understanding.`,
      date: '2024-01-20',
      readTime: '6 min read',
      category: 'Learning & Growth',
      tags: ['Learning', 'Education', 'Self-improvement', 'Books', 'Study Techniques']
    },
    {
      id: 'eat-that-frog',
      title: 'Eat That Frog: Conquering Procrastination in Tech',
      excerpt: 'How Brian Tracy\'s time management principles apply to software development, AI projects, and creative work. Practical strategies for developers.',
      content: `# Eat That Frog: Conquering Procrastination in Tech

Brian Tracy's "Eat That Frog" has become a cornerstone of my productivity system, especially when juggling multiple projects like the EthiopicBible API, LifelongLearners platform, and creative work. Here's how I've adapted his principles for the unique challenges of tech work.

## The Frog Principle in Software Development

Your "frog" is your biggest, most important task - the one you're most likely to procrastinate on. In tech, this might be:

- **Refactoring legacy code** that everyone avoids
- **Writing comprehensive tests** for a complex feature
- **Tackling that architectural decision** you've been postponing
- **Learning that new technology** your project desperately needs

## The 80/20 Rule for Developers

In my experience building AI applications and web platforms:

### 20% of your code produces 80% of the value
- Focus on core features first
- Identify the critical path in your application
- Don't get lost in edge cases early on

### 20% of bugs cause 80% of user frustration
- Prioritize fixing high-impact issues
- Use error tracking to identify the most common problems
- Address performance bottlenecks before adding new features

## Time Management for Creative-Technical Work

Balancing coding, AI research, and creative projects requires different approaches:

### Morning Frogs (High Cognitive Load)
- **Complex algorithm implementation**
- **Architecture design decisions**
- **Learning new AI/ML concepts**
- **Writing technical documentation**

### Afternoon Tasks (Lower Cognitive Load)
- **Code reviews and testing**
- **UI/UX refinements**
- **Project management and planning**
- **Community engagement and networking**

## The ABCDE Method for Project Prioritization

I use this for managing multiple projects:

### A Tasks (Must Do - Serious Consequences)
- **Production bugs** affecting users
- **Security vulnerabilities**
- **Client deliverables** with hard deadlines
- **Critical infrastructure maintenance**

### B Tasks (Should Do - Mild Consequences)
- **Feature enhancements**
- **Code optimization**
- **Documentation updates**
- **Learning new technologies**

### C Tasks (Nice to Do - No Consequences)
- **Experimental features**
- **Personal side projects**
- **Conference talks preparation**
- **Open source contributions**

## Technology-Specific Applications

### For AI/ML Projects:
1. **Data preparation first** - Clean, quality data is your biggest frog
2. **Simple models before complex ones** - Get a baseline working
3. **Evaluation metrics early** - Know how you'll measure success

### For Web Development:
1. **Core functionality before polish** - Make it work, then make it pretty
2. **Security considerations upfront** - Don't bolt on security later
3. **Performance testing early** - Don't wait until you have scale problems

### For API Development:
1. **Design the interface first** - Your API contract is your frog
2. **Error handling from day one** - Plan for failure scenarios
3. **Documentation as you build** - Don't leave it for later

## Overcoming Tech-Specific Procrastination

### The "Perfect Code" Trap
- **Ship the MVP** - Perfect is the enemy of good
- **Iterate based on feedback** - Users will tell you what matters
- **Refactor continuously** - Don't wait for the "perfect" time

### The "Shiny Technology" Syndrome
- **Stick to your stack** until you have a compelling reason to change
- **Evaluate new tech on side projects** first
- **Consider the learning curve cost** in your timeline

### The "Analysis Paralysis" Problem
- **Set decision deadlines** - Give yourself a time limit for research
- **Use the 70% rule** - Decide when you have 70% of the information
- **Document your reasoning** - You can always revisit later

## Building Systems, Not Just Habits

The key insight from Tracy's work is that systems beat willpower:

### Development Environment Setup
- **Automate repetitive tasks** with scripts and tools
- **Use templates and boilerplates** for common patterns
- **Set up your IDE** for maximum efficiency

### Project Management Systems
- **Use issue tracking** to capture all tasks
- **Time-box exploration** and research activities
- **Regular retrospectives** to improve your process

## The Ethiopian Context

In the Ethiopian tech ecosystem, where resources can be limited:

- **Focus on high-impact, low-resource solutions**
- **Leverage cloud services** to avoid infrastructure overhead
- **Build for mobile-first** - that's where your users are
- **Consider offline capabilities** - connectivity isn't always reliable

## Conclusion

"Eat That Frog" isn't just about personal productivity - it's about building systems that help you consistently tackle the most important work. In tech, where the landscape changes rapidly and projects can feel overwhelming, having a clear framework for prioritization is essential.

The goal isn't to work more hours - it's to work on the right things at the right time. When you consistently eat your frogs, you build momentum, confidence, and ultimately, better software.

Remember: If you have to eat two frogs, eat the ugliest one first. If you have to eat a frog, don't sit and look at it for too long. And if you eat a live frog first thing in the morning, nothing worse will happen to you for the rest of the day.

Now go eat that frog! 🐸`,
      date: '2024-01-15',
      readTime: '10 min read',
      category: 'Productivity & Development',
      tags: ['Productivity', 'Time Management', 'Software Development', 'Project Management', 'Books']
    }
  ];

  const categories = ['All', 'Technology & Society', 'Learning & Growth', 'Productivity & Development'];

  return (
    <div className="h-full flex flex-col">
      {selectedPost ? (
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </button>

            <article className="prose prose-lg max-w-none">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {selectedPost.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </header>

              <div className="prose-content">
                {selectedPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
                  }
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-lg font-semibold mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-4">
                        <li>{paragraph.replace('- ', '')}</li>
                      </ul>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <br key={index} />;
                  }
                  return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                })}
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
                <h1 className="text-3xl font-bold text-gray-900">Daniel's Blog</h1>
              </div>
              <p className="text-gray-600 text-lg">
                Thoughts on AI, technology, learning, and life
              </p>
            </div>

            <div className="grid gap-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Read more →
                      </span>
                      <div className="flex items-center space-x-2">
                        {post.category === 'Technology & Society' && <Brain className="w-4 h-4 text-blue-500" />}
                        {post.category === 'Learning & Growth' && <Brain className="w-4 h-4 text-green-500" />}
                        {post.category === 'Productivity & Development' && <Heart className="w-4 h-4 text-purple-500" />}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogApp;