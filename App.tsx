import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import "./global";
import { Jupiter } from "@jup-ag/core";
import "react-native-url-polyfill/auto";
import { connection } from "./connection";

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      try {
        const slot = await connection.getSlot();
        console.warn({ slot });
        const jupiter = await Jupiter.load({
          connection: connection,
          cluster: "mainnet-beta",
        });
        console.warn(Object.keys(jupiter));
      } catch (e: any) {
        console.error(e);
      }
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
