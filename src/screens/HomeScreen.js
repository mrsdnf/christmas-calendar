import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import DoorStar from '../components/DoorStar';
import DoorSnowflake from '../components/DoorSnowflake';
import { DOOR_POSITIONS, isDayUnlocked, BACKGROUND_SOUNDS } from '../config/calendarData';

const HomeScreen = ({ navigation }) => {
  const [devMode, setDevMode] = useState(false);
  const [devTapCount, setDevTapCount] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });
  const currentSoundIndexRef = useRef(0);
  const backgroundSoundRef = useRef(null);
  const tapTimeoutRef = useRef(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });

    return () => {
      subscription?.remove();
      // Clean up background sound on unmount
      if (backgroundSoundRef.current) {
        backgroundSoundRef.current.unloadAsync();
      }
    };
  }, []);

  // Hidden dev mode toggle - requires 3 taps to enable, 1 tap to disable
  const handleDevToggle = () => {
    // If dev mode is already on, turn it off with one tap
    if (devMode) {
      setDevMode(false);
      console.log('Dev mode disabled');
      return;
    }

    // Clear previous timeout
    if (tapTimeoutRef.current) {
      clearTimeout(tapTimeoutRef.current);
    }

    const newCount = devTapCount + 1;
    setDevTapCount(newCount);
    console.log('Dev tap count:', newCount);

    if (newCount >= 3) {
      setDevMode(true);
      console.log('Dev mode enabled');
      setDevTapCount(0);
    } else {
      // Reset tap count after 2 seconds
      tapTimeoutRef.current = setTimeout(() => {
        setDevTapCount(0);
      }, 2000);
    }
  };

  const playBackgroundSound = async () => {
    try {
      console.log('Playing background sound, index:', currentSoundIndexRef.current);

      // Stop current sound if playing
      if (backgroundSoundRef.current) {
        await backgroundSoundRef.current.stopAsync();
        await backgroundSoundRef.current.unloadAsync();
        backgroundSoundRef.current = null;
      }

      // Get the current sound
      const soundSource = BACKGROUND_SOUNDS[currentSoundIndexRef.current];
      console.log('Sound source:', soundSource);

      // Load and play the sound
      const { sound } = await Audio.Sound.createAsync(soundSource);
      backgroundSoundRef.current = sound;
      await sound.playAsync();
      console.log('Sound playing successfully');

      // Move to next sound index (loop back to 0 if at the end)
      currentSoundIndexRef.current = (currentSoundIndexRef.current + 1) % BACKGROUND_SOUNDS.length;
    } catch (error) {
      console.error('Error playing background sound:', error);
    }
  };

  const handleDoorPress = (day) => {
    const isUnlocked = isDayUnlocked(day, devMode);
    console.log('Door pressed - Day:', day, 'Unlocked:', isUnlocked, 'DevMode:', devMode);

    if (isUnlocked) {
      navigation.navigate('Day', { day });
    } else {
      // Play background sound when locked door is clicked
      console.log('Door is locked, playing background sound');
      playBackgroundSound();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/* Dev Mode Toggle Button */}
      <TouchableOpacity
        style={styles.devToggle}
        onPress={handleDevToggle}
        activeOpacity={1}
      >
        {devMode && (
          <View style={styles.devIndicator}>
            <Text style={styles.devText}>DEV MODE</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Background Image */}
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Render all doors */}
        {DOOR_POSITIONS.map((door) => {
          const isLocked = !isDayUnlocked(door.day, devMode);
          const DoorComponent = door.type === 'star' ? DoorStar : DoorSnowflake;

          const today = new Date();
          const currentDay = today.getDate();
          const currentMonth = today.getMonth();
          const isToday = currentMonth === 11 && currentDay === door.day;

          return (
            <DoorComponent
              key={door.day}
              day={door.day}
              position={{ x: door.x, y: door.y }}
              isLocked={isLocked}
              isToday={isToday}
              onPress={() => handleDoorPress(door.day)}
            />
          );
        })}

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1f3d',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  devToggle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  devIndicator: {
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  devText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tapIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tapText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
