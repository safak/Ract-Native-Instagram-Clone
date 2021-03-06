import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Story = ({ id, content, user }) => {
  return (
    <View style={styles.story}>
      <Text>{user.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
      margin:10,
      border:"1px solid, black"
  },
});

export default Story;
