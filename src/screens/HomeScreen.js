import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DoorStar from '../components/DoorStar';
import DoorSnowflake from '../components/DoorSnowflake';
import FallingSnow from '../components/FallingSnow';
import { DOOR_POSITIONS, isDayUnlocked } from '../config/calendarData';

const HomeScreen = ({ navigation }) => {
  const [devMode, setDevMode] = useState(false);
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

  // Hidden dev mode toggle - tap/click to toggle
  const handleDevToggle = () => {
    setDevMode(!devMode);
    console.log('Dev mode toggled:', !devMode);
  };

  const handleDoorPress = (day) => {
    if (isDayUnlocked(day, devMode)) {
      navigation.navigate('Day', { day });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Background Image */}
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Falling Snow Animation */}
        <FallingSnow count={60} />

        {/* Render all doors */}
        {DOOR_POSITIONS.map((door) => {
          const isLocked = !isDayUnlocked(door.day, devMode);
          const DoorComponent = door.type === 'star' ? DoorStar : DoorSnowflake;

          // Always show Day 1 as "today" for demo purposes
          // In production, replace with: (currentMonth === 11 && currentDay === door.day)
          const today = new Date();
          const currentDay = today.getDate();
          const currentMonth = today.getMonth();
          const isToday = door.day === 1;

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

        {/* Hidden Dev Mode Toggle - Top Right Corner */}
        <TouchableOpacity
          style={styles.devToggle}
          onPress={handleDevToggle}
          activeOpacity={1}
        >
          {devMode && (
            <View style={styles.devIndicator}>
              <Text style={styles.devText}>DEV ON</Text>
            </View>
          )}
        </TouchableOpacity>
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
    top: 40,
    right: 10,
    width: 80,
    height: 50,
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
});

export default HomeScreen;
