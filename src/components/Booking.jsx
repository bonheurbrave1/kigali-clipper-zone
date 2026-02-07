import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Scissors } from 'lucide-react';

const Booking = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const services = [
    '𝐇𝐚𝐢𝐫𝐜𝐮𝐭 & 𝐒𝐭𝐲𝐥𝐢𝐧𝐠',
    '𝐁𝐞𝐚𝐫𝐝 𝐓𝐫𝐢𝐦 & 𝐒𝐡𝐚𝐯𝐞',
    '𝐇𝐚𝐢𝐫 𝐂𝐨𝐥𝐨𝐫𝐢𝐧𝐠',
    '𝐇𝐚𝐢𝐫 𝐓𝐫𝐞𝐚𝐭𝐦𝐞𝐧𝐭',
    '𝐌𝐚𝐤𝐞𝐮𝐩',
    '𝐅𝐚𝐜𝐢𝐚𝐥 & 𝐒𝐤𝐢𝐧𝐜𝐚𝐫𝐞',
    '𝐍𝐚𝐢𝐥 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬',
    '𝐁𝐫𝐢𝐝𝐚𝐥 𝐏𝐚𝐜𝐤𝐚𝐠𝐞'
  ];

  const timeSlots = [
    '𝟎𝟖:𝟎𝟎 𝐀𝐌', '𝟎𝟗:𝟎𝟎 𝐀𝐌', '𝟏𝟎:𝟎𝟎 𝐀𝐌', '𝟏𝟏:𝟎𝟎 𝐀𝐌',
    '𝟏𝟐:𝟎𝟎 𝐏𝐌', '𝟎𝟏:𝟎𝟎 𝐏𝐌', '𝟎𝟐:𝟎𝟎 𝐏𝐌', '𝟎𝟑:𝟎𝟎 𝐏𝐌',
    '𝟎𝟒:𝟎𝟎 𝐏𝐌', '𝟎𝟓:𝟎𝟎 𝐏𝐌', '𝟎𝟔:𝟎𝟎 𝐏𝐌', '𝟎𝟕:𝟎𝟎 𝐏𝐌'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('𝐁𝐨𝐨𝐤𝐢𝐧𝐠 𝐂𝐨𝐧𝐟𝐢𝐫𝐦𝐞𝐝! 𝐖𝐞 𝐰𝐢𝐥𝐥 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐲𝐨𝐮 𝐬𝐡𝐨𝐫𝐭𝐥𝐲.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        ></div>

        <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full">
          <div className="px-6 pt-6 pb-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  𝐁𝐨𝐨𝐤 𝐘𝐨𝐮𝐫 𝐀𝐩𝐩𝐨𝐢𝐧𝐭𝐦𝐞𝐧𝐭
                </h3>
                <p className="text-gray-600">𝐒𝐭𝐞𝐩 {step} 𝐨𝐟 𝟑</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex gap-2 mb-2">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`h-2 w-1/3 rounded-full ${
                      step >= num ? 'bg-[#EC4899]' : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>𝐂𝐡𝐨𝐨𝐬𝐞 𝐒𝐞𝐫𝐯𝐢𝐜𝐞</span>
                <span>𝐒𝐞𝐥𝐞𝐜𝐭 𝐓𝐢𝐦𝐞</span>
                <span>𝐘𝐨𝐮𝐫 𝐃𝐞𝐭𝐚𝐢𝐥𝐬</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Scissors className="mr-2" />
                    𝐒𝐞𝐥𝐞𝐜𝐭 𝐒𝐞𝐫𝐯𝐢𝐜𝐞
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, service });
                          setStep(2);
                        }}
                        className={`p-4 rounded-xl border-2 text-left ${
                          formData.service === service
                            ? 'border-[#EC4899] bg-pink-50'
                            : 'border-gray-200 hover:border-[#EC4899]'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Calendar className="mr-2" />
                    𝐒𝐞𝐥𝐞𝐜𝐭 𝐃𝐚𝐭𝐞 & 𝐓𝐢𝐦𝐞
                  </h4>

                  <input
                    type="date"
                    className="w-full p-3 border rounded-lg mb-4"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />

                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, time });
                          setStep(3);
                        }}
                        className={`p-3 rounded-lg border ${
                          formData.time === time
                            ? 'bg-[#EC4899] text-white border-[#EC4899]'
                            : 'border-gray-200 hover:border-[#EC4899]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <User className="mr-2" />
                    𝐘𝐨𝐮𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧
                  </h4>

                  <input
                    placeholder="𝐅𝐮𝐥𝐥 𝐍𝐚𝐦𝐞"
                    className="w-full p-3 border rounded-lg mb-3"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />

                  <input
                    placeholder="𝐏𝐡𝐨𝐧𝐞 𝐍𝐮𝐦𝐛𝐞𝐫"
                    className="w-full p-3 border rounded-lg mb-3"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />

                  <input
                    placeholder="𝐄𝐦𝐚𝐢𝐥 𝐀𝐝𝐝𝐫𝐞𝐬𝐬"
                    className="w-full p-3 border rounded-lg mb-3"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border rounded-lg"
                  >
                    𝐁𝐚𝐜𝐤
                  </button>
                )}

                {step === 3 ? (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-[#FACC15] text-gray-900 rounded-lg font-semibold"
                  >
                    𝐂𝐨𝐧𝐟𝐢𝐫𝐦 𝐁𝐨𝐨𝐤𝐢𝐧𝐠
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="ml-auto px-6 py-3 bg-[#EC4899] text-white rounded-lg"
                  >
                    𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
