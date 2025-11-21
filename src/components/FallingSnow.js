import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Snowflake = ({ delay, startX }) => {
  const translateY = useRef(new Animated.Value(-20)).current;
  const drift = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const duration = 8000 + Math.random() * 4000;

    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          // Fade in
          Animated.timing(opacity, {
            toValue: 0.8,
            duration: 1000,
            useNativeDriver: true,
          }),
          // Fall down
          Animated.timing(translateY, {
            toValue: height + 20,
            duration: duration,
            useNativeDriver: true,
          }),
          // Drift left and right
          Animated.sequence([
            Animated.timing(drift, {
              toValue: 30,
              duration: duration / 2,
              useNativeDriver: true,
            }),
            Animated.timing(drift, {
              toValue: -30,
              duration: duration / 2,
              useNativeDriver: true,
            }),
          ]),
        ]),
        // Fade out and reset
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: -20,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(drift, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.snowflake,
        {
          left: startX,
          transform: [{ translateY }, { translateX: drift }],
          opacity,
        },
      ]}
    />
  );
};

const FallingSnow = ({ count = 50 }) => {
  const snowflakes = Array.from({ length: count }, (_, i) => ({
    id: i,
    startX: Math.random() * width,
    delay: Math.random() * 5000,
  }));

  return (
    <View style={styles.container} pointerEvents="none">
      {snowflakes.map((snowflake) => (
        <Snowflake
          key={snowflake.id}
          delay={snowflake.delay}
          startX={snowflake.startX}
        />
      ))}

      {/* Snow accumulation at the bottom */}
      <View style={styles.snowAccumulation}>
        {/* Multiple layers for organic, irregular snow buildup */}
        <View style={styles.snowLayer1} />
        <View style={styles.snowLayer2} />
        <View style={styles.snowLayer3} />
        <View style={styles.snowLayer4} />
      </View>
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
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  snowAccumulation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  snowLayer1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 65,
  },
  snowLayer2: {
    position: 'absolute',
    bottom: 0,
    left: -5,
    right: 10,
    height: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 55,
  },
  snowLayer3: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: -5,
    height: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 50,
  },
  snowLayer4: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 42,
  },
});

export default FallingSnow;
