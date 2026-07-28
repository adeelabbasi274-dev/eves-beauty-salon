import { ServiceItem, GalleryItem, Testimonial, BlogPost, Beautician, PackageOffer, FAQItem, Appointment } from '../types';
import heroBannerImg from '../assets/images/salon_hero_banner_1785158268435.jpg';
import bridalFeatureImg from '../assets/images/bridal_makeup_feature_1785158283059.jpg';

export const HERO_BANNER_IMG = heroBannerImg;
export const BRIDAL_FEATURE_IMG = bridalFeatureImg;

export const SALON_INFO = {
  name: "Eve's Beauty Salon",
  category: "Ladies Beauty Salon & Bridal Studio",
  address: "Islam, Dhakki Islam Shah Ghazi Garh, Muhalla, Jalalpur Jattan, 50700, Pakistan",
  city: "Jalalpur Jattan",
  district: "Gujrat",
  country: "Pakistan",
  postalCode: "50700",
  phone: "+92 303 9321980",
  phoneRaw: "+923039321980",
  whatsapp: "+92 303 9321980",
  email: "info@evesbeautysalon.pk",
  googleMapsUrl: "https://maps.app.goo.gl/GSXwZi3pYTAEr4Ng6",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.4851!2d74.2120!3d32.6393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM4JzIxLjUiTiA3NMKwMTInNDMuMiJF!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
  openingHours: [
    { days: "Monday - Saturday", hours: "10:00 AM - 08:00 PM" },
    { days: "Sunday", hours: "11:00 AM - 06:00 PM" }
  ],
  socials: {
    facebook: "https://facebook.com/evesbeautysalon",
    instagram: "https://instagram.com/evesbeautysalon",
    tiktok: "https://tiktok.com/@evesbeautysalon",
  }
};

