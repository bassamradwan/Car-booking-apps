import { View, Text, FlatList, SafeAreaView, Button, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { tripsData, adsData, packagesData } from '@/data/staticData'; // تأكد من وجود بيانات الإعلانات هنا
import TripCard from '@/components/TripCard';
import AdCard from '@/components/adCard';
import { router } from 'expo-router';
import { IconButton, Tooltip } from 'react-native-paper';
import PackageCard from '@/components/packageCard';
import { useAuth } from '@/context/AuthContext';
import DriverHome from '../driver/driver.home';
import CardRide from '@/components/cardRide';
import { getAvailableRidesForPassengers } from '@/hooks/mockFunctions';

export default function HomeScreen() {
   const {user}=useAuth()

   const dataRidesUser = getAvailableRidesForPassengers()
   useEffect(()=>{},[user])
  // دالة لإنشاء رحلة جديدة
  const createTrip = () => {
    // تنفيذ منطق إنشاء الرحلة هنا
    console.log("إنشاء رحلة جديدة");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
       {/* قسم الإعلانات */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>إعلانات</Text>
          <FlatList
            data={adsData} // استخدام بيانات الإعلانات هنا
            horizontal
            renderItem={({ item }) => (
              <AdCard
              id={item.id}
              Brand_name={item.Brand_name}
              brand_link={item.brand_link}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            style={styles.flatList} // إضافة تنسيق لفلتر القائمة
          />
        </View>
{user?.type ==='user' ?(
 <>
   {/* قسم الرحلات المتاحة */}
   <View style={styles.section}>
   <Text style={styles.sectionTitle}>رحلات متاحة</Text>
   <FlatList
     data={tripsData}
     horizontal
     renderItem={({ item }) => (
       <TripCard
         id={item.id}
         title={item.title}
         description={item.description}
         date={item.date}
         price={item.price}
         imageUrl={item.imageUrl}
       />
     )}
     keyExtractor={(item) => item.id.toString()}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ paddingHorizontal: 20 }}
     style={styles.flatList} // إضافة تنسيق لفلتر القائمة
   />
 </View> 

{/* قسم الرحلات المتاحة */}
<View style={styles.section}>
   <Text style={styles.sectionTitle}>رحلات متاحة</Text>
   <FlatList
     data={dataRidesUser} // استخدام بيانات الإعلانات هنا
     horizontal
     renderItem={({ item }) => (
      <CardRide 
    {...item}
   
    userId={user?.id || "unknown"}
      
      />
     )}
     keyExtractor={(item) => item.rideId.toString()}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ paddingHorizontal: 20 }}
   />
 </View> 
    {/* قسم الباقات */}
    <View style={styles.section}>
   <Text style={styles.sectionTitle}>باقات شهرية</Text>
   <FlatList
     data={packagesData} // استخدام بيانات الإعلانات هنا
     horizontal
     renderItem={({ item }) => (
       <PackageCard
       id={item.id}
         title={item.title}
         description={item.description}
         imageUrl={item.imageUrl}
         car={item.car}
         price={item.price}
       />
     )}
     keyExtractor={(item) => item.id.toString()}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ paddingHorizontal: 20 }}
     style={styles.flatList} // إضافة تنسيق لفلتر القائمة
   />
 </View>
 </>
):(
  <DriverHome/>
)

}
     
      </ScrollView>
    </SafeAreaView>
  );
}

// التأكد من وجود الأنماط المناسبة
const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction:"rtl",
    backgroundColor: '#fff',
  },
  createTripButtonContainer: {
    padding: 20,
    alignItems: 'center',
  },
  section: {
    flex:1,
    marginBottom: 20,
    direction:'rtl'
  },
  sectionTitle: {
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:"Noto-Kufi-Arabic-Bold",
    marginHorizontal:10,
    paddingHorizontal:10,
    textAlign: "left",
    color:'#674FA3'
  },
  flatList: {
    // إضافة أي تنسيقات خاصة بفلتر القائمة هنا
  },
});
