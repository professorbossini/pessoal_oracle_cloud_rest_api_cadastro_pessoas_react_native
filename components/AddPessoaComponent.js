import { StyleSheet } from 'react-native'
import React from 'react'
import { 
  Button,
  Card,
  FAB,
  Icon,
  Input
} from "@rneui/themed";

const AddPessoaComponent = () => {
  return (
    <>
    <Card    
      containerStyle={styles.card}>
      <Card.Title>Cadastro de pessoa</Card.Title>
      <Card.Divider></Card.Divider>
      <Input 
        placeholder='Nome'
        leftIcon={{type: 'font-awesome', name:'user'}}
        style={styles.textInput}
      />
      <Input 
        placeholder='Idade'
        leftIcon={{type: 'font-awesome', name:'info'}}
        style={styles.textInput}
      />
      <Input 
        placeholder='Hobby'
        leftIcon={{type: 'font-awesome', name:'heart'}}
        style={styles.textInput}
      />
      <Button 
        title="OK"
        buttonStyle={styles.button}
      />
    </Card>
    </>
  )
}

export default AddPessoaComponent

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8
  },
  card: {
    padding: 8,
    borderRadius: 8
  },
  fab: {
  },
  textInput: {
    textAlign: 'center',
    margin: 0,
    padding: 0
  }
})
      {/* <FAB 
        icon={{name: 'add', color: 'white'}}
        placement='right'
        style={styles.fab}

      /> */}