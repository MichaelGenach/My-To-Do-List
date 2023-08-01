import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, Touchable, View, Keyboard , TouchableWithoutFeedback} from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo';
import SandBox from './components/SandBox';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const add = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
   
    }
    else {
      Alert.alert('OOPS!', 'Todos must be over 3 charachters long', [{ text: 'Ok', onPress: () => console.log('Alert closed') }
      ]
      )
    }
  }

  return (
    // <SandBox/>
   <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo add={add} text={text} setText={setText} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (<TodoItem item={item} pressHandler={pressHandler} />)}

          />
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 40,
    flex:1

  },
  list: {
    marginTop: 20,
    flex:1

  }
});
