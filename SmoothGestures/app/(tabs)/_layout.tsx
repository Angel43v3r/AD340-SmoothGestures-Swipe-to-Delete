import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function TabLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#F0C1CC',
          tabBarInactiveTintColor: '#D1AAB8',
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="email"
          options={{
            title: 'Email',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="envelope" color={color} />,
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
