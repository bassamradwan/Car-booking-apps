import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  I18nManager,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { rides, tripsData } from "@/data/staticData";
import TripCard from "@/components/TripCard";
import RideCard from "@/components/RideCard";
import { Link, router } from "expo-router";
import { Avatar, Button, Card } from "react-native-paper";
import { useAuth } from "@/context/AuthContext";

export default function RideUserScreen() {
  const [dataRidesUser,setdataRidesUser]=useState()
  const {user}=useAuth()
  useEffect(()=>{
    setdataRidesUser(user?.ride)
  },[user])
console.log(dataRidesUser);

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.screen}>
      {/* عنوان انشاء الرحلة */}
      {/* <TouchableOpacity onPress={() => router.push("/(routes)/request-rides")}>
        <Text style={styles.createTripButton}>انشاء رحله جديدة</Text>
      </TouchableOpacity> */}
      {/* قائمة العروض */}
      <FlatList
        ListHeaderComponent={
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>العروض المتاحة</Text>
          </View>
        }
        nestedScrollEnabled={true}
        data={dataRidesUser}
        renderItem={({ item }) => (
          
          <RideCard
            id={item.id}
            diveId={item.diveId}
            price={item.price}
            name={item.name}
            time={item.time}
            date={item.date}
            car={item.car}
            pickupLocation={item.pickupLocation}
            destination={item.destination}
          />
        )}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    direction: "rtl",
  },
  section: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#674FA3",
  },
  createTripButton: {
    fontSize: 16,
    fontFamily: "Noto-Kufi-Arabic-Bold",
    textAlign: "left",
    margin: 16,
    color: "#674FA3",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
