import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';
import { 
  Scissors, 
  Award, 
  Users, 
  Clock, 
  Shield,
  ArrowRight,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const Home = () => {
  const [showBooking, setShowBooking] = useState(false);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '5,000+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, value: '15+', label: 'Years Experience' },
    { icon: <Scissors className="w-8 h-8" />, value: '10,000+', label: 'Haircuts Done' },
    { icon: "", value: '50+', label: 'Expert Stylists' },
  ];

  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Hygiene First',
      description: 'Sterilized equipment & single-use tools for every client'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Online Booking',
      description: 'Book appointments 24/7 with instant confirmation'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Certified Experts',
      description: 'Internationally trained stylists & barbers'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Premium Products',
      description: 'Using top brands like L\'Oréal, Schwarzkopf & Dyson'
    }
  ];

  return (
    <>
      <Hero onBookNow={() => setShowBooking(true)} />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-secondary via-white to-secondary font-barber">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur rounded-2xl p-6 shadow-2xl border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary border border-gray-300 rounded-full shadow-xl mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 font-barber-heading">
                  {stat.value}
                </div>
                <div className="text-gray-700 uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-200 font-barber">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-barber-heading text-gray-900">
              Why Choose <span className="text-primary">Kigali Clipper Zone</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We’re not just a salon — we’re a grooming tradition built on precision and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary border border-gray-300 rounded-xl text-primary mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-barber-heading text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Team />
      <Products />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br text-white from-gray-900 via-black to-gray-800 font-barber">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-secondary">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-barber-heading">
              Ready for a Clean, Sharp Look?
            </h2>
            <p className="text-lg opacity-90 mb-10">
              Book your appointment and experience Kigali’s premium barbershop.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setShowBooking(true)}
                className="bg-primary px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center justify-center"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <a
                href="tel:+250788123456"
                className="border-2 border-secondary text-secondary px-10 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-gray-900 transition-all flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-secondary font-barber">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-barber-heading text-gray-900">
                Visit Our <span className="text-primary">Salon</span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">
                      La Bonne Adresse, KN 2 Roundabout<br />
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday – Saturday: 8:00 AM – 8:00 PM<br />
                      Sunday: 10:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Contact</h3>
                    <p className="text-gray-600">
                      Phone: 0788 295 833<br />
                      Email: info@kigaliclipperzone.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex space-x-4">
                <a className="p-3 bg-gray-900 text-white rounded-lg hover:bg-black transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a className="p-3 bg-gray-900 text-white rounded-lg hover:bg-black transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a className="p-3 bg-gray-900 text-white rounded-lg hover:bg-black transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.490104291926!2d30.061713!3d-1.950403"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Kigali Clipper Zone Location"
              />
            </div>
          </div>
        </div>
      </section>

      {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
    </>
  );
};

export default Home;
