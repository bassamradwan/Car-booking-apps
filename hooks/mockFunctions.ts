// mockFunctions.ts

import { cities, rides, users } from "@/data/mockData";
import { City, Ride, RideStatus, User } from "@/types/types";

// import { users, rides, cities } from './mockData';
// import { User, Ride, RideStatus } from './types';

// دالة لإنشاء رحلة جديدة من قبل سائق
export const createDriverRide = (driverId: string, startCityId: string, endCityId: string, maxPassengers: number, price: number): Ride | null => {
  const driver = users.find((u) => u.userId === driverId && u.userType === 'driver');

  if (driver) {
    const newRide: Ride = {
      rideId: `ride_${rides.length + 1}`,
      createdBy: 'driver',
      driverId,
      passengers: [],
      startCityId,
      endCityId,
      rideStatus: 'pending',
      createdAt: new Date().toISOString(),
      maxPassengers,
      price,
    };
    rides.push(newRide);
    driver.rides.push(newRide.rideId);
    return newRide;
  }
  return null;
};

// دالة لطلب رحلة جديدة من قبل راكب
export const addRideRequest = (userId: string, startCityId: string, endCityId: string, price: number): Ride | null => {
  const user = users.find((u) => u.userId === userId && u.userType === 'user');

  if (user) {
    const newRide: Ride = {
      rideId: `ride_${rides.length + 1}`,
      createdBy: 'user',
      passengers: [userId],
      startCityId,
      endCityId,
      rideStatus: 'pending',
      maxPassengers: 1,
      createdAt: new Date().toISOString(),
      price,
    };
    rides.push(newRide);
    user.rides.push(newRide.rideId);
    return newRide;
  }
  return null;
};

// دالة لقبول الرحلة
// export const acceptRideDrive = (rideId: string, userId: string): boolean => {
//   const ride = rides.find((r) => r.rideId === rideId);
//   const user = users.find((u) => u.userId === userId);

//   if (ride && user && ride.rideStatus === 'pending') {
//     ride.rideStatus = 'accepted';
//     return true;
//   }
//   return false;
// };
// // دالة لقبول الرحلة من قبل سائق
export const acceptRideDrive = (rideId: string, driverId: string): boolean => {
  const ride = rides.find((r) => r.rideId === rideId);
  const driver = users.find((u) => u.userId === driverId && u.userType === 'driver');

  if (ride && driver && ride.rideStatus === 'pending') {
    ride.driverId = driverId;
    ride.rideStatus = 'accepted';
    driver.acceptedRides?.push(rideId);
    return true;
  }
  return false;
};

// دالة لقبول الرحلة من قبل الراكب
export const acceptRideByPassenger = (rideId: string, passengerId: string): boolean => {
  // العثور على الرحلة باستخدام معرف الرحلة
  const ride = rides.find((r) => r.rideId === rideId);

  // العثور على الراكب باستخدام معرف الراكب والتأكد من أن دوره "user"
  const passenger = users.find((u) => u.userId === passengerId && u.userType === 'user');

  // التحقق من وجود الرحلة والراكب، وأن حالة الرحلة تسمح بالانضمام
  if (ride && passenger && (ride.rideStatus === 'pending' || ride.rideStatus === 'accepted')) {
    // التحقق من أن الرحلة لم تصل إلى الحد الأقصى للركاب
    if (ride.passengers.length < ride.maxPassengers) {
      // إضافة الراكب إلى قائمة الركاب في الرحلة
      ride.passengers.push(passengerId);
      // تحديث قائمة الرحلات الخاصة بالراكب
      passenger.rides.push(rideId);

      // إذا لم يكن هناك سائق محدد بعد، نُبقي حالة الرحلة كما هي "pending"
      if (!ride.driverId) {
        ride.rideStatus = 'pending';
      } else {
        // إذا كان هناك سائق بالفعل، نُبقي على الحالة "accepted"
        ride.rideStatus = 'accepted';
      }

      return true;
    }
  }
  return false; // إرجاع false في حال فشل إضافة الراكب
};
// دالة لإلغاء الرحلة من قبل الراكب أو السائق
export const cancelRide = (rideId: string, userId: string ): boolean => {
  const ride = rides.find((r) => r.rideId === rideId);
  const user = users.find((u) => u.userId === userId);

  if (ride && user && (ride.rideStatus === 'pending' || ride.rideStatus === 'accepted')) {
    if (ride.driverId === userId || ride.passengers.includes(userId)) {
      ride.rideStatus = 'cancelled';
      user.rides = user.rides.filter((r) => r !== rideId);
      return true;
    }
  }
  return false;
};

// دالة لتحديث حالة الرحلة
export const updateRideStatus = (rideId: string, newStatus: RideStatus): boolean => {
  const ride = rides.find((r) => r.rideId === rideId);
  if (ride && ['pending', 'accepted', 'in_progress', 'completed', 'cancelled'].includes(newStatus)) {
    ride.rideStatus = newStatus;
    return true;
  }
  return false;
};

// دالة لعرض الرحلات المتاحة للسائقين
export const getAvailableRidesForDrivers = (): Ride[] => {
    return rides.filter((ride) => ride.createdBy === 'user' && ride.rideStatus === 'pending');
  };
  
  // دالة لعرض الرحلات المتاحة للركاب
  export const getAvailableRidesForPassengers = (): Ride[] => {
    return rides.filter((ride) => ride.createdBy === 'driver' && ride.rideStatus === 'pending');
  };
  // جلب البيانات الخاص بالرحلة للركاب من خلال id
  export const getAvailableRidesForPassengersById = (id:any): Ride |undefined=> {
    // return rides.filter((ride) => ride.createdBy === 'driver' && ride.rideStatus === 'pending');
    return rides.find((ride) => ride.rideId === id);
  };
// دالة محاكاة لجلب كل المستخدمين
export const getAllUsers = (): User[] => {
    return users;
  };
//جلب بيانات المستخدم 
  
  // دالة محاكاة لجلب كل الرحلات
  export const getAllRides = (): Ride[] => {
    return rides;
  };
  
  // دالة محاكاة لجلب جميع المدن المتاحة
  export const getAllCities = (): City[] => {
    return cities;
  };