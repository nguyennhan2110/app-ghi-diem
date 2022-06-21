
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ic_add,
  ic_add_active,
  ic_history,
  ic_history_active,
  ic_list_user,
  ic_list_user_active,
  ic_plus,
} from "@/assets";
import colors from "@/shared/configs/colors";
import fonts from "@/shared/configs/fonts";
import { SCREEN_NAME } from "@/shared/constants";

import {
  AddGameStackScreen,
  HistoryStackScreen,
  ListUserStackScreen,
} from "../Navigations";

interface ICustomTab {
  focused: boolean;
  title: string;
  icActive: any;
  icInActive: any;
}

const Tab = createBottomTabNavigator();

const CustomTab = (tab: ICustomTab) => {
  return (
    <View style={styles.wrapCustomTab}>
      <FastImage
        source={tab.focused
          ? tab.icActive
          : tab.icInActive}
        resizeMode={'contain'} style={styles.iconTab}
      />
      <Text style={{
        color: tab.focused
          ? colors.pink
          : colors.gray,
        ...styles.txtTab
      }}
      >
        {tab.title}
      </Text>
    </View>
  );
};

const CustomTabButton = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.wrapCustomTabButton,
        ...styles.shadow
      }}
    >
      <View style={styles.wrapChill}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export function MainBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.white,
          position: 'absolute',
          bottom: normalize(24),
          left: normalize(20),
          right: normalize(20),
          borderRadius: 10,
          height: normalize(80),
          ...styles.shadow
        },
      }}
    >
      <Tab.Screen
        name={SCREEN_NAME.HISTORY_TAB}
        component={HistoryStackScreen}
        options={{
          tabBarBadge: 2,
          tabBarIcon: ({ focused }) => CustomTab({
            focused: focused,
            title: 'Lịch sử',
            icActive: ic_history_active,
            icInActive: ic_history
          }),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.ADD_GAME_TAB}
        component={AddGameStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FastImage
              source={ic_plus}
              resizeMode={"contain"}
              style={styles.icPlus}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.LIST_USER_TAB}
        component={ListUserStackScreen}
        options={{
          tabBarIcon: ({ focused }) => CustomTab({
            focused: focused,
            title: 'Người chơi',
            icActive: ic_list_user_active,
            icInActive: ic_list_user
          }),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: normalize(10),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  wrapCustomTab: {
    alignItems: 'center',
    justifyContent: 'center',
    top: normalize(10)
  },
  iconTab: {
    aspectRatio: 1,
    height: normalize(24)
  },
  txtTab: {
    fontSize: fonts.font14,
  },
  wrapCustomTabButton: {
    top: normalize(-20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapChill: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(35),
    backgroundColor: colors.pink
  },
  icPlus: {
    width: normalize(30),
    height: normalize(30),
    tintColor: colors.white
  }
});