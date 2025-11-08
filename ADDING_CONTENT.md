# Adding Content to Your Christmas Calendar

## 🎄 Super Simple Method (Recommended)

Your calendar now uses an **automatic folder structure**. Just add your files to the right folders and the app will find them automatically!

### Step 1: Add Your Files

For each day, go to `assets/dayN/itemN/` and add:
- `image.png` (or `.jpg` or `.jpeg`)
- `sound.mp3` (or `.m4a` or `.wav`)

### Example: Day 1 with 2 items

```
assets/
  day1/
    item1/
      image.png       ← Your first image
      sound.mp3       ← Your first sound
    item2/
      image.jpg       ← Your second image
      sound.mp3       ← Your second sound
    item3/
      (leave empty - app will skip it)
```

### Example: Day 2 with 3 items

```
assets/
  day2/
    item1/
      image.png
      sound.mp3
    item2/
      image.png
      sound.mp3
    item3/
      image.png
      sound.mp3
```

### That's It!

The app will automatically:
- ✅ Find all your images and sounds
- ✅ Skip empty folders
- ✅ Support PNG, JPG, or JPEG images
- ✅ Support MP3, M4A, or WAV sounds
- ✅ Work as soon as you add the files (just refresh the app)

## 📁 Folder Structure

You have 21 days, each with 3 item folders:

```
assets/
├── background.jpg        ← Your main background image (optional)
├── day1/
│   ├── item1/
│   ├── item2/
│   └── item3/
├── day2/
│   ├── item1/
│   ├── item2/
│   └── item3/
...
└── day21/
    ├── item1/
    ├── item2/
    └── item3/
```

## 🎨 Adding Your Background Image

1. Save your Christmas background as: `assets/background.jpg`
2. Open `src/screens/HomeScreen.js`
3. Uncomment these lines:

**Line 4:** Change from:
```javascript
// ImageBackground, // Uncomment when you add your background image
```
To:
```javascript
ImageBackground,
```

**Lines 47-52:** Change from:
```javascript
{/* <ImageBackground
  source={require('../../assets/images/background.jpg')}
  style={styles.background}
  resizeMode="cover"
> */}
<View style={styles.background}>
```
To:
```javascript
<ImageBackground
  source={require('../../assets/background.jpg')}
  style={styles.background}
  resizeMode="cover"
>
```

**Line 84:** Change from:
```javascript
{/* </ImageBackground> */}
</View>
```
To:
```javascript
</ImageBackground>
```

## ✅ File Naming Rules

**MUST be named exactly:**
- Images: `image.png` OR `image.jpg` OR `image.jpeg`
- Sounds: `sound.mp3` OR `sound.m4a` OR `sound.wav`

**Case-sensitive!** Use lowercase.

## 🚀 Testing Your Content

1. **Start the app:**
   ```bash
   npm start
   ```

2. **Enable dev mode:**
   - Tap top-right corner 5 times
   - All doors will unlock

3. **Test each day:**
   - Tap a door
   - Should see your images
   - Tap images to hear sounds

## 💡 Tips

1. **Keep images under 2MB** for best performance
2. **Use MP3 for sounds** (best compatibility)
3. **Use PNG or JPG for images** (your choice)
4. **Empty item folders are OK** - they'll be skipped automatically
5. **Delete README.txt files** from item folders after adding your content

## 🔧 Advanced: Manual Configuration

If you want to manually configure content instead of using auto-loading:

1. Open `src/config/calendarData.js`
2. Replace the import section with:

```javascript
export const DAY_CONTENT = {
  1: {
    images: [
      {
        id: 1,
        source: require('../../assets/day1/item1/image.png'),
        sound: require('../../assets/day1/item1/sound.mp3')
      },
    ]
  },
  2: {
    images: [
      { id: 1, source: require('../../assets/day2/item1/image.png'), sound: require('../../assets/day2/item1/sound.mp3') },
      { id: 2, source: require('../../assets/day2/item2/image.png'), sound: require('../../assets/day2/item2/sound.mp3') },
    ]
  },
  // ... etc for all 21 days
};
```

## 📊 What You Have

- ✅ 21 day folders (day1 to day21)
- ✅ 3 item folders per day (item1, item2, item3)
- ✅ Automatic content detection
- ✅ Support for multiple image/sound formats
- ✅ Empty folders automatically skipped

## 🎁 Quick Checklist

- [ ] Add background image: `assets/background.jpg`
- [ ] Uncomment ImageBackground in HomeScreen.js
- [ ] Add images to `assets/dayN/itemN/image.png`
- [ ] Add sounds to `assets/dayN/itemN/sound.mp3`
- [ ] Test with dev mode (tap top-right 5 times)
- [ ] Verify sounds play when tapping images

## 🐛 Troubleshooting

**Images not showing?**
- Check file is named exactly `image.png` (lowercase)
- Verify it's in the right folder: `assets/day1/item1/`
- Try refreshing the app

**Sounds not playing?**
- Check file is named exactly `sound.mp3` (lowercase)
- Verify it's in the same folder as the image
- Try converting to MP3 format

**App shows "No content yet"?**
- Make sure both image AND sound files exist
- Check file names are exact: `image.png` and `sound.mp3`
- Restart the app

**Need to refresh?**
```bash
# Stop the server (Ctrl+C)
# Clear cache and restart
npm start -- --clear
```

## 🎉 You're Ready!

The folder structure is all set up. Just add your images and sounds, and the app will automatically find them!

Happy holidays! 🎄⭐❄️
