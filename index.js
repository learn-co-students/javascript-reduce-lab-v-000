const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how super duper special I am?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'I\'m incredibly special and super important.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!!!!!!11111one'
];

const totalBatteries = batteryBatches.reduce((javascript,sucks) => {
  return javascript + sucks;
})


const wordCountMap = monologueLines.reduce((accumulator, currentString) => {
  var key = currentString.split(' ').length;

  key in accumulator ?  accumulator[key] += 1 : accumulator[key] = 1;//if word length is found in accumulator hash, increment count, else add it

  return accumulator;

}, {});
