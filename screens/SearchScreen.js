import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import SearchContext from '../contexts/SearchContext';

function SearchScreen(props) {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  return (
    <View style={styles.block}>
      <Text>{keyword}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {},
});
export default SearchScreen;
