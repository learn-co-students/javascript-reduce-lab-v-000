const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

var totalBatteries = batteryBatches.reduce(add, 0)

function add(accumulator,currentValue) {
  return accumulator + currentValue
}

//var totalBatteries = batteryBatches.reduce((prev,curr) => prev + curr); //<--this will also work
//see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example


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

var word_count_by_line = []
var keys = []
var counts = {}
var wordCountMap = monologueLines.reduce(word_count_object,0)

function word_count_object(accumulator, currentValue, currentIndex, array) {
  word_count_by_line.push(currentValue.split(' ').length)
  keys = word_count_by_line.filter((array_item,index,array) => array.indexOf(array_item) == index);
  for (let i = 0; i < keys.length; i++) {
  	counts[keys[i]] = 0
    for (let j = 0; j < word_count_by_line.length; j++) {
      (keys[i] === word_count_by_line[j]) ? counts[keys[i]]++ : 0
    }
  }
  return counts
}
