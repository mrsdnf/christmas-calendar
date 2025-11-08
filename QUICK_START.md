# Quick Start - Christmas Calendar App

Your Christmas calendar app is ready to go! Here's what you need to know:

## 🚀 Start the App

```bash
cd christmas-calendar
npm start
```

Scan the QR code with **Expo Go** app on your phone/tablet.

## 🎄 What You Have

✅ **Home Screen** with 21 doors (stars & snowflakes) scattered across the screen
✅ **Date-based locking** - doors unlock December 1-21
✅ **Hidden dev mode** - tap top-right corner 5 times to unlock all doors
✅ **Day pages** - each day shows 1-3 interactive images
✅ **Sound playback** - tap images to play MP3 sounds
✅ **Christmas animations** - falling snow, twinkling stars, smooth transitions
✅ **Festive styling** - red, green, gold colors with childlike fantasy theme

## 📝 Next Steps

### 1. Test the App (5 minutes)
- Start the app with `npm start`
- Tap top-right corner 5 times to enable dev mode
- Tap any door to see the day page placeholder
- You'll see "No content yet" - that's expected!

### 2. Add Your Background Image
- Save your Christmas image as `assets/images/background.jpg`
- Follow instructions in [SETUP_GUIDE.md](SETUP_GUIDE.md#step-1-add-your-background-image)

### 3. Add Day Content
- Add images to `assets/images/` (day1_img1.png, day2_img1.png, etc.)
- Add sounds to `assets/sounds/` (day1_sound1.mp3, day2_sound1.mp3, etc.)
- Configure in `src/config/calendarData.js`
- See [SETUP_GUIDE.md](SETUP_GUIDE.md#step-2-add-images-and-sounds-for-each-day) for details

## 📁 Project Structure

```
christmas-calendar/
├── src/
│   ├── components/
│   │   ├── DoorStar.js          # Animated star door
│   │   ├── DoorSnowflake.js     # Animated snowflake door
│   │   └── FallingSnow.js       # Snow animation
│   ├── screens/
│   │   ├── HomeScreen.js        # Main calendar screen
│   │   └── DayScreen.js         # Individual day page
│   └── config/
│       └── calendarData.js      # Configure doors & content HERE
├── assets/
│   ├── images/                  # Put your images here
│   └── sounds/                  # Put your MP3s here
└── App.js                       # Main entry point
```

## 🎮 Developer Mode

**Activate:** Tap invisible button in top-right corner 5 times
**Indicator:** Red "DEV" badge appears
**Effect:** All 21 doors unlock regardless of date
**Deactivate:** Tap top-right 5 times again

## 🎨 Customization

All styling uses Christmas colors (red, green, gold) and is easily customizable:
- Door positions: `src/config/calendarData.js` - DOOR_POSITIONS
- Colors: Edit StyleSheet in each component file
- Animations: Adjust timing/count in component files
- Snow amount: Change `count` in `<FallingSnow count={60} />`

## 📚 Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup instructions
- **[README.md](README.md)** - Full documentation
- Code comments throughout

## 🎁 Features Highlights

### Door Components
- **Stars**: Golden with pulsing and twinkling animations
- **Snowflakes**: Blue/white with gentle rotation
- Both have hover effects and locked/unlocked states

### Animations
- Falling snow across all screens
- Door pulse/twinkle effects
- Smooth page transitions
- Image card entrance animations
- Press feedback on all interactive elements

### Date Locking
- Automatically unlocks doors in December (1-21)
- Before December: all locked
- Dev mode: override for testing

## 💡 Pro Tips

1. **Test with dev mode first** to see all doors without waiting
2. **Use consistent naming** for images (day1_img1.png, day1_img2.png, etc.)
3. **Keep images under 2MB** for best performance
4. **MP3 format recommended** for sounds (best compatibility)
5. **Test on actual device** for accurate door positions

## 🐛 Troubleshooting

**Can't see doors?**
- Enable dev mode to make them visible
- Check HomeScreen.js loaded correctly

**App crashes?**
```bash
npm install
npm start -- --clear
```

**Need to reset?**
```bash
rm -rf node_modules
npm install
```

## 🎉 You're Ready!

Start the app and begin adding your Christmas content. The app is fully functional and ready for your images and sounds!

Questions? Check [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed instructions.

Happy holidays! 🎄⭐❄️