export const SERVICES: ServiceItem[] = [
  // --- HAIR ---
  {
    id: 'hair-cut',
    name: 'Custom Hair Cut & Style',
    category: 'hair',
    description: 'Precision layered cut, blunt cut, or bob styled to match your face structure including wash & blowdry.',
    duration: '45 mins',
    pricePKR: 1800,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['Hair wash with herbal shampoo', 'Layered / Bob / Step Cut', 'Deep Conditioning Blowdry']
  },
  {
    id: 'hair-styling',
    name: 'Party Hair Styling & Curls',
    category: 'hair',
    description: 'Glamorous beach waves, soft curls, slick buns, or fancy updos for party and wedding events.',
    duration: '60 mins',
    pricePKR: 2500,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    includes: ['Heat protection serum', 'Hair setting spray', 'Fancy hair accessory placement']
  },
  {
    id: 'hair-wash-spa',
    name: 'Luxury Organic Hair Spa',
    category: 'hair',
    description: 'Deep nourishing hot oil scalp massage, steam treatment, and keratin mask for silky frizz-free hair.',
    duration: '60 mins',
    pricePKR: 3500,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    includes: ['Aromatic hot oil massage', 'Warm scalp steam therapy', 'Deep repair protein mask']
  },
  {
    id: 'hair-color',
    name: 'Global Hair Color & Highlights',
    category: 'hair',
    description: 'Full head global color, Balayage, Ombre, or streak highlights using premium ammonia-free imported colors.',
    duration: '120 mins',
    pricePKR: 8500,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['Ammonia-free color formula', 'Color lock shine gloss', 'Post-color conditioning wash']
  },
  {
    id: 'keratin-treatment',
    name: 'Brazilian Keratin Smoothing',
    category: 'hair',
    description: 'Long-lasting frizz control and hair straightening treatment that restores keratin protein for up to 6 months.',
    duration: '180 mins',
    pricePKR: 15000,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['Formaldehyde-free formula', 'Post-treatment wash', 'Aftercare guidance']
  },
  {
    id: 'hair-straightening',
    name: 'Permanent Rebonding / Extenso',
    category: 'hair',
    description: 'Sleek, poker-straight glass hair finish with L\'Oreal Extenso for frizzy or unmanageable curls.',
    duration: '210 mins',
    pricePKR: 18000,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    includes: ['Neutralizer application', 'Deep hydration treatment', 'Free 1-week follow-up wash']
  },

  // --- MAKEUP ---
  {
    id: 'bridal-makeup',
    name: 'Royal Signature Bridal Makeup',
    category: 'makeup',
    description: 'Flawless waterproof bridal makeup using luxury brands (MAC, NARS, Huda Beauty), eyelashes, hair styling & dupatta setting.',
    duration: '180 mins',
    pricePKR: 35000,
    image: BRIDAL_FEATURE_IMG,
    popular: true,
    includes: ['HD Waterproof base', '3D Mink lashes', 'Dupatta & Jewelry styling', 'Nail polish application', 'Pre-bridal touch-up kit']
  },
  {
    id: 'airbrush-bridal',
    name: 'Ultra HD Airbrush Bridal Makeup',
    category: 'makeup',
    description: 'Camera-ready airbrush application offering 24-hour weightless matte coverage for your big day.',
    duration: '200 mins',
    pricePKR: 45000,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    includes: ['Airbrush silicone base', 'Custom mink lashes', 'Body shimmer glow', 'Complete jewelry & veil drape']
  },
  {
    id: 'party-makeup',
    name: 'Glam Party Makeup',
    category: 'makeup',
    description: 'Sophisticated event glow makeup with soft smokey eyes, contouring, highlighters, and lash installation.',
    duration: '75 mins',
    pricePKR: 7000,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['High-definition base', 'Eye lashes', 'Lip color & setting spray']
  },
  {
    id: 'engagement-makeup',
    name: 'Engagement & Nikkah Glow Makeup',
    category: 'makeup',
    description: 'Ethereal, luminous look designed for Nikkah, Engagement, or Barat functions with soft pastel tones.',
    duration: '120 mins',
    pricePKR: 18000,
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    includes: ['Dewy skin prep', 'Designer lash set', 'Hair updos or traditional braids', 'Dupatta setting']
  },
  {
    id: 'mehndi-makeup',
    name: 'Vibrant Mehndi & Mayun Makeup',
    category: 'makeup',
    description: 'Playful, long-lasting bright makeup paired with traditional floral hair accents and braid styling.',
    duration: '90 mins',
    pricePKR: 12000,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    includes: ['Sweatproof base', 'Gajra hair arrangement', 'Henna-friendly lip colors']
  },

  // --- SKIN CARE ---
  {
    id: 'hydra-facial',
    name: 'Medical Grade 7-in-1 HydraFacial',
    category: 'skincare',
    description: 'Deep pore vacuum extraction, diamond microdermabrasion, hyaluronic acid infusion, and LED phototherapy mask.',
    duration: '75 mins',
    pricePKR: 8500,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['Hydro-peeling solution', 'Ultrasound skin lifting', 'Cryo cold hammer therapy', '7-Color LED photon therapy']
  },
  {
    id: 'herbal-facial',
    name: 'Jansen / Dermacos Herbal Facial',
    category: 'skincare',
    description: 'Deep cleansing, soothing exfoliation, botanical steam, blackhead removal, and whitening collagen mask.',
    duration: '60 mins',
    pricePKR: 4500,
    image: 'https://images.unsplash.com/photo-1512290900673-70020192934b?auto=format&fit=crop&w=800&q=80',
    includes: ['Double cleasning', 'Gentle scrub', 'Warm steam & extraction', 'Cooling rubber mask']
  },
  {
    id: 'skin-polishing',
    name: 'Whitening Skin Polish & Glow',
    category: 'skincare',
    description: 'Instant tan removal and radiance restoration for face and neck using dermatologically tested brighteners.',
    duration: '45 mins',
    pricePKR: 3000,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    includes: ['Face & neck polish', 'Vitamin C massage cream', 'Radiance setting serum']
  },
  {
    id: 'gold-facial',
    name: '24K Pure Gold Luxury Facial',
    category: 'skincare',
    description: 'Anti-aging facial infused with pure 24K gold foil flakes to boost collagen, reduce fine lines, and give bridal glow.',
    duration: '90 mins',
    pricePKR: 12000,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['24K gold foil leaf massage', 'Firming serum infusion', 'Lymphatic face drainage']
  },

  // --- NAILS & BEAUTY ---
  {
    id: 'nail-extensions',
    name: 'Acrylic / Gel Nail Extensions with Art',
    category: 'nails',
    description: 'Full set durable nail extensions shaped to perfection with custom nail art, chrome powders, or rhinestones.',
    duration: '90 mins',
    pricePKR: 5000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['Cuticle care & shaping', 'Nail tip extension', 'UV Gel color & art design']
  },
  {
    id: 'spa-mani-pedi',
    name: 'Luxury Rose & Milk Mani-Pedi',
    category: 'nails',
    description: 'Warm milk soak infused with fresh rose petals, dead skin exfoliation, hydrating paraffin wax mask, and massage.',
    duration: '75 mins',
    pricePKR: 4000,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
    includes: ['Herbal soak', 'Callus heel buffing', 'Paraffin wax glove bath', 'Nail polish application']
  },
  {
    id: 'waxing-threading',
    name: 'Full Body Organic Wax & Threading',
    category: 'nails',
    description: 'Hygienic painless rica wax for legs, arms, underarms, paired with precise eyebrow threading and upper lip care.',
    duration: '60 mins',
    pricePKR: 4500,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    includes: ['Rica gentle wax', 'Soothing aloe gel massage', 'Precision eyebrow shaping']
  },
  {
    id: 'henna-design',
    name: 'Bridal & Party Henna / Mehndi',
    category: 'nails',
    description: 'Intricate traditional Arabic or Pakistani henna designs applied by expert artists using organic stain cones.',
    duration: '60 mins',
    pricePKR: 3000,
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80',
    includes: ['Both hands front & back', 'Organic dark stain cone', 'Essential lemon-sugar seal']
  },

  // --- SPA ---
  {
    id: 'full-body-massage',
    name: 'Aromatherapy Relaxing Body Massage',
    category: 'spa',
    description: 'Full body Swedish massage utilizing warm essential oils to release muscle tension, fatigue, and mental stress.',
    duration: '60 mins',
    pricePKR: 6000,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    popular: true,
    includes: ['Custom warm essential oil blend', 'Pressure point neck & back release', 'Soothing herbal tea']
  },
  {
    id: 'body-scrub-polish',
    name: 'Himalayan Salt Body Scrub & Polish',
    category: 'spa',
    description: 'Exfoliating pink salt scrub mixed with almond oil that leaves full body skin silky smooth, hydrated, and glowing.',
    duration: '75 mins',
    pricePKR: 7500,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    includes: ['Full body exfoliation', 'Hydrating lotion massage', 'Warm towel wipe-down']
  }
];

