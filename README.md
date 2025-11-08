# Christmas Calendar App 🎄

A delightful Christmas advent calendar app for mobile devices (iOS and Android) built with React Native and Expo.

## Features

- 21 interactive doors (stars and snowflakes) scattered across a background image
- Each door unlocks on its corresponding date in December (1-21)
- Beautiful Christmas animations with falling snow
- Interactive images that play sounds when tapped
- Hidden developer mode for testing all doors during development
- Festive red, green, and gold color scheme

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your phone/tablet (for testing)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Scan the QR code with Expo Go (Android) or Camera app (iOS)

## Adding Your Content

### 1. Add Your Background Image

Replace the placeholder at `assets/images/background.jpg` with your Christmas background image.

### 2. Add Day Images and Sounds

For each day, add your images and sounds to the assets folders:

- Images: `assets/images/day1_img1.png`, `day1_img2.png`, etc.
- Sounds: `assets/sounds/day1_sound1.mp3`, `day1_sound2.mp3`, etc.

### 3. Configure Day Content

Edit `src/config/calendarData.js` and update the `DAY_CONTENT` object:

```javascript
export const DAY_CONTENT = {
  1: {
    images: [
      {
        id: 1,
        source: require('../assets/images/day1_img1.png'),
        sound: require('../assets/sounds/day1_sound1.mp3')
      },
    ]
  },
  2: {
    images: [
      { id: 1, source: require('../assets/images/day2_img1.png'), sound: require('../assets/sounds/day2_sound1.mp3') },
      { id: 2, source: require('../assets/images/day2_img2.png'), sound: require('../assets/sounds/day2_sound2.mp3') },
      { id: 3, source: require('../assets/images/day2_img3.png'), sound: require('../assets/sounds/day2_sound3.mp3') },
    ]
  },
  // ... add days 3-21
};
```

### 4. Customize Door Positions (Optional)

If you want to adjust where doors appear on your background, edit the `DOOR_POSITIONS` array in `src/config/calendarData.js`:

```javascript
export const DOOR_POSITIONS = [
  { day: 1, x: 15, y: 20, type: 'star' },     // x and y are percentages (0-100)
  { day: 2, x: 78, y: 15, type: 'snowflake' },
  // ... etc
];
```

## Developer Mode

To access all doors during development:

1. Tap the top-right corner of the home screen 5 times quickly
2. A red "DEV" indicator will appear
3. All doors will be unlocked regardless of the date
4. Tap 5 times again to disable dev mode

## Date Locking Behavior

- In production mode, only doors for dates that have passed will be unlocked
- Doors unlock based on December 1-21
- If accessed outside of December, all doors remain locked (unless in dev mode)

## Project Structure

```
christmas-calendar/
├── src/
│   ├── components/        # Reusable components
│   │   ├── DoorStar.js
│   │   ├── DoorSnowflake.js
│   │   └── FallingSnow.js
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.js
│   │   └── DayScreen.js
│   ├── config/           # Configuration
│   │   └── calendarData.js
│   └── assets/          # Images and sounds
│       ├── images/
│       └── sounds/
├── App.js               # Main app entry point
└── package.json
```

## Building for Production

### iOS

```bash
npm run ios
```

### Android

```bash
npm run android
```

### Building Standalone Apps

For publishing to app stores, use EAS Build:

```bash
npm install -g eas-cli
eas login
eas build --platform ios
eas build --platform android
```

## Customization Ideas

- Change door shapes by editing `DoorStar.js` and `DoorSnowflake.js`
- Adjust animations in the component files
- Modify colors in the StyleSheet sections
- Add more snowflakes by changing the `count` prop in `<FallingSnow count={60} />`
- Customize fonts by adding custom fonts to assets

## Troubleshooting

**Sounds not playing?**
- Ensure MP3 files are in the correct location
- Check that file names match exactly in `calendarData.js`

**Images not showing?**
- Verify image paths in `calendarData.js`
- Make sure images are in the `assets/images` folder

**App crashes on startup?**
- Run `npm install` to ensure all dependencies are installed
- Clear cache with `npm start -- --clear`

## License

This project is open source and available under the MIT License.

## Enjoy! 🎅

Have a wonderful Christmas! 🎄⭐❄️
