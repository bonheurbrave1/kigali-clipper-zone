import barber from "../assets/barber.jpeg"
import bearoil from "../assets/bearoil.jpeg"
import clipper from "../assets/clipper.jpeg"
import facecream from "../assets/facecream.jpeg"
import gettynails from "../assets/gettynails.jpeg"
import haircolor from "../assets/haircolor.jpeg"
import hairtreatment from "../assets/hairtreatment.jpeg"
import keratin from "../assets/keratin.jpeg"
import makeup from "../assets/makeup.jpeg"
import nailpolish from "../assets/nailpolish.jpeg"
import proffesional from  "../assets/proffesional.jpeg"
import team1 from "../assets/team1.jpeg"
import team2 from "../assets/team2.jpeg"
import team3 from "../assets/team3.jpeg"
import team4 from "../assets/team4.jpeg"
import team5 from "../assets/team5.jpeg"
import team6 from "../assets/team6.jpeg"


import gallery1 from "../assets/gallery1.jpeg"
import gallery2 from "../assets/gallery2.jpeg"
import gallery3 from "../assets/gallery3.jpeg"
import gallery4 from "../assets/gallery4.jpeg"
import gallery5 from "../assets/gallery5.jpeg"
import gallery6 from "../assets/gallery6.jpeg"
import gallery7 from "../assets/gallery7.jpeg"
import gallery8 from "../assets/gallery8.jpeg"


