import React, { useState } from 'react';

import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Scissors, 
  Sparkles, 
  ChevronRight,
  X,
  CheckCircle
} from 'lucide-react'; 


const BookingForm = ({ onbClose, selectedService }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: selectedService || '',
    stylist: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
    paymentMethod: '',
    referral: ''
  });

  const [bookingComplete, setBookingComplete] = useState(false);

  const services = [
    { id: 1, name: '𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐇𝐚𝐢𝐫𝐜𝐮𝐭', duration: '𝟒𝟓𝐦𝐢𝐧', price: '𝟖,𝟎𝟎𝟎 𝐑𝐖𝐅' },
    { id: 2, name: '𝐁𝐞𝐚𝐫𝐝 𝐓𝐫𝐢𝐦 & 𝐒𝐡𝐚𝐩𝐞', duration: '𝟑𝟎𝐦𝐢𝐧', price: '𝟓,𝟎𝟎𝟎 𝐑𝐖𝐅' },
    { id: 3, name: '𝐇𝐚𝐢𝐫 𝐂𝐨𝐥𝐨𝐫𝐢𝐧𝐠', duration: '𝟐𝐡', price: '𝟐𝟓,𝟎𝟎𝟎 𝐑𝐖𝐅' },
    { id: 4, name: '𝐊𝐞𝐫𝐚𝐭𝐢𝐧 𝐓𝐫𝐞𝐚𝐭𝐦𝐞𝐧𝐭', duration: '𝟑𝐡', price: '𝟑𝟓,𝟎𝟎𝟎 𝐑𝐖𝐅' },
    { id: 5, name: '𝐁𝐫𝐢𝐝𝐚𝐥 𝐌𝐚𝐤𝐞𝐮𝐩', duration: '𝟐.𝟓𝐡', price: '𝟓𝟎,𝟎𝟎𝟎 𝐑𝐖𝐅' },
    { id: 6, name: '𝐅𝐮𝐥𝐥 𝐅𝐚𝐜𝐢𝐚𝐥', duration: '𝟏𝐡', price: '𝟏𝟓,𝟎𝟎𝟎 𝐑𝐖𝐅' },
    { id: 7, name: '𝐌𝐚𝐧𝐢𝐜𝐮𝐫𝐞 & 𝐏𝐞𝐝𝐢𝐜𝐮𝐫𝐞', duration: '𝟏.𝟓𝐡', price: '𝟏𝟐,𝟎𝟎𝟎 𝐑𝐖𝐅' },
    { id: 8, name: '𝐅𝐮𝐥𝐥 𝐁𝐨𝐝𝐲 𝐌𝐚𝐬𝐬𝐚𝐠𝐞', duration: '𝟏𝐡', price: '𝟐𝟎,𝟎𝟎𝟎 𝐑𝐖𝐅' },
  ];

  const stylists = [
    { id: 1, name: '𝐀𝐥𝐞𝐱 𝐊𝐚𝐦𝐚𝐥𝐢', specialty: '𝐇𝐚𝐢𝐫𝐜𝐮𝐭 𝐄𝐱𝐩𝐞𝐫𝐭', rating: 4.9 },
    { id: 2, name: '𝐌𝐚𝐫𝐢𝐞 𝐔𝐰𝐚𝐬𝐞', specialty: '𝐂𝐨𝐥𝐨𝐫 𝐒𝐩𝐞𝐜𝐢𝐚𝐥𝐢𝐬𝐭', rating: 4.8 },
    { id: 3, name: '𝐃𝐚𝐯𝐢𝐝 𝐍𝐬𝐡𝐮𝐭𝐢', specialty: '𝐁𝐞𝐚𝐫𝐝 𝐌𝐚𝐬𝐭𝐞𝐫', rating: 4.9 },
    { id: 4, name: '𝐒𝐚𝐫𝐚𝐡 𝐌𝐮𝐭𝐞𝐬𝐢', specialty: '𝐌𝐚𝐤𝐞𝐮𝐩 𝐀𝐫𝐭𝐢𝐬𝐭', rating: 5.0 },
    { id: 5, name: '𝐉𝐚𝐦𝐞𝐬 𝐇𝐚𝐛𝐢𝐦𝐚𝐧𝐚', specialty: '𝐒𝐞𝐧𝐢𝐨𝐫 𝐁𝐚𝐫𝐛𝐞𝐫', rating: 4.7 },
  ];

  const timeSlots = [
    '𝟎𝟖:𝟎𝟎', '𝟎𝟗:𝟎𝟎', '𝟏𝟎:𝟎𝟎', '𝟏𝟏:𝟎𝟎',
    '𝟏𝟐:𝟎𝟎', '𝟏𝟑:𝟎𝟎', '𝟏𝟒:𝟎𝟎', '𝟏𝟓:𝟎𝟎',
    '𝟏𝟔:𝟎𝟎', '𝟏𝟕:𝟎𝟎', '𝟏𝟖:𝟎𝟎', '𝟏𝟗:𝟎𝟎'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setBookingComplete(true);
      console.log('Booking submitted:', formData);
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (bookingComplete) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3">
            𝐁𝐨𝐨𝐤𝐢𝐧𝐠 𝐂𝐨𝐧𝐟𝐢𝐫𝐦𝐞𝐝 🎉
          </h3>
          <p className="text-gray-600 mb-6">
            𝐘𝐨𝐮𝐫 𝐚𝐩𝐩𝐨𝐢𝐧𝐭𝐦𝐞𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐜𝐡𝐞𝐝𝐮𝐥𝐞𝐝.  
            𝐂𝐨𝐧𝐟𝐢𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐬𝐞𝐧𝐭 𝐭𝐨 {formData.email}
          </p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 border py-3 rounded-xl"
            >
              𝐂𝐥𝐨𝐬𝐞
            </button>
            <button className="flex-1 bg-teal-500 text-white py-3 rounded-xl">
              𝐀𝐝𝐝 𝐭𝐨 𝐂𝐚𝐥𝐞𝐧𝐝𝐚𝐫
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

        <div className="relative bg-white rounded-2xl w-full max-w-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-[#FACC15] p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold">𝐁𝐨𝐨𝐤 𝐘𝐨𝐮𝐫 𝐀𝐩𝐩𝐨𝐢𝐧𝐭𝐦𝐞𝐧𝐭</h2>
                <p>𝐒𝐭𝐞𝐩 {step} 𝐨𝐟 𝟑</p>
              </div>
              <button onClick={onClose}>
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-6 border-t">
            <h4 className="font-bold text-lg mb-4">𝐁𝐨𝐨𝐤𝐢𝐧𝐠 𝐒𝐮𝐦𝐦𝐚𝐫𝐲</h4>
            <div className="space-y-2">
              {formData.service && <div>𝐒𝐞𝐫𝐯𝐢𝐜𝐞: {formData.service}</div>}
              {formData.date && <div>𝐃𝐚𝐭𝐞: {formData.date}</div>}
              {formData.time && <div>𝐓𝐢𝐦𝐞: {formData.time}</div>}
              {formData.stylist && <div>𝐒𝐭𝐲𝐥𝐢𝐬𝐭: {formData.stylist}</div>}
              <div className="font-bold text-teal-500 pt-3">
                𝐄𝐬𝐭𝐢𝐦𝐚𝐭𝐞𝐝 𝐓𝐨𝐭𝐚𝐥: 𝟖,𝟎𝟎𝟎 𝐑𝐖𝐅
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