export const BEAUTICIANS: Beautician[] = [
  {
    id: 'b-1',
    name: 'Master Stylist Eve',
    role: 'Founder & Head Bridal Specialist',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    experience: '12+ Years',
    bio: 'Certified internationally in high-definition bridal artistry, Eve has beautified over 3,000 brides across Gujrat & Jalalpur Jattan.',
    specialty: ['Royal Bridal Makeup', 'Airbrush Base', 'Hair Transformation'],
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  {
    id: 'b-2',
    name: 'Ayesha Khan',
    role: 'Senior Hair Colorist & Keratin Expert',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    experience: '8 Years',
    bio: 'Specialist in Balayage, Keratin treatments, and advanced hair rebonding techniques with imported ammonia-free formulations.',
    specialty: ['Balayage & Highlights', 'Keratin Straightening', 'Creative Hair Cuts'],
    availableDays: ['Mon', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  {
    id: 'b-3',
    name: 'Fatima Zahra',
    role: 'Aesthetic Skin Specialist',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    experience: '7 Years',
    bio: 'Dermatology-certified technician specializing in 7-in-1 HydraFacial, 24K Gold anti-aging facials, and bridal skin prep.',
    specialty: ['HydraFacial Therapy', 'Gold Glow Treatments', 'Acne Care'],
    availableDays: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  {
    id: 'b-4',
    name: 'Sana Malik',
    role: 'Nail Artist & Spa Therapist',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    experience: '5 Years',
    bio: 'Master of intricate acrylic gel nail extensions, custom nail art crystals, and relaxing aromatherapeutic body masssages.',
    specialty: ['Gel Extension Art', 'Milk & Rose Mani-Pedi', 'Aromatherapy Massage'],
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat', 'Sun']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Royal Bridal Glow & Traditional Red Dupatta Drape',
    category: 'Bridal Makeup',
    image: BRIDAL_FEATURE_IMG,
    description: 'Luminous HD makeup with gold accents and mink lashes for a stunning Barat look.'
  },
  {
    id: 'g-2',
    title: 'Precision Layered Blowdry & Honey Balayage',
    category: 'Hair Coloring',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Soft dimensional balayage highlights paired with textured long layers.'
  },
  {
    id: 'g-3',
    title: 'Nikkah Pastel Glam & Soft Curls',
    category: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    description: 'Ethereal soft pink tones with radiant glass skin prep for daytime Nikkah.'
  },
  {
    id: 'g-4',
    title: 'Silk Keratin Treatment Transformation',
    category: 'Before & After',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
    },
    description: 'Frizzy unmanageable hair turned into silky smooth straight locks.'
  },
  {
    id: 'g-5',
    title: 'Luxury French Tip & Glitter Ombre Gel Extensions',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    description: 'Acrylic extensions embellished with Swarovski crystals and gold foil.'
  },
  {
    id: 'g-6',
    title: 'Instant Glow HydraFacial Skin Transformation',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Deep pore vacuum extraction removing blackheads and unlocking clear radiance.'
  },
  {
    id: 'g-7',
    title: 'Eve\'s Salon Main Styling & Vanity Lounge',
    category: 'Salon Interior',
    image: HERO_BANNER_IMG,
    description: 'Private, air-conditioned, hygienic ladies-only sanctuary in Jalalpur Jattan.'
  },
  {
    id: 'g-8',
    title: 'Party Glam Makeup & Hollywood Waves',
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    description: 'Smokey eye look paired with glossy lips and voluminous hair waves.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Zainab Bibi',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Eve transformed me for my Barat! The makeup didn\'t crack or smudge even after 10 hours. Everyone in Jalalpur Jattan was praising my look. Truly the best salon!',
    service: 'Royal Signature Bridal Makeup',
    date: '2 weeks ago',
    location: 'Jalalpur Jattan',
    verified: true
  },
  {
    id: 't-2',
    name: 'Dr. Rabia Chaudhry',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'The 7-in-1 HydraFacial with Fatima was incredible. My skin was glowing for weeks. Super hygienic setup and extremely polite staff.',
    service: 'HydraFacial & Skin Polish',
    date: '1 month ago',
    location: 'Gujrat City',
    verified: true
  },
  {
    id: 't-3',
    name: 'Mariam Tariq',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Got Keratin treatment from Ayesha. My frizzy hair is now so manageable and shiny. Loved the tea service and luxury environment!',
    service: 'Brazilian Keratin Straightening',
    date: '3 weeks ago',
    location: 'Jalalpur Jattan',
    verified: true
  },
  {
    id: 't-4',
    name: 'Sadia Imran',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Best nail extensions in Gujrat district! Sana listened to my exact design preferences and delivered beyond expectation. Highly recommended!',
    service: 'Acrylic Nail Extensions',
    date: '1 week ago',
    location: 'Muhalla Ghazi Garh',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: '10 Essential Bridal Makeup Secrets for a Flawless Pakistani Wedding Glow',
    category: 'Bridal Makeup Tips',
    excerpt: 'Discover how to prepare your skin 3 months before your big day, choose the right foundation base for humid weather, and long-lasting lip formulas.',
    content: `Preparing for your Pakistani wedding involves months of planning, and your bridal makeup is central to your look. At Eve's Beauty Salon in Jalalpur Jattan, we recommend starting skin preps early. 

Key steps for bridal perfection:
1. Hydration & HydraFacials: Schedule monthly facials 3 months prior.
2. Waterproof Base: Insist on silicone or airbrush bases that resist humidity and tears.
3. Patch Test: Always conduct a trial session for hair and makeup 2 weeks prior.`,
    author: 'Eve (Founder)',
    date: 'July 15, 2026',
    readTime: '4 min read',
    image: BRIDAL_FEATURE_IMG,
    tips: ['Start skincare 90 days before wedding', 'Avoid new cosmetics 1 week prior', 'Keep a blotting paper touchup kit in your clutch']
  },
  {
    id: 'blog-2',
    title: 'How to Maintain Keratin Straightened Hair: Complete Aftercare Guide',
    category: 'Hair Care Guide',
    excerpt: 'Got a Keratin treatment? Follow these vital rules regarding sulfate-free shampoos, swimming precautions, and heat styling to prolong results up to 6 months.',
    content: `After getting a Brazilian Keratin or Extenso treatment at Eve's Salon, proper care is crucial to lock in hair proteins.

Do's & Don'ts:
- Use strict Sulfate-Free & Sodium Chloride-Free shampoos.
- Do not wash hair for the first 72 hours after application.
- Avoid tight rubber bands or hair clips during the initial week to prevent creases.`,
    author: 'Ayesha Khan',
    date: 'July 10, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    tips: ['Sulfate-free shampoo is mandatory', 'Sleep on silk pillowcases', 'Blowdry gently after every wash']
  },
  {
    id: 'blog-3',
    title: 'Summer Skincare Routine for Pakistani Humidity & Sun Defense',
    category: 'Summer Skin Care',
    excerpt: 'Fight oiliness, open pores, and sunburn with dermatologically backed lightweight hydration and double-cleansing techniques.',
    content: `Pakistan summers can trigger excess sebum, blackheads, and hyperpigmentation. A gel-based sunscreen with SPF 50+ alongside twice-weekly mild exfoliation keeps your skin breathing cleanly.`,
    author: 'Fatima Zahra',
    date: 'June 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tips: ['Reapply SPF 50 every 3 hours', 'Double cleanse with micellar water at night', 'Use niacinamide serum for pore control']
  },
  {
    id: 'blog-4',
    title: 'Trending Nail Art Styles for 2026: From Chrome French Tips to Cat-Eye',
    category: 'Nail Trends',
    excerpt: 'Explore the hottest nail aesthetics loved by modern brides and fashion enthusiasts in Punjab.',
    content: `Nail extensions are no longer just basic acrylic tips. Chrome rose gold overlays and subtle velvet magnetic cat-eye effects are taking center stage this season!`,
    author: 'Sana Malik',
    date: 'June 18, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    tips: ['Apply cuticle oil daily', 'Avoid using nails as tools', 'Schedule refills every 3 weeks']
  }
];

export const PACKAGES: PackageOffer[] = [
  {
    id: 'pkg-1',
    title: 'Royal Bridal Complete Combo',
    badge: 'Most Popular',
    originalPricePKR: 45000,
    offerPricePKR: 35000,
    description: 'All-inclusive head-to-toe makeover package for Barat / Valima brides.',
    servicesIncluded: [
      'Signature HD / Airbrush Makeup',
      'Designer Mink Lashes',
      'Hair Styling with Dupatta & Jewelry Drape',
      'HydraFacial 3 Days Prior',
      'Rose Milk Mani-Pedi',
      'Full Body Organic Waxing',
      'Bridal Henna Art'
    ],
    popular: true
  },
  {
    id: 'pkg-2',
    title: 'Pre-Wedding Pamper Glow',
    badge: 'Best Value',
    originalPricePKR: 22000,
    offerPricePKR: 16500,
    description: 'Comprehensive skin and hair revival designed 1 week before events.',
    servicesIncluded: [
      '24K Pure Gold Luxury Facial',
      'Luxury Organic Hair Spa & Blowdry',
      'Full Body Massage & Scrub',
      'Spa Mani-Pedi',
      'Threading & Face Polish'
    ]
  },
  {
    id: 'pkg-3',
    title: 'Party Ready Glam Express',
    badge: 'Quick Glow',
    originalPricePKR: 12500,
    offerPricePKR: 8900,
    description: 'Perfect package for wedding guests, sisters of the bride, and parties.',
    servicesIncluded: [
      'HD Glam Party Makeup',
      'Party Hair Curls / Style',
      'Face Whitening Polish',
      'Nail Color Application'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Bookings',
    question: 'How far in advance should I book my bridal appointment?',
    answer: 'We recommend booking bridal makeup at least 3 to 6 weeks in advance to secure your preferred date and time slot, especially during peak wedding seasons (October to April).'
  },
  {
    category: 'Bookings',
    question: 'Do you offer home services or on-location bridal makeup?',
    answer: 'Yes! We offer exclusive on-location bridal vanity team services in Jalalpur Jattan, Gujrat, and nearby cities. Please contact us on WhatsApp (+92 303 9321980) for location rates.'
  },
  {
    category: 'Services',
    question: 'Are your cosmetics and skincare products authentic?',
    answer: '100% authentic and original imported products (MAC, Huda Beauty, NARS, L\'Oreal Extenso, Dermacos, Janssen) sourced through authorized distributors.'
  },
  {
    category: 'Sanitation',
    question: 'What hygiene measures do you take in the salon?',
    answer: 'We maintain strict single-use disposables for wax spatulas, facial sponges, and towels. All metal tweezers, hair scissors, and nail tools are sterilized using medical UV autoclaves after every single client.'
  },
  {
    category: 'Payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash at Salon, Credit/Debit Cards, JazzCash, and EasyPaisa online transfer.'
  }
];

export const SAMPLE_APPOINTMENTS: Appointment[] = [
  {
    id: 'app-1',
    bookingRef: 'EVE-9421',
    fullName: 'Zainab Bibi',
    phone: '+92 300 1234567',
    email: 'zainab@example.com',
    date: '2026-07-28',
    time: '02:00 PM',
    category: 'makeup',
    serviceName: 'Royal Signature Bridal Makeup',
    beauticianName: 'Master Stylist Eve',
    notes: 'Barat bride, needs red dupatta drape.',
    status: 'Confirmed',
    paymentMethod: 'JazzCash',
    paymentStatus: 'Paid',
    totalAmountPKR: 35000,
    createdAt: '2026-07-26 10:15 AM'
  },
  {
    id: 'app-2',
    bookingRef: 'EVE-9422',
    fullName: 'Dr. Rabia Chaudhry',
    phone: '+92 301 9876543',
    email: 'rabia.dr@example.com',
    date: '2026-07-29',
    time: '11:00 AM',
    category: 'skincare',
    serviceName: 'Medical Grade 7-in-1 HydraFacial',
    beauticianName: 'Fatima Zahra',
    notes: 'Sensitive skin, light suction preferred.',
    status: 'Pending',
    paymentMethod: 'Cash at Salon',
    paymentStatus: 'Pending',
    totalAmountPKR: 8500,
    createdAt: '2026-07-27 09:30 AM'
  },
  {
    id: 'app-3',
    bookingRef: 'EVE-9423',
    fullName: 'Amna Shah',
    phone: '+92 333 4567890',
    email: 'amna.shah@example.com',
    date: '2026-07-30',
    time: '04:30 PM',
    category: 'hair',
    serviceName: 'Brazilian Keratin Smoothing',
    beauticianName: 'Ayesha Khan',
    notes: 'Thick frizzy hair, shoulder length.',
    status: 'Confirmed',
    paymentMethod: 'Credit/Debit Card',
    paymentStatus: 'Paid',
    totalAmountPKR: 15000,
    createdAt: '2026-07-27 11:00 AM'
  }
];

export const STAFF_MANUAL_SECTIONS = [
  {
    title: '1. Welcome & Customer Service Excellence',
    content: [
      'Always greet clients within 5 seconds of entering with a warm smile: "Welcome to Eve\'s Beauty Salon!"',
      'Offer complimentary refreshments (Rose Green Tea, Water, Coffee) upon arrival.',
      'Maintain a calm, soft-spoken tone and private environment at all times.'
    ]
  },
  {
    title: '2. Sanitation & Hygiene Protocol',
    content: [
      'Wash and sanitize hands thoroughly before touching any client\'s hair or skin.',
      'Sterilize stainless steel nail tools and scissors in the UV Autoclave sterilizer for 20 minutes post-use.',
      'Replace disposable bed sheets and headbands immediately after every facial or wax session.'
    ]
  },
  {
    title: '3. Appointment & POS Management',
    content: [
      'Log into Admin Dashboard to review the daily appointment queue.',
      'Confirm service duration and beautician assignment before starting.',
      'Issue digital or printed receipt for all Cash, Card, JazzCash, or EasyPaisa payments.'
    ]
  },
  {
    title: '4. Emergency & Client Safety Standards',
    content: [
      'Perform a mandatory 24-hour patch test behind the ear for all new hair color clients.',
      'First aid kit is located under Reception Desk #1.',
      'Direct manager phone line: +92 303 9321980.'
    ]
  }
];
