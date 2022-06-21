import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Header } from "@/components/molecules";

import { HistoryItem } from "./components/Item";

interface IHistoryScreenProps {
}

export function HistoryScreen(props: IHistoryScreenProps) {
  return (
    <View style={styles.container}>
      <Header text="Lịch sử chơi" />
      <ScrollView>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
