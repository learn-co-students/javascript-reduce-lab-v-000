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

const totalBatteries = batteryBatches.reduce((a, b) => a + b, 0)

// const totalBatteries = batteryBatches.reduce(function (a, b) {
//   debugger;
//   return a + b 
// })

// console.log(totalBatteries)

const wordCountMap = monologueLines.reduce(function (lines, value, index) {
  debugger;
  let wordCount = value.split(' ').length
  if (lines[wordCount]) {
    lines[`${wordCount}`]++ 
  } else {
    lines[`${wordCount}`] = 1
  }
  
  return lines  

}, {})
// the {} indicates that lines is a new empty object

// console.log(wordCountMap)
// monologueLines[0].split(' ').length

// [0, 1, 2, 3, 4].reduce(
//   function (accumulator,
//     currentValue,
//     currentIndex,
//     array
//   ) {
//     return accumulator + currentValue;
//   }
// );