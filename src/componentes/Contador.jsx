import React, { useState } from "react";
import { Text, Button } from "react-native";
import style from "./style"

export default function Contador(props) {
    const [numero, setNumero] = useState(props.inicial)
    const [passo, setPasso] = useState(props.passo)

    const incPasso = () => setPasso(passo + 1)
    const decPasso = () => setPasso(passo - 1)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <>
            <Text style={style.txtG} > {passo} </Text>
            <Button title={"Passo +1"} onPress={incPasso}></Button>
            <Button title={"Passo -1"} onPress={decPasso}></Button>

            <Text style={style.txtG} > {numero} </Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>

        </>
    )
}