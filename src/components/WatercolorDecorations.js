import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define decoration sets for each day (cycling through 10 different patterns)
const getDecorationsForDay = (day) => {
  const decorationSets = [
    // Set 1: Bow, Candy Cane, Holly
    {
      topRight: require('../../assets/placeholder/bow.png'),
      leftSide: require('../../assets/placeholder/candycane.png'),
      bottomRight: require('../../assets/placeholder/holly.png'),
      topLeft: require('../../assets/placeholder/holly.png'),
      bottomLeft: require('../../assets/placeholder/bow.png'),
    },
    // Set 2: Christmas Tree, Bells, Gingerbread
    {
      topRight: require('../../assets/placeholder/bells.png'),
      leftSide: require('../../assets/placeholder/christmas-tree.png'),
      bottomRight: require('../../assets/placeholder/gingerbread.png'),
      topLeft: require('../../assets/placeholder/gingerbread.png'),
      bottomLeft: require('../../assets/placeholder/bells.png'),
    },
    // Set 3: Pine Branch, Pine Cone, Gift
    {
      topRight: require('../../assets/placeholder/pine-branch.png'),
      leftSide: require('../../assets/placeholder/pinecone.png'),
      bottomRight: require('../../assets/placeholder/gift.png'),
      topLeft: require('../../assets/placeholder/gift.png'),
      bottomLeft: require('../../assets/placeholder/pinecone.png'),
    },
    // Set 4: Mix - Holly, Bells, Candy Cane
    {
      topRight: require('../../assets/placeholder/holly.png'),
      leftSide: require('../../assets/placeholder/bells.png'),
      bottomRight: require('../../assets/placeholder/candycane.png'),
      topLeft: require('../../assets/placeholder/candycane.png'),
      bottomLeft: require('../../assets/placeholder/holly.png'),
    },
    // Set 5: Mix - Gingerbread, Gift, Bow
    {
      topRight: require('../../assets/placeholder/gingerbread.png'),
      leftSide: require('../../assets/placeholder/gift.png'),
      bottomRight: require('../../assets/placeholder/bow.png'),
      topLeft: require('../../assets/placeholder/bow.png'),
      bottomLeft: require('../../assets/placeholder/gingerbread.png'),
    },
    // Set 6: Mix - Pine Cone, Christmas Tree, Holly
    {
      topRight: require('../../assets/placeholder/pinecone.png'),
      leftSide: require('../../assets/placeholder/christmas-tree.png'),
      bottomRight: require('../../assets/placeholder/holly.png'),
      topLeft: require('../../assets/placeholder/holly.png'),
      bottomLeft: require('../../assets/placeholder/pinecone.png'),
    },
    // Set 7: Mix - Heart, Gingerbread, Pine Branch
    {
      topRight: require('../../assets/placeholder/heart.png'),
      leftSide: require('../../assets/placeholder/gingerbread.png'),
      bottomRight: require('../../assets/placeholder/pine-branch.png'),
      topLeft: require('../../assets/placeholder/pine-branch.png'),
      bottomLeft: require('../../assets/placeholder/heart.png'),
    },
    // Set 8: Mix - Bells, Bow, Heart
    {
      topRight: require('../../assets/placeholder/bells.png'),
      leftSide: require('../../assets/placeholder/bow.png'),
      bottomRight: require('../../assets/placeholder/heart.png'),
      topLeft: require('../../assets/placeholder/heart.png'),
      bottomLeft: require('../../assets/placeholder/bells.png'),
    },
    // Set 9: Mix - Christmas Tree, Holly, Pine Cone
    {
      topRight: require('../../assets/placeholder/christmas-tree.png'),
      leftSide: require('../../assets/placeholder/holly.png'),
      bottomRight: require('../../assets/placeholder/pinecone.png'),
      topLeft: require('../../assets/placeholder/pinecone.png'),
      bottomLeft: require('../../assets/placeholder/christmas-tree.png'),
    },
    // Set 10: Mix - Heart, Candy Cane, Gift
    {
      topRight: require('../../assets/placeholder/heart.png'),
      leftSide: require('../../assets/placeholder/candycane.png'),
      bottomRight: require('../../assets/placeholder/gift.png'),
      topLeft: require('../../assets/placeholder/gift.png'),
      bottomLeft: require('../../assets/placeholder/heart.png'),
    },
  ];

  // Cycle through the 10 sets based on the day
  return decorationSets[(day - 1) % 10];
};

