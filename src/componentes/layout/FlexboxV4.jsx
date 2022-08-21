import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 50
    return (
        <View style={style.FlexV4}>
            <View style={style.View0} />
            <View style={style.View1} />
            <View style={style.View2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: "#000",
    },
    View0: {
        backgroundColor: "#36c9a7",
        height: 300,
    },
    View1: {
        backgroundColor: "#ff801a",
        flexGrow: 9,
    },
    View2: {
        backgroundColor: "#dd22c1",
        flexGrow: 1,
    }
})