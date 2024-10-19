import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function ProfileScreen() {
  const { user,logout } = useAuth();
const userId= user?.id;

  const handleClick = () => {
{/* <Link
              pathname="/user-details/[id]"
              params={{ id: userId }}
></Link> */}
  };
  const logoutHandler = async () => {
    logout();
    router.push("/(routes)/login");
  };

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 80, direction: "rtl" }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            direction: "rtl",
          }}
        >
          <View style={{ position: "relative" }}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",
              }}
              style={{ width: 90, height: 90, borderRadius: 100 }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 5,
                right: 0,
                width: 30,
                height: 30,
                backgroundColor: "#f5f5f5",
                borderRadius: 100,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              // onPress={pickImage}
            >
              <Ionicons name="camera-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            paddingTop: 10,
            fontWeight: "600",
          }}
        >
          {/* Bassam */}
          {user?.name}
        </Text>
        <View style={{ marginHorizontal: 16, marginTop: 30 }}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 16,
              fontFamily: "Noto-Kufi-Arabic-Bold",
              textAlign: "left",
            }}
          >
            تفاصيل حسابك
          </Text>
          {/* <Link
            href={{
              pathname:'/user-details/[id]',
              params: {id:userId},
            }}
          > */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
            onPress={() => router.push(`/(routes)/user-details`)}
            // onPress={() => router.push(`/profile/user-details`)}

            >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 30,
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderColor: "#dde2ec",
                  padding: 15,
                  borderRadius: 100,
                  width: 55,
                  height: 55,
                }}
              >
                <FontAwesome
                  style={{ alignSelf: "center" }}
                  name="user-o"
                  size={20}
                  color={"black"}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Noto-Kufi-Arabic-Bold",
                    textAlign: "left",
                  }}
                >
                  البيانات الخاصه بك
                </Text>
                <Text
                  style={{
                    color: "#575757",
                    fontFamily: "Noto-Kufi-Arabic-Regular",
                    textAlign: "left",
                  }}
                >
                  المعلومات الخاصه بالحساب
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <AntDesign name="left" size={26} color={"#CBD5E0"} />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* </Link> */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
            onPress={() => router.push("/(routes)/ride")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 30,
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderColor: "#dde2ec",
                  padding: 15,
                  borderRadius: 100,
                  width: 55,
                  height: 55,
                }}
              >
                <MaterialCommunityIcons
                  style={{ alignSelf: "center" }}
                  name="book-account-outline"
                  size={20}
                  color={"black"}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Noto-Kufi-Arabic-Bold",
                    textAlign: "left",
                  }}
                >
                  الرحلات
                </Text>
                <Text
                  style={{
                    color: "#575757",
                    fontFamily: "Noto-Kufi-Arabic-Regular",
                    textAlign: "left",
                  }}
                >
                  كل الرحلات الخاصه بك
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <AntDesign name="left" size={26} color={"#CBD5E0"} />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
            onPress={() => logoutHandler()}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 30,
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderColor: "#dde2ec",
                  padding: 15,
                  borderRadius: 100,
                  width: 55,
                  height: 55,
                }}
              >
                <Ionicons
                  style={{ alignSelf: "center" }}
                  name="log-out-outline"
                  size={20}
                  color={"black"}
                />
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Noto-Kufi-Arabic-Bold",
                    textAlign: "left",
                  }}
                >
                  تسجيل خروج
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <AntDesign name="left" size={26} color={"#CBD5E0"} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
