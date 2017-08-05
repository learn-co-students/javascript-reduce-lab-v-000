const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

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

// any of the three below work!!!
var totalBatteries = batteryBatches.reduce((currentTotal, number) => currentTotal + number, 0);

// var totalBatteries = batteryBatches.reduce((currentTotal, number) => { return currentTotal + number }, 0);

// var totalBatteries = batteryBatches.reduce(
//   function(currentTotal, number) {
//     return currentTotal + number
//   }
// );

// var wordCountMap = monologueLines.reduce((allsentences, sentence) => {
//   let wordCount = sentence.split(' ').length;
  
//   if (!allsentences[wordCount]) {
//     allsentences[wordCount] = 0;
//   }

//   allsentences[wordCount]++
//   return allsentences;
// }, {});

var wordCountMap = monologueLines.reduce((allsentences, sentence) => {
  let wordCount = sentence.split(' ').length

  allsentences[wordCount] ? allsentences[wordCount]++ : allsentences[wordCount] = 1

  return allsentences

}, {})




