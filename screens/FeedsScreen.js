import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWritingButton from '../components/FloatingWritingButton';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const {logs} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWritingButton />
    </View>
  );
}
const styles = StyleSheet.create({block: {flex: 1}});
export default FeedsScreen;
