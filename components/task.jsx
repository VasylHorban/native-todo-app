import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Task = ({ value, id, onDelete }) => {
  const removeHandler = () => {
    onDelete(id);
  };

  return (
    <View style={styles.task} id={id}>
      <Text style={styles.text}>{value}</Text>
      <View style={styles.deleteWrapper}>
        <Button title="x" color="#ff0000" onPress={removeHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    height: 50,
    marginTop: 15,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  text: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  deleteWrapper: {
    width: 40,
    height: 40,
    marginTop: 7,
  },
});

export default Task;
