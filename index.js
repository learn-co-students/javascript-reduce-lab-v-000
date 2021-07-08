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
function total(result,battery,index,collection){
  return result=result+collection[index]
}
var totalBatteries=batteryBatches.reduce(total,0)
function wordcount(monologue) {

    var WordsArray=monologue.split(" ");
   return WordsArray.length;

  }
var monologuelengths=monologueLines.map(wordcount
)

var wordCountMap={}
for (var i = 1; i < 20; i++) {
  var count=0
function countLength(result,length) {

  if (length===i) {
    count=count+1};
    result=count;
    return result
  }
var countElement=monologuelengths.reduce(countLength,0)
if (countElement>0) {
  var wordCountMap=Object.assign({},wordCountMap,{[i.toString()]:countElement})
}
}
