import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Award, 
  Star, 
  Calendar, 
  Clock, 
  Users,
  Trophy,
  Shield,
  Sparkles,
  ChevronDown,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react';
import TeamMember from '../components/TeamMember';
import BookingForm from '../components/BookingForm';
import { teamMembers, socialLinks } from '../utils/constants';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedMemberDetail, setSelectedMemberDetail] = useState(null);

  const specialties = ['All', 'Haircut', 'Coloring', 'Beard', 'Makeup', 'Nails', 'Treatment', 'Bridal'];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = searchTerm === '' || 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSpecialty = filterSpecialty === 'All' || 
      member.specialties.some(spec => spec.toLowerCase().includes(filterSpecialty.toLowerCase()));
    
    return matchesSearch && matchesSpecialty;
  });

  const displayedMembers = showAll ? filteredMembers : filteredMembers.slice(0, 6);

  const handleBookWithMember = (member) => {
    setSelectedMember(member.name);
    setShowBooking(true);
  };

  const handleViewDetails = (member) => {
    setSelectedMemberDetail(member);
  };

  const stats = [
    { label: 'Total Team Members', value: teamMembers.length, icon: <Users /> },
    { label: 'Years Experience', value: teamMembers.reduce((acc, m) => acc + m.experience, 0), icon: <Award /> },
    { label: 'Average Rating', value: '4.9/5', icon: <Star /> },
    { label: 'Certifications', value: '24+', icon: <Shield /> },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-gray-900">Dream Team</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Get to know the talented professionals who will make you look and feel amazing
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl text-primary mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Introduction */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Expert</span> Team
              </h2>
              <p className="text-gray-600 mb-6">
                At Kigali Clipper Zone, we pride ourselves on having the most talented and 
                experienced team in Rwanda. Each member is carefully selected, extensively 
                trained, and continuously developed to provide you with exceptional service.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span>Internationally trained professionals</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-primary mr-3" />
                  <span>Award-winning stylists and barbers</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-3" />
                  <span>Continuous education and training</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {teamMembers.slice(0, 6).map((member, idx) => (
                <div key={idx} className="relative group">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <div className="absolute bottom-2 left-2 right-2 text-white text-xs">
                      <div className="font-bold truncate">{member.name.split(' ')[0]}</div>
                      <div className="truncate opacity-90">{member.position.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search team members by name or specialty..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <Filter className="w-5 h-5 mr-2" />
                <span className="font-medium">Specialty</span>
              </div>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-medium">Sort By</span>
              </div>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl"
                onChange={(e) => console.log('Sort by:', e.target.value)}
              >
                <option value="experience">Experience (High to Low)</option>
                <option value="rating">Rating (High to Low)</option>
                <option value="name">Name (A to Z)</option>
              </select>
            </div>
          </div>

          {/* Specialty Chips */}
          <div className="flex flex-wrap gap-3">
            {specialties.map(specialty => (
              <button
                key={specialty}
                onClick={() => setFilterSpecialty(specialty)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filterSpecialty === specialty
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="text-gray-600">
              Showing {displayedMembers.length} of {filteredMembers.length} team members
            </p>
          </div>
          <button className="text-primary hover:underline flex items-center">
            Available Now: {teamMembers.filter(m => m.available).length}
            <ChevronDown className="ml-2 w-4 h-4" />
          </button>
        </div>

        {filteredMembers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No team members found</h3>
            <p className="text-gray-600">Try changing your search or filter criteria</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedMembers.map((member) => (
                <div key={member.id} className="relative">
                  <TeamMember member={member} />
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => handleBookWithMember(member)}
                      className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => handleViewDetails(member)}
                      className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length > 6 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  {showAll ? 'Show Less' : `View All ${filteredMembers.length} Team Members`}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Why Our Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team sets us apart with exceptional skills, training, and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Experts</h3>
              <p className="text-gray-600">
                All team members hold international certifications and regular training
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Years of Experience</h3>
              <p className="text-gray-600">
                Combined 75+ years of professional experience in beauty industry
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6">
              </div>
              <h3 className="text-xl font-bold mb-3">Latest Trends</h3>
              <p className="text-gray-600">
                Regular training on latest international trends and techniques
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Team available 7 days a week with flexible appointment times
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Want to Join Our <span className="text-secondary">Team</span>?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            We're always looking for talented professionals to join our growing team.
            If you're passionate about beauty and customer service, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@kigaliclipperzone.com"
              className="bg-secondary text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Your CV
            </a>
            <a
              href="tel:+250788123456"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMemberDetail && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary">
                    <img
                      src={selectedMemberDetail.image}
                      alt={selectedMemberDetail.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedMemberDetail.name}
                    </h2>
                    <p className="text-primary font-medium text-lg">
                      {selectedMemberDetail.position}
                    </p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedMemberDetail.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-600">
                        {selectedMemberDetail.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMemberDetail(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4">About</h3>
                  <p className="text-gray-600 mb-6">{selectedMemberDetail.bio}</p>

                  <h3 className="text-xl font-bold mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMemberDetail.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-4">Availability</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMemberDetail.schedule.map((day, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold mb-4">Quick Stats</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience</span>
                        <span className="font-bold">{selectedMemberDetail.experience}+ years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className={`font-bold ${selectedMemberDetail.available ? 'text-green-600' : 'text-red-600'}`}>
                          {selectedMemberDetail.available ? 'Available Now' : 'Not Available'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Languages</span>
                        <span className="font-bold">EN, FR, RW</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold mb-4">Connect</h4>
                    <div className="flex space-x-4">
                      {selectedMemberDetail.social?.instagram && (
                        <a
                          href={selectedMemberDetail.social.instagram}
                          className="p-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100"
                        >
                          <Instagram className="w-6 h-6" />
                        </a>
                      )}
                      {selectedMemberDetail.social?.facebook && (
                        <a
                          href={selectedMemberDetail.social.facebook}
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                        >
                          <Facebook className="w-6 h-6" />
                        </a>
                      )}
                      {selectedMemberDetail.social?.twitter && (
                        <a
                          href={selectedMemberDetail.social.twitter}
                          className="p-2 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedMember(selectedMemberDetail.name);
                      setShowBooking(true);
                      setSelectedMemberDetail(null);
                    }}
                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-opacity-90"
                  >
                    Book Appointment with {selectedMemberDetail.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBooking && (
        <BookingForm 
          onClose={() => setShowBooking(false)} 
          selectedService={selectedMember ? `with ${selectedMember}` : null}
        />
      )}
    </div>
  );
};

export default TeamPage;