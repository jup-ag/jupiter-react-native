import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Polyfills Web APIs
import "./global";
import "react-native-url-polyfill/auto";
import 'text-encoding'

import main from "./src/index";
import { RouteInfo } from "@jup-ag/core";
import { ENV } from "./src/constants";

export default function App() {
  const [routesResult, setRoutesResult] = useState<{ routesInfos: RouteInfo[]; cached: boolean; }>({ routesInfos: [], cached: false })

  useEffect(() => {
    main().then(result => {
      if (result) {
        setRoutesResult(result)
      }
    })
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ fontWeight: '600', fontSize: 16 }}>Jupiter Core React Native example</Text>

      <Text style={{ marginTop: 24 }}>
        Environment: {ENV}
      </Text>
      <Text>
        Possible number of routes: {routesResult.routesInfos.length}
      </Text>
      <Text>
        Is cached?: {String(routesResult.cached)}
      </Text>
      <Text>
        Best quote: {routesResult.routesInfos[0] ? routesResult.routesInfos[0].outAmount : ''}
      </Text>
      <StatusBar style="auto" />
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
