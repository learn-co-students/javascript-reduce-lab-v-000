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


// var total = [0, 1, 2, 3].reduce(function(sum, value) {
//   return sum + value;
// }, 0);
// // total is 6
// arr.reduce(callback[, initialValue])

var totalBatteries = batteryBatches.reduce ( (a,b) => {return a + b}, 0)

// Create a new variable called wordCountMap that reduces the monologueLines to a map that resembles the output as shown above.


// working on this answer - semi close
var wordCountMap = monologueLines.reduce(
  function(){
    var result = {}

    monologueLines.forEach( (sentence)=>
      {
        var sentence_word_count = (sentence.split(" ").length)

        if (!result[sentence_word_count]){  // this means the key doesnt exist so we'll set it
          result[sentence_word_count] = 0 // set the key/value with a count of zero
        }

        result[sentence_word_count]++;  // increment by 1
      }
  ) // for each
  return result
  }
)

// const wordCountMap = monologueLines.reduce((map, sentence) => {
//   const wordCount = sentence.split(' ').length;
//
//   if (!map[wordCount]) {
//     map[wordCount] = 0;
//   }
//
//   map[wordCount]++;
//
//   return map;
// }, {});
