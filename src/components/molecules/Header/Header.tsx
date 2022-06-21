import React from "react";
import { StyleSheet, Text, View } from "react-native";
import normalize from "react-native-normalize";

import colors from "@/shared/configs/colors";
import fonts from "@/shared/configs/fonts";

interface IHeaderProps {
  text: string;
}

export function Header(props: IHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.txtContent}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(48),
    marginTop: normalize(32),
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtContent: {
    fontSize: fonts.label,
    color: colors.redLight,
    lineHeight: normalize(29),
    fontWeight: 'bold'
  }
});
