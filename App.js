import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './components/navbar';
import TodoForm from './components/todo-form';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <TodoForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F6FB',
    flex: 1
  },
});
