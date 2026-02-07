import React from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';
import {Link , useNavigate} from "react-router-dom"
const ServiceCard = ({ service }) => {
  const goto = useNavigate();
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 font-[Poppins]">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 ${service.color} rounded-xl`}>
          {service.icon}
        </div>
        <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
          {service.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-500 transition-colors font-[Playfair Display]">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="text-left">
            <div className="font-bold text-lg text-teal-500">{service.price}</div>
            <div className="text-sm text-gray-500 flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {service.duration}
            </div>
          </div>
        </div>
        {service.rating && (
          <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-[#FACC15] fill-current" />
            <span className="ml-1 text-sm font-medium">{service.rating}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-3 mb-6">
        {service.features?.map((feature, idx) => (
          <div key={idx} className="flex items-center">
            <div className="w-2 h-2 bg-teal-500text-teal-500 rounded-full mr-3"></div>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <Link to={"/booking"}>
      <button
      className="w-full bg-black text-white py-3 rounded-xl font-semibold flex items-center justify-center hover:opacity-90 transition-all transform hover:scale-[1.02]">
        Book Now
        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>
        </Link>
    </div>
  );
};

export default ServiceCard;
