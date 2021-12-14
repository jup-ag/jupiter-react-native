import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

// Polyfills Web APIs
import "./global";
import "react-native-url-polyfill/auto";
import 'text-encoding'
import { Buffer } from 'buffer';
global.Buffer = Buffer;

// Examples
import CoreExample from "./src/CoreExample";
import HookExample from "./src/HookExample";

import { ENV } from "./src/constants";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />

      <Text style={{ fontWeight: '600', fontSize: 16 }}>Jupiter Core React Native example</Text>
      <Text>
        Environment: {ENV}
      </Text>

      <CoreExample />
      <HookExample />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
