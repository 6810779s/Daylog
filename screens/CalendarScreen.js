import React, {useContext, useEffect, useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import LogContext from '../contexts/LogContext';

function SlideLeftAndRight() {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button title="Toggle" onPress={() => setEnabled(!enabled)} />
    </View>
  );
}

function FadeInAndOut() {
  const animation = useRef(new Animated.Value(1)).current;

  return (
    <View>
      <Animated.View style={[styles.rectangle, {opacity: animation}]} />
      <Button
        title="FadeIn"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }}
      />
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <SlideLeftAndRight />
    </View>
  );
}
const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 14,
  },
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});
export default CalendarScreen;
