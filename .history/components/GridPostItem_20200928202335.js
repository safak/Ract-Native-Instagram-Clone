import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";

const win = Dimensions.get("window");

const GridPostItem = ({ item }) => {
  return (
    <View>
      <Image
          style={styles.item}
          source={{
            uri:item.photo
          }}
          resizeMode={"cover"}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    item:{
        width:win.width/3,
        height:80
    }
})

export default GridPostItem;
