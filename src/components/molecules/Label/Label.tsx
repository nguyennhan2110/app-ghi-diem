import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FONT_MEDIUM } from "@/shared/configs";
import colors from "@/shared/configs/colors";
import fonts from "@/shared/configs/fonts";

interface ILabelProps {
  textStyle?: object;
  text: string | React.ReactNode;
  numberOfLines?: number;
}

export function Label(props: ILabelProps) {
  return (
    <Text
      style={[props.textStyle, styles.container]}
      numberOfLines={props.numberOfLines}
    >
      {props.text}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: fonts.label,
    color: colors.gray,
  },
});
