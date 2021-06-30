import React from 'react';
import { TextInput, StyleSheet, View, Button, Text } from 'react-native';

import TasksList from './tasks-list';

const TodoForm = () => {
  const [value, setValue] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handleChangeText = (newValue) => {
    if (newValue !== ' ') setValue(newValue);
  };

  const onPressHandler = () => {
    if (value !== '' && value !== null) {
      setTasks([...tasks, { value: value, id: generateId() }]);
    }
    setValue('');
  };

  const generateId = () => {
    return Math.random() * 100;
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>You can wrighte a new task here</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChangeText}
        />
        <Button title="add task" onPress={onPressHandler} />
      </View>
      <TasksList tasks={tasks} />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  wrapper: {
    height: 150,
    margin: 25,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: '#476ECC',
  },
  text: {
    color: '#476ECC',
    fontWeight: 'bold',
  },
});
