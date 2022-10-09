import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const ProgressBar = ({ total, current }) => {
  const [progressBarWidth, setProgressBarWidth] = useState(width);
  const progressTranslateX = useSharedValue(-width);

  const progressStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: progressTranslateX.value }],
  }));

  useEffect(() => {
    const progress = -progressBarWidth + (progressBarWidth * current) / total;
    progressTranslateX.value = withTiming(progress, { duration: 1000 });
  }, [total, current]);

  return (
    <View
      style={styles.container}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => setProgressBarWidth(width)}
    >
      <Animated.View style={[styles.progress, progressStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 4,
    overflow: "hidden",
    height: 8,
    backgroundColor: "#385682",
  },
  progress: {
    width: "100%",
    position: "absolute",
    height: 8,
    borderRadius: 4,
    backgroundColor: "#5297FF",
  },
});
export default ProgressBar;
