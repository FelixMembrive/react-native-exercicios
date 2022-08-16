import React from "react";
import { Text } from "react-native";
import style from "./style";

export default function Comp() {
    return (
        <Text style={style.txtG}>Comp Oficial</Text>
    )
}

export function Comp1() {
    return (
        <Text style={style.txtG}>Comp #01</Text>
    )
}

export function Comp2() {
    return (
        <Text style={style.txtG}>Comp #02</Text>
    )
}