
//************************تنظيم جميع الداتا فى التطبيق  ***********************/

// types.ts

// نوع الدور الخاص بالمستخدم (راكب أو سائق)
export type UserType = 'user' | 'driver';

// نوع حالة الرحلة
export type RideStatus = 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';

// واجهة المستخدم (السائق أو الراكب)
export interface User {
  userId: string;             // معرف المستخدم
  name: string;               // اسم المستخدم
  email: string;              // البريد الإلكتروني
  phone:number;
  profilePicture?: string;
  userType: UserType;         // نوع المستخدم (راكب أو سائق)
  rides: string[];            // قائمة معرفات الرحلات الخاصة بالمستخدم (سواء كان سائقًا أو راكبًا)
  acceptedRides?: string[];   // الرحلات المقبولة (خاصة بالسائق)
}

// واجهة المدينة
export interface City {
  cityId: string;     // معرف المدينة
  cityName: string;   // اسم المدينة
}

// واجهة الرحلة
export interface Ride {
  rideId: string;                // معرف الرحلة
  createdBy: UserType;           // من أنشأ الرحلة (سائق أو راكب)
  driverId?:  string | null;           // معرف السائق (في حال تم قبول الرحلة من السائق)
  passengers: string[];          // قائمة معرفات الركاب المشاركين
  startCityId: string;           // معرف المدينة التي تبدأ منها الرحلة
  endCityId: string;             // معرف المدينة التي تنتهي عندها الرحلة
  rideStatus: RideStatus;        // حالة الرحلة (pending, accepted, in_progress, etc.)
  maxPassengers: number;         // الحد الأقصى للركاب
  createdAt: string;
  rideTime?: string;
  price: number;                 // السعر المقترح للرحلة
}

//********************** نوع وسيلة الموصلات***********************/
export interface Car{
  carId: string;
  driveId: string;
  driveNumberId: string;
  carNumber: string;
  carName: string;
  carModel: string;
  rideHistory: string[];
}