import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Stories = () => {
  return (
    <View style={styles.stories}>
      <View style={styles.top}>
        <Text>Stories</Text>
        <Text>
          <FontAwesome name="play" size={24} color="black" />
          Watch All
        </Text>
      </View>
      <View>
        <Text>asd</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
});

export default Stories;
