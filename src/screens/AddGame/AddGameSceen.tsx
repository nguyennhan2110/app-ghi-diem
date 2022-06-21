import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header, Label } from "@/components/molecules";
import { FONT_BOLD, FONT_THIN } from "@/shared/configs";
import fonts from "@/shared/configs/fonts";

interface IAddGameSceenProps {
}

export function AddGameSceen(props: IAddGameSceenProps) {
  return (
    <View style={styles.container}>
      <Header text="Thêm ván mới"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  txt: {
    fontSize: fonts.font18,
    ...FONT_THIN
  }
});
