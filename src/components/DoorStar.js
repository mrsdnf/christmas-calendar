import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DoorStar = ({ day, isLocked, onPress, position, isToday = false }) => {
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
  const scaleAnim = useRef(new Animated.Value(isToday ? 1.2 : 1)).current;
  const twinkleAnim = useRef(new Animated.Value(1)).current;
  const floatY = useRef(new Animated.Value(0)).current;
  const floatX = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Random delay for natural movement
    const randomDelay = Math.random() * 3000;

    // Gentle pulsing animation - very slow and smooth
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

    // Twinkling effect - slower and smoother
    Animated.loop(
      Animated.sequence([
        Animated.delay(randomDelay / 2),
        Animated.timing(twinkleAnim, {
          toValue: 0.7,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(twinkleAnim, {
          toValue: 1,
          duration: 3000,
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
            { scale: Animated.multiply(scaleAnim, bounceAnim) }
          ],
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={isLocked}
        activeOpacity={0.7}
        style={styles.touchable}
      >
        <Animated.View style={{ opacity: (isLocked && !isToday) ? 0.5 : twinkleAnim }}>
          <Svg width={svgSize} height={svgSize} viewBox="0 0 100 100">
            {/* Star background - yellow if today */}
            {isToday && (
              <Path
                d="M50 10 L61 40 L92 40 L68 58 L78 88 L50 70 L22 88 L32 58 L8 40 L39 40 Z"
                fill="#FFD700"
                stroke="none"
              />
            )}
            {/* Star shape */}
            <Path
              d="M50 10 L61 40 L92 40 L68 58 L78 88 L50 70 L22 88 L32 58 L8 40 L39 40 Z"
              fill={isToday ? 'none' : (isLocked ? '#888' : '#FFD700')}
              stroke={isToday ? '#FFD700' : (isLocked ? '#666' : '#FFA500')}
              strokeWidth={isToday ? "3" : "2"}
            />
          </Svg>
        </Animated.View>
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
    color: '#8B0000',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  lockedText: {
    color: '#444',
  },
  todayText: {
    fontWeight: '900',
    color: '#8B0000',
  },
});

export default DoorStar;
