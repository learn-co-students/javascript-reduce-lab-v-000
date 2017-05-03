const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(addBateries, 0)

function addBateries(total, number) {
  return total + number;
}


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


// var wordCountMap = monologueLines.reduce(function (count, line) { 
//   let numKey = [line.split(' ').length]

//   if (numKey in count) {
//     count[numKey]++;
//   }
//   else {
//     count[numKey] = 1;
//   }
//   return count;
// }, {});









// function countWords(total, line) {
//   // return line.split(' ').length
//   return { total[ line.split(' ').length ]: 1 }
// }

var wordCountMap = monologueLines.reduce(countWords, {})

function countWords(total, line) {

  if ([line.split(' ').length] in total) {
    total[line.split(' ').length]++
  }
  else {
    total[line.split(' ').length] = 1
  }
  return total
}

