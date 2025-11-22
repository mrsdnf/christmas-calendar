import { useEffect, useRef, useMemo, memo } from 'react';
import { View, StyleSheet, Animated, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Detect if we're on a less powerful device
const IS_MOBILE = Platform.OS === 'ios' || Platform.OS === 'android';

const Snowflake = memo(({ delay, startX, driftAmount, duration, size, opacityValue }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Use simpler easing for better mobile performance
    const config = {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
      isInteraction: false,
    };

    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(animatedValue, config),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
          isInteraction: false,
        }),
      ])
    ).start();

    // Cleanup on unmount
    return () => {
      animatedValue.stopAnimation();
    };
  }, []);

  // Calculate transforms using interpolation - more efficient
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, height + 20],
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, driftAmount, -driftAmount * 0.5],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.1, 0.9, 1],
    outputRange: [0, opacityValue, opacityValue, 0],
  });

  return (
    <Animated.View
      style={[
        styles.snowflake,
        {
          left: startX,
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{ translateY }, { translateX }],
          opacity,
        },
      ]}
      shouldRasterizeIOS={true}
      renderToHardwareTextureAndroid={true}
    />
  );
});

const FallingSnow = ({ count = IS_MOBILE ? 15 : 25 }) => {
  // Memoize snowflake configuration to prevent recalculation
  const snowflakes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        startX: Math.random() * width,
        delay: Math.random() * 3000,
        driftAmount: 15 + Math.random() * 25,
        duration: 6000 + Math.random() * 4000,
        size: 6 + Math.random() * 6,
        opacityValue: 0.4 + Math.random() * 0.4,
      })),
    [count]
  );

  return (
    <View style={styles.container} pointerEvents="none">
      {snowflakes.map((snowflake) => (
        <Snowflake
          key={snowflake.id}
          delay={snowflake.delay}
          startX={snowflake.startX}
          driftAmount={snowflake.driftAmount}
          duration={snowflake.duration}
          size={snowflake.size}
          opacityValue={snowflake.opacityValue}
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
