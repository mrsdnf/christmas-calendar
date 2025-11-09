import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import FallingSnow from '../components/FallingSnow';
import { DAY_CONTENT } from '../config/calendarData';

const DayScreen = ({ route, navigation }) => {
  const { day } = route.params;
  const [sounds, setSounds] = useState({});
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });
  const titleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  useEffect(() => {
    // Animate title entrance
    Animated.spring(titleAnim, {
      toValue: 1,
      tension: 20,
      friction: 7,
      useNativeDriver: true,
    }).start();

    // Cleanup sounds on unmount
    return () => {
      Object.values(sounds).forEach(({ sound }) => {
        if (sound) {
          sound.unloadAsync();
        }
      });
    };
  }, []);

  const playSound = async (soundSource, imageId) => {
    try {
      // If no sound source provided, do nothing
      if (!soundSource) {
        return;
      }

      // Check if this sound is already loaded and playing
      if (sounds[imageId]) {
        const { sound } = sounds[imageId];
        const status = await sound.getStatusAsync();

        // If it's playing, stop it and return
        if (status.isLoaded && status.isPlaying) {
          await sound.stopAsync();
          return;
        }
      }

      // Stop all other currently playing sounds
      await Promise.all(
        Object.entries(sounds).map(async ([id, { sound }]) => {
          if (id !== String(imageId) && sound) {
            const status = await sound.getStatusAsync();
            if (status.isLoaded && status.isPlaying) {
              await sound.stopAsync();
            }
          }
        })
      );

      // If sound already exists, replay it
      if (sounds[imageId]) {
        const { sound } = sounds[imageId];
        await sound.replayAsync();
        return;
      }

      // Load and play new sound
      const { sound } = await Audio.Sound.createAsync(soundSource);
      setSounds(prev => ({ ...prev, [imageId]: { sound } }));
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const dayContent = DAY_CONTENT[day] || { images: [] };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Christmas Watercolor Background */}
      <View style={styles.watercolorBackground}>
        <View style={[styles.watercolorBlob, styles.blob1]} />
        <View style={[styles.watercolorBlob, styles.blob2]} />
        <View style={[styles.watercolorBlob, styles.blob3]} />
        <View style={[styles.watercolorBlob, styles.blob4]} />
        <View style={[styles.watercolorBlob, styles.blob5]} />
      </View>

      <FallingSnow count={40} />

      {/* Back Button - Top Left */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Christmas Header */}
        <Animated.View style={[styles.header, { opacity: titleAnim, transform: [{ scale: titleAnim }] }]}>
          <Text style={styles.dayTitle}>{day}. December</Text>
        </Animated.View>

        {/* Images Grid */}
        <View style={styles.imagesContainer}>
          {dayContent.images && dayContent.images.length > 0 ? (
            dayContent.images.map((image, index) => (
              <ImageCard
                key={image.id}
                image={image}
                index={index}
                onPress={() => playSound(image.sound, image.id)}
                screenWidth={dimensions.width}
              />
            ))
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const ImageCard = ({ image, index, onPress, screenWidth }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const [isPressed, setIsPressed] = useState(false);

  // Calculate responsive dimensions
  const isTablet = screenWidth > 600;
  const numColumns = isTablet ? 3 : 2;
  const gap = 20;
  const availableWidth = screenWidth - 40; // padding
  const cardWidth = (availableWidth - (gap * (numColumns - 1))) / numColumns;
  const imageHeight = cardWidth * 0.8;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 50,
      friction: 7,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.imageCard,
        {
          width: cardWidth,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
        style={styles.imageButton}
      >
        <Image
          source={image.source}
          style={[styles.image, { height: imageHeight }]}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F0',
  },
  watercolorBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  watercolorBlob: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.15,
  },
  blob1: {
    width: 400,
    height: 400,
    backgroundColor: '#8B0000',
    top: -100,
    left: -100,
  },
  blob2: {
    width: 350,
    height: 350,
    backgroundColor: '#165834',
    top: 100,
    right: -80,
  },
  blob3: {
    width: 300,
    height: 300,
    backgroundColor: '#B8860B',
    bottom: 150,
    left: 50,
  },
  blob4: {
    width: 280,
    height: 280,
    backgroundColor: '#8B0000',
    bottom: -50,
    right: 80,
  },
  blob5: {
    width: 250,
    height: 250,
    backgroundColor: '#165834',
    top: '40%',
    left: '30%',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  dayTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#8B0000',
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFF',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  imagesContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  imageCard: {
    marginBottom: 20,
  },
  imageButton: {
    position: 'relative',
  },
  image: {
    width: '100%',
    borderRadius: 20,
  },
  imageBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  imageBorderPressed: {
    borderColor: '#FFA500',
    shadowColor: '#FFA500',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#165834',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#FFD700',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  placeholderContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 15,
  },
  placeholderSubtext: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default DayScreen;
