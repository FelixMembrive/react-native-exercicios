import React from "react";
import { Text, Button } from "react-native";
import style from "../style";

export default props => {
   
    return (
        <>
            <Text style={style.txtG} > {props.a} </Text>
            <Text style={style.txtG} > {props.b} </Text>
        </>
    )
}