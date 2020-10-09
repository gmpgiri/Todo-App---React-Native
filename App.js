import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "add the logo to the web page", key: "1" },
    { text: "finish the book", key: "2" },
    { text: "play a game or two", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "Man!",
        "Enter something in the box before pressing the button",
        [
          {
            text: "Got it",
            onPress: () => console.log("alert closed"),
          },
        ]
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                
                  <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {  flex: 1,
    padding: 40,
  
  },
  list: {flex: 1,
    marginTop: 20,
    
  },
});
