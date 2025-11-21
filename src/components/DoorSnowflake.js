import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const DoorSnowflake = ({ day, isLocked, onPress, position, isToday = false }) => {
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  // Calculate responsive size based on screen dimensions
  const minDimension = Math.min(dimensions.width, dimensions.height);
  const doorSize = Math.max(60, Math.min(100, minDimension * 0.12));
  const svgSize = doorSize;
  const fontSize = doorSize * 0.3;
  const todayFontSize = doorSize * 0.35;
  const backgroundSize = doorSize * 0.5;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(isToday ? 1.2 : 1)).current;
  const floatY = useRef(new Animated.Value(0)).current;
  const floatX = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Random delay for natural movement
    const randomDelay = Math.random() * 3000;

    // Gentle rotation - very slow and smooth
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Pulsing animation - very slow and smooth
    Animated.loop(
      Animated.sequence([
        Animated.delay(randomDelay),
        Animated.timing(scaleAnim, {
          toValue: isToday ? 1.3 : 1.05,
          duration: 3500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: isToday ? 1.2 : 1,
          duration: 3500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Floating up and down - smooth sine wave motion
    Animated.loop(
      Animated.sequence([
        Animated.delay(randomDelay * 0.7),
        Animated.timing(floatY, {
          toValue: -10,
          duration: 8000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatY, {
          toValue: 0,
          duration: 8000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Floating left and right - smooth sine wave motion
    Animated.loop(
      Animated.sequence([
        Animated.delay(randomDelay * 1.3),
        Animated.timing(floatX, {
          toValue: 8,
          duration: 10000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatX, {
          toValue: -8,
          duration: 10000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Bouncing for today's date - gentler
    if (isToday) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(bounceAnim, {
            toValue: 1.1,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(bounceAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: doorSize,
          height: doorSize,
          marginLeft: -doorSize / 2,
          marginTop: -doorSize / 2,
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: [
            { translateX: floatX },
            { translateY: floatY },
            { scale: Animated.multiply(scaleAnim, bounceAnim) },
            { rotate: spin }
          ],
          opacity: (isLocked && !isToday) ? 0.5 : 1,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.touchable}
      >
        <Svg width={svgSize} height={svgSize} viewBox="0 0 100 100">
          {/* Yellow background circle if today */}
          {isToday && (
            <Circle cx="50" cy="50" r="45" fill="#FFD700" />
          )}
          {/* Snowflake design */}
          <Circle cx="50" cy="50" r="6" fill={(isLocked && !isToday) ? '#888' : '#E0F7FF'} />
          {/* Vertical line */}
          <Path d="M50 15 L50 85" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="4" />
          {/* Horizontal line */}
          <Path d="M15 50 L85 50" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="4" />
          {/* Diagonal 1 */}
          <Path d="M25 25 L75 75" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="4" />
          {/* Diagonal 2 */}
          <Path d="M75 25 L25 75" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="4" />
          {/* Branch details - top */}
          <Path d="M45 25 L50 15 L55 25" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="2" fill="none" />
          {/* Branch details - bottom */}
          <Path d="M45 75 L50 85 L55 75" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="2" fill="none" />
          {/* Branch details - left */}
          <Path d="M25 45 L15 50 L25 55" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="2" fill="none" />
          {/* Branch details - right */}
          <Path d="M75 45 L85 50 L75 55" stroke={(isLocked && !isToday) ? '#666' : '#B0E7FF'} strokeWidth="2" fill="none" />
        </Svg>
        <Text
          style={[
            styles.dayNumber,
            { fontSize: isToday ? todayFontSize : fontSize },
            isLocked && styles.lockedText,
            isToday && styles.todayText,
          ]}
        >
          {day}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#006400',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  lockedText: {
    color: '#444',
  },
  todayText: {
    fontWeight: '900',
    color: '#006400',
  },
});

export default DoorSnowflake;
