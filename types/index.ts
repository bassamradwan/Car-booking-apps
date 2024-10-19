// src/types/index.ts

//user
export interface User{
  id:string;
  name:string;
  email:string;
  password:string;
  ride :any;
  avatar:any;
  type:string;
} 
// تعريف نوع البيانات الخاص بالرحلات
export interface TripProps {
    id: string;
    title: string;
    description: string;
    date: string;
    price: string;
    imageUrl: string;
  }
  
  // تعريف نوع البيانات الخاص بالعروض
  export interface RideProps {
    id: string;
    diveId: any;
    name: string;
    time: string;
    date: string;
    car: string;
    price:string;
    pickupLocation: string;
    destination:string;
  }
  
  // تعريف نوع البيانات الخاصه بالاعلانات
export interface AdsProps{
  id: string;
  Brand_name: string;
  title: string;
  description: string;
  imageUrl: string;
  brand_link:string;
}

// باقات شهريه 
export interface Packages{
  id:string;
  title:string;
  description:string;
  car:string;
  imageUrl: string;
  price:string;
}
  

