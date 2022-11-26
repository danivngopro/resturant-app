import { ImageBackground, StyleSheet, Text, View } from "react-native";
import I18n from "../../data/i18n";

export default function WelcomePage1() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/welcome1.png")}
      >
        <View style={styles.bottom}>
          <View style={styles.logoContainer}>
            <ImageBackground
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{I18n.t("welcome.stageOne.1")}</Text>
            <Text style={styles.textSecondary}>
              {I18n.t("welcome.stageOne.2")}
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
    backgroundColor: "#251e21",
    height: "65%",
    marginTop: "89%",
    borderRadius: 25,
  },
  logoContainer: {
    justifyContent: "center",
    paddingTop: 20,
    paddingLeft: 40,
  },
  logo: {
    height: 120,
    width: 300,
  },
  textContainer: {
    paddingRight: 40,
    paddingLeft: 40,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },
  textSecondary: {
    color: "#fe696e",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },
});
