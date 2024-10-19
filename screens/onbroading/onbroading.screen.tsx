import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '@/styles/onbroading/onbroading'
import { router } from 'expo-router'

export default function OnBroadingScreen() {

  return (
    <LinearGradient 
    colors={["#E5ECF9","#F6F7F9"]}
    style={{flex:1,alignItems:"center",justifyContent:"center"}}
    >
        <View style={styles.firstContainer}>
            <Image 
            source={{uri:"https://saudicaptin.com/wp-content/uploads/2019/12/banner-2.png"}}
            style={styles.logo}
            />
            <View>
            <Text style={styles.titleLogo}>وصلنى</Text>
        <Text style={styles.PLogo}>متشلش هم المشوار</Text>
            </View>
            <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => router.push("/(routes)/login")}
                        >
                <Text style={styles.buttonText}>تسجيل الدخول</Text>
            </TouchableOpacity>

        </View>


    </LinearGradient>
  )
}