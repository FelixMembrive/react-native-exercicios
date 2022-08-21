import React from "react";
import { Text } from "react-native";
import style from "../style"
import produtos from "./produtos";

export default props => {
    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}> {p.id}) {p.nome} tem preço R$ {p.preco}</Text>
            )
        })
    }

    return (
        <>
            <Text style={style.txtG}>Lista de Produtos</Text>
            {obterLista()}
        </>
    )
} 