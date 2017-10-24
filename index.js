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

const wordCountMap = (reduce(monologueLines, countWords, 0));

function countWords(result, unit, index, collection) {
  result = [];
  for (var i = collection.length - 1; i >= 0; i--) {
    result.push(collection[i].split(" ").length);
  }
  return tallyResults(result);
}

function tallyResults(array){
  var counts = {};
  for(var i = 0; i< array.length; i++) {
    var num = array[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
   }
  return counts;
}

function reduce(collection, callback, initialValue) {
  let result = initialValue;
  collection.forEach((unit, index) => {
    result = callback(result, unit, index, collection);
  });
  return result;
}

const totalBatteries = (reduce(batteryBatches, countBatteries, 0));

function countBatteries(result, battery) {
  result = result + battery;
  return result;
}
