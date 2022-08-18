// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, } from 'react-native';
import Primeiro from "./src/componentes/Primeiro"
import MinMax from "./src/componentes/MinMax"
import Aleatorio from "./src/componentes/Aleatorio"
import X, { Comp1, Comp2, } from './src/componentes/Multi'
import Botao from "./src/componentes/Botao"
import Contador from './src/componentes/Contador';
// import Pai from './src/componentes/direta/Pai';
import Pai from './src/componentes/indireta/Pai';
import ContadorV2 from './src/componentes/contador/ContadorV2';
import Diferenciar from './src/componentes/Diferenciar';
import ParImpar from './src/componentes/ParImpar';

export default () => {
  const min = 50
  const max = 60
  return (
    <SafeAreaView style={style.App}>
      <Diferenciar />
      <ContadorV2 />
      <Button title="teste"></Button>
      <ParImpar num={3}/>
      {/*
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
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
});


