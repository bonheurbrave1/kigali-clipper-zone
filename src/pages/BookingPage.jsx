import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Scissors, 
  CheckCircle, 
  ArrowRight,
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  Shield,
  Sparkles,
  X,
  AlertCircle,
  Link
} from 'lucide-react';
import { services, teamMembers } from '../utils/constants';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    stylist: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    isNewClient: false
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Generate booking ID
  const generateBookingId = () => {
    return 'KCZ-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  // Available time slots
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00'
  ];

  // Available dates (next 30 days)
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate booking ID
    const id = generateBookingId();
    setBookingId(id);
    
    // Simulate API call
    setTimeout(() => {
      setBookingComplete(true);
      
      // In real app, send confirmation email/SMS here
      console.log('Booking confirmed:', { ...formData, bookingId: id });
      
      // Reset form after success
      setFormData({
        service: '',
        stylist: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: '',
        isNewClient: false
      });
      setStep(1);
    }, 1500);
  };

  // Handle input change
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Calculate service price
  const getServicePrice = () => {
    const service = services.find(s => s.title === formData.service);
    return service ? service.price : '8,000 RWF';
  };

  // Check if step is complete
  const isStepComplete = (stepNum) => {
    switch (stepNum) {
      case 1:
        return formData.service !== '';
      case 2:
        return formData.date !== '' && formData.time !== '';
      case 3:
        return formData.name !== '' && formData.email !== '' && formData.phone !== '';
      default:
        return false;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <Link to={"/booking"}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Book Your <span className="text-gray-900">Appointment</span>
          </h1>
          </Link>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Reserve your spot for a premium salon experience
          </p>
        </div>
      </div>

      {/* Booking Process */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center mb-4 md:mb-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepNum ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stepNum}
                  </div>
                  <div className="ml-4">
                    <div className={`font-medium ${
                      step >= stepNum ? 'text-teal-500' : 'text-gray-600'
                    }`}>
                      {stepNum === 1 && 'Choose Service'}
                      {stepNum === 2 && 'Select Time'}
                      {stepNum === 3 && 'Your Details'}
                    </div>
                  </div>
                  {stepNum < 3 && (
                    <div className={`hidden md:block mx-8 w-16 h-1 ${
                      step > stepNum ? 'bg-teal-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit}>
              {/* Step 1: Choose Service */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Scissors className="mr-3 text-teal-500" />
                    Select Your Service
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => {
                          handleChange('service', service.title);
                          setStep(2);
                        }}
                        className={`p-6 rounded-xl border-2 text-left transition-all ${
                          formData.service === service.title
                            ? 'border-teal-500 bg-teal-500/5'
                            : 'border-gray-200 hover:border-teal-500 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-lg ${service.color}`}>
                            <Scissors className="w-6 h-6" />
                          </div>
                          {service.popular && (
                            <span className="text-xs font-semibold bg-secondary text-gray-900 px-3 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-teal-500">{service.price}</div>
                            <div className="text-sm text-gray-500">{service.duration}</div>
                          </div>
                          <div className="flex items-center text-yellow-500">
                            <span className="font-medium">{service.rating}</span>
                            <span className="ml-1">★</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Time & Stylist */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Calendar className="mr-3 text-teal-500" />
                    Select Date, Time & Stylist
                  </h2>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Date Selection */}
                    <div>
                      <h3 className="font-bold mb-4">Select Date</h3>
                      <div className="grid grid-cols-7 gap-2 mb-6">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                          <div key={day} className="text-center font-medium text-gray-500">
                            {day}
                          </div>
                        ))}
                        {availableDates.map((date, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              const dateStr = date.toISOString().split('T')[0];
                              handleChange('date', dateStr);
                            }}
                            className={`p-3 rounded-lg ${
                              formData.date === date.toISOString().split('T')[0]
                                ? 'bg-teal-500 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                      <h3 className="font-bold mb-4 flex items-center">
                        <Clock className="mr-2 w-5 h-5" />
                        Available Times
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(time => (
                          <button
                            type="button"
                            key={time}
                            onClick={() => handleChange('time', time)}
                            className={`p-3 rounded-lg ${
                              formData.time === time
                                ? 'bg-teal-500 text-white'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Stylist Selection */}
                    <div>
                      <h3 className="font-bold mb-4">Choose Stylist (Optional)</h3>
                      <div className="space-y-4">
                        {teamMembers.slice(0, 3).map(member => (
                          <button
                            type="button"
                            key={member.id}
                            onClick={() => handleChange('stylist', member.name)}
                            className={`w-full p-4 rounded-xl border text-left ${
                              formData.stylist === member.name
                                ? 'border-teal-500 bg-teal-500/5'
                                : 'border-gray-200 hover:border-teal-500'
                            }`}
                          >
                            <div className="flex items-center">
                              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-bold">{member.name}</div>
                                <div className="text-sm text-gray-600">{member.position}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Your Details */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <User className="mr-3 text-teal-500" />
                    Your Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Are you a new client?
                      </label>
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => handleChange('isNewClient', true)}
                          className={`px-6 py-3 rounded-lg ${
                            formData.isNewClient
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          onClick={() => handleChange('isNewClient', false)}
                          className={`px-6 py-3 rounded-lg ${
                            !formData.isNewClient
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg h-32"
                      value={formData.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      placeholder="Any special requests, allergies, or preferences..."
                    ></textarea>
                  </div>

                  {/* Terms */}
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" required />
                      <span className="text-sm text-gray-600">
                        I agree to the cancellation policy (24 hours notice required) 
                        and understand that no-shows may be charged 50% of the service fee.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12 pt-8 border-t">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={!isStepComplete(step)}
                    className="ml-auto px-8 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-secondary text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 flex items-center"
                  >
                    Confirm Booking
                    <CheckCircle className="ml-2 w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Booking Summary</h3>
            
            <div className="space-y-4">
              {formData.service && (
                <div>
                  <div className="text-sm text-gray-500 mb-1">Service</div>
                  <div className="font-medium">{formData.service}</div>
                </div>
              )}
              
              {formData.date && (
                <div>
                  <div className="text-sm text-gray-500 mb-1">Date</div>
                  <div className="font-medium">
                    {new Date(formData.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              )}
              
              {formData.time && (
                <div>
                  <div className="text-sm text-gray-500 mb-1">Time</div>
                  <div className="font-medium">{formData.time}</div>
                </div>
              )}
              
              {formData.stylist && (
                <div>
                  <div className="text-sm text-gray-500 mb-1">Stylist</div>
                  <div className="font-medium">{formData.stylist}</div>
                </div>
              )}
              
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Estimated Total</div>
                  <div className="text-2xl font-bold text-teal-500">
                    {getServicePrice()}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-3 text-teal-500" />
                <span>Hygiene & Safety First</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">

                <span>Premium Products Used</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-3 text-teal-500" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Need Help */}
            <div className="mt-8 pt-6 border-t">
              <div className="text-sm text-gray-600 mb-3">Need help with booking?</div>
              <div className="space-y-2">
                <a
                  href="tel:+250788123456"
                  className="flex items-center text-teal-500 hover:underline"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  0788 295 833
                </a>
                <a
                  href="mailto:booking@kigaliclipperzone.com"
                  className="flex items-center text-teal-500 hover:underline"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  booking@kigaliclipperzone.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {bookingComplete && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Booking Confirmed! 🎉
              </h3>
              
              <p className="text-gray-600 mb-6">
                Your appointment has been scheduled successfully. 
                We've sent confirmation details to your email.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="font-medium mb-2">Booking Details:</div>
                <div className="text-sm space-y-1">
                  <div><span className="font-medium">Booking ID:</span> {bookingId}</div>
                  <div><span className="font-medium">Service:</span> {formData.service}</div>
                  <div><span className="font-medium">Date:</span> {formData.date}</div>
                  <div><span className="font-medium">Time:</span> {formData.time}</div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setBookingComplete(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Add to calendar functionality
                    const event = {
                      title: `Appointment at Kigali Clipper Zone`,
                      description: `Service: ${formData.service}\nStylist: ${formData.stylist || 'Any'}`,
                      start: `${formData.date}T${formData.time}:00`,
                      end: `${formData.date}T${formData.time}:00`,
                      location: 'La Bonne Adresse, KN 2 Roundabout Kigali'
                    };
                    // Implement calendar integration
                    console.log('Add to calendar:', event);
                    alert('Calendar event created!');
                  }}
                  className="flex-1 bg-teal-500 text-white py-3 rounded-xl font-medium hover:bg-opacity-90"
                >
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;