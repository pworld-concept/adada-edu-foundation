import { INJECTEDJAVASCRIPT, Sites } from "@/constants/Sites";
import React, { useEffect, useRef, useState } from "react";
import { BackHandler, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

type Props = {
  uri: string;
};
export default function CustomWebview({ uri }: Props) {
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  return (
    <WebView
      ref={webViewRef}
      injectedJavaScript={INJECTEDJAVASCRIPT}
      source={{ uri }}
      scrollEnabled={false}
      style={styles.container}
      cacheMode="LOAD_NO_CACHE"
      onNavigationStateChange={(navState) => {
        setCanGoBack(navState.canGoBack);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -80,
  },
});
