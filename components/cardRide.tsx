// RideCard.tsx
import React from "react";
import { View, Text, StyleSheet, I18nManager } from "react-native";
import { RideProps } from "../types";
import { Card, Button, Avatar, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons"; // إضافة مكتبة الأيقونات
import { Ride } from "@/types/types";
import { acceptRideDrive, cancelRide } from "@/hooks/mockFunctions";
import { Link } from "expo-router";


interface RideCardProps extends Ride {
userId:string;
}
// مكون RideCard لعرض تفاصيل الرحلة
const CardRide: React.FC<RideCardProps> = ({
driverId,
rideId,
rideStatus,
rideTime,
startCityId,
endCityId,
createdAt,
createdBy,
passengers,
price,
maxPassengers,
userId
}) => {
    // دالة لقبول الرحلة (مستدعاة من الدوال)
    const handleAcceptRide = () => {
      const result = acceptRideDrive(rideId, userId);
      console.log(result ? "تم قبول الرحلة!" : "فشل في قبول الرحلة");
    };
  
    // دالة لرفض الرحلة (إلغاءها)
    const handleRejectRide = () => {
      const result = cancelRide(rideId, userId);
      console.log(result ? "تم إلغاء الرحلة!" : "فشل في إلغاء الرحلة");
    };
  
  return(
    <Link
        href={{
          pathname:'/ride-details/[id]',
          params: { id: rideId },
        }}>
  <Card style={styles.rideCard}>
    <Card.Title
      title={rideId}
      titleStyle={styles.rideName}
      subtitle={rideStatus }
      left={(props) => <Avatar.Icon {...props} icon="steering" />}
      right={(props) => (
        <View {...props}>
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={18} color="#6200ea" />
            <Text style={styles.rideDetails}>{createdAt} </Text>
          </View>
          <View style={styles.row}>
        <Ionicons name="time-outline" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}> {rideTime}</Text>
      </View>
        </View>
      )}
    />

    <Card.Content>
    
      <View style={styles.row}>
        <Ionicons name="location-outline" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}>من الموقع : {startCityId}
</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="location-sharp" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}>
          الى الموقع : {endCityId}
        </Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="cash" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}>سعر الرحلة : {price}</Text>
      </View>
   
      {maxPassengers > 1|| maxPassengers ===0 ?(
        <>
           <View style={styles.row}>
        <Ionicons name="car-outline" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}>عدد الركاب الحالين : {passengers.length}</Text>
      </View>
      <View style={styles.row}>
          <Ionicons name="people-outline" size={18} color="#6200ea" />
          <Text style={styles.rideDetails}>الرحلة قادمة بمجموع : {maxPassengers}</Text>
        </View>
        </>
     
      ):('')}
    </Card.Content>
    <Card.Actions>
    <Button mode="contained" onPress={handleAcceptRide} disabled={rideStatus !== "pending"}>
          قبول الرحلة
        </Button>
        <Button mode="contained" onPress={handleRejectRide} disabled={rideStatus === "cancelled"}>
          إلغاء الرحلة
        </Button>
     
    </Card.Actions>
  </Card>
  </Link>
)};

export default CardRide;

// أنماط التصميم لمكون RideCard
const styles = StyleSheet.create({
  rideCard: {
    margin: 10,
    borderRadius: 12,
    padding: 15,
  },
  rideName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    // textAlign: I18nManager.isRTL ? "right" : "left",
  },
  paragraph: {
    fontSize: 14,
    fontFamily: "Noto-Kufi-Arabic-Regular",
    color: "#333",
    marginBottom: 5, 
  },
  rideDetails: {
    fontSize: 14,
    fontFamily: "Noto-Kufi-Arabic-Bold",
    color: "#555",
    marginLeft: 5,
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  dateButton: {
    paddingHorizontal: 0,
    marginLeft: 5, // إضافة مسافة بين الأيقونة والنص
  },
});
