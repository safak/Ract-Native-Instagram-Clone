import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Stories from "../components/Stories";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Stories />
          <Feed />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default Homepage;
