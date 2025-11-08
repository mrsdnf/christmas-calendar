import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Snowflake = ({ delay }) => {
  const translateY = useRef(new Animated.Value(-20)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const randomX = Math.random() * width;
    const duration = 8000 + Math.random() * 4000;

    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(opacity, {
            toValue: 0.8,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: height + 20,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.delay(delay),
          Animated.loop(
            Animated.sequence([
              Animated.timing(translateX, {
                toValue: 30,
                duration: 2000,
                useNativeDriver: true,
              }),
              Animated.timing(translateX, {
                toValue: -30,
                duration: 2000,
                useNativeDriver: true,
              }),
            ])
          ),
        ]),
      ])
    ).start();

    translateX.setValue(randomX);
  }, []);

  return (
    <Animated.View
      style={[
        styles.snowflake,
        {
          transform: [{ translateY }, { translateX }],
          opacity,
        },
      ]}
    />
  );
};

const FallingSnow = ({ count = 50 }) => {
  const snowflakes = Array.from({ length: count }, (_, i) => i);

  return (
    <View style={styles.container} pointerEvents="none">
      {snowflakes.map((_, index) => (
        <Snowflake key={index} delay={Math.random() * 5000} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  snowflake: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});

export default FallingSnow;
