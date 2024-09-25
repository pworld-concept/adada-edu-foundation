import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Links } from "@/constants/Sites";
import Constants from "expo-constants";
import { FlatList, Linking, StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <ThemedView>
      <FlatList
        data={Links}
        contentContainerStyle={styles.flatList}
        renderItem={({ item }) => (
          <ExternalLink href={item.url} style={styles.items}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <View style={{ marginRight: 20 }}>{item.icon}</View>
              <ThemedText>{item.title}</ThemedText>
            </View>
          </ExternalLink>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  flatList: {
    gap: 15,
    padding: 10,
    paddingHorizontal: 20,
  },
  items: {
    flex: 1,
    gap: 10,
    padding: 15,
    borderColor: "#eef",
    borderWidth: 1,
    backgroundColor: "#dfd",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
