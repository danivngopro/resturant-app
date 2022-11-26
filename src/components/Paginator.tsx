import { View, useWindowDimensions, Animated, StyleSheet } from "react-native";

export default function OnboardingItem({
  data,
  scrollX,
}: {
  data: number[];
  scrollX: any;
}) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [7,14,7],
            extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3,1,0.3],
            extrapolate: 'clamp',
        });

        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 7,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 8,
  },
});
