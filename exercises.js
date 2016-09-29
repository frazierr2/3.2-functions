/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
  // *****QUESTION #1*****
function max(num1,num2){
    "use strict";
   if(num1 > num2){
     return num1;
   }else{
     return num2;
   }

    //...
}
var number1 = 10;
var number2 = 20;
var largest = max (number1,number2);
console.assert(largest == 20);
console.log(largest);


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
//*****QUESTION #2*****
function maxOfThree(num1,num2,num3){
    "use strict";

    var biggest = [num1, num2, num3];
    var max = Math.max.apply(null,biggest);
    return max;
}
var number1 = 5;
var number2 = 10;
var number3 = 15;
var largest = maxOfThree(number1,number2,number3);
console.log(largest);
console.assert(largest == 15);


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

//******QUESTION 3******
function isVowel(char){
    "use strict";
    //...
    if(char =='a'||char =='e'||char =='i'||char =='o'||char =='u'||char =='A'||char =='E'||char =='I'||char =='U'||char =='O'){
      return true;
    }else{
      return false;
    }
}

var letter = 'o';
var vowel = isVowel(letter);
console.log(vowel);
console.assert(vowel == true);
console.assert(isVowel('b') == false);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

//******QUESTION 4********
function rovarspraket(phrase){
    "use strict";
    var newPhrase = '';

    for(var i = 0; i < phrase.length; i++){
      var phaseChar = phrase[i];

      if(isVowel(phaseChar)|| phaseChar ==' '){
        newPhrase += phaseChar;
      }else{
        newPhrase += phaseChar + 'o' +phaseChar;
      }
      console.log(newPhrase);
    }
      return newPhrase;
  //...
}

 var word = 'this is fun';
 var newWord = rovarspraket(word);
 console.assert( newWord == 'tothohisos isos fofunon');
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(add){
    "use strict";
    var total = add.reduce(function(a,b){
   return a + b;
 }, 0);
    return total;

}

function multiply(times){
    "use strict";
    var timesTotal = times.reduce(function(a,b){
   return a * b;
 });
    return timesTotal;
}

var sumAll = [1,2,3,4];
var multiplyAll = [1,2,3,4];
var func1 = sum(sumAll);
var func2 = multiply(multiplyAll)
console.assert(func1 == '10');
console.log(func1);
console.assert(func2 == '24');
console.log(func2);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(s){
    "use strict";
    return s.split('').reverse().join('');
}
var wordToReverse = 'hello';
var backwordsWord = reverse(wordToReverse);
console.assert(backwordsWord == 'olleh');
console.log(backwordsWord);

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var totalLetters = words.sort(function (a,b) {
      return b.length - a.length
    });
  // alert(totalLetters[0]);
  return totalLetters[0];
}

var whichIs = ['which','word','is','bigger'];
var longest = findLongestWord(whichIs);
console.log(longest);
console.assert(longest == 'bigger');
// console.assert(longest == 'which');

// INSIDE FUNCTION::::::
// var lengthOfLongestWord = 0;
// for (var i = 0; i < words.length; i++) {
//   var word = words[i];
//   if (word.length > lengthOfLongestWord) {
//     lengthOfLongestWord = word.length;
//   }
// }

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
function filterLongWords(words, maxLength){
  var listOfLongWords = [];
  for (var i = 0; i < words.length; i++) {
     var word = words[i];
    if (word.length > maxLength) {
      listOfLongWords.push(word);
    }

  }
    return listOfLongWords;
}

var result =filterLongWords(['a','the','b'],2)
console.assert(filterLongWords(['a','the','b'],2));
 console.assert(result.length === 1)
 console.log(result);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------



//I used http://jsfiddle.net/xbUtR/ to help me with this problem. I could not get the assert to work but believe i didn't word it right.

function charFreq(string){
    "use strict";
    var freq = {};
    for(var i=0; i < string.length; i++){
      var char = string[i];
      if(freq[char]){
        freq[char] += 1;
      }else{
        freq[char] =1;
      }
    }

      return freq;


 }
var sentence = "abbabcbdbabdbdbabababcbcbab";
var recurrence = charFreq(sentence);
console.assert(recurrence == {'a': 7, 'b': 14, 'c': 3, 'd': 3});
console.log(recurrence);
