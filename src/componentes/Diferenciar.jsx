import React from "react";
import { Text, Platform } from "react-native";
import style from "./style";

export default _ => {
    if (Platform.OS === "android") {
        return <Text style={style.txtG}>Android</Text>
    } else if (Platform.OS === "ios") {
        return <Text style={style.txtG}>iOS</Text>
    } else {
        return <Text style={style.txtG}>{Platform.OS}</Text>
    }
}