import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import I18n from "../../data/i18n";

export default function WelcomePage2({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/welcome3.png")}
      >
        <View style={styles.bottom}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{I18n.t("welcome.stageThree.1")}</Text>
            <Text style={styles.textSecondary}>
              {I18n.t("welcome.stageThree.2")}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HomePage')}
            >
              <Text style={[styles.text, {marginTop: 7}]}>{I18n.t("button")}</Text>
            </TouchableOpacity>
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
    color: "#fe696e",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#fe696e",
    width: 270,
    height: 55,
    borderRadius: 5,
  },
});
