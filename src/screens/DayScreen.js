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
import ChristmasDecorations from '../components/ChristmasDecorations';
import WatercolorDecorations from '../components/WatercolorDecorations';
import { DAY_CONTENT } from '../config/calendarData';

const DayScreen = ({ route, navigation }) => {
  const { day } = route.params;
  const [sounds, setSounds] = useState({});
  const [activeTextId, setActiveTextId] = useState(null);
  const [audioProgress, setAudioProgress] = useState({});
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

    // Listen for navigation events to stop sounds when user leaves
    const unsubscribe = navigation.addListener('beforeRemove', async () => {
      // Stop all playing sounds
      await Promise.all(
        Object.values(sounds).map(async ({ sound }) => {
          if (sound) {
            try {
              const status = await sound.getStatusAsync();
              if (status.isLoaded && status.isPlaying) {
                await sound.stopAsync();
              }
            } catch (error) {
              console.error('Error stopping sound:', error);
            }
          }
        })
      );
    });

    // Cleanup sounds on unmount
    return () => {
      unsubscribe();
      Object.values(sounds).forEach(({ sound }) => {
        if (sound) {
          sound.unloadAsync();
        }
      });
    };
  }, [navigation, sounds]);

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

        // If it's playing, stop it and hide text
        if (status.isLoaded && status.isPlaying) {
          await sound.stopAsync();
          setActiveTextId(null);
          setAudioProgress(prev => ({ ...prev, [imageId]: null }));
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

      // Clear progress for all other sounds
      setAudioProgress({ [imageId]: { position: 0, duration: 0 } });

      // Show text for this image
      setActiveTextId(imageId);

      // If sound already exists, replay it
      if (sounds[imageId]) {
        const { sound } = sounds[imageId];
        await sound.replayAsync();

        // Set up progress tracking
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded) {
            setAudioProgress(prev => ({
              ...prev,
              [imageId]: {
                position: status.positionMillis,
                duration: status.durationMillis,
              },
            }));

            // Clear progress when finished
            if (status.didJustFinish) {
              setAudioProgress(prev => ({ ...prev, [imageId]: null }));
            }
          }
        });
        return;
      }

      // Load and play new sound
      const { sound } = await Audio.Sound.createAsync(soundSource);
      setSounds(prev => ({ ...prev, [imageId]: { sound } }));

      // Set up progress tracking
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setAudioProgress(prev => ({
            ...prev,
            [imageId]: {
              position: status.positionMillis,
              duration: status.durationMillis,
            },
          }));

          // Clear progress when finished
          if (status.didJustFinish) {
            setAudioProgress(prev => ({ ...prev, [imageId]: null }));
          }
        }
      });

      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const dayContent = DAY_CONTENT[day] || { images: [] };

  // Map each day to a theme variation
  const getThemeForDay = (day) => {
    const themes = ['classic', 'gold', 'green', 'red', 'silver', 'winter'];
    return themes[(day - 1) % 6];
  };

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

      {!activeTextId && <FallingSnow count={40} />}
      <ChristmasDecorations theme={getThemeForDay(day)} />
      <WatercolorDecorations day={day} />

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
                showText={activeTextId === image.id}
                progress={audioProgress[image.id]}
              />
            ))
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const ImageCard = ({ image, index, onPress, screenWidth, showText, progress }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
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

  useEffect(() => {
    if (showText) {
      Animated.spring(textAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(textAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [showText]);

  useEffect(() => {
    if (progress && progress.duration > 0) {
      Animated.spring(progressAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(progressAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [progress]);

  const progressPercentage = progress && progress.duration > 0
    ? (progress.position / progress.duration) * 100
    : 0;

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

      {/* Audio Progress Bar - Candy Cane Style */}
      {progress && progress.duration > 0 && (
        <Animated.View
          style={[
            styles.progressBarContainer,
            {
              opacity: progressAnim,
              transform: [
                {
                  translateY: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-5, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${progressPercentage}%` }
              ]}
            >
              {/* Candy cane stripes */}
              <View style={styles.candyStripe1} />
              <View style={styles.candyStripe2} />
              <View style={styles.candyStripe3} />
              <View style={styles.candyStripe4} />
              <View style={styles.candyStripe5} />
            </View>
          </View>
        </Animated.View>
      )}

      {/* Text display below image */}
      {image.text && showText && (
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: textAnim,
              transform: [
                {
                  translateY: textAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-10, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.imageText}>{image.text}</Text>
        </Animated.View>
      )}
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
  textContainer: {
    marginTop: 12,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageText: {
    fontSize: 14,
    color: '#165834',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500',
  },
  progressBarContainer: {
    marginTop: 8,
    width: '100%',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(139, 0, 0, 0.2)',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#DC5F5F',
    borderRadius: 4,
    position: 'relative',
    overflow: 'hidden',
  },
  // Candy cane diagonal stripes - repeating pattern
  candyStripe1: {
    position: 'absolute',
    width: 6,
    height: '200%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transform: [{ rotate: '45deg' }],
    left: 0,
    top: -10,
  },
  candyStripe2: {
    position: 'absolute',
    width: 6,
    height: '200%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transform: [{ rotate: '45deg' }],
    left: 12,
    top: -10,
  },
  candyStripe3: {
    position: 'absolute',
    width: 6,
    height: '200%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transform: [{ rotate: '45deg' }],
    left: 24,
    top: -10,
  },
  candyStripe4: {
    position: 'absolute',
    width: 6,
    height: '200%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transform: [{ rotate: '45deg' }],
    left: 36,
    top: -10,
  },
  candyStripe5: {
    position: 'absolute',
    width: 6,
    height: '200%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    transform: [{ rotate: '45deg' }],
    left: 48,
    top: -10,
  },
});

export default DayScreen;
