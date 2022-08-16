import React from "react";
import { Text } from "react-native";
import style from "./style"

export default function Aleatorio(props) {

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

      
    return (
        <Text style={style.txtG}>
            {"O valor aleatório é = " +getRandomInt(props.min, props.max)}
        </Text>
    )
}