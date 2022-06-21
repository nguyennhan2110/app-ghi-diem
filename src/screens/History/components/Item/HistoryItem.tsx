import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

import { Label } from "@/components/molecules";
import colors from "@/shared/configs/colors";
import fonts from "@/shared/configs/fonts";

interface IHistoryItemProps {
}

export function HistoryItem(props: IHistoryItemProps) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.wrapLeft}>
          <View style={styles.wrapPlayer}>
            <Label text="Hoang" textStyle={styles.player} />
            <Label text="Thanh" />
          </View>
          <View style={styles.wrapPlayer}>
            <Label text="Phuong" />
            <Label text="Duc" />
          </View>
        </View>
        <View style={styles.wrapRight}>
          <View style={styles.wrapStatus}>
            <Text style={styles.txtStatus}>Da ket thuc</Text>
          </View>
          <View>
            <Text style={styles.txtTime}>Ngay 21/02/2022</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: normalize(16),
    marginVertical: normalize(8),
    height: normalize(70),
    justifyContent: 'space-around',
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: normalize(4),
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  wrapLeft: {
    flexDirection: 'row',
  },
  wrapRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  wrapStatus: {
    backgroundColor: colors.redLight,
    borderRadius: 10,
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(2),
  },
  wrapPlayer: {
    justifyContent: 'center',
  },
  player: {
    marginRight: normalize(32)
  },
  txtStatus: {
    color: colors.white,
    fontSize: fonts.font14
  },
  txtTime: {
    color: colors.redLight,
    marginTop: normalize(8)
  },
});
