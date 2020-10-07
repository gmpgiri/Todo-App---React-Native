import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
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
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