export const services = [
    {
      id: 1,
      title: 'Premium Haircut & Styling',
      description: 'Professional haircut with modern styling using premium products. Includes consultation, shampoo, cut, and finish.',
      price: '8,000 RWF',
      duration: '45 min',
      rating: 4.9,
      category: 'hair',
      color: 'bg-blue-100 text-blue-600',
      icon: 'scissors',
      features: ['Professional Consultation', 'Shampoo & Condition', 'Modern Styling', 'Free Touch-ups'],
      popular: true
    },
    {
      id: 2,
      title: 'Beard Trim & Shape',
      description: 'Expert beard grooming with hot towel treatment and precision shaping for the perfect look.',
      price: '5,000 RWF',
      duration: '30 min',
      rating: 4.8,
      category: 'barber',
      color: 'bg-amber-100 text-amber-600',
      icon: 'scissors',
      features: ['Hot Towel Treatment', 'Beard Oil Application', 'Precision Shaping', 'Skin Care Tips'],
      popular: true
    },
    {
      id: 3,
      title: 'Hair Coloring',
      description: 'Professional hair coloring service using L\'Oréal products. Includes consultation and aftercare.',
      price: '25,000 RWF',
      duration: '2-3 hours',
      rating: 4.9,
      category: 'hair',
      color: 'bg-purple-100 text-purple-600',
      icon: 'palette',
      features: ['Color Consultation', 'Patch Test', 'Premium Products', 'Aftercare Kit'],
      popular: true
    },
    {
      id: 4,
      title: 'Keratin Treatment',
      description: 'Smoothing treatment that eliminates frizz and makes hair more manageable for up to 3 months.',
      price: '35,000 RWF',
      duration: '3 hours',
      rating: 5.0,
      category: 'hair',
      color: 'bg-pink-100 text-pink-600',
      icon: 'sprayCan',
      features: ['Frizz Elimination', 'Long-lasting Results', 'Hair Protection', 'Free Maintenance']
    },
    {
      id: 5,
      title: 'Bridal Makeup Package',
      description: 'Complete bridal makeup with trial session, lashes, and touch-up kit for your special day.',
      price: '50,000 RWF',
      duration: '2.5 hours',
      rating: 5.0,
      category: 'bridal',
      color: 'bg-red-100 text-red-600',
      icon: 'gem',
      features: ['Trial Session', 'Waterproof Makeup', 'False Lashes', 'Touch-up Kit'],
      popular: true
    },
    {
      id: 6,
      title: 'Professional Facial',
      description: 'Deep cleansing facial with extraction, mask, and massage for radiant skin.',
      price: '15,000 RWF',
      duration: '60 min',
      rating: 4.7,
      category: 'spa',
      color: 'bg-green-100 text-green-600',
      icon: 'heart',
      features: ['Skin Analysis', 'Deep Cleansing', 'Face Massage', 'Hydrating Mask']
    },
    {
      id: 7,
      title: 'Manicure & Pedicure',
      description: 'Complete nail care service with cuticle treatment, shaping, and polish of your choice.',
      price: '12,000 RWF',
      duration: '90 min',
      rating: 4.8,
      category: 'beauty',
      color: 'bg-indigo-100 text-indigo-600',
      icon: 'heart',
      features: ['Cuticle Care', 'Nail Shaping', 'Hand Massage', 'Premium Polish']
    },
    {
      id: 8,
      title: 'Full Body Massage',
      description: 'Therapeutic full body massage to relieve stress and muscle tension.',
      price: '20,000 RWF',
      duration: '60 min',
      rating: 4.9,
      category: 'spa',
      color: 'bg-cyan-100 text-cyan-600',
      icon: 'heart',
      features: ['Aromatherapy Oils', 'Stress Relief', 'Muscle Relaxation', 'Hot Stones']
    }
  ];
  
  export const galleryImages = [
    {
      id: 1,
      category: 'hair',
      url: gallery1,
      title: 'Modern Haircut Transformation',
      description: 'Client before and after our premium haircut service',
      date: '2024-01-15',
      likes: 245,
      tags: ['haircut', 'styling', 'transformation']
    },
    {
      id: 2,
      category: 'barber',
      url: gallery2,
      title: 'Beard Styling Masterpiece',
      description: 'Precision beard grooming and shaping',
      date: '2024-01-14',
      likes: 189,
      tags: ['beard', 'grooming', 'barber']
    },
    {
      id: 3,
      category: 'makeup',
      url: gallery3,
      title: 'Bridal Makeup Artistry',
      description: 'Complete bridal makeup for the special day',
      date: '2024-01-12',
      likes: 312,
      tags: ['bridal', 'makeup', 'wedding']
    },
    {
      id: 4,
      category: 'nails',
      url: gallery4,
      title: 'Nail Art Design',
      description: 'Creative nail art with premium polish',
      date: '2024-01-10',
      likes: 167,
      tags: ['nails', 'art', 'manicure']
    },
    {
      id: 5,
      category: 'salon',
      url: gallery5,
      title: 'Salon Interior',
      description: 'Our modern and luxurious salon setup',
      date: '2024-01-08',
      likes: 98,
      tags: ['salon', 'interior', 'luxury']
    },
    {
      id: 6,
      category: 'hair',
      url: gallery7,
      title: 'Hair Coloring Magic',
      description: 'Vibrant hair coloring transformation',
      date: '2024-01-05',
      likes: 278,
      tags: ['coloring', 'hair', 'vibrant']
    },
    {
      id: 7,
      category: 'spa',
      url: gallery8,
      title: 'Relaxing Facial',
      description: 'Deep cleansing facial treatment',
      date: '2024-01-03',
      likes: 143,
      tags: ['facial', 'spa', 'relaxation']
    },
    {
      id: 8,
      category: 'bridal',
      url: gallery8,
      title: 'Complete Bridal Package',
      description: 'Hair, makeup, and nails for bride',
      date: '2024-01-02',
      likes: 356,
      tags: ['bridal', 'package', 'complete']
    },
    {
      id: 9,
      category: 'barber',
      url: gallery1,
      title: 'Classic Shave',
      description: 'Traditional hot towel shave',
      date: '2024-01-01',
      likes: 201,
      tags: ['shave', 'traditional', 'barber']
    },
    {
      id: 10,
      category: 'hair',
      url: gallery4,
      title: 'Hair Treatment',
      description: 'Keratin smoothing treatment',
      date: '2023-12-28',
      likes: 189,
      tags: ['treatment', 'keratin', 'smoothing']
    },
    {
      id: 11,
      category: 'makeup',
      url: gallery5,
      title: 'Evening Makeup',
      description: 'Glamorous evening makeup look',
      date: '2023-12-25',
      likes: 234,
      tags: ['makeup', 'evening', 'glam']
    },
    {
      id: 12,
      category: 'nails',
      url: gallery7,
      title: 'Gel Nails',
      description: 'Long-lasting gel nail application',
      date: '2023-12-22',
      likes: 156,
      tags: ['gel', 'nails', 'long-lasting']
    }
  ];
  
  export const teamMembers = [
    {
      id: 1,
      name: 'Alex Kamali',
      position: 'Master Barber & Founder',
      image: team1,
      experience: 15,
      rating: 4.9,
      specialties: ['Modern Haircuts', 'Beard Design', 'Traditional Shaves', 'Hair Treatment'],
      bio: 'With 15+ years of experience, Alex founded Kigali Clipper Zone with a vision to bring world-class grooming to Rwanda.',
      social: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com'
      },
      available: true,
      schedule: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    {
      id: 2,
      name: 'Marie Uwase',
      position: 'Senior Hair Colorist',
      image: team2,
      experience: 12,
      rating: 4.8,
      specialties: ['Hair Coloring', 'Balayage', 'Color Correction', 'Highlights'],
      bio: 'Marie specializes in creative coloring techniques and has trained in Paris and London.',
      social: {
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com'
      },
      available: true,
      schedule: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    {
      id: 3,
      name: 'David Nshuti',
      position: 'Master Barber',
      image: team3,
      experience: 10,
      rating: 4.9,
      specialties: ['Fade Cuts', 'Line Ups', 'Hot Towel Shaves', 'Beard Maintenance'],
      bio: 'David is known for his precision fades and attention to detail. He trained in New York barber schools.',
      social: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com'
      },
      available: true,
      schedule: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    {
      id: 4,
      name: 'Sarah Mutesi',
      position: 'Makeup Artist',
      image: team4,
      experience: 8,
      rating: 5.0,
      specialties: ['Bridal Makeup', 'Editorial Makeup', 'Special Effects', 'Skincare'],
      bio: 'Sarah creates magical transformations for brides and special events. Her work has been featured in magazines.',
      social: {
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com'
      },
      available: true,
      schedule: ['Mon', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    {
      id: 5,
      name: 'James Habimana',
      position: 'Senior Stylist',
      image: team5,
      experience: 14,
      rating: 4.7,
      specialties: ['Modern Cuts', 'Hair Treatments', 'Styling', 'Consultation'],
      bio: 'James stays updated with the latest international trends and brings fresh styles to Kigali.',
      social: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        tiktok: 'https://tiktok.com'
      },
      available: true,
      schedule: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    {
      id: 6,
      name: 'Grace Ikirezi',
      position: 'Nail Specialist',
      image:team6,
      experience: 6,
      rating: 4.8,
      specialties: ['Nail Art', 'Gel Nails', 'Manicure', 'Pedicure'],
      bio: 'Grace is an artistic nail technician who creates stunning designs and ensures perfect nail health.',
      social: {
        instagram: 'https://instagram.com',
        pinterest: 'https://pinterest.com'
      },
      available: true,
      schedule: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  ];
  
  export const products = [
    {
      id: 1,
      name: 'Keratin Smoothing Shampoo',
      category: 'haircare',
      price: '12,000 RWF',
      originalPrice: '15,000 RWF',
      discount: 20,
      image: keratin,
      rating: 4.5,
      reviews: 128,
      description: 'Professional keratin-infused shampoo for smooth, frizz-free hair.',
      inStock: true,
      tags: ['bestseller', 'new', 'sale'],
      brand: 'L\'Oréal Professionnel'
    },
    {
      id: 2,
      name: 'Beard Oil & Balm Set',
      category: 'grooming',
      price: '8,500 RWF',
      image: bearoil,
      rating: 4.8,
      reviews: 89,
      description: 'Natural beard care set with argan oil and beeswax balm.',
      inStock: true,
      tags: ['bestseller', 'organic'],
      brand: 'The Gentleman\'s Beard'
    },
    {
      id: 3,
      name: 'Professional Hair Dryer',
      category: 'tools',
      price: '45,000 RWF',
      originalPrice: '55,000 RWF',
      discount: 18,
      image: haircolor,
      rating: 4.7,
      reviews: 56,
      description: 'Ionic hair dryer with multiple heat settings for professional results.',
      inStock: true,
      tags: ['professional', 'sale'],
      brand: 'Dyson'
    },
    {
      id: 4,
      name: 'Makeup Brush Set',
      category: 'makeup',
      price: '25,000 RWF',
      image: makeup,
      rating: 4.6,
      reviews: 204,
      description: 'Complete 12-piece vegan makeup brush set for flawless application.',
      inStock: true,
      tags: ['vegan', 'complete-set'],
      brand: 'Morphe'
    },
    {
      id: 5,
      name: 'Hair Color Kit',
      category: 'haircare',
      price: '9,000 RWF',
      image: haircolor,
      rating: 4.4,
      reviews: 167,
      description: 'Professional hair color kit with developer and conditioner.',
      inStock: false,
      tags: ['professional'],
      brand: 'Schwarzkopf'
    },
    {
      id: 6,
      name: nailpolish,
      category: 'nails',
      price: '18,000 RWF',
      originalPrice: '22,000 RWF',
      discount: 18,
      image: 'https://images.unsplash.com/photo-160777909f27d-5c6cde1a5b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 98,
      description: 'Set of 12 long-lasting gel nail polishes in trending colors.',
      inStock: true,
      tags: ['collection', 'sale'],
      brand: 'OPI'
    },
    {
      id: 7,
      name: 'Face Cream & Serum',
      category: 'skincare',
      price: '15,000 RWF',
      image: facecream,
      rating: 4.7,
      reviews: 145,
      description: 'Hydrating face cream with vitamin C serum for glowing skin.',
      inStock: true,
      tags: ['skincare', 'vitamin-c'],
      brand: 'CeraVe'
    },
    {
      id: 8,
      name: 'Barber Clipper Set',
      category: 'tools',
      price: '32,000 RWF',
      image: clipper,
      rating: 4.8,
      reviews: 76,
      description: 'Professional cordless hair clipper set with multiple guards.',
      inStock: true,
      tags: ['professional', 'cordless'],
      brand: 'Wahl'
    }
  ];
  
  export const testimonials = [
    {
      id: 1,
      clientName: 'Eric Mugisha',
      profession: 'Business Executive',
      clientImage:barber,
      rating: 5,
      title: 'Best Barber Experience in Kigali!',
      content: 'I\'ve been coming here for 2 years now. The attention to detail is unmatched. David always gives me the perfect fade. Highly recommended!',
      service: 'Premium Haircut & Beard Trim',
      date: '2024-01-15',
      likes: 45
    },
    {
      id: 2,
      clientName: 'Chantal Uwera',
      profession: 'Bride',
      clientImage:barber,
      rating: 5,
      title: 'Made My Wedding Day Perfect',
      content: 'Sarah did my bridal makeup and it was absolutely stunning. It lasted all day and looked perfect in every photo. Thank you for making me feel so beautiful!',
      service: 'Bridal Makeup Package',
      date: '2024-01-10',
      likes: 67
    },
    {
      id: 3,
      clientName: 'Thomas Kayonga',
      profession: 'Software Developer',
      clientImage:barber,
      rating: 4,
      title: 'Consistent Quality Service',
      content: 'Great place for regular grooming. The online booking system makes it so convenient. Always leave looking sharp.',
      service: 'Regular Haircut',
      date: '2024-01-08',
      likes: 23
    },
    {
      id: 4,
      clientName: 'Diane Mutoni',
      profession: 'Fashion Blogger',
      clientImage:barber,
      rating: 5,
      title: 'Hair Transformation Magic',
      content: 'Marie transformed my damaged hair with an amazing coloring treatment. The results were better than I imagined. Professional and friendly staff!',
      service: 'Hair Coloring & Treatment',
      date: '2024-01-05',
      likes: 89
    }
  ];
  
  export const faqs = [
    {
      question: 'Do I need to book an appointment?',
      answer: 'Yes, we recommend booking an appointment to ensure availability. You can book online through our website or call us directly.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours notice for cancellations. Late cancellations may incur a 50% fee. No-shows will be charged the full service amount.'
    },
    {
      question: 'Do you accept walk-ins?',
      answer: 'Yes, we accept walk-ins based on availability. However, appointments get priority, so booking in advance is recommended.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards (Visa, MasterCard), and mobile money (M-Pesa, Airtel Money).'
    },
    {
      question: 'How early should I arrive for my appointment?',
      answer: 'Please arrive 10-15 minutes before your scheduled appointment time. This allows for consultation and preparation.'
    },
    {
      question: 'Do you offer services for children?',
      answer: 'Yes, we offer children\'s haircuts for ages 3+. We have special rates and our stylists are experienced with children.'
    }
  ];
  
  export const businessHours = [
    { day: 'Monday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' }
  ];
  
  export const socialLinks = {
    instagram: 'https://instagram.com/kigali_clipperzone_salon',
    facebook: 'https://facebook.com/kigaliclipperzone',
    twitter: 'https://twitter.com/kigaliclipper',
    youtube: 'https://youtube.com/kigaliclipperzone',
    tiktok: 'https://tiktok.com/@kigaliclipperzone'
  };
  
  export const contactInfo = {
    address: 'La Bonne Adresse, KN 2 Roundabout, Kigali, Rwanda',
    phone: '0788 295 833',
    whatsapp: '0788 295 833',
    email: 'info@kigaliclipperzone.com',
    emergency: '+250 788 999 999'
  };
  
  export const galleryCategories = [
    'All',
    'Hair',
    'Barber',
    'Makeup',
    'Nails',
    'Spa',
    'Bridal',
    'Salon'
  ];
  
  export const productCategories = [
    'All',
    'Haircare',
    'Skincare',
    'Makeup',
    'Tools',
    'Grooming',
    'Nails',
    'Fragrance'
  ];