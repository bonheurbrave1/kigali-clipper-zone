import React from 'react';
import { Scissors, Star } from 'lucide-react';
import kcz1 from "../assets/kcz1.jpeg";
import { Link } from 'react-router-dom';

const Hero = ({ onBookNow }) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden"
      id="home"
      style={{ fontFamily: "'Barlow Condensed', 'Bebas Neue', 'Anton', sans-serif" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center space-x-2 mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-wide">
              𝐖𝐡𝐞𝐫𝐞 𝐒𝐭𝐲𝐥𝐞 𝐌𝐞𝐞𝐭𝐬{' '}
              <span className="text-secondary">𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐢𝐨𝐧</span>
            </h1>
            
            <p className="text-base text-gray-300 mb-8 max-w-2xl">
              𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐥𝐮𝐱𝐮𝐫𝐲 𝐠𝐫𝐨𝐨𝐦𝐢𝐧𝐠 𝐚𝐧𝐝 𝐛𝐞𝐚𝐮𝐭𝐲 𝐭𝐫𝐞𝐚𝐭𝐦𝐞𝐧𝐭𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐡𝐞𝐚𝐫𝐭 𝐨𝐟 𝐊𝐢𝐠𝐚𝐥𝐢. 
              𝐎𝐮𝐫 𝐦𝐚𝐬𝐭𝐞𝐫 𝐬𝐭𝐲𝐥𝐢𝐬𝐭𝐬 𝐚𝐧𝐝 𝐛𝐚𝐫𝐛𝐞𝐫𝐬 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦 𝐲𝐨𝐮𝐫 𝐥𝐨𝐨𝐤 𝐰𝐢𝐭𝐡 𝐩𝐫𝐞𝐜𝐢𝐬𝐢𝐨𝐧 𝐚𝐧𝐝 𝐚𝐫𝐭𝐢𝐬𝐭𝐫𝐲.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to={"/booking"}>
              <h1
                className=" cursor-pointer text-gray-900 px-8 py-2 rounded-full text-base font-semibold bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
                >
                𝐁𝐨𝐨𝐤 𝐘𝐨𝐮𝐫 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧
              </h1>
                </Link>
              <Link to={"/gallery"}>
              <h1 className="border-2 cursor-pointer border-white px-8 py-2 rounded-full text-base font-semibold hover:bg-white hover:text-gray-900 transition-all">
                𝐕𝐢𝐞𝐰 𝐎𝐮𝐫 𝐆𝐚𝐥𝐥𝐞𝐫𝐲
              </h1>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-secondary mr-2 fill-current" />
                <span className="text-sm">𝟒.𝟗/𝟓 𝐑𝐚𝐭𝐢𝐧𝐠</span>
              </div>
              <div className="flex items-center">
                <Scissors className="w-5 h-5 text-secondary mr-2" />
                <span className="text-sm">𝟓𝟎+ 𝐄𝐱𝐩𝐞𝐫𝐭 𝐒𝐭𝐲𝐥𝐢𝐬𝐭𝐬</span>
              </div>
            </div>
          </div>
          
          {/* Right Image/Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={kcz1}
                alt="𝐒𝐚𝐥𝐨𝐧 𝐈𝐧𝐭𝐞𝐫𝐢𝐨𝐫"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white text-gray-900 p-4 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold text-primary">𝟓𝐊+</div>
                <div className="text-xs">𝐇𝐚𝐩𝐩𝐲 𝐂𝐥𝐢𝐞𝐧𝐭𝐬</div>
              </div>
              <div className="bg-white text-gray-900 p-4 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold text-primary">𝟏𝟓+</div>
                <div className="text-xs">𝐘𝐞𝐚𝐫𝐬 𝐄𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞</div>
              </div>
              <div className="bg-white text-gray-900 p-4 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold text-primary">𝟏𝟎𝟎+</div>
                <div className="text-xs">𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐎𝐟𝐟𝐞𝐫𝐞𝐝</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
