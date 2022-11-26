import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import I18n from "../../data/i18n";

export default function WelcomePage2() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/welcome2.png")}
      >
        <View style={styles.bottom}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{I18n.t("welcome.stageTwo.1")}</Text>
            <Text style={styles.textSecondary}>
              {I18n.t("welcome.stageTwo.2")}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "44%",
  },
  bottom: {
    backgroundColor: "#ff6d6b",
    height: "65%",
    marginTop: "89%",
    borderRadius: 25,
  },
  textContainer: {
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 150,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },
  textSecondary: {
    color: "black",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },
});
