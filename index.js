const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

var totalBatteries = batteryBatches.reduce((total, batch) => total += batch, 0)

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

var wordCountMap = monologueLines.reduce((map, line) => {
  // Determine the word count of each line
  var wordCount = line.split(" ").length

  // Creates a key/value pair in the map in order to start incrementing if the key/value pair does not yet exist
  if (!map[wordCount]) {
    map[wordCount] = 0;
  }

  //increment the key value pair
  map[wordCount] += 1;

  //return the map
  return map;
}, {})
