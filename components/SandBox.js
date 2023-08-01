import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function SandBox() {
    return (
<View style={styles.container}>
    <Text style={styles.boxOne}>1</Text>
    <Text style={styles.boxTwo}>2</Text>
    <Text style={styles.boxThree}>3</Text>
    <Text style={styles.boxFour}>4</Text>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop: 40,
        backgroundColor:'#ddd',

    },
    boxOne: {
        
    }
})