// Calendar configuration for all 21 days
// Door positions are in percentage (0-100) for responsive placement
// Door types: 'star', 'snowflake'

export const DOOR_POSITIONS = [
  { day: 1, x: 15, y: 20, type: 'star' },
  { day: 2, x: 78, y: 15, type: 'snowflake' },
  { day: 3, x: 35, y: 35, type: 'star' },
  { day: 4, x: 62, y: 28, type: 'snowflake' },
  { day: 5, x: 88, y: 42, type: 'star' },
  { day: 6, x: 22, y: 52, type: 'snowflake' },
  { day: 7, x: 50, y: 48, type: 'star' },
  { day: 8, x: 72, y: 55, type: 'snowflake' },
  { day: 9, x: 10, y: 68, type: 'star' },
  { day: 10, x: 45, y: 65, type: 'snowflake' },
  { day: 11, x: 82, y: 70, type: 'star' },
  { day: 12, x: 28, y: 78, type: 'snowflake' },
  { day: 13, x: 58, y: 82, type: 'star' },
  { day: 14, x: 92, y: 88, type: 'snowflake' },
  { day: 15, x: 18, y: 88, type: 'star' },
  { day: 16, x: 68, y: 12, type: 'snowflake' },
  { day: 17, x: 42, y: 8, type: 'star' },
  { day: 18, x: 8, y: 38, type: 'snowflake' },
  { day: 19, x: 75, y: 92, type: 'star' },
  { day: 20, x: 38, y: 92, type: 'snowflake' },
  { day: 21, x: 52, y: 22, type: 'star' },
];

// Content for each day
// Images are loaded, sounds can be added later to the day/item folders
export const DAY_CONTENT = {
  1: {
    images: [
      { id: 1, source: require('../../assets/day1/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day1/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day1/item3/image.png'), sound: null },
    ]
  },
  2: {
    images: [
      { id: 1, source: require('../../assets/day2/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day2/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day2/item3/image.png'), sound: null },
    ]
  },
  3: {
    images: [
      { id: 1, source: require('../../assets/day3/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day3/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day3/item3/image.png'), sound: null },
    ]
  },
  4: {
    images: [
      { id: 1, source: require('../../assets/day4/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day4/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day4/item3/image.png'), sound: null },
    ]
  },
  5: {
    images: [
      { id: 1, source: require('../../assets/day5/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day5/item2/image.png'), sound: null },
    ]
  },
  6: {
    images: [
      { id: 1, source: require('../../assets/day6/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day6/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day6/item3/image.png'), sound: null },
    ]
  },
  7: {
    images: [
      { id: 1, source: require('../../assets/day7/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day7/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day7/item3/image.png'), sound: null },
    ]
  },
  8: {
    images: [
      { id: 1, source: require('../../assets/day8/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day8/item2/image.png'), sound: null },
    ]
  },
  9: {
    images: [
      { id: 1, source: require('../../assets/day9/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day9/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day9/item3/image.png'), sound: null },
    ]
  },
  10: {
    images: [
      { id: 1, source: require('../../assets/day10/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day10/item2/image.png'), sound: null },
    ]
  },
  11: {
    images: [
      { id: 1, source: require('../../assets/day11/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day11/item2/image.png'), sound: null },
    ]
  },
  12: {
    images: [
      { id: 1, source: require('../../assets/day12/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day12/item2/image.png'), sound: null },
    ]
  },
  13: {
    images: [
      { id: 1, source: require('../../assets/day13/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day13/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day13/item3/image.png'), sound: null },
    ]
  },
  14: {
    images: [
      { id: 1, source: require('../../assets/day14/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day14/item2/image.png'), sound: null },
    ]
  },
  15: {
    images: [
      { id: 1, source: require('../../assets/day15/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day15/item2/image.png'), sound: null },
    ]
  },
  16: {
    images: [
      { id: 1, source: require('../../assets/day16/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day16/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day16/item3/image.png'), sound: null },
    ]
  },
  17: {
    images: [
      { id: 1, source: require('../../assets/day17/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day17/item2/image.png'), sound: null },
    ]
  },
  18: {
    images: [
      { id: 1, source: require('../../assets/day18/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day18/item2/image.png'), sound: null },
    ]
  },
  19: {
    images: [
      { id: 1, source: require('../../assets/day19/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day19/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day19/item3/image.png'), sound: null },
    ]
  },
  20: {
    images: [
      { id: 1, source: require('../../assets/day20/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day20/item2/image.png'), sound: null },
    ]
  },
  21: {
    images: [
      { id: 1, source: require('../../assets/day21/item1/image.png'), sound: null },
      { id: 2, source: require('../../assets/day21/item2/image.png'), sound: null },
      { id: 3, source: require('../../assets/day21/item3/image.png'), sound: null },
    ]
  },
};

// Helper function to check if a day should be unlocked
export const isDayUnlocked = (day, devMode = false) => {
  if (devMode) return true;

  const today = new Date();
  const currentMonth = today.getMonth(); // 0-11 (0 = January, 11 = December)
  const currentDay = today.getDate();

  // Only unlock in December
  if (currentMonth !== 11) return false;

  // Check if current day is >= calendar day
  return currentDay >= day;
};
