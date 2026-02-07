import React from 'react';
import { 
  Target, 
  Users, 
  Award, 
  Heart, 
  Sparkles, 
  Shield,
  Clock,
  Star,
  Calendar,
  TrendingUp,
  CheckCircle,
  Play,
  Quote
} from 'lucide-react';
import { teamMembers } from '../utils/constants';

const About = () => {
  const milestones = [
    { year: '2008', title: 'Founded', desc: 'Started as a small barber shop in Kigali' },
    { year: '2012', title: 'Expanded', desc: 'Added full salon services and moved to larger location' },
    { year: '2015', title: 'Award Won', desc: 'Named Best Salon in Kigali by Rwanda Tourism Board' },
    { year: '2018', title: 'New Branch', desc: 'Opened second location in Kigali Heights' },
    { year: '2021', title: 'Digital', desc: 'Launched online booking and e-commerce platform' },
    { year: '2024', title: 'Premium', desc: 'Renovated and upgraded to premium luxury salon' },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer First',
      desc: 'We prioritize customer satisfaction above all else'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      desc: 'We maintain honesty and transparency in all dealings'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Teamwork',
      desc: 'We believe in collaboration and mutual respect'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation',
      desc: 'We embrace new techniques and technologies'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Professionalism',
      desc: 'We maintain the highest standards of professionalism'
    }
  ];

  const stats = [
    { icon: <Calendar className="w-6 h-6" />, value: '15+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '5,000+', label: 'Happy Clients' },
    { icon: <Star className="w-6 h-6" />, value: '4.9/5', label: 'Average Rating' },
    { icon: <Award className="w-6 h-6" />, value: '12', label: 'Industry Awards' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '98%', label: 'Client Retention' },
    { icon: <Clock className="w-6 h-6" />, value: '50K+', label: 'Services Delivered' },
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-rose-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 to-fuchsia-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-rose-100">Story</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            From humble beginnings to becoming Kigali's premier salon and barber destination
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 -mt-10 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm bg-white/90">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
                Welcome to Kigali Clipper Zone
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2008 by master barber Alex Kamali, Kigali Clipper Zone began as 
                  a small, passionate barber shop with a simple mission: to provide exceptional 
                  grooming services to the people of Kigali.
                </p>
                <p>
                  Over the years, we've grown into a premier salon and beauty destination, 
                  offering a comprehensive range of services from haircuts and styling to 
                  beauty treatments and wellness services.
                </p>
                <p>
                  Today, we're proud to be Kigali's most trusted salon, known for our 
                  exceptional service, talented team, and commitment to excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Salon Interior"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-fuchsia-600 to-rose-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">2008</div>
                <div className="text-sm opacity-90">Year Established</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-rose-500 to-fuchsia-600 rounded-2xl p-8 text-white">
            <Target className="w-12 h-12 mb-6 text-rose-100" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="opacity-90">
              To provide exceptional beauty and grooming services that enhance our clients' 
              confidence and well-being, while maintaining the highest standards of quality, 
              hygiene, and customer service in Rwanda.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-800 to-rose-500 rounded-2xl p-8 text-white">
            <Sparkles className="w-12 h-12 mb-6 text-rose-100" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="opacity-90">
              To become East Africa's leading salon brand, recognized for innovation, 
              excellence, and creating transformative experiences that set new standards 
              in the beauty industry.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/90">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
              By The Numbers
            </h2>
            <p className="text-gray-600">Our journey in numbers and achievements</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-xl text-fuchsia-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-gray-600">Key milestones in our growth story</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-300 to-fuchsia-300 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-sm bg-white/90 hover:shadow-xl transition-shadow">
                    <div className="font-bold text-lg mb-2 bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                
                {/* Dot */}
                <div className="w-4 h-4 bg-gradient-to-br from-rose-500 to-fuchsia-600 rounded-full border-4 border-white shadow-lg my-4 md:my-0 z-10"></div>
                
                {/* Year */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="text-4xl font-bold text-gray-300 text-center md:text-left">
                    {milestone.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/90"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-xl text-fuchsia-600 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder's Message */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-purple-800 to-fuchsia-600 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <Quote className="w-12 h-12 mb-6 text-rose-100" />
              <h3 className="text-2xl font-bold mb-6">Message from Our Founder</h3>
              <p className="opacity-90 mb-6 italic">
                "When I started Kigali Clipper Zone in 2008, my vision was simple: 
                to create a space where people could come not just for a haircut, 
                but for an experience that makes them feel confident and valued. 
                Today, I'm proud to see that vision realized beyond my expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 mr-4">
                  <img
                    src={teamMembers[0].image}
                    alt="Alex Kamali"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">Alex Kamali</div>
                  <div className="text-sm opacity-90">Founder & Master Barber</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Founder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Preview */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600">The talented professionals who lead our team</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, 3).map(member => (
            <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/90">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-fuchsia-600 font-medium mb-3">{member.position}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="ml-1 font-medium">{member.rating}</span>
                  <span className="ml-2 text-gray-500">{member.experience}+ years experience</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.slice(0, 3).map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-rose-50 to-fuchsia-50 text-fuchsia-700 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Involvement */}
      <div className="bg-gradient-to-b from-rose-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-600 to-rose-500 bg-clip-text text-transparent">
              Community & Sustainability
            </h2>
            <p className="text-gray-600">Giving back to our community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full text-fuchsia-600 mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community Training</h3>
              <p className="text-gray-600">
                We provide free training to aspiring beauty professionals from underserved communities
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full text-fuchsia-600 mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Eco-Friendly Practices</h3>
              <p className="text-gray-600">
                We use sustainable products and practices to minimize our environmental impact
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full text-fuchsia-600 mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Charity Work</h3>
              <p className="text-gray-600">
                We regularly donate services to orphanages, schools, and community events
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-fuchsia-600 to-rose-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Our <span className="text-rose-100">Story</span>
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Experience the Kigali Clipper Zone difference. Book your appointment today and 
            join thousands of satisfied customers who trust us with their beauty needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-white text-fuchsia-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 hover:shadow-xl transition-all duration-300"
            >
              Book Your Visit
            </a>
            <a
              href="/contact"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;