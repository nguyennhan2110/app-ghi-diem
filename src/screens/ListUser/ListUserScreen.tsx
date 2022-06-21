import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "@/components/molecules";

interface IListUserScreenProps {
}

export function ListUserScreen(props: IListUserScreenProps) {
  return (
    <View style={styles.container}>
      <Header text="Người chơi gần đây"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
