import React from 'react'
import {StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                My Todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      
        height: 75,
        paddingTop: 40,
        backgroundColor: 'orange',
        
    },
    title: {
        textAlign: 'center',
        color: 'white',

    }
})
