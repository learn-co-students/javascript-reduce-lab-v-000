const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

var totalBatteries = batteryBatches.reduce(function(total, num){
  return total + num
  }, 0)

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

var wordCountMap = countWords(monologueLines)

function countWords(array){
  var string = ''
  var wordCounts = []
  var spacesCount = 1

  for(let i = 0, l = array.length; i < l; i++) {
    string = array[i]
    for(let j = 0, k = string.length; j < k; j++) {
      if(string[j] === ' ') {
        spacesCount++
      }
    }
    wordCounts[i] = spacesCount
    spacesCount = 1
    string = ''
  }

  var currentNumber = 0
  var numberCount = 0
  var currentWordCount = []
  var result = {}


  for(let i = 0, l = wordCounts.length; i < l; i++) {
    currentNumber = wordCounts[i]

    for (let j = 0; j < l; j++) {
      if(wordCounts[j] === currentNumber) {
        numberCount++
      }
    }

    if(currentWordCount.includes(currentNumber) === false) {
      currentWordCount.push(currentNumber)
      var a = currentNumber.toString();
      result[a] = numberCount
    }

    numberCount = 0
  }
  return result
}
