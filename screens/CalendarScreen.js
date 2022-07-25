import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  const {text} = useContext(LogContext);
  return <View style={styles.block} />;
}
const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 14,
  },
});
export default CalendarScreen;
