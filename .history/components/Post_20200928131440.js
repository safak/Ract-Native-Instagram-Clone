import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const Post = ({ item }) => {
  return (
    <View style={styles.post}>
      <View style={styles.user}>
        <View style={styles.userInfo}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: item.user.profilePicture,
            }}
          />
          <Text>{item.user.username}</Text>
        </View>
        <MaterialIcons name="more-vert" size={24} color="black" />
      </View>
      <View style={styles.content}></View>
      <View style={styles.icons}></View>
      <View style={styles.info}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  user:{
    flexDirection:"row",
    alignItems:"center"
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});

export default Post;
