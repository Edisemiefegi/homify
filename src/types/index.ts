export type Address = {
  street: string;
  city: string;
  area: string;
  zipCode: string;
};

export type PropertyDetails = {
  bedrooms: number;
  bathrooms: number;
  garages: number;
  sqft: number;
  deposit?: string;
  poolSize?: string;
  lastRemodelYear?: number;
};

export type ExtraDetails = {
  amenities?: string[];
  additionalRooms?: string[];
  equipment?: string[];
  features?: string[];
  floorPlan?: string;
};

export type Card = {
  imageUrls?: string[];
  id: string;
  title: string;
  price: number;
  propertyType: string;
  description: string;
  status?: string;
  address: Address;
  properties: PropertyDetails;
  extras?: ExtraDetails;
  agent?: Agent;
};

type Agent = {
  id: string;
  name: string;
  imageUrl: string;
  phone: string;
  email: string;
  agency: string;
  listings: number;
  rating: number;
  description: string;
};

export type RoommateCard = {
  id: number;
  name: string;
  age: number;
  occupation: string;
  budget: number;
  location: string;
  bio: string;
  image: string;
  preferences: string[]; }


export const mockRoommates: RoommateCard[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 24,
    occupation: "Student",
    budget: 150000,
    location: "Ikeja, Lagos",
    bio: "Easy-going and tidy, I’m looking for a female roommate near Ikeja campus.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    preferences: ["Non-smoker", "Quiet environment"],
  },
  {
    id: 2,
    name: "David Brown",
    age: 29,
    occupation: "Software Engineer",
    budget: 200000,
    location: "Victoria Island, Lagos",
    bio: "Friendly professional, I enjoy cooking and fitness. Looking for a male or female roommate.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    preferences: ["Pet friendly", "Shared cooking"],
  },
  {
    id: 3,
    name: "Amina Yusuf",
    age: 27,
    occupation: "Freelancer",
    budget: 120000,
    location: "Garki, Abuja",
    bio: "Creative and flexible working hours. I’m seeking a quiet space with a clean roommate.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    preferences: ["Non-smoker", "Prefers female roommate"],
  },
];


export const agents: Agent[] = [
  {
    id: "1",
    name: "John Doe",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "+234 801 234 5678",
    email: "john.doe@example.com",
    agency: "Prime Realty",
    listings: 12,
    rating: 4.5,
    description:
      "Experienced agent specializing in luxury apartments and waterfront homes.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "+234 802 987 6543",
    email: "sarah.johnson@example.com",
    agency: "Urban Homes",
    listings: 18,
    rating: 4.8,
    description:
      "Passionate about connecting clients with modern urban properties.",
  },
  {
    id: "3",
    name: "Michael Smith",
    imageUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    phone: "+234 803 654 7890",
    email: "michael.smith@example.com",
    agency: "BlueSky Properties",
    listings: 9,
    rating: 4.2,
    description:
      "Dedicated to helping families find affordable and comfortable homes.",
  },
  {
    id: "4",
    name: "Emily Brown",
    imageUrl: "https://randomuser.me/api/portraits/women/51.jpg",
    phone: "+234 805 123 9876",
    email: "emily.brown@example.com",
    agency: "DreamHomes Ltd",
    listings: 15,
    rating: 4.7,
    description:
      "Specialist in residential sales with a focus on customer satisfaction.",
  },
  {
    id: "5",
    name: "Emily Brown",
    imageUrl: "https://randomuser.me/api/portraits/women/51.jpg",
    phone: "+234 805 123 9876",
    email: "emily.brown@example.com",
    agency: "DreamHomes Ltd",
    listings: 15,
    rating: 4.7,
    description:
      "Specialist in residential sales with a focus on customer satisfaction.",
  },
  {
    id: "6",
    name: "Emily Brown",
    imageUrl: "https://randomuser.me/api/portraits/women/51.jpg",
    phone: "+234 805 123 9876",
    email: "emily.brown@example.com",
    agency: "DreamHomes Ltd",
    listings: 15,
    rating: 4.7,
    description:
      "Specialist in residential sales with a focus on customer satisfaction.",
  },
];

