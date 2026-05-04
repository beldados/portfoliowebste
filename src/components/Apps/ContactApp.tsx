import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe, 
  Send, 
  User,
  MessageCircle
} from 'lucide-react';
import { init, send } from '@emailjs/browser';

const ContactApp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    init('jXx0U6ZBVXSarcJhw');
    console.log('EmailJS initialized with key:', 'jXx0U6ZBVXSarcJhw');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'demerwdani@gmail.com' // Your email address
      };

      console.log('Sending email with params:', templateParams);
      console.log('Service ID:', 'service_ihy7k8b');
      console.log('Template ID:', 'template_azae07n');

      // Send email using EmailJS
      const result = await send(
        'service_ihy7k8b',
        'template_azae07n', // Contact Us template
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : 'No stack trace'
      });
      setSubmitStatus('error');
      
      // Fallback: Show contact information
      const fallbackMessage = `Thank you for your message! Since there was a technical issue, please contact me directly:

Email: demerwdani@gmail.com
Phone: +251967287536
LinkedIn: https://linkedin.com/in/daniel-demerw

Your message details:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;
      
      alert(fallbackMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'demerwdani@gmail.com',
      link: 'mailto:demerwdani@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+251967287536',
      link: 'tel:+251967287536'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: 'https://maps.google.com/?q=Addis+Ababa,+Ethiopia'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/beldados',
      link: 'https://github.com/beldados'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/daniel-demerw',
      link: 'https://linkedin.com/in/daniel-demerw'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Website',
      value: 'beldados.vercel.app',
      link: 'https://beldados.com'
    }
  ];

  return (
    <div className="h-full p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Get In Touch</h1>
          </div>
          <p className="text-gray-600 text-lg">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="text-blue-600 group-hover:text-blue-700">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Let's Work Together</h3>
              <p className="text-blue-100 mb-4">
                I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Full-stack web development</li>
                <li>• API design and development</li>
                <li>• Technical consulting</li>
                <li>• Code reviews and mentoring</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject...</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Internship">Internship</option>
                  <option value="Networking">Networking</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Time</h3>
          <p className="text-gray-600">
            I typically respond to emails within 24-48 hours. For urgent matters, 
            feel free to reach out via phone or LinkedIn for faster response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;