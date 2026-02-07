import React, { useState } from 'react';
import { 
  Award, 
  Star, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Sparkles
} from 'lucide-react';
import { teamMembers } from '../utils/constants';
import BookingForm from './BookingForm';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleBookWithMember = (member) => {
    setSelectedMember(member.name);
    setShowBooking(true);
  };

  const handleViewDetails = (member) => {
    setSelectedMember(member);
  };

  // Calculate visible team members (3 at a time for desktop)
  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + 3);
  if (visibleMembers.length < 3) {
    visibleMembers.push(...teamMembers.slice(0, 3 - visibleMembers.length));
  }

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Expert</span> Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of certified professionals is ready to make you look and feel amazing
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-black rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-teal-500 mb-2">{teamMembers.length}</div>
            <div className="text-white">Expert Team Members</div>
          </div>
          <div className="bg-black rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-teal-500 mb-2">
              {teamMembers.reduce((acc, member) => acc + member.experience, 0)}+
            </div>
            <div className="text-white">Years Experience</div>
          </div>
          <div className="bg-black rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-teal-500 mb-2">4.9/5</div>
            <div className="text-white">Average Rating</div>
          </div>
          <div className="bg-black rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-teal-500 mb-2">100%</div>
            <div className="text-white">Certified Professionals</div>
          </div>
        </div>

        {/* Desktop Team Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                {/* Member Card */}
                <div className="relative">
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold z-10 flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    {member.experience}+ yrs
                  </div>

                  {/* Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-primary font-medium">{member.position}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{member.rating}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-500 mb-2">Specializes In:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.slice(0, 3).map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-3 mb-6">
                      {member.social?.instagram && (
                        <a
                          href={member.social.instagram}
                          className="p-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {member.social?.facebook && (
                        <a
                          href={member.social.facebook}
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a
                          href={member.social.twitter}
                          className="p-2 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
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
                        View
                      </button>
                    </div>
                  </div>

                  {/* Availability Badge */}
                  {member.available && (
                    <div className="absolute bottom-4 left-4 bg-black text-teal-500 px-3 py-1 rounded-full text-sm font-bold">
                      Available
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {teamMembers.map((member) => (
                  <div key={member.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                      {/* Member Card for Mobile */}
                      <div>
                        {/* Experience Badge */}
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold z-10 flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {member.experience}+ yrs
                        </div>

                        {/* Member Image */}
                        <div className="relative h-56">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Member Info */}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                              <p className="text-primary font-medium">{member.position}</p>
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="ml-1 font-medium">{member.rating}</span>
                            </div>
                          </div>

                          {/* Specialties */}
                          <div className="mb-4">
                            <div className="text-sm font-semibold text-gray-500 mb-2">Specializes In:</div>
                            <div className="flex flex-wrap gap-2">
                              {member.specialties.slice(0, 2).map((spec, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <button
                              onClick={() => handleBookWithMember(member)}
                              className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {teamMembers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Team Button */}
        <div className="text-center mt-12">
          <a
            href="/team"
            className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold transition-all"
          >
            <Users className="w-5 h-5 mr-3" />
            View All Team Members
          </a>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && typeof selectedMember === 'object' && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedMember.name}
                    </h2>
                    <p className="text-primary font-medium text-lg">
                      {selectedMember.position}
                    </p>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(selectedMember.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">
                        {selectedMember.rating}/5
                      </span>
                      <span className="ml-4 text-gray-500">
                        {selectedMember.experience}+ years experience
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4">About</h3>
                  <p className="text-gray-600 mb-6">{selectedMember.bio}</p>

                  <h3 className="text-xl font-bold mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMember.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-4">Availability</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.schedule.map((day, idx) => (
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
                  {/* Quick Stats */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold mb-4">Quick Stats</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience</span>
                        <span className="font-bold">{selectedMember.experience}+ years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <span className={`font-bold ${selectedMember.available ? 'text-green-600' : 'text-red-600'}`}>
                          {selectedMember.available ? 'Available Now' : 'Not Available'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating</span>
                        <span className="font-bold">{selectedMember.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  {selectedMember.social && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold mb-4">Connect</h4>
                      <div className="flex space-x-4">
                        {selectedMember.social.instagram && (
                          <a
                            href={selectedMember.social.instagram}
                            className="p-2 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100"
                          >
                            <Instagram className="w-6 h-6" />
                          </a>
                        )}
                        {selectedMember.social.facebook && (
                          <a
                            href={selectedMember.social.facebook}
                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                          >
                            <Facebook className="w-6 h-6" />
                          </a>
                        )}
                        {selectedMember.social.twitter && (
                          <a
                            href={selectedMember.social.twitter}
                            className="p-2 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100"
                          >
                            <Twitter className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <button
                    onClick={() => {
                      handleBookWithMember(selectedMember);
                      setSelectedMember(null);
                    }}
                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-opacity-90"
                  >
                    Book with {selectedMember.name.split(' ')[0]}
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
    </section>
  );
};

export default Team;