export const mockCards: Card[] = [
  {
    id: "1",
    title: "Modern Family Home",
    imageUrls: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
    ],
    price: 100000,
    propertyType: "House",
    description: "Spacious luxury family home with modern design.",
    status: "For Rent",
    address: {
      street: "123 Palm Street",
      city: "Bayelsa",
      area: "Amarata",
      zipCode: "560001",
    },
    properties: {
      bedrooms: 4,
      bathrooms: 3,
      garages: 2,
      sqft: 3500,
      deposit: "20%",
      poolSize: "300 Sqft",
      lastRemodelYear: 2019,
    },
    extras: {
      amenities: ["Clubhouse", "Gym", "Garden"],
      additionalRooms: ["Guest Room", "Study"],
      equipment: ["Air Conditioning", "Solar Panels"],
      features: ["Open Kitchen", "Smart Home System"],
      floorPlan: "/floorplan.png",
    },
    agent: agents[0],
  },
  {
    id: "2",
    title: "Luxury Apartment in Downtown",
    imageUrls: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    ],
    price: 200000,
    propertyType: "Apartment",
    description:
      "Stylish luxury apartment located in the city center, offering modern interiors and skyline views.",
    status: "For Rent",

    address: {
      street: "45 Downtown Ave",
      city: "New York",
      area: "City Center",
      zipCode: "10001",
    },

    properties: {
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      sqft: 1600,
      deposit: "15%",
      poolSize: "150 Sqft",
      lastRemodelYear: 2021,
    },

    extras: {
      amenities: ["Elevator", "24/7 Security", "Rooftop Lounge"],
      additionalRooms: ["Laundry Room"],
      equipment: ["Dishwasher", "Washer/Dryer"],
      features: ["City View", "Balcony"],
      floorPlan: "/floorplan.png",
    },

    agent: agents[1],
  },
  {
    id: "3",
    title: "Cozy Cottage",
    imageUrls: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    ],
    price: 120000,
    propertyType: "Apartment",
    description:
      "Charming cottage with rustic interiors, perfect for a small family or holiday retreat.",
    status: "For Sale",

    address: {
      street: "78 Lakeview Rd",
      city: "Vermont",
      area: "City Center",
      zipCode: "05401",
    },

    properties: {
      bedrooms: 2,
      bathrooms: 1,
      garages: 0,
      sqft: 900,
      deposit: "10%",
      poolSize: "No Pool",
      lastRemodelYear: 2015,
    },

    extras: {
      amenities: ["Garden", "Fireplace"],
      additionalRooms: ["Storage Room"],
      equipment: ["Heating System"],
      features: ["Wooden Deck", "Lakeside View"],
      floorPlan: "/floorplan.png",
    },

    agent: agents[2],
  },
  {
    id: "4",
    title: "Beachfront Villa",
    imageUrls: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    ],
    price: 250000,
    propertyType: "Villa",
    description:
      "Luxury beachfront villa with stunning sea views and private access to the beach.",
    status: "For Sale",

    address: {
      street: "12 Beachside Lane",
      city: "Miami",
      area: "South Beach",
      zipCode: "33139",
    },

    properties: {
      bedrooms: 5,
      bathrooms: 4,
      garages: 2,
      sqft: 4200,
      deposit: "25%",
      poolSize: "500 Sqft",
      lastRemodelYear: 2018,
    },

    extras: {
      amenities: ["Private Pool", "Gym", "Clubhouse"],
      additionalRooms: ["Guest Suite", "Office"],
      equipment: ["Central Heating", "Generator"],
      features: ["Sea View", "Private Garden"],
      floorPlan: "/floorplan.png",
    },

    agent: agents[3],
  },
  {
    id: "5",
    title: "Suburban Townhouse",
    imageUrls: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
    ],
    price: 300000,
    propertyType: "Townhouse",
    description:
      "Modern suburban townhouse with family-friendly amenities and easy city access.",
    status: "For Rent",

    address: {
      street: "56 Maple Street",
      city: "Chicago",
      area: "North Suburbs",
      zipCode: "60007",
    },

    properties: {
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      sqft: 1800,
      deposit: "12%",
      poolSize: "Community Pool",
      lastRemodelYear: 2017,
    },

    extras: {
      amenities: ["Community Park", "Gym"],
      additionalRooms: ["Home Office"],
      equipment: ["Refrigerator", "Microwave"],
      features: ["Patio", "Open Living Space"],
      floorPlan: "/floorplan.png",
    },

    agent: agents[4],
  },
  {
    id: "6",
    title: "Penthouse with City View",
    imageUrls: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    ],
    price: 980000,
    propertyType: "Apartment",
    description:
      "Spacious penthouse apartment with panoramic views of the city skyline.",
    status: "For Sale",

    address: {
      street: "99 Skyline Tower",
      city: "Los Angeles",
      area: "Downtown",
      zipCode: "90015",
    },

    properties: {
      bedrooms: 3,
      bathrooms: 3,
      garages: 2,
      sqft: 2200,
      deposit: "20%",
      poolSize: "250 Sqft",
      lastRemodelYear: 2020,
    },

    extras: {
      amenities: ["Rooftop Pool", "Concierge Service"],
      additionalRooms: ["Home Theater"],
      equipment: ["Wine Cooler", "Smart Home Devices"],
      features: ["Panoramic Windows", "Private Terrace"],
      floorPlan: "/floorplan.png",
    },

    agent: agents[5],
  },
];
