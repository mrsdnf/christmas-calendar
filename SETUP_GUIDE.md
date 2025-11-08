# Christmas Calendar Setup Guide

Welcome! This guide will help you add your content to the Christmas calendar app.

## Quick Start

1. **Start the app**
   ```bash
   cd christmas-calendar
   npm start
   ```
   Then scan the QR code with Expo Go on your phone/tablet.

2. **Enable Developer Mode**
   - Tap the top-right corner of the home screen 5 times quickly
   - A red "DEV" badge will appear
   - All 21 doors will now be unlocked for testing

## Adding Your Content

### Step 1: Add Your Background Image

1. Find or create your Christmas background image
2. Save it as `assets/images/background.jpg`
3. Open `src/screens/HomeScreen.js`
4. Find lines 4 and 47-51 and uncomment the ImageBackground code:

```javascript
// Change this:
// ImageBackground, // Uncomment when you add your background image

// To this:
ImageBackground,

// And change this:
<View style={styles.background}>

// To this:
<ImageBackground
  source={require('../../assets/images/background.jpg')}
  style={styles.background}
  resizeMode="cover"
>

// And change the closing tag at line 84:
// From: </View>
// To: </ImageBackground>
```

### Step 2: Add Images and Sounds for Each Day

1. **Organize your files:**
   - Day 1, Image 1: `assets/images/day1_img1.png`
   - Day 1, Sound 1: `assets/sounds/day1_sound1.mp3`
   - Day 2, Image 1: `assets/images/day2_img1.png`
   - Day 2, Sound 1: `assets/sounds/day2_sound1.mp3`
   - And so on...

2. **Supported formats:**
   - Images: PNG, JPG, JPEG
   - Sounds: MP3, M4A, WAV

### Step 3: Configure Day Content

Open `src/config/calendarData.js` and add your content:

```javascript
export const DAY_CONTENT = {
  1: {
    images: [
      {
        id: 1,
        source: require('../../assets/images/day1_img1.png'),
        sound: require('../../assets/sounds/day1_sound1.mp3')
      },
    ]
  },
  2: {
    images: [
      { id: 1, source: require('../../assets/images/day2_img1.png'), sound: require('../../assets/sounds/day2_sound1.mp3') },
      { id: 2, source: require('../../assets/images/day2_img2.png'), sound: require('../../assets/sounds/day2_sound2.mp3') },
      { id: 3, source: require('../../assets/images/day2_img3.png'), sound: require('../../assets/sounds/day2_sound3.mp3') },
    ]
  },
  3: {
    images: [
      { id: 1, source: require('../../assets/images/day3_img1.png'), sound: require('../../assets/sounds/day3_sound1.mp3') },
    ]
  },
  // Continue for days 4-21...
};
```

**Important Notes:**
- Each day can have 1-3 images (or more if you want!)
- Each `id` must be unique within a day
- File paths are case-sensitive
- The require() paths are relative to the calendarData.js file

### Step 4: Customize Door Positions (Optional)

If you want to adjust where doors appear on your background:

Edit `DOOR_POSITIONS` in `src/config/calendarData.js`:

```javascript
export const DOOR_POSITIONS = [
  { day: 1, x: 15, y: 20, type: 'star' },     // x and y are percentages (0-100)
  { day: 2, x: 78, y: 15, type: 'snowflake' },
  // ... etc
];
```

- `x` and `y` are percentages (0-100) of screen width/height
- `type` can be 'star' or 'snowflake'
- Doors are centered on their x/y position

## Testing Your App

### Test in Development
1. Enable dev mode (tap top-right corner 5 times)
2. Tap each door to make sure it opens
3. Check that images display correctly
4. Verify sounds play when tapping images

### Test Date Locking
1. Disable dev mode (tap top-right corner 5 times again)
2. Temporarily change the date check in `src/config/calendarData.js`:

```javascript
export const isDayUnlocked = (day, devMode = false) => {
  if (devMode) return true;

  // For testing, pretend it's December 5th:
  const currentDay = 5; // Change this to test different dates
  return day <= currentDay;

  // When done testing, restore original code
};
```

## Customization Tips

### Change Colors
Edit the StyleSheet sections in:
- `src/screens/HomeScreen.js` - Background and door colors
- `src/screens/DayScreen.js` - Day page colors
- `src/components/DoorStar.js` - Star colors
- `src/components/DoorSnowflake.js` - Snowflake colors

### Adjust Animations
- **Snow amount**: Change `count` prop in `<FallingSnow count={60} />`
- **Animation speed**: Edit duration values in component files
- **Door animations**: Modify timing in DoorStar.js and DoorSnowflake.js

### Change Door Designs
Edit SVG paths in:
- `src/components/DoorStar.js` - Star shape
- `src/components/DoorSnowflake.js` - Snowflake design

## Common Issues

**App won't start?**
```bash
npm install
npm start -- --clear
```

**Images not showing?**
- Check file paths match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder
- Verify require() paths are correct

**Sounds not playing?**
- Check MP3 files are in `assets/sounds/` folder
- Verify file names match in calendarData.js
- Try converting sounds to MP3 format

**Doors in wrong position?**
- Remember x and y are percentages (0-100)
- Doors are centered on their position
- Test on same device you'll deploy to (different screens vary)

## Building for Production

When you're ready to share:

```bash
# For iOS
npm run ios

# For Android
npm run android

# For app store deployment
npm install -g eas-cli
eas login
eas build --platform ios
eas build --platform android
```

## Need Help?

- Check the main README.md for more details
- Review the commented code in each file
- Test in dev mode first before checking date logic

Happy holidays! 🎄⭐❄️
