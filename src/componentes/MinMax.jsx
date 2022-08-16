import React from "react";
import { Text } from "react-native";
import style from "./style"

export default function MinMax(props) {
    return (
        <Text style={style.txtG}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}