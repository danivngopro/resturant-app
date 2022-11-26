import { useState, useRef } from "react";
import { View, FlatList, Animated, ViewToken, StyleSheet } from "react-native";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";

export default function Onboarding({navigation}: {navigation: any}) {
  const data = [1, 2, 3];
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={({ index }) => <OnboardingItem item={index} navigation={navigation}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item + ""}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.paginatorContainer}>
        <Paginator data={data} scrollX={scrollX} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  flatListContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paginatorContainer: {
    position: "absolute",
    top: "92%",
    left: "40%",
}
});
