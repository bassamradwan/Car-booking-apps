// RideCard.tsx
import React from "react";
import { View, Text, StyleSheet, I18nManager } from "react-native";
import { RideProps } from "../types";
import { Card, Button, Avatar, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons"; // إضافة مكتبة الأيقونات

// مكون RideCard لعرض تفاصيل الرحلة
const RideCard: React.FC<RideProps> = ({
  name,
  time,
  date,
  car,
  pickupLocation,
  destination,
}) => (
  <Card style={styles.rideCard}>
    <Card.Title
      title={name}
      titleStyle={styles.rideName}
      subtitle={"Bassam"}
      left={(props) => <Avatar.Icon {...props} icon="steering" />}
      right={(props) => (
        <View {...props}>
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={18} color="#6200ea" />
            <Text style={styles.rideDetails}>{date} </Text>
          </View>
          <View style={styles.row}>
        <Ionicons name="time-outline" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}> {time}</Text>
      </View>
        </View>
      )}
    />

    <Card.Content>
    
      <View style={styles.row}>
        <Ionicons name="location-outline" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}>من الموقع  :
        <Paragraph style={styles.paragraph}>{pickupLocation}</Paragraph>
</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="location-sharp" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}>
          الى الموقع:
          <Paragraph style={styles.paragraph}>{destination}</Paragraph>
        </Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="car-outline" size={18} color="#6200ea" />
        <Text style={styles.rideDetails}>السيارة: {car}</Text>
      </View>
    </Card.Content>
  </Card>
);

export default RideCard;

// أنماط التصميم لمكون RideCard
const styles = StyleSheet.create({
  rideCard: {
    marginVertical: 10,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "#f9f9f9",
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
