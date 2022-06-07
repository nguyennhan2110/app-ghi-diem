import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IListUserScreenProps {
}

export function ListUserScreen(props: IListUserScreenProps) {
  return (
    <View style={styles.container}>
      <Text>user</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
