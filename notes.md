Malki Davis AN HOUR AGO
in the first half of this lab i use

Malki Davis AN HOUR AGO
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function getSum(total, num) {
    return total + num;
}

var totalBatteries = batteryBatches.reduce(getSum)

Malki Davis AN HOUR AGO
and it gives a total


Matt Cassara AN HOUR AGO
Hi Malki!
Malki Davis AN HOUR AGO
Hey!

Malki Davis AN HOUR AGO
but in this round it does not `function countWords(sentence) { return sentence.split(" ").length } var wordCountMap = monologueLines.reduce(countWords)`

Malki Davis AN HOUR AGO
function countWords(sentence) {
    return sentence.split(" ").length
}

var wordCountMap = monologueLines.reduce(countWords)

Malki Davis AN HOUR AGO
its prob not the right function should prob use map but dont get why it didnt work

Malki Davis AN HOUR AGO
i guess basically my logic now is to map the word count to an array then iterate through the array and count the values through Object Assign

Malki Davis AN HOUR AGO
but then I don't use reduce at all


Matt Cassara AN HOUR AGO
Sorry looking over the lesson now! This is a tricky one. But yes your function is missing something

Matt Cassara AN HOUR AGO
the function we pass to reduce should accept two arguments
Malki Davis AN HOUR AGO
javascript is tricky :frowning:


Matt Cassara AN HOUR AGO
the array, and the total thus far
Malki Davis AN HOUR AGO
ok..so the first value would be the string converted to wordcount, and the second num?

Malki Davis AN HOUR AGO
and then it would take each one separately or combined?


Matt Cassara AN HOUR AGO
Our reduce function takes two arguments - the first is our callback function, and the other is our initial value

Matt Cassara AN HOUR AGO
our callback function accepts two arguments, the total so far and the current element in the array

Matt Cassara AN HOUR AGO
so our callback might be something like function(total, sentence){ ... }

Matt Cassara AN HOUR AGO
and we would pass that to our reducer like sentences.reduce( (total, sentence) { ... }, //initial value here )
Malki Davis AN HOUR AGO
gosh!

Malki Davis AN HOUR AGO
function countWords(sentence, num) {
  i = sentence.split(" ").length
    if (i) 
    Object.assign({}, i){
      num++
    }
}

Malki Davis AN HOUR AGO
var wordCountMap = monologueLines.map(countWords, 0)


Matt Cassara AN HOUR AGO
Hmm, not quite
Malki Davis AN HOUR AGO
lol


Matt Cassara AN HOUR AGO
We should be returning an object
Malki Davis AN HOUR AGO
we should have a list of these { '7': 2, '9': 1 }


Matt Cassara AN HOUR AGO
where the key is the number of words in the sentence, and the value is the count

Matt Cassara AN HOUR AGO
right

Matt Cassara AN HOUR AGO
So, should our initial value be an integer like 0 or something else?
Malki Davis AN HOUR AGO
0 and then once its found it should increment it


Matt Cassara AN HOUR AGO
Nope :smile:

cassaram09 AN HOUR AGO
Our starting value needs to be an object
mxdavis AN HOUR AGO
0 for 2


cassaram09 AN HOUR AGO
because thats what we're going to be modifying, and ultimately returning
mxdavis AN HOUR AGO
ok sort of makes sense theoretically


cassaram09 AN HOUR AGO
sentences.reduce( (total, sentence) { ... }, {} )

cassaram09 AN HOUR AGO
that's the value we're passing into our callback as the value for total
mxdavis AN HOUR AGO
is it sentences.reduce( (total, sentence) => { ... }, {} ) ?

mxdavis AN HOUR AGO
bc im getting an error without it


cassaram09 AN HOUR AGO
Yes that would work
mxdavis AN HOUR AGO
ok let me see what total and sentence gives me in console


cassaram09 AN HOUR AGO
or sentences.reduce( function(total, sentence) {}, {})

cassaram09 AN HOUR AGO
I was writing psuedocode before
mxdavis AN HOUR AGO
ok

mxdavis AN HOUR AGO
well total is an empty objec

mxdavis AN HOUR AGO
and sentence is each sentence

mxdavis AN HOUR AGO
so now basically i need to convert sentence to word count

mxdavis AN HOUR AGO
and create a new object based on that value with a value of 1

mxdavis AN HOUR AGO
then reduce will take all those objects and sum them up?


cassaram09 43 MINUTES AGO
we don't need to create a new object, we should be adding key / values to our starting object
mxdavis 41 MINUTES AGO
to total


cassaram09 41 MINUTES AGO
yep!
mxdavis 40 MINUTES AGO
monologueLines.reduce( (total, sentence) => { 
    total.push({ WordCount(sentence) : 1 });
}, 
{} 
)


cassaram09 39 MINUTES AGO
if total is an object, can we call push on it?

cassaram09 39 MINUTES AGO
How do we add key/values to objects?
mxdavis 39 MINUTES AGO
monologueLines.reduce( (total, sentence) => { 
    total[WordCount(sentence)] = 1 });
}, 
{} 
)

