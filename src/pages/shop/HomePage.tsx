import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import I18n from "../../data/i18n";

export default function WelcomePage1({
  navigation,
}: {
  navigation: Navigator;
}) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.meatHomeIconContainer}>
        <Image source={require("../../assets/iconHomePage.png")}></Image>
      </View>
      <View style={styles.homeButtonContainerFather}>
        <View style={styles.homeButtonContainer}></View>
      </View>
      <View style={styles.subHomeButtonContainer}>
        <Text style={styles.homeText}>{I18n.t("homeText")}</Text>
      </View> */}
      <Image source={require('../../assets/ehh.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  meatHomeIconContainer: {
    marginTop: 20,
    right: 20,
    position: "absolute",
  },
  homeButtonContainerFather: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  homeButtonContainer: {
    backgroundColor: "#ff6d6b",
    position: "absolute",
    width: 118,
    height: 20,
    top: 24,
    left: 40,
  },
  subHomeButtonContainer: {
    backgroundColor: "#ff6d6b",
    position: "absolute",
    marginTop: 24,
    left: 20,
    width: 138,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
  },
  homeText: {
    marginRight: 39,
    color: "white",
    fontSize: 16,
    fontStyle: "bold",
  },
});