const WatercolorDecorations = ({ day = 1 }) => {
  const float1 = useRef(new Animated.Value(0)).current;
  const float2 = useRef(new Animated.Value(0)).current;
  const float3 = useRef(new Animated.Value(0)).current;
  const rotate1 = useRef(new Animated.Value(0)).current;
  const rotate2 = useRef(new Animated.Value(0)).current;
  const rotate3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Floating animation 1
    Animated.loop(
      Animated.sequence([
        Animated.timing(float1, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(float1, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Floating animation 2
    Animated.loop(
      Animated.sequence([
        Animated.timing(float2, {
          toValue: 1,
          duration: 3500,
          useNativeDriver: true,
        }),
        Animated.timing(float2, {
          toValue: 0,
          duration: 3500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Floating animation 3
    Animated.loop(
      Animated.sequence([
        Animated.timing(float3, {
          toValue: 1,
          duration: 2800,
          useNativeDriver: true,
        }),
        Animated.timing(float3, {
          toValue: 0,
          duration: 2800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Gentle rotation 1
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotate1, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(rotate1, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Gentle rotation 2
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotate2, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(rotate2, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Gentle rotation 3
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotate3, {
          toValue: 1,
          duration: 4500,
          useNativeDriver: true,
        }),
        Animated.timing(rotate3, {
          toValue: 0,
          duration: 4500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const float1Y = float1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  const float2Y = float2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8],
  });

  const float3Y = float3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -12],
  });

  const rotate1Deg = rotate1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '5deg'],
  });

  const rotate2Deg = rotate2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-3deg'],
  });

  const rotate3Deg = rotate3.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '4deg'],
  });

  const decorations = getDecorationsForDay(day);

  return (
    <View style={styles.container} pointerEvents="none">
      {/* Top Right */}
      <Animated.View
        style={[
          styles.decorationTopRight,
          {
            transform: [
              { translateY: float1Y },
              { rotate: rotate1Deg },
            ],
          },
        ]}
      >
        <Image
          source={decorations.topRight}
          style={styles.decorationImage}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Left Side */}
      <Animated.View
        style={[
          styles.decorationLeftSide,
          {
            transform: [
              { translateY: float2Y },
              { rotate: rotate2Deg },
            ],
          },
        ]}
      >
        <Image
          source={decorations.leftSide}
          style={styles.decorationImageLarge}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Bottom Right */}
      <Animated.View
        style={[
          styles.decorationBottomRight,
          {
            transform: [
              { translateY: float3Y },
              { rotate: rotate3Deg },
            ],
          },
        ]}
      >
        <Image
          source={decorations.bottomRight}
          style={styles.decorationImage}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Top Left */}
      <Animated.View
        style={[
          styles.decorationTopLeft,
          {
            transform: [
              { translateY: float3Y },
              { rotate: rotate3Deg },
              { scaleX: -1 }, // Flip for variety
            ],
          },
        ]}
      >
        <Image
          source={decorations.topLeft}
          style={styles.decorationImageSmall}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Bottom Left */}
      <Animated.View
        style={[
          styles.decorationBottomLeft,
          {
            transform: [
              { translateY: float1Y },
              { rotate: rotate1Deg },
            ],
          },
        ]}
      >
        <Image
          source={decorations.bottomLeft}
          style={styles.decorationImageSmall}
          resizeMode="contain"
        />
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
    zIndex: 50,
  },
  decorationTopRight: {
    position: 'absolute',
    top: 100,
    right: 20,
    width: 80,
    height: 80,
  },
  decorationLeftSide: {
    position: 'absolute',
    top: '35%',
    left: 10,
    width: 90,
    height: 130,
  },
  decorationBottomRight: {
    position: 'absolute',
    bottom: 100,
    right: 15,
    width: 70,
    height: 70,
  },
  decorationTopLeft: {
    position: 'absolute',
    top: 120,
    left: 15,
    width: 60,
    height: 60,
  },
  decorationBottomLeft: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    width: 60,
    height: 60,
  },
  decorationImage: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  decorationImageLarge: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  decorationImageSmall: {
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
});

export default WatercolorDecorations;
