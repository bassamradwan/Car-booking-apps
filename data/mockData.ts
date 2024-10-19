// mockData.ts

import { City, Ride, User } from "@/types/types";


// بيانات المستخدمين المؤقتة
export const users: User[] = [
  {
    userId: 'user_1',
    name: 'Ali',
    email: 'ali@example.com',
    userType: 'user',
    phone: 123456789,
    rides: [],
  },
  {
    userId: 'driver_1',
    name: 'Ahmed',
    email: 'ahmed@example.com',
    userType: 'driver',
    phone: 987654321,
    rides: [],
    acceptedRides: [],
  },
  {
    userId: 'user_2',
    name: 'Ahmed Hassan',
    email: 'hassan@example.com',
    phone: 123456789,
    userType: 'user',
    rides: [],
  },
  {
    userId: 'driver_2',
    name: 'Mohamed Hassan',
    email: 'mohamed@example.com',
    phone: 987654321,
    userType: 'driver',
    rides: [],
    acceptedRides: [],
  },
];

// بيانات المدن المعروفة
export const cities: City[] = [
  { cityId: 'city_1', cityName: 'Cairo' },
  { cityId: 'city_2', cityName: 'Alexandria' },
  { cityId: 'city_3', cityName: 'Giza' },
  { cityId: 'city_4', cityName: 'Aswan' },
  { cityId: 'city_5', cityName: 'Luxor' },
];

// بيانات الرحلات المؤقتة
export const rides: Ride[] = [
  {
    rideId: 'ride_1',
    createdBy: 'user',
    passengers: ['user_1'],
    startCityId: 'city_1',
    endCityId: 'city_2',
    rideStatus: 'pending',
    maxPassengers: 1,
    createdAt: '2024-10-10',
    rideTime: '12:00',
    price: 50,
  },
  {
    rideId: 'ride_2',
    driverId: null,
    startCityId: 'city_3',
    endCityId: 'city_4',
    rideStatus: 'pending',
    passengers: [],
    maxPassengers: 1, // رحلة طلبها راكب
    createdBy: 'user',
    createdAt: '2024-10-10',
    rideTime: '15:00',
    price: 50,
  },
  {
    rideId: 'ride_3',
    driverId: 'driver_2',
    startCityId: 'قنا',
    endCityId: 'قوص',
    rideStatus: 'pending',
    passengers: [],
    maxPassengers: 3, // رحلة أنشأها سائق
    createdBy: 'driver',
    createdAt: '2024-10-09',
    rideTime: '16:00',
    price: 100,
  },
  {
    rideId: 'ride_4',
    driverId: 'driver_1',
    startCityId: 'قوص',
    endCityId: 'الاقصر',
    rideStatus: 'pending',
    passengers: ['user_2'],
    maxPassengers: 5, // رحلة أنشأها سائق
    createdBy: 'driver',
    createdAt: '2024-10-8',
    rideTime: '14:00',
    price: 50,
  },
];
