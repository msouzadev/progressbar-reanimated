import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "./src/components/progressBar/ProgressBar";
export default function App() {
  return (
    <View style={styles.container}>
      <ProgressBar current={2} total={10} />
      <View style={{ marginTop: 20 }}>
        <ProgressBar current={2} total={10} />
      </View>
      <View style={{ marginTop: 20 }}>
        <ProgressBar current={8} total={10} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091D3A",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});
