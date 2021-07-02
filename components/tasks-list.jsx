import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Task from './task';

const TasksList = ({ tasks, onDelete }) => {
  const renderNoTask = () => <Text>There are no tasks :(</Text>;
  const renderTasks = () =>
    tasks.map((task) => <Task onDelete={onDelete} key={task.id} id={task.id} value={task.value} />);
  return <View style={styles.wrapper}>{tasks.length === 0 ? renderNoTask() : renderTasks()}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 25,
  },
  
});

export default TasksList;
