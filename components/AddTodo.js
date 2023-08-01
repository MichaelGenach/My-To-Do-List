
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo(props) {
 
   


const changeHandler = (val) => {
props.setText(val)
}    
    
    
    
    return (

<View>
    <TextInput  
    style={Styles.input}
     placeholder='New todo...'
    onChangeText={changeHandler}
    />
    <Button onPress={() => {props.add(props.text)}} title='Add todo' color={'orange'}/>
</View>

  )
}

const Styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
    })