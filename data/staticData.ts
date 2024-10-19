// src/data/staticData.ts
import { TripProps, RideProps, AdsProps, User, Packages } from "../types";

//users
export const userData: User[] = [
  {
    id: '1',
    name: 'Bassam',
    type:"drive",
    email: 'bassam@gmail.com',
    password: '123456',
    avatar: 'https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png',
    ride: [ 
      {
        id: "1",
        name: "النزل",
        time: "5:30 PM",
        date: "20/12/2021",
        car: "بيكراوس",
        price: "100",
        pickupLocation: "مدينة الملك عبد العزيز",
        destination: "البحر الاحمر"
      },
      {
        id: "2",
        name: "العود",
        time: "6:00 PM",
        date: "21/12/2021",
        car: "بيكراوس",
        price: "100",
        pickupLocation: "مدينة الملك عبد العزيز",
        destination: "الأهرامات"
      },

  ],
  },
  {
    id: '2',
    name: 'user',
    type:"user",
    email: 'user@gmail.com',
    password: '123456',
    avatar: 'https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png',
    ride: [ 
      {
        id: "3",
        name: "ذهاب",
        time: "6:00 PM",
        date: "21/12/2021",
        car: "توكتوك",
        price: "100",
        pickupLocation: "   استمتع بجولة رائعة لاستكشاف الأهرامات القديمة في مصر.",
        destination: "الأهرامات"
      },
      {
        id: "4",
        name: "ذهاب",
        time: "6:00 PM",
        date: "21/12/2021",
        car: "ملاكى",
        price: "100",
        pickupLocation: "   استمتع بجولة رائعة لاستكشاف الأهرامات القديمة في مصر.",
        destination: "الأهرامات"
      },
    
  ],
  }
]

// بيانات الرحلات
export const tripsData: TripProps[] = [
  {
    id: "1",
    title: "رحلة إلى الأهرامات",
    description: "استمتع بجولة رائعة لاستكشاف الأهرامات القديمة في مصر.",
    date: "2024-10-15",
    price: "$120",
    imageUrl: "https://cdn.elwatannews.com/watan/610x300/8708035771442698266.jpg",
  },

  {
    id: "2",
    title: "رحلة إلى البحر الأحمر",
    description: "جولة غوص واستكشاف الشعاب المرجانية الجميلة في البحر الأحمر.",
    date: "2024-11-01",
    price: "$150",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGiB3rKHxyD2xlyqwFDgVmTxqR4qdDxV5Qtg&s",
  },
  {
    id: "3",
    title: "رحلة إلى  أسوان",
    description: "جولة غوص واستكشاف المناظر الطبيعيه  الجميلة   .",
    date: "2024-11-01",
    price: "$150",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pqnl4t7Q5uuS2UUVNgvsoh4poY0341oUqA&s",
  },
  {
    id: "4",
    title: "رحلة إلى ألاقصر",
    description: "استمتع بجولة رائعة لاستكشاف الاثار القديمة في مصر.",
    date: "2024-10-15",
    price: "$120",
    imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20240409/pngtree-egypt-luxor-temple-view-image_15653539.jpg",
  },
];
// staticData.js اعلانات
export const adsData: AdsProps[] = [
  {
    id: '1',
    Brand_name: 'ضجه',
    title: 'خصم خاص على الرحلات',
    description: 'احصل على 20% خصم على أول رحلة لك!',
    imageUrl: 'https://couponstopia.com/storage/2023/11/%D8%AA%D9%81%D8%B5%D9%8A%D9%84-%D9%88%D8%AE%D9%8A%D8%A7%D8%B7%D8%A9-%D9%85%D9%88%D8%AF%D9%8A%D9%84%D8%A7%D8%AA-%D8%B9%D8%A8%D8%A7%D9%8A%D8%A7%D8%AA-%D8%B3%D9%88%D8%AF%D8%A7%D8%A1-%D9%84%D9%84%D8%AA%D9%81%D8%B5%D9%8A%D9%84-%D9%83%D9%84%D9%88%D8%B4.webp',
    brand_link: "https://example.com/"
  },
  {
    id: '2',
    Brand_name: 'توفير',
    title: 'عرض موسمي',
    description: 'استمتع برحلات مجانية في هذا الموسم!',
    imageUrl: 'https://couponstopia.com/storage/2023/11/%D8%AA%D9%81%D8%B5%D9%8A%D9%84-%D9%88%D8%AE%D9%8A%D8%A7%D8%B7%D8%A9-%D9%85%D9%88%D8%AF%D9%8A%D9%84%D8%A7%D8%AA-%D8%B9%D8%A8%D8%A7%D9%8A%D8%A7%D8%AA-%D8%B3%D9%88%D8%AF%D8%A7%D8%A1-%D9%84%D9%84%D8%AA%D9%81%D8%B5%D9%8A%D9%84-%D9%83%D9%84%D9%88%D8%B4.webp',
    brand_link: "https://example.com/"

  },
  // أضف المزيد من الإعلانات حسب الحاجة
];

// باقات شهريه
export const packagesData: Packages[] = [
  {
    id: '1',
    title: 'توصيل الى العمل  ',
    description: 'استمتع برحلات لمدة 26 يوم فى الشهر بسعر مخفض!',
    imageUrl: 'https://img.pikbest.com/back_our/20220329/bg/780b89fd40bf3.jpg!w700wp',
    price: '300 ',
    car: "توكتوك"
  },
  {
    id: '2',
    title: 'توصيل الى العمل 26 يوم',
    description: 'استمتع برحلات لمدة 26 يوم فى الشهر بسعر مخفض!',
    imageUrl: 'https://img.pikbest.com/element_our/20220402/bg/fe53b2a998dde.png!w700wp',
    price: '5000 ',
    car: "ملاكى"
  },
]

// بيانات التنقل (العروض)
export const rides: RideProps[] = [
  {
    id: "1",
    name: "النزل",
    diveId: "1",
    time: "5:30 PM",
    date: "20/12/2021",
    car: "بيكراوس",
    price: "100",  
    pickupLocation: "مدينة الملك عبد العزيز",
    destination: "البحر الاحمر"
  },
  {
    id: "2",
    diveId:'1',
    name: "العود",
    time: "6:00 PM",
    date: "21/12/2021",
    car: "بيكراوس",
    price: "100",
    pickupLocation: "مدينة الملك عبد العزيز",
    destination: "الأهرامات"
  },
  {
    id: "3",
    diveId:'1',
    name: "ذهاب",
    time: "6:00 PM",
    date: "21/12/2021",
    car: "توكتوك",
    price: "100",
    pickupLocation: "   استمتع بجولة رائعة لاستكشاف الأهرامات القديمة في مصر.",
    destination: "الأهرامات"
  },
];

const addRide = (
  pickupLocation: string,
  destination: string,
  name: string,
  car: string,
  time: string,
  price: string,
  diveId?:any,
) => {
  const newRide: RideProps = {
    id: (rides.length + 1).toString(),
    diveId,
    pickupLocation,
    destination,
    date: new Date().toLocaleDateString(),
    name,
    car,
    time,
    price,
  };
  rides.push(newRide);
};

const getRideHistory = () => {
  return rides;
};
export { addRide, getRideHistory };