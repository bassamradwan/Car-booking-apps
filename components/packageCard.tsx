import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { Packages } from "@/types";
import { heightPercentageToDP } from "react-native-responsive-screen";

const PackageCard: React.FC<Packages> = ({
  title,
  description,
  price,
  imageUrl,
  car,
}) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Cover style={styles.image} source={{ uri: imageUrl }} />
      <Card.Title
        title={car}
        titleStyle={{ fontSize: 18 }}
        // subtitle={car}
        // subtitleStyle={{fontSize:18}}
        left={(props) => <Avatar.Icon {...props} icon="steering" />}
        right={(props) => <Text style={styles.button}>{"باقة شهريه"}</Text>}
        rightStyle={{ padding: 10 }}
      />
      <Card.Content>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.description}> {description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button icon={"cash"}>جنيه {price}</Button>
        <Button>اشتراك</Button>
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    elevation: 3, // لإضافة ظل للكارد
    //   alignItems: 'center',
  },
  image: {
    // width: wp("70%"),
    //   height: heightPercentageToDP("25%"),
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    // fontFamily: "Noto-Kufi-Arabic-Bold",
    fontWeight: "bold",
    // marginVertical: 5,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    fontFamily: "Noto-Kufi-Arabic-Regular",
    color:"#674FA3"
  },
  button: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default PackageCard;
