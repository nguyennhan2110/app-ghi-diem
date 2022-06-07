import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IAddGameSceenProps {
}

export function AddGameSceen(props: IAddGameSceenProps) {
  return (
    <View style={styles.container}>
      <Text>game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
