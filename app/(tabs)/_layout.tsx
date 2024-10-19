import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import globalStyles, { colorsAPP } from '@/styles/global/global.style';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#674FA3',tabBarStyle:{
      
      // height:60,
      paddingBottom:5
    }}} 
    
    >
    <Tabs.Screen
      name="index"
      options={{
        headerShown: false, 
        title: 'الرئيسية',
        tabBarLabelStyle:{fontSize:14,fontWeight:'bold'},
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={colorsAPP.primaryColor} />,
      }}
    />
     <Tabs.Screen
      name="request-rides/index"
      options={{
        headerShown: false, 
        title: 'أنشاء رحلة',
        tabBarLabelStyle:{fontSize:14,fontWeight:'bold'},
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={colorsAPP.primaryColor} />,
      }}

    />
      <Tabs.Screen
      name="contact-us/index"
      options={{
        headerShown: false, 
        title: ' تواصل معنا',
        tabBarLabelStyle:{fontSize:14,fontWeight:'bold'},
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone-square" color={colorsAPP.primaryColor} />,
      }}

    />
      <Tabs.Screen
      name="map/index"
      options={{
        headerShown: false, 
        title: ' رحلة',
        tabBarLabelStyle:{fontSize:14,fontWeight:'bold'},
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={colorsAPP.primaryColor} />,
      }}

    />
    <Tabs.Screen
      name="profile/index"
      options={{
        headerShown: false, 
        title: 'الملف الشخصى',
        tabBarLabelStyle:{fontSize:14,fontWeight:'bold'},
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={colorsAPP.primaryColor} />,
      }}
    />
  </Tabs>
  );
}
