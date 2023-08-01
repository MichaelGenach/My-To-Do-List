import {React} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, I18nManager  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


export default function TodoItem(props) {


    return (
        <TouchableOpacity onPress={() => { props.pressHandler(props.item.key) }}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333' />

                <Text  style={{ flex: 1, textAlign: I18nManager.isRTL ? 'right' : 'left' }}>
                    {props.item.text}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row-reverse'

    },
    text: { marginLeft: 10, marginRight: 10 },
    
})