// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, } from 'react-native';
import Primeiro from "./src/componentes/Primeiro"
import MinMax from "./src/componentes/MinMax"
import Aleatorio from "./src/componentes/Aleatorio"
import X, { Comp1, Comp2, } from './src/componentes/Multi'

export default () => {
  const min=50
  const max=60
  return (
    <SafeAreaView style={style.App}>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      <Aleatorio min={min} max={max}/>
      {/* <MinMax min={3}  max={20}/>
      <MinMax min={1}  max={94}/> */}
      {/* <Primeiro />
      <Comp1 />
      <Comp2 />
      <X /> */}
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

