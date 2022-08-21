import { View, StyleSheet, SafeAreaView, Button, } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import Primeiro from "./src/componentes/Primeiro"
// import MinMax from "./src/componentes/MinMax"
// import Aleatorio from "./src/componentes/Aleatorio"
// import X, { Comp1, Comp2, } from './src/componentes/Multi'
// import Botao from "./src/componentes/Botao"
// import Contador from './src/componentes/Contador';
// import Pai from './src/componentes/direta/Pai';
// import Pai from './src/componentes/indireta/Pai';
// import ContadorV2 from './src/componentes/contador/ContadorV2';
// import Diferenciar from './src/componentes/Diferenciar';
// import ParImpar from './src/componentes/ParImpar';
// import Familia from './src/componentes/relacao/Familia';
// import Membro from './src/componentes/relacao/Membro';
// import UsuarioLogado from './src/componentes/UsuarioLogado';
// import ListaProdutos from './src/componentes/produtos/ListaProdutos';
// import ListaProdutos2 from './src/componentes/produtos/ListaProdutosV2';
// import DigiteSeuNome from './src/componentes/DigiteSeuNome';
// import FlexboxV4 from './src/componentes/layout/FlexboxV4';
import Mega from './src/componentes/mega/Mega';


export default () => {
  return (
    <View style={style.App}>
      <Mega qtdeNumeros={12}/>
      {/*
      <FlexboxV4/>
      <FlexboxV1></FlexboxV1>
      <DigiteSeuNome/>
      <ListaProdutos2/>
      <ListaProdutos/>
      <UsuarioLogado usuario={{nome: "gui", email: "gui@gui.com"}} />
      <UsuarioLogado usuario={{nome: "gui"}} />
      <UsuarioLogado usuario={{}} />
      <Familia>
        <Membro nome="João" sobrenome="da Silva" />
        <Membro nome="João 2" sobrenome="da Silva" />
      </Familia>
      <Familia>
        <Membro nome="João" sobrenome="da Silva" />
        <Membro nome="João 2" sobrenome="da Silva" />
      </Familia>
      <Diferenciar />
      <ContadorV2 />
      <Button title="teste"></Button>
      <ParImpar num={3}/>
      <Pai />
      <Pai />
      <Contador inicial={100} passo={13}/>
      <Contador inicial={1} passo={1}/>
      <Botao />
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <MinMax min={3}  max={20}/>
      <MinMax min={1}  max={94}/>
      <Primeiro />
      <Comp1 />
      <Comp2 />
      <X />
       */}
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
});


