import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { commonStyles } from "@/styles/common/common.style";
import { useAuth } from "@/context/AuthContext";
import { userData } from "@/data/staticData";

export default function LoginScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState("");
  const {user,login } = useAuth();

  const handleLogin = () => {
    // طباعة القيم المدخلة للتحقق منها
    console.log('Email:', userInfo.email);
    console.log('Password:', userInfo.password);
  
    // التحقق من القيم المدخلة
    if (userInfo.email.trim() === "" || userInfo.password.trim() === "") {
      setError("Email and Password must not be empty.");
      return;
    }
  
    setButtonSpinner(true);
    setError('');
    login(userInfo.email.trim(), userInfo.password.trim());
    router.push("/(tabs)")
    setButtonSpinner(false);
  };
  

  // استخدام useEffect للتحقق من حالة user وتوجيه المستخدم بعد التحقق
  // useEffect(() => {
  //   if (user) {
  //     if (user.type === 'drive') {
  //       router.push("/(routes)/drive-home"); // توجيه السائق إلى الصفحة الرئيسية للسائق
  //     } else {
  //       router.push("/(tabs)"); // توجيه المستخدم إلى الصفحة الرئيسية
  //     }
  //   }
  // }, [user]); // يتنقل بناءً على تحديث حالة user


  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 20 }}
    >
      <ScrollView>
        <Image
          style={styles.signInImage}
          source={require("@/assets/sign-in/sign_in.png")}
        />
        <Text style={[styles.welcomeText]}>مرحبا بك</Text>
        <Text style={styles.learningText}>تسجيل الدخول الى حسابك فى وصلنى</Text>
        <View style={styles.inputContainer}>
          <View>
            {/* <TextInput
              style={[styles.input, { paddingLeft: 40 }]}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="support@becodemy.com"
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, email: value })
              }
            /> */}
                          <TextInput
  style={styles.input}
  placeholder="البريد الإلكتروني"
  value={userInfo.email}
  onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
/>
            <Fontisto
              style={{ position: "absolute", left: 26, top: 17.8 }}
              name="email"
              size={20}
              color={"#A1A1A1"}
            />
            {required && (
              <View style={commonStyles.errorContainer}>
                <Entypo name="cross" size={18} color={"red"} />
              </View>
            )}
            <View style={{ marginTop: 15 }}>
              {/* <TextInput
                style={commonStyles.input}
                keyboardType="default"
                // secureTextEntry={!isPasswordVisible}
                defaultValue=""
                placeholder="********"
                // onChangeText={handlePasswordValidation}
              /> */}

<TextInput
  style={styles.input}
  placeholder="كلمة المرور"
  value={userInfo.password}
  secureTextEntry={!isPasswordVisible}
  onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
/>

              <TouchableOpacity
                style={styles.visibleIcon}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={23}
                    color={"#747474"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={23} color={"#747474"} />
                )}
              </TouchableOpacity>
            </View>
            {/* {error.password && (
              <View style={[commonStyles.errorContainer, { top: 145 }]}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                  {error.password}
                </Text>
              </View>
            )} */}
            <TouchableOpacity
            // onPress={() => router.push("/(routes)/forgot-password")}
            >
              <Text
                style={[
                  styles.forgotSection,
                  { fontFamily: "Nunito_600SemiBold" },
                ]}
              >
                هل نسيت الباسورد؟
              </Text>
            </TouchableOpacity>
            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TouchableOpacity
              style={{
                padding: 16,
                borderRadius: 8,
                marginHorizontal: 16,
                backgroundColor: "#2467EC",
                marginTop: 15,
              }}
              //  onPress={() => router.push("/(routes)/home")}
              onPress={handleLogin}
            >
              {buttonSpinner ? (
                <ActivityIndicator size="small" color={"white"} />
              ) : (
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "Noto-Kufi-Arabic-Regular",
                  }}
                >
                  تسجيل الدخول
                </Text>
              )}
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="google" size={30} color={"red"} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="facebook" size={30} color={"#2467EC"} />
              </TouchableOpacity>
            </View>

            <View style={styles.signupRedirect}>
              <TouchableOpacity
                onPress={() => router.push("/(routes)/sign-up")}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Raleway_600SemiBold",
                    color: "#2467EC",
                    marginLeft: 5,
                  }}
                >
                  انشاء حساب
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 18, fontFamily: "Raleway_600SemiBold" }}>
                لا تمتلك حساب؟
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signInImage: {
    width: "60%",
    height: 250,
    alignSelf: "center",
    marginTop: 50,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Noto-Kufi-Arabic-Bold",
  },
  learningText: {
    textAlign: "center",
    color: "#575757",
    fontSize: 15,
    marginTop: 5,
    fontFamily: "Noto-Kufi-Arabic-Regular",
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 30,
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: "white",
    color: "#A1A1A1",
  },
  visibleIcon: {
    position: "absolute",
    left: 30,
    top: 15,
  },
  icon2: {
    position: "absolute",
    left: 23,
    top: 17.8,
    marginTop: -2,
  },
  forgotSection: {
    marginHorizontal: 16,
    textAlign: "right",
    fontSize: 16,
    marginTop: 10,
  },
  signupRedirect: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  error: { color: 'red', textAlign: 'center', marginVertical: 10 },

});
