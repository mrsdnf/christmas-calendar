# How to Add Text to Calendar Items

This guide explains how to add text that will be displayed below images when they are tapped.

## Quick Start

1. **Create text files** in your item folders:
   ```
   assets/day1/item1/text.txt
   assets/day1/item2/text.txt
   assets/day1/item3/text.txt
   ... and so on for all days
   ```

2. **Add your text content** to each text file. This could be:
   - Song lyrics
   - Poems
   - Messages
   - Stories
   - Any text you want to display

3. **Run the import script**:
   ```bash
   npm run import-texts
   ```

   This will automatically read all your text files and update the calendar configuration.

4. **That's it!** The text will now appear below the images when users tap them.

## Example

If you create a file at `assets/day1/item1/text.txt` with this content:
```
Jingle bells, jingle bells
Jingle all the way!
```

After running `npm run import-texts`, this text will be displayed below the first image of day 1 when the user taps it.

## Notes

- Text files are optional - only add them to items where you want text to appear
- If a text file doesn't exist, the item will show a placeholder message
- You can have multi-line text - line breaks will be preserved as `\n` in the display
- Special characters and quotes are automatically handled
- After adding or changing text files, always run `npm run import-texts` to update the app

## Workflow

1. Add/edit your text files
2. Run `npm run import-texts`
3. The app will automatically reload with your new text content
