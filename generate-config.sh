#!/bin/bash

echo "// Auto-generated calendar configuration"
echo "// Generated on $(date)"
echo ""
echo "export const DAY_CONTENT = {"

for day in {1..21}; do
  items_found=0
  day_config="  $day: {\n    images: ["
  
  for item in {1..3}; do
    dir="/Users/dflamsholt/christmas-calendar/assets/day$day/item$item"
    
    # Check if image exists
    if [ -f "$dir/image.png" ] || [ -f "$dir/image.jpg" ] || [ -f "$dir/image.jpeg" ]; then
      # Check if sound exists
      if [ -f "$dir/sound.mp3" ] || [ -f "$dir/sound.m4a" ] || [ -f "$dir/sound.wav" ]; then
        if [ $items_found -gt 0 ]; then
          day_config="$day_config,"
        fi
        
        # Determine image extension
        img_ext="png"
        if [ -f "$dir/image.jpg" ]; then img_ext="jpg"; fi
        if [ -f "$dir/image.jpeg" ]; then img_ext="jpeg"; fi
        
        # Determine sound extension
        snd_ext="mp3"
        if [ -f "$dir/sound.m4a" ]; then snd_ext="m4a"; fi
        if [ -f "$dir/sound.wav" ]; then snd_ext="wav"; fi
        
        day_config="$day_config\n      { id: $item, source: require('../../assets/day$day/item$item/image.$img_ext'), sound: require('../../assets/day$day/item$item/sound.$snd_ext') }"
        items_found=$((items_found + 1))
      fi
    fi
  done
  
  if [ $items_found -gt 0 ]; then
    day_config="$day_config\n    ]\n  },"
    echo -e "$day_config"
  fi
done

echo "};"
