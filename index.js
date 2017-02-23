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

function reduce(collection, callback, initialValue) {
  var result = initialValue;
 
  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });
 
  return result;
}

function sumBatteries(sum, battery) {
  sum += battery;
  return sum;
}

var totalBatteries = reduce(batteryBatches, sumBatteries, 0)

function countWords(hash, sentence) {
  var words = sentence.split(" ").length;
  if (hash[words] == undefined) {
    hash[words] = 1;
  }
  else {
    hash[words]++;
  }
  return hash;
}

var wordCountMap = reduce(monologueLines, countWords, {});
