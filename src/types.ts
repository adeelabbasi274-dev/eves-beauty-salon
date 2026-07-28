export type ServiceCategory = 'hair' | 'makeup' | 'skincare' | 'nails' | 'spa';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: string;
  pricePKR: number;
  image: string;
  popular?: boolean;
  includes?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal Makeup' | 'Hair Styling' | 'Hair Coloring' | 'Nails' | 'Skin Care' | 'Before & After' | 'Salon Interior';
  image: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  location?: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Bridal Makeup Tips' | 'Hair Care Guide' | 'Summer Skin Care' | 'Nail Trends' | 'Beauty Secrets' | 'Wedding Prep';
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tips: string[];
}

export interface Beautician {
  id: string;
  name: string;
  role: string;
  photo: string;
  rating: number;
  experience: string;
  bio: string;
  specialty: string[];
  availableDays: string[];
}

export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
export type PaymentMethod = 'Cash at Salon' | 'Credit/Debit Card' | 'JazzCash' | 'EasyPaisa';

export interface Appointment {
  id: string;
  bookingRef: string;
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  category: ServiceCategory | 'Package';
  serviceName: string;
  beauticianName: string;
  notes?: string;
  status: AppointmentStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: 'Paid' | 'Pending';
  totalAmountPKR: number;
  createdAt: string;
}

export interface NotificationLog {
  id: string;
  appointmentRef: string;
  recipientPhone: string;
  recipientEmail: string;
  channel: 'WhatsApp' | 'Email' | 'SMS';
  type: 'Booking Confirmation' | 'Reminder' | 'Status Update';
  content: string;
  sentAt: string;
  status: 'Delivered' | 'Failed';
}

export interface PackageOffer {
  id: string;
  title: string;
  badge?: string;
  originalPricePKR: number;
  offerPricePKR: number;
  description: string;
  servicesIncluded: string[];
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
