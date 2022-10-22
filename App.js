import { StyleSheet, Text, View } from 'react-native';
import AddPessoaTela from './telas/AddPessoaTela';
import ListaPessoaTela from './telas/ListaPessoaTela';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='ListaPessoa'
        screenOptions={{
            headerStyle: {backgroundColor: 'blue'},

        }}>
        <Stack.Screen 
          name="AddPessoa" 
          component={AddPessoaTela}
        />
        <Stack.Screen 
          name='ListaPessoa'
          component={ListaPessoaTela}/>
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
