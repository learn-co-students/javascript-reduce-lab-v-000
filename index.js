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

function addBatteries(total, battery) {
  return total += battery;
}

var totalBatteries = batteryBatches.reduce(addBatteries, 0);

var wordCountArray = monologueLines.map( function (sentence) {
	return sentence.split(" ").length
}).sort();

function callback(object, arrayItem) {
  if (object[arrayItem] === undefined) {
    var newObject = Object.assign({}, object, {[arrayItem]: 1});
  } else {
    var newObject = Object.assign({}, object, {[arrayItem]: object[arrayItem]+1});
  }
  return newObject;
}

const wordCountMap = wordCountArray.reduce(callback, {});
