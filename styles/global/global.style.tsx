import { StyleSheet } from 'react-native';


export const colorsAPP = {
    // Ultra Violet
  primaryColor: '#674FA3', 
  //Royal Purple
  secondaryColor: '#875FA5',
  //African violet
  africanViolet: '#a76ea7',
  // White
  white: '#ffffff',
  // Dark Gray
  darkGray: '#333333',
  // Light Gray
  lightGray: '#cccccc',

};
const globalStyles = StyleSheet.create({
  container: {
        flex: 1,
        paddingTop: 50,
        direction: "rtl",
  },
  BottomNavigationBar:{

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  createTripButtonContainer: {
    padding: 20,
    alignItems: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: 'RGB(229, 226, 218)', // لون الزر
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  rideItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rideStatus: {
    color: '#007bff', // لون حالة الرحلة
  },
});

export default globalStyles;
