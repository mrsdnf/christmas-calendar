import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const ChristmasDecorations = ({ theme = 'classic' }) => {
  const swayAnim = useRef(new Animated.Value(0)).current;
  const floatAnim1 = useRef(new Animated.Value(0)).current;
  const floatAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Gentle swaying animation for garland
    Animated.loop(
      Animated.sequence([
        Animated.timing(swayAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(swayAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Floating animation for corner decorations
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim1, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim1, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim2, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim2, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const swayRotation = swayAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-2deg', '2deg'],
  });

  const float1Y = floatAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8],
  });

  const float2Y = floatAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -6],
  });

  const getThemeColors = () => {
    const themes = {
      classic: { primary: '#C85F5F', secondary: '#6B9B7F', accent: '#D4B896' },
      gold: { primary: '#D4A857', secondary: '#A88F6B', accent: '#C85F5F' },
      green: { primary: '#6B9B7F', secondary: '#8AB494', accent: '#D4A857' },
      red: { primary: '#D46B6B', secondary: '#C85F5F', accent: '#D4A857' },
      silver: { primary: '#A8B0B0', secondary: '#6B9B7F', accent: '#D4A857' },
      winter: { primary: '#7BA8C8', secondary: '#9BC4D8', accent: '#D4A857' },
    };
    return themes[theme] || themes.classic;
  };

  const colors = getThemeColors();

  return (
    <View style={styles.container} pointerEvents="none">
      {/* Top left - Holly sprig with berries */}
      <Animated.View style={[styles.topLeft, { transform: [{ translateY: float1Y }] }]}>
        <View style={[styles.hollyLeaf, styles.leaf1, { backgroundColor: colors.secondary, opacity: 0.6 }]} />
        <View style={[styles.hollyLeaf, styles.leaf2, { backgroundColor: colors.secondary, opacity: 0.55 }]} />
        <View style={[styles.hollyLeaf, styles.leaf3, { backgroundColor: colors.secondary, opacity: 0.5 }]} />
        <View style={[styles.berry, styles.berryCluster1, { backgroundColor: colors.primary, opacity: 0.7 }]} />
        <View style={[styles.berry, styles.berryCluster2, { backgroundColor: colors.primary, opacity: 0.65 }]} />
        <View style={[styles.berry, styles.berryCluster3, { backgroundColor: colors.primary, opacity: 0.6 }]} />
      </Animated.View>

      {/* Top right - Pine branch */}
      <Animated.View style={[styles.topRight, { transform: [{ translateY: float2Y }, { rotate: swayRotation }] }]}>
        <View style={[styles.pineBranch, { backgroundColor: colors.secondary, opacity: 0.5 }]} />
        <View style={[styles.pineNeedle, styles.needle1, { backgroundColor: colors.secondary, opacity: 0.45 }]} />
        <View style={[styles.pineNeedle, styles.needle2, { backgroundColor: colors.secondary, opacity: 0.4 }]} />
      </Animated.View>

      {/* Bottom left - Berries on stem */}
      <Animated.View style={[styles.bottomLeft, { transform: [{ translateY: float1Y }] }]}>
        <View style={[styles.stem, { backgroundColor: colors.accent, opacity: 0.4 }]} />
        <View style={[styles.berry, styles.berry1, { backgroundColor: colors.primary, opacity: 0.6 }]} />
        <View style={[styles.berry, styles.berry2, { backgroundColor: colors.primary, opacity: 0.55 }]} />
        <View style={[styles.berry, styles.berry3, { backgroundColor: colors.primary, opacity: 0.5 }]} />
      </Animated.View>

      {/* Bottom right - Small holly */}
      <Animated.View style={[styles.bottomRight, { transform: [{ translateY: float2Y }] }]}>
        <View style={[styles.hollyLeaf, styles.leafSmall1, { backgroundColor: colors.secondary, opacity: 0.5 }]} />
        <View style={[styles.hollyLeaf, styles.leafSmall2, { backgroundColor: colors.secondary, opacity: 0.45 }]} />
        <View style={[styles.berry, styles.berryBottom, { backgroundColor: colors.primary, opacity: 0.6 }]} />
      </Animated.View>
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
    zIndex: 100,
  },

  // Top Garland
  // Corner positions for decorative elements
  topLeft: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 60,
    height: 60,
  },
  topRight: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 70,
    height: 50,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    width: 50,
    height: 70,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 45,
    height: 45,
  },

  // Holly leaves - organic watercolor shapes
  hollyLeaf: {
    position: 'absolute',
    width: 22,
    height: 32,
    borderRadius: 12,
  },
  leaf1: {
    top: 0,
    left: 5,
    transform: [{ rotate: '-15deg' }],
  },
  leaf2: {
    top: 15,
    left: 20,
    transform: [{ rotate: '25deg' }],
  },
  leaf3: {
    top: 8,
    left: 35,
    transform: [{ rotate: '10deg' }],
  },
  leafSmall1: {
    width: 18,
    height: 26,
    top: 0,
    left: 5,
    transform: [{ rotate: '30deg' }],
  },
  leafSmall2: {
    width: 18,
    height: 26,
    top: 10,
    left: 18,
    transform: [{ rotate: '-20deg' }],
  },

  // Berries - small round watercolor dots
  berry: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  berryCluster1: {
    top: 20,
    left: 18,
  },
  berryCluster2: {
    top: 25,
    left: 25,
  },
  berryCluster3: {
    top: 22,
    left: 32,
  },
  berry1: {
    top: 10,
    left: 18,
  },
  berry2: {
    top: 20,
    left: 22,
  },
  berry3: {
    top: 30,
    left: 20,
  },
  berryBottom: {
    top: 15,
    left: 18,
  },

  // Pine branch elements
  pineBranch: {
    position: 'absolute',
    width: 50,
    height: 10,
    borderRadius: 5,
    top: 15,
    left: 5,
  },
  pineNeedle: {
    position: 'absolute',
    width: 25,
    height: 6,
    borderRadius: 3,
  },
  needle1: {
    top: 10,
    left: 10,
    transform: [{ rotate: '-30deg' }],
  },
  needle2: {
    top: 20,
    left: 15,
    transform: [{ rotate: '20deg' }],
  },

  // Stem for berries
  stem: {
    position: 'absolute',
    width: 3,
    height: 50,
    borderRadius: 1.5,
    top: 5,
    left: 20,
  },

  // Bells
  bell: {
    position: 'absolute',
    width: 12,
    height: 14,
    borderWidth: 2,
    borderRadius: 6,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  bell1: {
    top: 25,
    left: '35%',
  },
  bell2: {
    top: 27,
    left: '65%',
  },

  // Ribbon
  ribbon: {
    position: 'absolute',
    top: 15,
    left: '50%',
    marginLeft: -15,
    width: 30,
    height: 20,
    borderRadius: 5,
    opacity: 0.3,
  },

  // Top Left - Mistletoe
  cornerTopLeft: {
    position: 'absolute',
    top: 70,
    left: 15,
    width: 40,
    height: 40,
  },
  mistletoeLeaf: {
    width: 20,
    height: 30,
    borderRadius: 10,
  },
  leafRotated: {
    position: 'absolute',
    top: 5,
    left: 15,
    transform: [{ rotate: '45deg' }],
  },
  mistletoeBerry: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    top: 12,
    left: 10,
  },
  berryOffset: {
    left: 18,
    top: 15,
  },

  // Top Right - Holly
  cornerTopRight: {
    position: 'absolute',
    top: 70,
    right: 15,
    width: 40,
    height: 40,
  },
  hollyLeaf: {
    width: 18,
    height: 28,
    borderRadius: 8,
  },
  hollyLeafFlipped: {
    position: 'absolute',
    top: 8,
    left: 18,
    transform: [{ rotate: '-30deg' }],
  },
  hollyBerry: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 3.5,
    top: 15,
    left: 12,
  },
  hollyBerryOffset: {
    left: 20,
    top: 17,
  },
  hollyBerryOffset2: {
    left: 16,
    top: 22,
  },

  // Bottom Corners - Pine branches
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    width: 50,
    height: 50,
  },
  pineBranch: {
    width: 40,
    height: 8,
    borderRadius: 4,
    opacity: 0.25,
  },
  pineBranchFlipped: {
    transform: [{ scaleX: -1 }],
  },
  pineCone: {
    position: 'absolute',
    width: 12,
    height: 16,
    borderRadius: 6,
    top: 5,
    left: 30,
    opacity: 0.3,
  },

  cornerBottomRight: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    width: 50,
    height: 50,
  },
  pineConeRight: {
    left: 5,
  },
});

export default ChristmasDecorations;
