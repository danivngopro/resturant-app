import { View, useWindowDimensions, StyleSheet } from "react-native";
import WelcomePage1 from "../pages/welcome/WelcomePage1";
import WelcomePage2 from "../pages/welcome/WelcomePage2";
import WelcomePage3 from "../pages/welcome/WelcomePage3";

export default function OnboardingItem({ item, navigation }: { item: number, navigation: any}) {
  const { width } = useWindowDimensions();

  const getPage = () => {
    switch (item) {
      case 0:
        return <WelcomePage1 />;
      case 1:
        return <WelcomePage2 />;
      default:
        return <WelcomePage3 navigation={navigation}/>;
    }
  };

  return <View style={[styles.container, { width }]}>{getPage()}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1000,
  },
});
