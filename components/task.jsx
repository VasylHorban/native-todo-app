import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Task = ({ value, id }) => (
  <View style={styles.task} id={id}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  task: {
    height: 50,
    marginTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Task;
