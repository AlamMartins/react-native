// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it teste</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


// ---------------------------------------------------------------------

// import React from 'react'
// import {View, Text} from 'react-native'

// export default function HomeScreen(){
//     return(
//         <View>
//           <Text>AM Solutions</Text>
//         </View>
//     )
// }


// ---------------------------------------------------------------------


// PROJETO APP FOOD YOUTUBE         




// import React, {Component} from 'react';
// import {View, Text, ScrollView} from 'react-native';
// import {Header} from "../../components/header/index.tsx"
// import Constants from 'expo-constants'

// const startusBarHeight = Constants.statusBarHeight;

// class App extends Component{
  //   render(){
    //     return(
      //       // <View
      //       //   style={{
        //       //     flex:1,
        //       //     justifyContent:"center",
        //       //     alignItems:"center"
        //       //   }}
//       // >
//       //    <Text className="text-red-600 text-2xl">AM Solutions 1</Text>
//       //    <Text>AM Solutions</Text>
//       //    <Text>AM Solutions</Text>
//       //    <Text>AM teste</Text>
//       // </View>

//       <ScrollView 
//           style={{flex:1}} 
//           className="bg-slate-200" 
//           showsVerticalScrollIndicator={false}
//       >
//         <View className="w-full px-4" style={{marginTop:startusBarHeight + 8}}>
//           <Header/>
//         </View>
//       </ScrollView>
//     )
//   }
// }

// export default App;


// -------------------------------- CAPTURANDO O NOME DO FIELD -------------------------------------



// import React, {Component} from 'react';
// import {Header} from "../../components/header/index.tsx"
// import Constants from 'expo-constants'
// import {View, Text, ScrollView, TextInput, Button} from 'react-native';

// const startusBarHeight = Constants.statusBarHeight;

// class App extends Component{
  
//   constructor(props){
//     super(props)
//     this.state = {
//       nome: '',
//       input: ''
//     }
 
//     this.entrar = this.entrar.bind(this);

//   }
 
//     entrar(){
//       if(this.state.input === ''){
//         alert('Por favor, preencha o seu nome.');
//         this.setState({nome: ''})
//         return;
//       }
//       this.setState({nome: 'Bem vindo '+this.state.input})
//     } 
 
  
//   render(){
//     return(
   

//         <View className="w-full h-full gap-6 items-center bg-gray-400 px-4 " style={{marginTop:startusBarHeight + 8}}>


//           <TextInput
//           className="w-full h-12 text-center  border-blue-500 mt-2 text-xl bg-slate-300"
//           placeholder="Digite as informações"
//           keyboardType="text"
//           underlineColorAndroid="transparent"
//           onChangeText={(texto) => this.setState({input: texto})}
//           />

//           <Button title="Entrar"  onPress={this.entrar}></Button>

//           <Text className="text-blue-600 text-2xl"> {this.state.nome}</Text>


//         </View>


     
//     )
//   }
// }

// export default App;


// -------------------------------- APLICATIVO DO BISCOITO DA SORTE FRASES -------------------------------------



// import React, {Component} from 'react';
// import {Header} from "../../components/header/index.tsx"
// import Constants from 'expo-constants'
// import {View, Text, ScrollView, TextInput, Button, Image, TouchableOpacity} from 'react-native';

// const startusBarHeight = Constants.statusBarHeight;

// class App extends Component{
//   constructor(props){
    
//     super(props);
//       this.state = {
//         textoFrase: 'Siga os bons e aprenda com eles.',
//         img: require('../../assets/images/biscoito.png')
//       }

//       this.frases = [
//         'Siga os bons e aprenda com eles.',
//         'O bom-senso vale mais doq ue muito conhecimento.',
//         'O riso é a menor distância entre duas pessoas.',
//         'Deixe de lado as preocupações e seja feliz.',
//         'Realize o óbvio, pense no improvável e conquiste o impossível.',
//         'Acredite em milagres mas não dependa deles.',
//         'A maior barreira para o sucesso é o medo do fracasso.',
//       ]

//       this.quebraBiscoito = this.quebraBiscoito.bind(this);
//     }

//     quebraBiscoito(){
//       let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
//       this.setState({
//         textoFrase: ' "'+ this.frases[numeroAleatorio] +'"',
//         img: require('../../assets/images/biscoitoAberto.png')
//       })
//     }
  
  
  
//   render(){
//     return(
   

//         <View className="w-full h-full gap-6 justify-center items-center bg-gray-400 px-4 " style={{marginTop:startusBarHeight + 8}}>

//           <Image
//             className="w-[250px] h-[250px]"
//             source={this.state.img}
//           />

//           <Text className="font-xl italic">{this.state.textoFrase}</Text>

//           <TouchableOpacity className="w-[230] h-[50] bg-blue-900 items-center justify-center rounded-full "
//           onPress={this.quebraBiscoito}
//           >
//             <View>
//               <Text className="text-white text-xl">Quebrar Biscoito</Text>
//             </View>
//           </TouchableOpacity>

//         </View>


     
//     )
//   }
// }

// export default App;



// ------------------------------------------- APLICATIVO DE CRONOMETRO -----------------------------------------



import React, {Component} from 'react';
import {Header} from "../../components/header/index.tsx"
import Constants from 'expo-constants'
import {View, Text, ScrollView, TextInput, Button, Image, TouchableOpacity} from 'react-native';

const startusBarHeight = Constants.statusBarHeight;

class App extends Component{
  constructor(props){
    
    super(props);
      this.state = {
        numero: 0,
        botao: 'VAI',
        ultimo: null,
        // cronometroIniciado: false
      }

      this.times = null;

      this.vai = this.vai.bind(this);
      this.limpar = this.limpar.bind(this);
      // this.iniciaCronometro = this.iniciaCronometro.bind(this);
      // this.finalizaCronometro = this.finalizaCronometro.bind(this);
  }    

    vai(){
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;
        this.setState({botao: 'VAI'})
      }else{
              this.timer = setInterval(() => {
                this.setState({numero: this.state.numero + 0.1})
              }, 100);

              this.setState({botao: 'PARAR'})
      }
    }

    
    limpar(){
      if(this.timer != null){
        //Aqui vai parar o timer
        clearInterval(this.timer);
        this.timer = null;
      }
      this.setState({
        ultimo: this.state.numero,
        numero: 0,
        botao: 'VAI'
      })
    }
    

  render(){
    return(
   
      <View className="flex-1 w-full h-screen gap-6  justify-center items-center bg-blue-400" style={{marginTop:startusBarHeight + 8}}>
          
          <Image
            source={require('../../assets/images/cronometro.png')}
          />

          <Text className="font-bold -mt-[175px] text-8xl">{(this.state.numero.toFixed(1))}</Text>

          <View className="flex-row  gap-6 w-full items-center justify-center mt-[150px]">
            <TouchableOpacity className="bg-gray-600 p-4 rounded-full w-[170px]" onPress={this.vai}>
              <Text className="text-white text-center">{this.state.botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-600 p-4 rounded-full w-[170px]" onPress={this.limpar}>
            <Text className="text-white text-center">LIMPAR</Text>
            </TouchableOpacity>

          </View>

            <View >
              <Text className="text-white text-xl font-serif italic">
                {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
              </Text>
            </View>
        

      </View>
 
    )
  }
}

export default App;
// ------------------------------------------- APLICATIVO DE CRONOMETRO -----------------------------------------
