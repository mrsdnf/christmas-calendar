import { memo } from 'react';
import { View, StyleSheet, Image } from 'react-native';

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

const WatercolorDecorations = memo(({ day = 1 }) => {
  const decorations = getDecorationsForDay(day);

  return (
    <View style={styles.container} pointerEvents="none">
      {/* Top Right */}
      <View style={styles.decorationTopRight}>
        <Image
          source={decorations.topRight}
          style={styles.decorationImage}
          resizeMode="contain"
        />
      </View>

      {/* Left Side */}
      <View style={styles.decorationLeftSide}>
        <Image
          source={decorations.leftSide}
          style={styles.decorationImageLarge}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Right */}
      <View style={styles.decorationBottomRight}>
        <Image
          source={decorations.bottomRight}
          style={styles.decorationImage}
          resizeMode="contain"
        />
      </View>

      {/* Top Left */}
      <View style={[styles.decorationTopLeft, { transform: [{ scaleX: -1 }] }]}>
        <Image
          source={decorations.topLeft}
          style={styles.decorationImageSmall}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Left */}
      <View style={styles.decorationBottomLeft}>
        <Image
          source={decorations.bottomLeft}
          style={styles.decorationImageSmall}
          resizeMode="contain"
        />
      </View>
    </View>
  );
});

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
