import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IHistoryScreenProps {
}

export function HistoryScreen(props: IHistoryScreenProps) {
  return (
    <View style={styles.container}>
      <Text>history</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
