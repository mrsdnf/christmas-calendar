const fs = require('fs');
const path = require('path');

// Read the current calendarData.js file
const calendarDataPath = path.join(__dirname, '../src/config/calendarData.js');
let calendarData = fs.readFileSync(calendarDataPath, 'utf8');

// Function to read text file if it exists
function readTextFile(dayNum, itemNum) {
  const textPath = path.join(__dirname, `../assets/day${dayNum}/item${itemNum}/text.txt`);

  if (fs.existsSync(textPath)) {
    const content = fs.readFileSync(textPath, 'utf8').trim();
    // Escape single quotes and backslashes for JavaScript string
    // First remove \r characters (Windows line endings), then escape
    return content.replace(/\r/g, '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
  }

  return '';
}

// Update text for all days and items
for (let day = 1; day <= 21; day++) {
  const dayFolder = path.join(__dirname, `../assets/day${day}`);

  if (fs.existsSync(dayFolder)) {
    // Count items in this day
    const items = fs.readdirSync(dayFolder).filter(name => name.startsWith('item'));

    items.forEach(itemFolder => {
      const itemNum = itemFolder.replace('item', '');
      const textContent = readTextFile(day, itemNum);

      // Find and replace the text in calendarData
      const regex = new RegExp(
        `(day${day}/item${itemNum}/(?:sound\\.(?:mp3|m4a)).*?text:\\s*')[^']*(')`
      );

      const replacement = `$1${textContent}$2`;
      calendarData = calendarData.replace(regex, replacement);
    });
  }
}

// Write the updated file
fs.writeFileSync(calendarDataPath, calendarData, 'utf8');

console.log('✅ Successfully imported all text files into calendarData.js');
console.log('📝 Text files have been read from assets/day#/item#/text.txt');
