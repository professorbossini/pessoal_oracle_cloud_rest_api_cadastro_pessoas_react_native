import { StyleSheet, Text, View } from 'react-native';
import AddPessoaTela from './telas/AddPessoaTela';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='AddPessoa'
        screenOptions={{}}>
        <Stack.Screen 
          name="AddPessoa" 
          component={AddPessoaTela}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20
  },
});
