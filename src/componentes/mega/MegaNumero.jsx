import React from "react";
import { View, Text, StyleSheet } from "react-native";
import style from "../style";


export default ({ num }) => {
    return (

        <View style={styleNum.Container}>
            <Text style={[style.txtG, styleNum.Num]}>
                {num}
            </Text>
        </View>

    )
}

const styleNum = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: "#000",
        margin: 5,
        borderRadius: 25,
    },
    Num: {
        color: "#fff",
    }
})

