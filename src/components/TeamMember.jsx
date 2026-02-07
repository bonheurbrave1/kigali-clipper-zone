import React from 'react';
import { Instagram, Facebook, Twitter, Award, Star } from 'lucide-react';

const TeamMember = ({ member }) => {
  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
      {/* Experience Badge */}
      {member.experience && (
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold z-10 flex items-center">
          <Award className="w-4 h-4 mr-1" />
          {member.experience}+ yrs
        </div>
      )}

      {/* Member Image */}
      <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-primary transition-all duration-500">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-2">{member.position}</p>
        <div className="flex items-center justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < member.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({member.rating})</span>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">Specialties:</h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {member.specialties?.map((spec, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mb-6">
        {member.social?.instagram && (
          <a
            href={member.social.instagram}
            className="p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
        {member.social?.facebook && (
          <a
            href={member.social.facebook}
            className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        )}
        {member.social?.twitter && (
          <a
            href={member.social.twitter}
            className="p-2 bg-blue-50 text-blue-400 rounded-full hover:bg-blue-100 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Action Button */}
      <button className="w-full bg-gradient-to-r from-gray-900 to-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all transform hover:scale-[1.02] group/btn">
        <span className="flex items-center justify-center">
          Book with {member.name.split(' ')[0]}
          <span className="ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity">
            →
          </span>
        </span>
      </button>

      {/* Availability Badge */}
      {member.available && (
        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold rotate-12 shadow-lg">
          Available
        </div>
      )}
    </div>
  );
};

export default TeamMember;