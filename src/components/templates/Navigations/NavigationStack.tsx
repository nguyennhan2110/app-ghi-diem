import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AddGameSceen, HistoryScreen, ListUserScreen } from "@/screens";
import { SCREEN_NAME } from "@/shared/constants";

const AddGameStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ListUserStack = createStackNavigator();

export function AddGameStackScreen() {
  return (
    <AddGameStack.Navigator
      initialRouteName={SCREEN_NAME.ADD_GAME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AddGameStack.Screen
        name={SCREEN_NAME.ADD_GAME_SCREEN}
        component={AddGameSceen}
      />
    </AddGameStack.Navigator>
  );
}

export function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator
      initialRouteName={SCREEN_NAME.HISTORY_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HistoryStack.Screen
        name={SCREEN_NAME.HISTORY_SCREEN}
        component={HistoryScreen}
      />
    </HistoryStack.Navigator>
  );
}

export function ListUserStackScreen() {
  return (
    <ListUserStack.Navigator
      initialRouteName={SCREEN_NAME.LIST_USER_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <ListUserStack.Screen
        name={SCREEN_NAME.LIST_USER_SCREEN}
        component={ListUserScreen}
      />
    </ListUserStack.Navigator>
  );
}