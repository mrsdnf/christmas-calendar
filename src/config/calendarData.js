// Calendar configuration for all 21 days
// Door positions are in percentage (0-100) for responsive placement
// Door types: 'star', 'snowflake'

// Background sounds to play when locked doors are clicked
export const BACKGROUND_SOUNDS = [
  require('../../assets/Background sounds/sound1.m4a'),
  require('../../assets/Background sounds/sound2.m4a'),
  require('../../assets/Background sounds/sound3.m4a'),
  require('../../assets/Background sounds/sound4.m4a'),
  require('../../assets/Background sounds/sound5.m4a'),
  require('../../assets/Background sounds/sound6.m4a'),
  require('../../assets/Background sounds/sound7.m4a'),
  require('../../assets/Background sounds/sound8.m4a'),
  require('../../assets/Background sounds/sound9.m4a'),
  require('../../assets/Background sounds/sound10.m4a'),
  require('../../assets/Background sounds/sound11.m4a'),
  require('../../assets/Background sounds/sound12.m4a'),
  require('../../assets/Background sounds/sound13.m4a'),
  require('../../assets/Background sounds/sound14.m4a'),
  require('../../assets/Background sounds/sound15.m4a'),
  require('../../assets/Background sounds/sound16.m4a'),
  require('../../assets/Background sounds/sound17.m4a'),
  require('../../assets/Background sounds/sound18.m4a'),
  require('../../assets/Background sounds/sound19.m4a'),
  require('../../assets/Background sounds/sound20.m4a'),
  require('../../assets/Background sounds/sound21.m4a'),
  require('../../assets/Background sounds/sound22.m4a'),
  require('../../assets/Background sounds/sound23.m4a'),
  require('../../assets/Background sounds/sound24.m4a'),
  require('../../assets/Background sounds/sound25.m4a'),
  require('../../assets/Background sounds/sound26.m4a'),
  require('../../assets/Background sounds/sound27.m4a'),
  require('../../assets/Background sounds/sound28.m4a'),
  require('../../assets/Background sounds/sound29.m4a'),
  require('../../assets/Background sounds/sound30.m4a'),
  require('../../assets/Background sounds/sound31.m4a'),
  require('../../assets/Background sounds/sound32.m4a'),
  require('../../assets/Background sounds/sound33.m4a'),
  require('../../assets/Background sounds/sound34.m4a'),
  require('../../assets/Background sounds/sound35.m4a'),
];

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
      { id: 1, source: require('../../assets/day1/item1/image.png'), sound: require('../../assets/day1/item1/sound.mp3'), text: 'Kære Nora, \nglædelig jul!\n---\n\nHer er en julekalender, \nfra mig til dig,\nDet er et eventyr om venner, \nOg om at være sej.\n\nSig til din mor og far,\nde skal huske hvordan det var,\nat gå på eventyr i fantasien,\nhånd i hånd med poesien.\n\n---\nKærlig hilsen,\nTante Ditte!' },
      { id: 2, source: require('../../assets/day1/item2/image.png'), sound: require('../../assets/day1/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day1/item3/image.png'), sound: require('../../assets/day1/item3/sound.mp3'), text: 'Hør nu her, du barn af solen, \nvintermørket står på tå. \nTiden kalder, klokken ringer, \nlyset skal du hjælpe på.\n\nKom til Yder Udgård, Nora, \nhvor selv stjerner danser små. \nKom med Solnissen i følge, \nfør det hele går i stå.\n\nMundifari, Tidens fader, \nbyder jer til takkens fest. \nTag din hue, tag dit hjerte, \ntag din nysgerrighed som gæst.' },
    ]
  },
  2: {
    images: [
      { id: 1, source: require('../../assets/day2/item1/image.png'), sound: require('../../assets/day2/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day2/item2/image.png'), sound: require('../../assets/day2/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day2/item3/image.png'), sound: require('../../assets/day2/item3/sound.mp3'), text: 'Så står hun der, til en fest,\nNora er en æresgæst,\nMundifari, han vil takke stort,\nfor alt det de har gjort.\n\nSolnissen og Nora de,\nhar reddet julen før,\nde har gjort det kun fordi,\nNora bare tør!\n\nSikke mange smukke dyr,\nsikke dog et stort påstyr,\nalle Mundifaris venner,\nTiden udgår fra hans hænder.' },
    ]
  },
  3: {
    images: [
      { id: 1, source: require('../../assets/day3/item1/image.png'), sound: require('../../assets/day3/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day3/item2/image.png'), sound: require('../../assets/day3/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day3/item3/image.png'), sound: require('../../assets/day3/item3/sound.mp3'), text: 'Hvad er nu det for en dør?\nDen var der ikke lige før!\nGyldent lys stråler ud derfra,\nNora, mon du chancen tar?\n\nDet store mørke tomrums vídder,\nRækker helt til fordums tider,\nDer er solens stor og gylden,\nHer er sagn og evig tryllen.' },
    ]
  },
  4: {
    images: [
      { id: 1, source: require('../../assets/day4/item1/image.png'), sound: require('../../assets/day4/item1/sound.mp3'), text: 'Nora svæver som et møl,\nHer er alting i tom-rummet!\nDer er månen, som af sølv,\nAl snak er nu forstummet.\n\nNora tøver ikke, nej,\nHun ved hvor hun vil hen,\nHen hvor månen er på vej,\nHun er måneven.\n\nLille kugle sølv og støv,\nNora, kom og prøv!' },
      { id: 2, source: require('../../assets/day4/item2/image.png'), sound: require('../../assets/day4/item2/sound.m4a'), text: '' },
      { id: 3, source: require('../../assets/day4/item3/image.png'), sound: require('../../assets/day4/item3/sound.mp3'), text: 'Sikke noget!\nSikke noget vrøvl,\nHvad for noget?\nMere øv og bøvl.\n\nNora står bare der,\nHvad har hun nu gjort?\nEr der her det sner?\nEr det noget stort?\n\nHvad gør hun nu?\nEr alting nu itu?' },
    ]
  },
  5: {
    images: [
      { id: 1, source: require('../../assets/day5/item1/image.png'), sound: require('../../assets/day5/item1/sound.mp3'), text: 'Månenisse er mit navn,\nJeg gør ikke nogen gavn,\nJeg er grå og vrissen,\nJeg er Månenissen.\n\nDet her er din skyld!\nSikke du ka fjumse!\nDu er en lille byld,\nPå verdens numse.\n\nJeg ville være i fred,\nMen du kom og vækkede mig,\nDen grå nisse er vred,\nMånenissen er sur på dig.' },
      { id: 2, source: require('../../assets/day5/item2/image.png'), sound: require('../../assets/day5/item2/sound.mp3'), text: 'Nora er alene, for Solnissen er gået,\nEt allersidste knus har hun fået,\nMon Nora kan blive gode venner, \nMed en månenisse, hun ikke kender?\n\nFarvel min ven,\nVi ses igen.' },
    ]
  },
  6: {
    images: [
      { id: 1, source: require('../../assets/day6/item1/image.png'), sound: require('../../assets/day6/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day6/item2/image.png'), sound: require('../../assets/day6/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day6/item3/image.png'), sound: require('../../assets/day6/item3/sound.mp3'), text: 'Kom og se i vores gryde,\nSe hvad himlen spejler,\nOver bålet kan den syde,\nHvor mon månen Sejler.\n\nNora læner sig derned,\nDampen gør det tåget,\nMånen stopper, den er ked,\nLeder efter noget.\n\nTror du månenissen ved,\nHvorfor månen løber,\nMåske nissen ved besked,\nMåske han det røber.\n\nNora så i heksenes spejl,\nMånen lokkede, det var ikke en fejl.' },
    ]
  },
  7: {
    images: [
      { id: 1, source: require('../../assets/day7/item1/image.png'), sound: require('../../assets/day7/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day7/item2/image.png'), sound: require('../../assets/day7/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day7/item3/image.png'), sound: require('../../assets/day7/item3/sound.mp3'), text: 'Sikke et mægtigt hyl,\nStikker Nora som en syl,\nLige i bange bukserne,\nskygger skjuler luskerne.\n\nMellem træer løber skygger,\nNed i ulvedalens dyb,\nÆngstelige nerver trykker,\nEr det pelsdyr eller Kryb?\n\nUlvekongen venter dem,\nOg Nora er så sej,\nHan genkender månens ven,\nHun vil gå sin egen vej!\n\nNora, vil du blive hos os?\nLøbe med ulveflokken?\nMåske blive ulve boss?\nHele hylekorets lokken.' },
    ]
  },
  8: {
    images: [
      { id: 1, source: require('../../assets/day8/item1/image.png'), sound: require('../../assets/day8/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day8/item2/image.png'), sound: require('../../assets/day8/item2/sound.mp3'), text: 'Hvad gør en månennisse,\nSom næsten kun kan vrisse,\nNår nissen han skal tisse,\nMå han stå og bare pisse.\n\nHavet tordner helt vildt i dag,\nSavner sin store runde ven,\nTager fejl af Noras månesmag,\nSlipper hende snart igen.\n\nNu er Nora våd og kold,\nMånenissen ænser det slet ik.\nVidere Nora, ikke tid til hold,\nIngen hygge, ingen varm kakaodrik!' },
    ]
  },
  9: {
    images: [
      { id: 1, source: require('../../assets/day9/item1/image.png'), sound: require('../../assets/day9/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day9/item2/image.png'), sound: require('../../assets/day9/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day9/item3/image.png'), sound: require('../../assets/day9/item3/sound.mp3'), text: 'Fenrisulven knurrer godt,\nSå man næsten blir nervøs,\nNoras tøj er stadig vådt,\nFenrisulven han er løs!\n\nMåske mangler han en hånd,\nGuden Tyr så vakker var,\nMangler ikke Venskabsbånd,\nDe to er et makkerpar.\n\nMen hvad skal man med frihed,\nHvis man så er helt alene,\nBundet af sin venskabs ed,\nSætter man sin egen scene.\n\nNora er så træt af vrisseri!\nHun blir gal, og siger stop min fine ven,\nIkke mere månenisseri,\nNora springer bare hjem igen!' },
    ]
  },
  10: {
    images: [
      { id: 1, source: require('../../assets/day10/item1/image.png'), sound: require('../../assets/day10/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day10/item2/image.png'), sound: require('../../assets/day10/item2/sound.mp3'), text: 'Man kan prøve og prøve og prøve,\nMen hvis den anden ikke vil,\nMå man stoppe med at tøve,\nog klippe venskabs båndet til.\n\nHvis den anden kun er stædig,\nKold og smålig og perpleks,\nHvis han synes han er snædig,\nSom en gammel sulten heks.\n\nSå er der ikke nåed at gøre,\nSå må han sejle i sin egen sø,\nNoras tøj skal hjem og tørre,\nHåber at isen i hjertet kan tø.' },
    ]
  },
  11: {
    images: [
      { id: 1, source: require('../../assets/day11/item1/image.png'), sound: require('../../assets/day11/item1/sound.mp3'), text: 'Nora!\nDer er du!\n—\nJeg har savnet dig,\nGiv et knus til mig!\nHvordan har du det, \nSolsorten er ked!\ner du rask og glad,\nHar du fået mad?\nHvad har du oplevet,\nSikke dejlig dagen er blevet,\nfortæl fortæl fortæl,\nFortæl mig om dig selv!' },
      { id: 2, source: require('../../assets/day11/item2/image.png'), sound: require('../../assets/day11/item2/sound.mp3'), text: '' },
    ]
  },
  12: {
    images: [
      { id: 1, source: require('../../assets/day12/item1/image.png'), sound: require('../../assets/day12/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day12/item2/image.png'), sound: require('../../assets/day12/item2/sound.mp3'), text: 'Vi slukker lysene, ét for ét,\nLad mørket komme stille og let. \nLad flammerne i ovnen slukkes,\nLad asken hvile, døren lukkes.\n\nNår lyset slukkes, åbnes porten, \ntil drømme og til nattensorten. \nI mørket kan vi vente sammen, \nSlukker nu for lysets flammen.' },
    ]
  },
  13: {
    images: [
      { id: 1, source: require('../../assets/day13/item1/image.png'), sound: require('../../assets/day13/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day13/item2/image.png'), sound: require('../../assets/day13/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day13/item3/image.png'), sound: require('../../assets/day13/item3/sound.mp3'), text: 'Mørket var begyndelsen,\nStår der i forkyndelsen,\nDet er sandt som skrevet står,\nSelv ikke tiden går.\n\nMen trangen til at være,\nKan på alle tære,\nMørket skabte Mundifari,\nTidens far tog på safari.\n\nAf støv blev solen født,\nMørke blev med lyset mødt!' },
    ]
  },
  14: {
    images: [
      { id: 1, source: require('../../assets/day14/item1/image.png'), sound: require('../../assets/day14/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day14/item2/image.png'), sound: require('../../assets/day14/item2/sound.mp3'), text: '' },
    ]
  },
  15: {
    images: [
      { id: 1, source: require('../../assets/day15/item1/image.png'), sound: require('../../assets/day15/item1/sound.m4a'), text: '' },
      { id: 2, source: require('../../assets/day15/item2/image.png'), sound: require('../../assets/day15/item2/sound.m4a'), text: '' },
    ]
  },
  16: {
    images: [
      { id: 1, source: require('../../assets/day16/item1/image.png'), sound: require('../../assets/day16/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day16/item2/image.png'), sound: require('../../assets/day16/item2/sound.m4a'), text: '' },
      { id: 3, source: require('../../assets/day16/item3/image.png'), sound: require('../../assets/day16/item3/sound.mp3'), text: 'Så kom Theia månesjælen,\nUd af vestelommens dvælen,\nHvor hun gemte sig hos en beskytter,\nmen fra lommen Theia lytter.\n\nMånenissen gav en sviner,\nNoras håb og gode miner,\nNu ved Theia ikke hvem,\nDer hjælper med at finde hjem.\n\nSolnissen, får en idé,\nhan kan få det til at ske,\nNok var Månenissen slem,\nMen han fortryder, hjælper månen hjem.' },
    ]
  },
  17: {
    images: [
      { id: 1, source: require('../../assets/day17/item1/image.png'), sound: require('../../assets/day17/item1/sound.mp3'), text: 'Fra gammel tid blev hjertet tændt,\nsom vor Gaia blev hun kendt,\nmen den som tændte hjertet slag,\nvar hun som skabte nat og dag.\n\nVor nattemoder alting tåler,\net skjold af jern-ild fjerner stråler,\nlivet gav du store og små,\ntak for især tusmørkets grå.\n\nNora bragte vores Mor,\nop af lommen kom hun stor,\nhendes sjæl er vinter stærk,\ntak til Noras himmelværk.' },
      { id: 2, source: require('../../assets/day17/item2/image.png'), sound: require('../../assets/day17/item2/sound.m4a'), text: '' },
    ]
  },
  18: {
    images: [
      { id: 1, source: require('../../assets/day18/item1/image.png'), sound: require('../../assets/day18/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day18/item2/image.png'), sound: require('../../assets/day18/item2/sound.mp3'), text: '' },
    ]
  },
  19: {
    images: [
      { id: 1, source: require('../../assets/day19/item1/image.png'), sound: require('../../assets/day19/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day19/item2/image.png'), sound: require('../../assets/day19/item2/sound.mp3'), text: '' },
      { id: 3, source: require('../../assets/day19/item3/image.png'), sound: require('../../assets/day19/item3/sound.m4a'), text: '' },
    ]
  },
  20: {
    images: [
      { id: 1, source: require('../../assets/day20/item1/image.png'), sound: require('../../assets/day20/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day20/item2/image.png'), sound: require('../../assets/day20/item2/sound.m4a'), text: '' },
    ]
  },
  21: {
    images: [
      { id: 1, source: require('../../assets/day21/item1/image.png'), sound: require('../../assets/day21/item1/sound.mp3'), text: '' },
      { id: 2, source: require('../../assets/day21/item2/image.png'), sound: require('../../assets/day21/item2/sound.mp3'), text: 'Farvel Solnisse for i år,\nFarvel når solsort fløjten går,\nFarvel til Nora du er særlig,\nOg helt aldeles uundværlig.\n\nNu er historien færdig,\nNora var Ihærdig,\nDet var sidste gang,\nDet her er sidste sang.\n\nGlædelig jul,\nGlædelig jul,\nGlædelig jul.' },
      { id: 3, source: require('../../assets/day21/item3/image.png'), sound: require('../../assets/day21/item3/sound.m4a'), text: '' },
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

