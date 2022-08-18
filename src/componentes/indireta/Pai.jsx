import React, { useState } from "react";
import Filho from "./Filho"
import { Text } from "react-native";
import style from "../style";

export default props => {
const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero);
    }

    return (
        <>
        <Text style={style.txtG}>{num}</Text>
        <Filho
            min={1}
            max={60}
            funcao={exibirValor} />
        </>
    )
}