# Assets Folder Structure Guide

## How to Add Your Content

Each day (1-21) has its own folder with 3 item subfolders.

### Folder Structure
```
assets/
├── day1/
│   ├── item1/
│   │   ├── image.png (or .jpg)
│   │   └── sound.mp3
│   ├── item2/
│   │   ├── image.png
│   │   └── sound.mp3
│   └── item3/
│       ├── image.png
│       └── sound.mp3
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

### File Naming Rules

**IMPORTANT:** Files must be named exactly:
- Image: `image.png` OR `image.jpg` OR `image.jpeg`
- Sound: `sound.mp3` OR `sound.m4a` OR `sound.wav`

### Examples

**Day 1 with 1 item:**
```
day1/
  item1/
    image.png
    sound.mp3
  item2/     (empty - leave as is)
  item3/     (empty - leave as is)
```

**Day 2 with 2 items:**
```
day2/
  item1/
    image.jpg
    sound.mp3
  item2/
    image.png
    sound.mp3
  item3/     (empty)
```

**Day 3 with 3 items:**
```
day3/
  item1/
    image.png
    sound.mp3
  item2/
    image.png
    sound.mp3
  item3/
    image.jpg
    sound.mp3
```

### What Happens if a Folder is Empty?

If an item folder is empty (no image or sound), it will be skipped automatically. The app only shows items that have both an image AND a sound file.

### Adding Your Background Image

Place your Christmas background image here:
```
assets/background.jpg
```

Then uncomment the ImageBackground code in `src/screens/HomeScreen.js` (see SETUP_GUIDE.md for details).

### Tips

1. Keep images under 2MB for best performance
2. Use MP3 format for sounds (best compatibility)
3. Use consistent image format (PNG or JPG) for all items
4. Delete the README.txt files from item folders after you add your content
5. Empty item folders are OK - they'll be ignored

### Current Status

All 21 days are ready with 3 item folders each. Simply add your `image.*` and `sound.*` files to each item folder you want to use.
