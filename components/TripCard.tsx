// src/components/TripCard.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Button, Paragraph, Title } from "react-native-paper";
import { TripProps } from "../types";

const TripCard: React.FC<TripProps> = ({ title, description, date, price, imageUrl }) => (
  <Card style={styles.card}>
    <Card.Cover source={{ uri: imageUrl }} />
    <Card.Content>
      <Title style={styles.title}>{title}</Title>
      <Paragraph style={styles.paragraph}>{description}</Paragraph>
      <Paragraph style={styles.paragraph}>{date}</Paragraph>
    </Card.Content>
    {/* <Card.Actions>
      <Button icon="calendar"  color="#6200ea">
        التاريخ: {date}
      </Button>
      <Button
       icon="cash"
       >
        السعر: {price}
      </Button>
    </Card.Actions> */}
  </Card>
);

export default TripCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    fontSize: 14,
    color: "#757575",
  },

});