mxdavis 38 MINUTES AGO
monologueLines.reduce( (total, sentence) => { 
    total[WordCount(sentence)] += 1 });
}, 
{} 
)


cassaram09 38 MINUTES AGO
better!

cassaram09 37 MINUTES AGO
that might work, though we're missing two things

cassaram09 37 MINUTES AGO
try and run that code and see what happens
mxdavis 37 MINUTES AGO
i have red squigglies but let me try

mxdavis 36 MINUTES AGO
ok fixed the syntax


cassaram09 36 MINUTES AGO
can you paste it here?

cassaram09 35 MINUTES AGO
oh yeah I think you had an extra curly brace in there
mxdavis 35 MINUTES AGO
total
undefined
index.js:41 Uncaught TypeError: Cannot read property '7' of undefined
    at monologueLines.reduce (file:///Users/malkadavis/projects/flatiron/javascript/javascript-reduce-lab-v-000/index.js:41:10)
    at Array.reduce (native)
    at file:///Users/malkadavis/projects/flatiron/javascript/javascript-reduce-lab-v-000/index.js:40:16

mxdavis 33 MINUTES AGO
total becomes undefined after the first iteration


cassaram09 33 MINUTES AGO
Any guess as to why that might be happening?
mxdavis 32 MINUTES AGO
because it was never properly declared an object?


cassaram09 31 MINUTES AGO
nope

cassaram09 30 MINUTES AGO
our function manipulates total in our loop, then reuses it again the iteration of the loop... but our loop is returning undefined, so we have nothing to manipulate after the first loop
mxdavis 27 MINUTES AGO
ok so if i dont use the total it turns undefined?

mxdavis 27 MINUTES AGO
because the first iteration returns object

mxdavis 27 MINUTES AGO
only the second returns undefined

mxdavis 26 MINUTES AGO
sorry for driving u crazy js is not clicking for me yet and i hope i can understand it!


cassaram09 25 MINUTES AGO
No worries!

cassaram09 25 MINUTES AGO
We need to return the total at the end of the loop, so we can use it in the next iteration

cassaram09 25 MINUTES AGO
that's why we're getting the undefined error - we're not returning anything!
mxdavis 24 MINUTES AGO
ah ok

mxdavis 24 MINUTES AGO
js is all about returns


cassaram09 23 MINUTES AGO
ha yep

cassaram09 23 MINUTES AGO
need to specify those return values
mxdavis 21 MINUTES AGO
lol new error

mxdavis 21 MINUTES AGO
total NaN

mxdavis 21 MINUTES AGO
monologueLines.reduce( (total, sentence) => { 
    return total[WordCount(sentence)] += 1
}, 
{} 
)


cassaram09 20 MINUTES AGO
Is that going to return our total so far our the return value of incrementing a value ?
mxdavis 14 MINUTES AGO
monologueLines.reduce( (total, sentence) => { 
    var t = 1
    total[WordCount(sentence)], t ++
    return t
}, 
{} 
)


cassaram09 13 MINUTES AGO
ahhhh you're moving in the wrong direction
mxdavis 13 MINUTES AGO
hahaha


cassaram09 13 MINUTES AGO
:smile:

cassaram09 13 MINUTES AGO
let's step back

cassaram09 13 MINUTES AGO
monologueLines.reduce( (total, sentence) => { 
    return total[WordCount(sentence)] += 1
}, {} )

cassaram09 12 MINUTES AGO
we need to return the total

cassaram09 12 MINUTES AGO
return total[WordCount(sentence)] += 1 is returning something else
mxdavis 12 MINUTES AGO
ah ok


cassaram09 11 MINUTES AGO
:thumbsup:
mxdavis 11 MINUTES AGO
total
Object {7: NaN, 9: NaN}

mxdavis 11 MINUTES AGO
getting somewheeere!!


cassaram09 9 MINUTES AGO
nice!

cassaram09 8 MINUTES AGO
Any guess as to why we might be getting NaN as our value?
mxdavis 7 MINUTES AGO
im trying to play w it

mxdavis 7 MINUTES AGO
it says Not a Number

mxdavis 7 MINUTES AGO
string doesnt work, nor variable


cassaram09 7 MINUTES AGO
right, Not a Number ( NaN )

cassaram09 6 MINUTES AGO
total[WordCount(sentence)] += 1

cassaram09 6 MINUTES AGO
how does JS know that the value of total[wordCount(sentence)] is a number before we increment it?
mxdavis 6 MINUTES AGO
we first have to declare it


cassaram09 6 MINUTES AGO
bingo
mxdavis 3 MINUTES AGO
monologueLines.reduce( (total, sentence) => { 
    if (total[WordCount(sentence)]){
       total[WordCount(sentence)] += 1
       return total
    } else{
      total[WordCount(sentence)] = 1
      return total
    }
}, 
{} 
)


cassaram09 3 MINUTES AGO
nice. did that work?
mxdavis 2 MINUTES AGO


mxdavis A MINUTE AGO
holy cow we need some ice cream!

mxdavis A FEW SECONDS AGO
i think i may even understand a little until the next lab blows my mind

mxdavis A FEW SECONDS AGO
thanks soooo much for your patience

