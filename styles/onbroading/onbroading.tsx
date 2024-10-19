import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colorsAPP } from "../global/global.style";

export const styles = StyleSheet.create({
  firstContainer: {
    alignItems: "center",
  },
  PLogo: {
    fontSize: 20,
    marginBottom: 10,
  },
  titleLogo: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#875FA5",
  },
  logo:{
    width: wp("50%"),
    height: hp("50%"),
    resizeMode: "contain",
  },
  buttonWrapper: {
    marginTop: 10,
    width: wp("80%"),
    padding: 10,
    backgroundColor: "#674FA3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  }
});
