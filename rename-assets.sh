#!/bin/bash

# Script to rename images and sounds to the correct format
# Images should be named: image.png (or .jpg, .jpeg)
# Sounds should be named: sound.mp3 (or .m4a, .wav)

echo "Renaming images and sounds in all day/item folders..."

for day in {1..21}; do
  for item in {1..3}; do
    dir="/Users/dflamsholt/christmas-calendar/assets/day$day/item$item"

    if [ -d "$dir" ]; then
      # Rename first PNG file found to image.png
      first_png=$(find "$dir" -maxdepth 1 -name "*.png" -not -name "image.png" | head -1)
      if [ -n "$first_png" ]; then
        mv "$first_png" "$dir/image.png"
        echo "Day $day Item $item: Renamed image"
      fi

      # Rename first JPG file found to image.jpg (if no PNG exists)
      if [ ! -f "$dir/image.png" ]; then
        first_jpg=$(find "$dir" -maxdepth 1 \( -name "*.jpg" -o -name "*.jpeg" \) -not -name "image.jpg" -not -name "image.jpeg" | head -1)
        if [ -n "$first_jpg" ]; then
          ext="${first_jpg##*.}"
          mv "$first_jpg" "$dir/image.$ext"
          echo "Day $day Item $item: Renamed image"
        fi
      fi

      # Rename first MP3 file found to sound.mp3
      first_mp3=$(find "$dir" -maxdepth 1 -name "*.mp3" -not -name "sound.mp3" | head -1)
      if [ -n "$first_mp3" ]; then
        mv "$first_mp3" "$dir/sound.mp3"
        echo "Day $day Item $item: Renamed sound"
      fi

      # Rename first M4A file found to sound.m4a (if no MP3 exists)
      if [ ! -f "$dir/sound.mp3" ]; then
        first_m4a=$(find "$dir" -maxdepth 1 -name "*.m4a" -not -name "sound.m4a" | head -1)
        if [ -n "$first_m4a" ]; then
          mv "$first_m4a" "$dir/sound.m4a"
          echo "Day $day Item $item: Renamed sound"
        fi
      fi

      # Rename first WAV file found to sound.wav (if no MP3 or M4A exists)
      if [ ! -f "$dir/sound.mp3" ] && [ ! -f "$dir/sound.m4a" ]; then
        first_wav=$(find "$dir" -maxdepth 1 -name "*.wav" -not -name "sound.wav" | head -1)
        if [ -n "$first_wav" ]; then
          mv "$first_wav" "$dir/sound.wav"
          echo "Day $day Item $item: Renamed sound"
        fi
      fi
    fi
  done
done

echo "Done! All images and sounds have been renamed."
echo ""
echo "Now you need to update src/config/calendarData.js"
echo "See the template in that file for how to add your days."
