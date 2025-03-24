export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export interface User {
  id: string;
  email: string;
  name?: string;
  password: string;
  role: Role;
  bookings: Booking[];
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface Unit {
  id: string;
  number: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  rent: number;
  amenities: string[];
  leaseTerms: number[];
  available: boolean;
  bookings: Booking[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
  nextAvailableDate: Date;
}

export interface Booking {
  id: string;
  userId: string;
  user: User;
  unitId: string;
  unit: Unit;
  bookedFrom: Date;
  bookedUntil: Date;
  createdAt: Date;
  updatedAt: Date;
}
