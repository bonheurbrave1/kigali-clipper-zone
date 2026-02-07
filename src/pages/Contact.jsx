import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ExternalLink
} from 'lucide-react';
import { contactInfo, socialLinks, businessHours, faqs } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const services = [
    'General Inquiry',
    'Booking Inquiry',
    'Service Question',
    'Product Question',
    'Complaint',
    'Feedback',
    'Partnership',
    'Career Opportunity'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: [contactInfo.phone, contactInfo.emergency],
      action: `tel:${contactInfo.phone}`,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: [contactInfo.email, 'response within 24 hours'],
      action: `mailto:${contactInfo.email}`,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: [contactInfo.address, 'La Bonne Adresse, KN 2 Roundabout'],
      action: 'https://goo.gl/maps/example',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Mon-Sat: 8AM-8PM', 'Sun: 10AM-6PM'],
      action: '#hours',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gray-900">Touch</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We're here to help! Contact us with any questions or to book your appointment
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 -mt-10 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.color} mb-4`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{method.title}</h3>
              {method.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'contact'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'faq'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'support'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Support
              </button>
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and we'll get back to you as soon as possible
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            className={`w-full p-3 border rounded-lg ${
                              errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Enter your full name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            className={`w-full p-3 border rounded-lg ${
                              errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="Enter your email"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            className={`w-full p-3 border rounded-lg ${
                              errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="0788 295 833"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        {/* Service */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interested In
                          </label>
                          <select
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.service}
                            onChange={(e) => handleChange('service', e.target.value)}
                          >
                            <option value="">Select a service</option>
                            {services.map(service => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-lg"
                          value={formData.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          placeholder="What is this regarding?"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          className={`w-full p-3 border rounded-lg h-40 ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us how we can help you..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600 mb-8">
                  Find answers to common questions about our services
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full text-left p-6 hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => {
                          // Toggle FAQ answer visibility
                          const content = document.getElementById(`faq-${index}`);
                          if (content.style.maxHeight) {
                            content.style.maxHeight = null;
                          } else {
                            content.style.maxHeight = content.scrollHeight + "px";
                          }
                        }}
                      >
                        <span className="font-medium text-lg">{faq.question}</span>
                        <span className="text-primary">+</span>
                      </button>
                      <div
                        id={`faq-${index}`}
                        className="px-6 overflow-hidden transition-all duration-300"
                        style={{ maxHeight: '0px' }}
                      >
                        <div className="pb-6 text-gray-600">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Support Tab */}
            {activeTab === 'support' && (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-2">Customer Support</h2>
                <p className="text-gray-600 mb-8">
                  We're committed to providing excellent customer service
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                      Live Chat Support
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Chat with our support team in real-time during business hours
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                      Start Live Chat
                    </button>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Phone className="w-6 h-6 mr-3 text-green-600" />
                      Emergency Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      For urgent matters outside business hours:
                    </p>
                    <a
                      href={`tel:${contactInfo.emergency}`}
                      className="text-green-700 font-bold text-lg hover:underline"
                    >
                      {contactInfo.emergency}
                    </a>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">
                      Response Times
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Email: Within 24 hours</li>
                      <li>• Phone: During business hours</li>
                      <li>• Live Chat: Instant during business hours</li>
                      <li>• Social Media: Within 12 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-primary" />
                Business Hours
              </h3>
              <div className="space-y-4">
                {businessHours.map((day, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium">{day.day}</span>
                    <span className="text-gray-600">{day.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-4 rounded-xl flex items-center justify-center hover:bg-blue-700"
                >
                  <Facebook className="w-6 h-6 mr-2" />
                  Facebook
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl flex items-center justify-center hover:opacity-90"
                >
                  <Instagram className="w-6 h-6 mr-2" />
                  Instagram
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white p-4 rounded-xl flex items-center justify-center hover:bg-blue-500"
                >
                  <Twitter className="w-6 h-6 mr-2" />
                  Twitter
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-4 rounded-xl flex items-center justify-center hover:bg-red-700"
                >
                  <Youtube className="w-6 h-6 mr-2" />
                  YouTube
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.490104291926!2d30.061713!3d-1.950403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTcnMDEuNSJTIDMwwrAwMyc0Mi4xIkU!5e0!3m2!1sen!2srw!4v1645541234567"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kigali Clipper Zone Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-primary" />
                  Our Location
                </h3>
                <p className="text-gray-600 mb-4">{contactInfo.address}</p>
                <a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center hover:underline"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center hover:underline"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {contactInfo.email}
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;