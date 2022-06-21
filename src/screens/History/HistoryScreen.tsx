import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "@/components/molecules";

interface IHistoryScreenProps {
}

export function HistoryScreen(props: IHistoryScreenProps) {
  return (
    <View style={styles.container}>
     <Header text="Lịch sử chơi"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
