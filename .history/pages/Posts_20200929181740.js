import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Feed from '../components/Feed';
import Nav from '../components/Nav';

const Posts = ({route, navigation}) => {
    const { posts, index } = route?.params;
    return (
        <View>
            <Nav navigation={navigation} title="Posts"/>
            <Feed posts={posts} index={index}/>
        </View>
    );
};

export default Posts;