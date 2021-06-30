import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Navbar = () => (
    <View style={styles.wrapper}>
      <Text style={styles.text}>To do app</Text>
    </View>
)


export default Navbar;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#476ECC',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24
 }
});