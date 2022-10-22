import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'

const ListaPessoaTela = ({navigation}) => {
  return (
    <View>
      <Text>ListaPessoaTela</Text>
      <Button 
        title="Adicionar Pessoa"
        onPress={() => {navigation.navigate('AddPessoa')}}/>
    </View>
  )
}

export default ListaPessoaTela

const styles = StyleSheet.create({})