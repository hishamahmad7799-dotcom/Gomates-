import { Trip } from '@/types/trip'

export const TRIPS_DATA: Trip[] = [
  {
    id: 'jibhi-tirthan-shoja-shimla-2026',
    slug: 'jibhi-tirthan-shoja-shimla',
    name: 'Jibhi, Tirthan Valley, Shoja & Shimla Trail',
    location: 'Jibhi, Tirthan Valley, Shoja & Shimla, Himachal Pradesh',
    state: 'Himachal Pradesh',
    shortDescription: 'Discover cozy wooden hamlets in Jibhi, Tirthan river valley, Jalori Pass trek, and Shimla Mall Road & Ridge.',
    description: 'Escape into the serene green pine forests of Tirthan Valley and Banjar. Walk across wooden bridges in Jibhi, trek to crystal-clear Serolsar Lake via Jalori Pass (10,800 ft), stay in cozy wooden cottages, and explore the iconic Ridge and Mall Road of Shimla.',
    startDate: '08 Oct 2026',
    endDate: '12 Oct 2026',
    duration: '4 Days • 3 Nights',
    price: 8499,
    formattedPrice: '₹8,499',
    currency: 'INR',
    category: 'Valley & Forest Trail',
    groupSize: '12-15 Gomates',
    difficulty: 'Easy-Moderate',
    featured: true,
    isUpcoming: true,
    coverImage: '/images/jibhi/jibhi-1.jpg',
    gallery: [
      '/images/jibhi/jibhi-1.jpg',
      '/images/jibhi/jibhi-2.jpg',
      '/images/jibhi/jibhi-3.jpg',
      '/images/jibhi/jibhi-4.jpg',
      '/images/jibhi/jibhi-5.jpg'
    ],
    highlights: [
      'Trek to Serolsar Lake via Jalori Pass (10,800 ft)',
      'Hidden Jibhi Waterfall & wooden bridge river trail',
      'Riverside cottage stay in Tirthan Valley',
      'Walkthrough of historic Shimla Ridge & Christ Church',
      'Kufri & Narkanda mountain view trail'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Aligarh to Jibhi Overnight Drive & Arrival',
        description: 'Overnight drive from Aligarh in a comfortable Urbania Traveler. Arrive in Jibhi by morning. Check into a wooden riverside homestay, explore Jibhi Waterfall and local pine forest trails.',
        location: 'Jibhi',
        stay: 'Riverside Wooden Cottage in Jibhi',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Jalori Pass & Serolsar Lake Trek',
        description: 'Drive up to Jalori Pass (10,800 ft). Begin a scenic 5km forest trek to Serolsar Lake. Visit the sacred Buddhi Nagin Temple and enjoy lunch overlooking oak forests.',
        location: 'Shoja / Jalori Pass',
        stay: 'Riverside Wooden Cottage in Jibhi',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Jibhi & Tirthan Valley Riverside Trail',
        description: 'Morning walk along the crystalline Tirthan river. Explore local wooden hamlets, trout streams, and pine forest viewpoints.',
        location: 'Tirthan Valley',
        stay: 'Riverside Wooden Cottage in Jibhi',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Drive to Shimla, Ridge Stroll & Return to Aligarh',
        description: 'Scenic morning drive down towards Shimla. Stroll through iconic Mall Road, historic Christ Church and Ridge promenade before overnight return journey to Aligarh.',
        location: 'Shimla / Aligarh Drop off',
        stay: 'N/A',
        mealsIncluded: 'Breakfast'
      }
    ],
    included: [
      'Aligarh to Aligarh transportation in AC Urbania Traveler / SUV',
      '3 Nights stay in Wooden Cottages & Hotels',
      '3 Breakfasts & 3 Dinners',
      'Guided trek to Serolsar Lake & Jalori Pass',
      'Trip Captain assistance throughout',
      'Tolls, driver charges & parking fees'
    ],
    excluded: [
      'Lunches & personal café orders',
      'Personal shopping & adventure activities',
      'GST 5%'
    ],
    faqs: [
      {
        question: 'Is the Serolsar Lake trek suitable for beginners?',
        answer: 'Yes! The trek is a gentle 5km forest walk with minimal incline. It is easy and suitable for all fitness levels.'
      },
      {
        question: 'What type of stay is provided in Jibhi?',
        answer: 'We stay in authentic wooden riverside cottages with attached clean bathrooms, hot water geysers, and mountain views.'
      }
    ],
    whatsappMessage: "Hi! 👋 I'm interested in joining the Jibhi, Tirthan Valley, Shoja & Shimla Trail (4 Days). Please send me slot availability."
  },
  {
    id: 'udaipur-lakes-2026',
    slug: 'udaipur-city-of-lakes',
    name: 'Udaipur City of Lakes & Royal Fort Trail',
    location: 'Udaipur & Kumbhalgarh, Rajasthan',
    state: 'Rajasthan',
    shortDescription: 'Cruise Lake Pichola at sunset, explore grand City Palace, and witness Kumbhalgarh’s great wall.',
    description: 'Step into Venice of the East! Experience royal Mewar heritage, grand marble palaces, romantic sunsets over Lake Pichola, sunset views from Monsoon Palace, and a day excursion to Kumbhalgarh Fort—home to the second-longest continuous wall in the world.',
    startDate: '24 Oct 2026',
    endDate: '27 Oct 2026',
    duration: '4 Days • 3 Nights',
    price: 8000,
    formattedPrice: '₹8,000',
    currency: 'INR',
    category: 'Royal Heritage & Lakes',
    groupSize: '12-16 Gomates',
    difficulty: 'Easy',
    featured: true,
    isUpcoming: true,
    coverImage: '/images/udaipur/udaipur-1.jpg',
    gallery: [
      '/images/udaipur/udaipur-1.jpg',
      '/images/udaipur/udaipur-2.jpg',
      '/images/udaipur/udaipur-3.jpg',
      '/images/udaipur/udaipur-4.jpg',
      '/images/udaipur/udaipur-5.jpg'
    ],
    highlights: [
      'Sunset Boat Cruise on Lake Pichola passing Jag Mandir',
      'Guided walkthrough of Udaipur City Palace & Museum',
      'Panoramas from Sajjangarh Monsoon Palace hill',
      'Day trip to Kumbhalgarh Fort (World’s 2nd longest wall)',
      'Traditional Rajasthani Thali dinner & Cultural Dharohar dance show'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Udaipur & Lake Pichola Sunset Cruise',
        description: 'Arrive in Udaipur. Check into a heritage lake-view hotel. Evening sunset boat ride on Lake Pichola surrounded by Aravalli hills and glowing palaces.',
        location: 'Udaipur',
        stay: 'Heritage Hotel near Lake Pichola',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Udaipur City Palace, Jagdish Temple & Bagore Ki Haveli',
        description: 'Explore grand City Palace complex, Jagdish Temple, and Saheliyon Ki Bari gardens. Evening folk dance performance at Bagore Ki Haveli.',
        location: 'Udaipur',
        stay: 'Heritage Hotel near Lake Pichola',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Kumbhalgarh Fort Excursion & Monsoon Palace',
        description: 'Day drive through Aravalli hills to Kumbhalgarh Fort. Walk the historic ramparts. Return to Udaipur for sunset views from Sajjangarh Monsoon Palace.',
        location: 'Kumbhalgarh / Udaipur',
        stay: 'Heritage Hotel in Udaipur',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Fateh Sagar Lake & Departure',
        description: 'Morning breakfast and chill by Fateh Sagar Lake. Shopping for leather goods, miniature paintings, and silver jewelry before departure.',
        location: 'Udaipur Railway Station / Airport',
        stay: 'N/A',
        mealsIncluded: 'Breakfast'
      }
    ],
    included: [
      'Udaipur pickup and drop transfers',
      '3 Nights stay in Heritage Lake-View Hotel',
      '3 Breakfasts & 3 Dinners including authentic Rajasthani Thali',
      'Sunset Boat Ride on Lake Pichola',
      'Bagore Ki Haveli Dharohar cultural show tickets',
      'Private AC vehicle for Kumbhalgarh Fort day trip',
      'Trip Lead assistance'
    ],
    excluded: [
      'Travel to/from Udaipur',
      'City Palace & Monument entry tickets',
      'Lunches & personal shopping',
      'GST 5%'
    ],
    faqs: [
      {
        question: 'What is the best way to reach Udaipur for the trip start?',
        answer: 'Udaipur is well connected via Maharana Pratap Airport (UDR), direct overnight trains from Delhi/Mumbai, and AC sleeper buses.'
      }
    ],
    whatsappMessage: "Hi! 👋 I'm interested in the Udaipur City of Lakes & Royal Fort Trail (4 Days). Please send me batch dates and booking process."
  },
  {
    id: 'manali-chandratal-2026',
    slug: 'manali-chandratal-camping',
    name: 'Manali to Chandratal Lake Camping Adventure',
    location: 'Manali, Atal Tunnel & Chandratal Lake',
    state: 'Himachal Pradesh',
    shortDescription: 'Cross Atal Tunnel into Lahaul, trek to Moon Lake, and sleep under millions of stars.',
    description: 'High altitude Himalayan camping at its finest! Drive past Atal Tunnel into Lahaul Valley, cross Batal, and camp on the shores of the crescent-shaped Chandratal (Moon Lake) at 14,100 ft. Experience raw mountain wilderness, stargazing, and bonfire nights.',
    startDate: '15 Nov 2026',
    endDate: '19 Nov 2026',
    duration: '5 Days • 4 Nights',
    price: 10500,
    formattedPrice: '₹10,500',
    currency: 'INR',
    category: 'High Altitude Camping',
    groupSize: '10-14 Gomates',
    difficulty: 'Moderate',
    featured: true,
    isUpcoming: true,
    coverImage: '/images/chandratal/chandratal-2.jpg',
    gallery: [
      '/images/chandratal/chandratal-1.jpg',
      '/images/chandratal/chandratal-2.jpg',
      '/images/chandratal/chandratal-3.jpg',
      '/images/chandratal/chandratal-4.jpg',
      '/images/chandratal/chandratal-5.jpg'
    ],
    highlights: [
      'Camp under starry night skies at Chandratal Lake (14,100 ft)',
      'Drive through engineering marvel Atal Tunnel & Lahaul Valley',
      'Trek along the turquoise waters of Moon Lake',
      'Stop at legendary Chacha-Chachi dhaba in Batal',
      'Riverside celebration night & bonfire in Old Manali'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Manali Overnight Journey & Acclimatization',
        description: 'Overnight drive from Delhi. Arrive in Manali, check into hotel. Afternoon walk in Solang Valley for acclimatization and gear check.',
        location: 'Manali',
        stay: 'Riverside Resort in Manali',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Manali to Chandratal via Atal Tunnel & Batal',
        description: 'Early morning departure through Atal Tunnel into Lahaul Valley. Drive through Gramphu, Chattru, and Batal to reach Chandratal camping site.',
        location: 'Chandratal Lake',
        stay: 'Heated Alpine Dome Tents at Chandratal Base',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Chandratal Moon Lake Trek & Stargazing',
        description: 'Morning 1km gentle walk to Chandratal Lake shoreline. Spend the day capturing reflections of Chandra Bhaga peaks. Evening stargazing and campfire.',
        location: 'Chandratal Lake',
        stay: 'Heated Alpine Dome Tents at Chandratal Base',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Chandratal to Manali Return & Celebration Night',
        description: 'Scenic return drive past Batal and Rohtang pass region back into Manali. Farewell celebration dinner in Old Manali.',
        location: 'Manali',
        stay: 'Resort in Manali',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 5,
        title: 'Manali Shopping & Overnight Drive to Delhi',
        description: 'Free morning for souvenir shopping in Manali market. Afternoon departure for Delhi, concluding our high-altitude lake adventure.',
        location: 'Delhi Drop off',
        stay: 'N/A',
        mealsIncluded: 'Breakfast'
      }
    ],
    included: [
      'Delhi to Delhi transportation in 4x4 SUV / Force Tempo Traveler',
      '2 Nights Hotel stay in Manali + 2 Nights Alpine Camping at Chandratal',
      '4 Breakfasts & 4 Dinners',
      'Medical Oxygen Cylinder & High-altitude First Aid kit',
      'All Lahaul & Spiti inner line permits',
      'Experienced Mountain Lead'
    ],
    excluded: [
      'Travel to Delhi (if coming from another city)',
      'Lunches & personal snacks',
      'GST 5%'
    ],
    faqs: [
      {
        question: 'How cold does it get at Chandratal campsite?',
        answer: 'Temperatures at night can drop to 0°C to -5°C. We provide sub-zero rated sleeping bags, insulated mattresses, and warm dining tents.'
      }
    ],
    whatsappMessage: "Hi! 👋 I'm interested in the Manali to Chandratal Lake Camping Adventure (5 Days). Please send me batch details."
  }
]
