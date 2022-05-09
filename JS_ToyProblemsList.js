// Codewars Questions (Javascript)
// Return the number (count) of vowels in the given string.
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  return s.toFixed(2)
}
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.
// An empty array should be treated like a 0 in this problem.
function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
// Given an array of integers your solution should find the smallest integer.

// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// or this is another solution

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
//another solution

function longest(s1, s2) {
  let combined = s1 + s2;
  return combined.split('').filter((el, idx) => combined.indexOf(el) === idx).sort().join('');
}
// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   // =>  WE ARE THE CHAMPIONS MY FRIEND
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge. 
// Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`;
}
// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}
//or

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
//or
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works (Ruby example given):

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2
//This is a crazy math solution. Go to the following website for explanation ... http://www.sjsu.edu/faculty/watkins/Digitsum00.htm
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
//or

function digital_root(n) {
  let total = n.toString().split('').reduce((acc, el) => (acc += Number(el)), 0);
  return String(total).length === 1 ? total : digital_root(total);
}
//or

function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}
//or

function solution(digits){
  return [...Array(digits.length - 4)].map((el, idx) => +digits.slice(idx, idx + 5)).sort((a, b) => a - b).pop();
}
//or

function solution(digits){
  var r = 0;
  for (i = 0; i < digits.length - 4; i++) {
    r = Math.max(r, parseInt(digits.substr(i,5),10));
  }
  return r;
}
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
//or

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
//or
function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}
//or

function humanReadable(seconds) {
  let hours = getTwoDigits(Math.floor(seconds/60/60));
  let min = getTwoDigits(Math.floor((seconds - (hours*60*60)) / 60));
  let sec = getTwoDigits((seconds - (hours*60*60)) - (min * 60));
  return hours > 99 ? `${99}:${59}:${59}` : `${hours}:${min}:${sec}`;
}

function getTwoDigits(num) {
    return num < 10 ? '0' + num : num;
}
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

// Input to the function is guaranteed to be a single string.

// Examples
// // valid inputs:
// 1.2.3.4
// 123.45.67.89

// // invalid inputs:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
//or

function isValidIP(str) {
  return str.split('.').length === 4 && !str.includes(' ')
    ? str.split('.').every(el => +el <= 255)
    : false;
}
// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.
function multiplicationTable(row,col){
  
  let table = [];
  for(let i = 1; i <= row; i++) {
    let bucket = [];
    for(let j = 1; j <= col; j++) {
      bucket.push(i * j);
    }
    table.push(bucket);
  }
  return table;
}
// Production solution above. Creative solution below

function multiplicationTable(row,col){
  return [...Array(row)].map((_, i) =>
    [...Array(col)].map((_, j) => (i + 1) * (j + 1))
  );
}


// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}
//or
function anagrams(word, words) {
  return words.filter(el =>
    JSON.stringify(word.split('').sort()) ===
    JSON.stringify(el.split('').sort())
  );
}
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}
//or

function isSolved(a) {
  a=a.reduce((a,b)=>a.concat(b)).join('');
  return +(a.match(/([12])(..(\1|.\1.)..\1|.\1.\1..$|\1\1(...)*$)/)||[,0])[1]||!a.includes('0')-1
}
//or

function isSolved(board) {
  
  function checkHor() {
  var res;
    board.forEach(function(item){
      if (item[0] == item[1] &&
          item[0] == item[2] &&
          item[1] == item[2] &&
          item[0] != 0)
      res = item[0];
    });
    return res;
  }
  
  function checkVer() {
    for (var a = 0; a< 3; a++)
    {
    if (board[0][a]==board[1][a]&&
        board[1][a]==board[2][a]&&
        board[2][a]==board[0][a]&&
        board[0][a]!=0)
        return board[0][a];
    }
  }
  
  function checkA1(){
  if ((board[0][0]==board[1][1]&&
       board[1][1]==board[2][2]&&
       board[2][2]==board[0][0])||
     ( board[0][2]==board[1][1]&&
       board[1][1]==board[2][0]&&
       board[2][0]==board[0][2]))
      return board[1][1];
  }
  
 
  function gameOver() {
  for (var x = 0; x < 3; x++)
  for (var y = 0; y < 3; y++)
    if  (board[x][y] == 0)
      return -1;
  return 0;
  }
  
  return checkHor() || checkVer() || checkA1() || gameOver();
}
// This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// ###Task:

// You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

// The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

// Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).
// This approach is effective because it utilizes adding mirrored layers from the base middle layer of the diamond to the ends.
function diamond(n){
  if( !n%2 || n<1 ) return null;
  let x=0, add, diam = line(x,n);
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}

function line(spaces,stars){ return " ".repeat(spaces) + "*".repeat(stars) + "\n"; }

//or

function diamond(n){
  if (n%2 === 0 || n < 1) return null;
  let diam = '*'.repeat(n) + "\n";

  for(let i = n - 2; i > 0; i -= 2) {
    add = " ".repeat((n-i)/2) + "*".repeat(i) + "\n";
    diam = add + diam + add;
  }

  return diam;
}

// or this is the worst solution but my first answer

function diamond(n){
  if (n%2 === 0 || n < 1) return null;
  let diam = '', base = Math.floor(n/2);
  for(let i = 1; base >= 0; base--, i += 2) {
    diam += " ".repeat(base) + "*".repeat(i) + "\n";
  }
  for(let j = n - 2, start = 1; start <= n/2; start++, j -= 2) {
    diam += " ".repeat(start) + "*".repeat(j) + "\n";
  }

  return diam;
}
// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}
//or
// This approach combines all even numbers together in a bundled string and all odd numbers individually
function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
}
//or
//This approach is more sloppy but it escentially does the same as the functions above except uses (HOF).
function dashatize(num) {
  return num = num.toString().split("").map(function(c){
    return c % 2 ? "-" + c + "-" :  c ;
  }).join("").split("-").filter(a => a != "").join("-");
};
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

// or a more clever solution

function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}
// A child plays with a ball on the nth floor of a big building. The height of this floor is known.

// (float parameter "h" in meters. Condition 1) : h > 0)

// He lets out the ball. The ball bounces for example to two-thirds of its height.

// (float parameter "bounce". Condition 2) : 0 < bounce < 1)

// His mother looks out of a window that is 1.5 meters from the ground.

// (float parameters "window". Condition 3) : window < h).

// How many times will the mother see the ball either falling or bouncing in front of the window?

// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note

// You will admit that the ball can only be seen if the height of the rebouncing ball is stricty greater than the window parameter.

// Example:

// h = 3, bounce = 0.66, window = 1.5, result is 3

// h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).
function bouncingBall(h,  bounce,  window) {
  if (bounce <= 0 || bounce >= 1 || h <= 0 || window >= h) return -1
  return bouncingBall(h * bounce, bounce, window) + 2;
}

//or 

function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
// Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

// chained([a,b,c,d])(input)
// Should yield the same result as

// d(c(b(a(input))))
function chained(functions) {
  return function(input) {
    return functions.reduce(function(acc, el) {
      return el(acc);
    }, input);
  }
}
//or

function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}
//or code golf version

const chained = functions => input => functions.reduce((acc, el) => el(acc), input);
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};
//or a more clever solution.

Math.round = function(number) {
  return Math.floor(number + 0.5);
};

Math.ceil = function(number) {
  return (number | 0) + (number % 1 !== 0 ? 1 : 0);
};

Math.floor = function(number) {
  return number | 0;
};

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
//input array list of numbers
//output number which will be the index of the integer we are searchin for

function search(array, value) {
    //identify midpoint
    //identify if value is higher, lower, or equal to midpoint index
    //either recall function through recursion with sliced array or return index of the value
    let originalArray = array;
    
    function recursiveSearch(array, value) {
        let midpoint = findMidpointIndex(array);
        
        if(array[midpoint] === value || array.length === 1) {
            return originalArray.indexOf(value) !== -1 ? originalArray.indexOf(value) : null;
        } else if (array[midpoint] > value) {
            return recursiveSearch(array.slice(0, midpoint), value);
        } else {
            return recursiveSearch(array.slice(midpoint + 1, array.length), value);
        }
    }
    return recursiveSearch(array, value); 
}

function findMidpointIndex(array) {
    return Math.floor(array.length / 2);
}

console.log(search([1, 3, 16, 22, 31, 33, 34, 37], 31))

// Multiple big toy problems from JS Koans for Hack Reactor. I'm utilizing Jasmine testing and Underscore Framework.
// it("should find the largest prime factor of a composite number", function () {
    //i'm going to assume that the input will only be a composite number
    function isPrime(number) {
      let count = number - 1;
      while(count > 1) {
        // console.log('number: ' + count + ' modular: ' + number % count)
        if(number % count === 0) {
          return false;
        }
        count--;
      }
      return true;
    }

    function findFactors(number) {
      let factors = [number];
      let count = Math.ceil(number / 2);
      while(count > 0) {
        if(number % count === 0) {
          factors.push(count);
        }
        count--;
      }
      return factors;
    }

    let largestPrimeFactorOfComposite = function(number) {
      return findFactors(number).filter(isPrime).sort((a,b) => a - b).pop();
    }

//     expect(largestPrimeFactorOfComposite(52)).toBe(13);
//     expect(largestPrimeFactorOfComposite(3)).toBe(3);
//     expect(largestPrimeFactorOfComposite(7)).toBe(7);
//     expect(largestPrimeFactorOfComposite(50)).toBe(5);
//     expect(largestPrimeFactorOfComposite(10)).toBe(5);
//     expect(largestPrimeFactorOfComposite(6)).toBe(3);
//   });

//   it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
    //inputs are going to be the largest 3 digit numbers which are 999 & 999.
    //output is going to be the largest Pali

    //use helper function isPalindrome
      //this will compare the reverse of any number to the original number
        //reverse number by converting to string and reversing individual digits of the number

    //getLargestPalindrome
      //need to loop thru every number from 999 to 100
        //loop again from numbers 999 to 100
          //identify if product of two inputs is a palindrome
            //if yes then check if palindrome is larger than the current one. var largestPali should start at 0
      //return largestPali
    
    let getLargestPalindrome = (num1, num2) => {
      let largestPal = 0;
      for (var i = num1; i > 99; i--) {
        for (var j = num2; j > 99; j--) {
          let product = i * j;
          if (isPalindrome(product) && product > largestPal) {
            largestPal = product;
          }
        }
      }

      function isPalindrome(value) {
        let palindrome = Number(String(value).split('').reverse().join(''));
        return palindrome === value;
      }
      return largestPal;
    };

//     expect(getLargestPalindrome(999, 999)).toBe(906609);
//   });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    let lcm = (num1, num2) => {
      let numList = _.range(num1, num2 + 1);
      let counter = num2;
      let found = false;
      while(!found) {
        counter++;
        found = numList.every(num => counter % num === 0);
      }

      return counter;
    }
    expect(lcm(1, 3)).toBe(6);
    expect(lcm(1, 20)).toBe(232792560);
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    //This solution assumes if difference between range of two numbers. Prompt was not specific.
    let getDifferenceOfSquaresAndSums = (num1, num2) => {
      let numRange = _.range(num1, num2 + 1);
      let sumSquares = numRange.reduce((acc, el) => acc += Math.pow(el, 2), 0);
      let squareSums = Math.pow(numRange.reduce((acc, el) => acc += el), 2);
      return squareSums - sumSquares;
    };

    expect(getDifferenceOfSquaresAndSums(1,10)).toBe(2640);
  });

  it("should find the 10001st prime", function () {
    function isPrime(number) {
      let count = number - 1;
      while(count > 1) {
        // console.log('number: ' + count + ' modular: ' + number % count)
        if(number % count === 0) {
          return false;
        }
        count--;
      }
      return true;
    }

    function findNthPrime(n) {
      let primeList = [];
      let count = 2;
      while(primeList.length !== n) {
        if(isPrime(count)) {
          primeList.push(count);
        }
        count++;
      }
      // console.log(primeList);
      return primeList.pop();
    }

    //this test has been commented out because it takes the JS interpreter a minute to calculate the 10001's prime
    // expect(findNthPrime(10001)).toBe(104743);
  });

// How to convert an array of strings to a new data type:

// Assuming you have an array of strings, which their content is a number:
var arr=[ "3", "5", "31", "71", "12" ];

//The Short Way
var result=arr.map(Number);
result[3] // 71
typeof(result[3]) // "number"

//the long way
var result=[];
for (var i=0,l=arr.length;i<l;i++) result.push(+arr[i]); // or parseInt(arr[i]) or Number(arr[i])
result[3] // 71
typeof(result[3]) // "number"


// Google Interview Question (Order Statistic - In statistics, the kth order statistic of a statistical sample is equal to its kth-smallest value.)
// Find the nth sorted value in an array of numbers in O(N) runtime or less?

// BIG O for this problem is n + n/2 + n/4 + n/8 ... => 2n
// For a generic Merge Sort the runtime is n + 2 * n/2 + 4 * n/4 + 8 * n/8 => n log n

// The second problem is spliting the problem into smaller parts but still processing on all the parts to sort. It has an ever increasing coefficcient.

function findNthVal(arr, n) {
  let start = 0;
  let end = arr.length;
  let newArr = Array(arr.length);
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      newArr[start] = arr[i];
      start++;
    } else {
      newArr[end - 1] = arr[i];
      end--;
    }
  }

  newArr[start] = arr[0]

  if(start + 1 === n) {
    return newArr[start];
  } else if (start + 1 < n) {
    return findNthVal(newArr.slice(start + 1), n - (start + 1))
  } else if (start + 1 > n) {
    return findNthVal(newArr.slice(0, start), n)
  }
}

console.log(findNthVal([7, 5, 6,45,16,345,6789], 4))

// CTCI Find all numbers in a range of 1 -> 20 that balance the following formula? a^3+b^3 = c^3 + d^3.



//Find all permutations of a string with no duplicates
/*

Recursion is always tricky - Lets break down how the function below works
Three recursive calls are made. The inital function invocation and two additional calls until we get to our base case.
Once the base case returns the value of ['c']. That is when that value gets inserted to the first recursive call variable 
  called 'permutationsOfAllCharsExceptLast'
At that point the lastChar is a. So after we traverse through the for loop we return the answer [ 'ac', 'ca' ].
  Remember - the for loop simply places the lastChar in each possible position of the list of permutations list.
  Remember - this returned value was not a base case return but the return at the end of the function.
Now we have returned to our original function invocation with 'permutationsOfAllCharsExceptLast' equal to [ 'ac', 'ca' ].
At this point the lastChar is t. Once we traverse through the for loop again we have our answer of all permutations.

** The reason the 'permutations' variable is a SET is to remove duplicates. If we had the input of 'caat' it would give us
  24 permutations with multiple duplicates. Because we have the set, we only get 12 permutations for 'caat' with no duplicates

Please see below for the order of recursive calls

1st Call getPermutations('cat') = [ 'tac', 'atc', 'act', 'tca', 'cta', 'cat' ]
||
2nd Call getPermutations('ca') = [ 'ac', 'ca' ]
||
3rd call getPermutations('c') = ['c']

Also see the console.logs to show what the recursion looks like

allCharsExceptLast: ca
lastChar: t
allCharsExceptLast: c
lastChar: a
permutationsOfAllCharsExceptLast: c
permutations: ac
permutations: ac,ca
permutationsOfAllCharsExceptLast: ac,ca
permutations: tac
permutations: tac,atc
permutations: tac,atc,act
permutations: tac,atc,act,tca
permutations: tac,atc,act,tca,cta
permutations: tac,atc,act,tca,cta,cat
[ 'tac', 'atc', 'act', 'tca', 'cta', 'cat' ]


Psuodocode

base case = if string length <= 1 then return [string]
calc allCharsExceptLast var
calc lastChar var
recursively call using allCharsExceptLast (always 1 char less the the previous call) ex ('cat', 'ca', 'c')

create a SET to store the permutations
loop through the permutationsOfAllCharsExceptLast
  Place the lastChar in every avail position of the current purmutation
  add that new value to the permutations SET
return permutations
*/

function getPermutations(string) {
  
  //type and input validation
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  }

  // Base case
  if (string.length <= 1) {
    return [string];
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];
console.log(`allCharsExceptLast: ${allCharsExceptLast}`)
console.log(`lastChar: ${lastChar}`)
  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
console.log(`permutationsOfAllCharsExceptLast: ${permutationsOfAllCharsExceptLast}`)

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutation => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permu = permutation.slice(0, position) + lastChar + permutation.slice(position);
      permutations.add(permu);
  console.log(`permutations: ${permutations}`)
    }
  });

  return permutations;
}

console.log(getPermutations('cat'))

/*
The iterative solution is below:

function getPermutations(string) {
  if (string.length <= 1) {
    return new Set([string]);
  }
  
  let currentPermutations = new Set([string[0]]);
  for (let char = 1; char < string.length; char++) {
    let updatedPermutations = new Set();
    currentPermutations.forEach((permutation) => {
      for (let i = 0; i <= permutation.length; i++) {
        let newPermutation = permutation.slice(0, i) + string[char] + permutation.slice(i);
        updatedPermutations.add(newPermutation);
      }
    })
    currentPermutations = updatedPermutations;
  }
  
  return currentPermutations;
}
*/



//Rotate an NxN matrix by 90 degrees in place.
//This algorithm I created transfers the matrix layer from outer to inner like an onion. 

var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];
  
  let test2 = [[1,2,3,4,5],
               [0,1,2,3,4],
               [0,0,1,2,3],
               [0,0,0,1,2],
               [1,0,0,0,1]] 
               
  function rotateMatrix(matrix) {
    let length = matrix.length - 1;
    for(let layer = 0; layer < matrix.length / 2; layer++) {
      let last = length - layer;
      for(let item = layer; item < last; item++) {
        let top = matrix[layer][item];
        let offset = length - item;
        matrix[layer][item] = matrix[offset][layer]; //left => top
        matrix[offset][layer] = matrix[last][offset]; //bot => left
        matrix[last][offset] = matrix[item][last]; //right => bot
        matrix[item][last] = top; //top => right
      }
    }
    return matrix;
  }
  
  rotateMatrix(test2);
  
  console.log('after:');
  console.log(test2[0]);
  console.log(test2[1]);
  console.log(test2[2]);
  console.log(test2[3]);
  console.log(test2[4]);






//If an element in a MxN matrix is 0, make its entire row and column set to 0.


var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];
  
  let test2 = [[1,2,3,4,5],
               [0,1,2,3,4],
               [0,0,1,2,3],
               [0,0,0,1,2],
               [1,0,0,0,1]] 
               
  
  function zero(matrix) {
    let zeroLocations = [];
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === 0) {
          zeroLocations.push([i,j]);
        }
      }
    }
  
    zeroLocations.forEach((item) => {
      zeroifyRow(item[0]);
      zeroifyCol(item[1]);
    })
  
    function zeroifyRow(row) {
      for(let i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = 0;
      }
    }
  
    function zeroifyCol(col) {
      for(let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
      }
    }
  
    return zeroLocations;
  }
  
  zero(test2);
  
  var printMatrix = function(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      console.log(matrix[i]);
    }
  };
  
  printMatrix(test2);


  //You are climbing a stair case. It takes n steps to reach to the top.
  //Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  // Brute Force Algo Time = O(2^n) & Size = 2^n
// function climbStairs(n) {
//   return climb_Stairs(0, n);
// }
// function climb_Stairs(i, n) {
//   if (i > n) {
//       return 0;
//   }
//   if (i == n) {
//       return 1;
//   }
//   return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
// }


// Recursion with Memoize. Time = O(n), Space = O(n)
// function climbStairs(n) {
//   let memo = [];
//   return climb_Stairs(0, n, memo);
// }
// function climb_Stairs(i, n, memo) {
//   debugger;
//   if (i > n) {
//       return 0;
//   }
//   if (i == n) {
//       return 1;
//   }
//   if (memo[i] > 0) {
//     return memo[i];
//   }

//   memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
//   return memo[i];
// }

// dynamic programming Time = O(n), Space = O(n); you can make this Space O(1) if you didn't store the answers in dp variable. Instead you just have two variables equal to the previous two index values that constantly update.
function climbStairs(n) {
  if (n === 1) {
    return 1;
  }
  
  let dp = [1, 2];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i-2];
  } 
  return dp[n - 1];
}


//Facebook Problem: Given a list of Birth and Death years. Identify which year has the peak population.
//I solved this in O(n log n) time & O(1) space. I can reduce time if i find a way to solve without sorting.

/*
B     D
2000  2010 
1975  2005
1975  2003
1803  1809
1750  1869
1840  1935
1803  1921
1894  1921


Timeline
1750 1  1
1803 2  3
1810 -1 2
1840 1  3
1870 -1 2
1894 1  3
1922 -2 1
1936 -1 0
1975 2  2
2000 1  3
2004 -1 2
2006 -1 1
2011 -1 0
*/

let births = [2000, 1975, 1975, 1803, 1750, 1840, 1803, 1894];
let deaths = [2010, 2005, 2003, 1809, 1869, 1935, 1921, 1921];

function getPopulationPeak(births, deaths) {
  births = births.sort();
  deaths = deaths.sort();
  let range = getRange(births, deaths);
  return range;;
}

function getRange(b, d) {
  let sum = 0;
  let maxSum = 0;
  let peakYear = 0;
  let i = 0;
  let j = 0;
  while (i < b.length) {
    if (b[i] < d[j] + 1) {
      sum++;
      if (sum > maxSum) {
        maxSum = sum;
        peakYear = b[i];
      }
      i++;
    } else {
      j++;
      sum--;
    }
  }
  return [peakYear, maxSum];
}

getPopulationPeak(births, deaths);


//Slack Engineer Warmup Problem (This problem is still hard I believe if you want a runtime faster than O(n))
//Write a function that calculates the exponent of a number (Math.pow)
//runtime is O(log n) and i believe space will be O(n);

function pow(a, b) {
  if (b === 0) return 1;
  else if (b === 1) return a;
  else if (b === 2) return a * a;

  let isNegative = b < 0;
  if (isNegative) b = Math.abs(b);

  if (b % 2 === 0) {
    result = pow(a, b / 2) * pow(a, b / 2);
  } else {
    result = a * pow(a, b - 1);
  }

  return isNegative ? 1 / result : result;
}

console.log(pow(2, 4)) // => 16
console.log(pow(2, 3)) // => 8
console.log(pow(2, 2)) // => 4
console.log(pow(2, 1)) // => 2
console.log(pow(2, 0)) // => 1
console.log(pow(-2, 4)) // => 16
console.log(pow(-2, 3)) // => -8
console.log(pow(2, -2)) // => 0.25
console.log(pow(-2, -2)) // => 0.25
console.log(pow(2, -3)) // => 0.125
console.log(pow(-2, -3)) // => -0.125
console.log(pow(2, -4)) // => 0.0625



function maxSubArr(arr) {
  let curr = arr[0];
  let max = curr;
  for (let i = 1; i < arr.length; i++) {
    let amt = Math.max(curr += arr[i], arr[i]);
    if (amt > curr) {
      curr = amt;
    }
    max = Math.max(max, amt);
  }

  return max;
}

maxSubArr([-2, -3, 4, -1, -2, 1, 5, -3]);
maxSubArr([-5, -1, -3, -2])
maxSubArr([7, -1, -3, -2, 6, 1]);
maxSubArr([7, -1, -3, -2, 6, 2]);





/*
 Write a function that, given:

    an amount of money
    an array of coin denominations

computes the number of ways to make the amount of money with coins of the available denominations. 


We can start by making an array waysOfDoingNCents, where the index is the amount and the value at each index is the number of ways of getting that amount. 
const waysOfDoingNCents1 = [
  1,  // 0c:  No coins
  1,  // 1c:  1 1c coin
  1,  // 2c:  2 1c coins
  1,  // 3c:  3 1c coins
  1,  // 4c:  4 1c coins
  1,  // 5c:  5 1c coins
];

const waysOfDoingNCents1And2 = [
  1,      // 0c:  No change
  1,      // 1c:  No change
  1 + 1,  // 2c:  New [(2)] aka [2, (1,1)]
  1 + 1,  // 3c:  New [(2, 1)]
  1 + 2,  // 4c:  New [(2, 1, 1), (2,2)]
  1 + 2,  // 5c:  New [(2, 1, 1, 1), (2, 2, 1)]
];
*/

function changePossibilities(amountLeft, denominations) {

  // Calculate the number of ways to make change
  /*
  let possibilities = store an array the size of the amountLeft
  make the first index = 1
  for every denomination
    for every possibilities index
      calculate the remainder
      update possibilities
  return possibilities
  
  */
  
  let possibilities = new Array(amountLeft + 1).fill(0);
  possibilities[0] = 1;
  
  for (let coin of denominations) {
    for (let total = coin; total <= amountLeft; total++) {
      let remainder = total - coin;
      possibilities[total] += possibilities[remainder];
    }
  }

  return possibilities[amountLeft];
}



//N Queens Problem - Given an N*N chess board, place N queens such that they can't attack one another.
const N = 4
 
function printSolution(board)
{
    let answer = [];
    for(let i = 0; i < N; i++)
    {
        let temp = [];
        for(let j = 0; j < N; j++)
        {
            temp.push(board[i][j])
        }
      console.log(temp)
        answer.push(temp)
    }

  console.log(answer)
}
 
// A utility function to check if a queen can
// be placed on board[row][col]. Note that this
// function is called when "col" queens are
// already placed in columns from 0 to col -1.
// So we need to check only left side for
// attacking queens
function isSafe(board, row, col)
{
 
    // Check this row on left side
    for(let i = 0; i < col; i++){
        if(board[row][i] == 1)
            return false 
    }
 
    // Check upper diagonal on left side
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j])
            return false
 
    // Check lower diagonal on left side
    for (i = row, j = col; j >= 0 && i < N; i++, j--)
        if (board[i][j])
            return false
 
    return true
}
 
function solveNQUtil(board, col){
     
    // base case: If all queens are placed
    // then return true
    if(col >= N)
        return true
 
    // Consider this column and try placing
    // this queen in all rows one by one
    for(let i=0;i<N;i++){
 
        if(isSafe(board, i, col)==true){
            // Place this queen in board[i][col]
            console.log(i, col)
            board[i][col] = 1
 
            // recur to place rest of the queens
            if(solveNQUtil(board, col + 1) == true)
                return true
 
            // If placing queen in board[i][col
            // doesn't lead to a solution, then
            // queen from board[i][col]
            board[i][col] = 0
        }
    }
    // if the queen can not be placed in any row in
    // this column col then return false
    return false
}
 
// This function solves the N Queen problem using
// Backtracking. It mainly uses solveNQUtil() to
// solve the problem. It returns false if queens
// cannot be placed, otherwise return true and
// placement of queens in the form of 1s.
// note that there may be more than one
// solutions, this function prints one of the
// feasible solutions.
function solveNQ(){
    let board = [ [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0] ]
 
    if(solveNQUtil(board, 0) == false){
        console.log("Solution does not exist")
        return false
    }
 
    printSolution(board)
    return true
}
 
// Driver Code
solveNQ()

/*
  Solution looks like so with console.logs

  0 0
  2 1
  3 1
  1 2
  1 0
  3 1
  0 2
  2 3
  [ 0, 0, 1, 0 ]
  [ 1, 0, 0, 0 ]
  [ 0, 0, 0, 1 ]
  [ 0, 1, 0, 0 ]
*/







/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.
*/

var combinationSum = function (nums, target) {
  let combinations = [];
  nums.sort((a, b) => a - b);

  function backtrack(tempList, remaining, start) {
      for (let i = start; i < nums.length && nums[i] <= remaining; i++) {
          if (nums[i] === remaining) {
              combinations.push([...tempList, nums[i]]);
          } else {
              backtrack([...tempList, nums[i]], remaining - nums[i], i);
          }
      }
  }

  backtrack([], target, 0);
  return combinations;
};

console.log(combinationSum([2, 4, 6, 10], 10))

/*
##############################################################################################################
##############################################################################################################

Past Interview Questions
*/


/*
 * FLOQAST Interview Question June 2021
 THE SITUATION:
 We have an application with 26 buttons labeled A through Z
 that users can click any button in any order they want and as many times as they want.

 Each time a user clicks a button the action is logged in an array.

 THE PROBLEM:
 Unfortunately, for our app, it has been reported that some users are encountering an error.
 In addition to resolving the error we would like to provide our customer success team
 with a list of users that encountered the error so we can send them some we’re sorry swag.

 WHAT WE KNOW:
 What we know is that the error is caused by a sequence of button presses in exactly this order:
 A press followed by B press followed by C press.
 A -> B -> C -> error

 THE TASK:
 Given a sorted list of logs (by time, oldest to newest) of this form
 const logs = [
  { userId: 1, action: 'A' },
  { userId: 2, action: 'Z' },
  { userId: 1, action: 'B' },
  { userId: 3, action: 'H' },
  { userId: 1, action: 'C' }
 ]

 Create a function that will return
 a list of users that experienced the error e.g. [ 1 ]
 
 
 tc = O(3n) | sc = O(2n)
 
 let hash
 let usersWithError = new Set()
 for every log in logs
  conditions:
    1. if a user does not exist in hash then add the user with a value of an array with their action
    2. if user does exist then add/push action to that users value of array
 for every hash value
  for every action in the array identify if the series occurs
    if the series occures then add the user to the usersWithError set
 
 return usersWithError
 
 */

// function usersWithError(logs) {
//   let hash = {};
//   let usersWithErrors = [];
//   logs.forEach((log) => {
//     const {userId, action} = log;
//     hash[userId] ? hash[userId].push(action) : hash[userId] = [action]
//   })
//   let hashKeys = Object.keys(hash);
//   for (let key of hashKeys) {
//     let sequenceStorage = 0;
//     for (let value of hash[key]) {
//       if (value === "A") {
//         sequenceStorage++;
//       } else if (value === "B" && sequenceStorage === 1) {
//         sequenceStorage++;
//       } else if (value === "C" && sequenceStorage === 2) {
//         usersWithErrors.push(key);
//         break;
//       } else {
//         sequenceStorage = 0;
//       }
//     }
//   }
  
//   return usersWithErrors;
// }

/*
TC = O(n) n meaning logs || SC = O(2u) u meaning unique users in the logs

let hash
let usersWithErrors
for every log in logs 
  conditions:
    1. If a user does not exist in the hash && action is "A" then add them to the hash.
    2. if a user does not exist in he hash && action is != "A" then do nothing
    3. If a user does exist in the hash && if the action is "B" && if the hash value
       is "A" then update the hash;
    4. If a user does exist in the hash && if the action is "C" && if the hash value
       is "B" then update the hash and add the user to the usersWithError array;
    5. If a user does exist and the action is not the subsequent value required then delete the user from the hash;
return usersWithErrors

*/

const logs = [
  { userId: 1, action: 'A' },
  { userId: 2, action: 'Z' },
  { userId: 1, action: 'B' },
  { userId: 3, action: 'H' },
  { userId: 1, action: 'B' },
  { userId: 1, action: 'C' },
  { userId: 1, action: 'A' },
  { userId: 1, action: 'B' },
  { userId: 1, action: 'C' }  
 ]
// This is the better answer that I came up with right after the interview. Interview shock is real.
const usersWithErrorLogs = ((logs) => {
  let hash = {};
  let usersWithErrors = [];
  logs.forEach((log) => {
    const {userId, action} = log;

    if (!hash[userId] && action === "A") {
      hash[userId] = action;
    } else if (hash[userId] && action === "B" && hash[userId] === "A") {
      hash[userId] = action;
    } else if (hash[userId] && action === "C" && hash[userId] === "B") {
      hash[userId] = action;
      usersWithErrors.push(userId);
    } else if (hash[userId]) {
      delete hash[userId];
    }
  })

  return usersWithErrors;
});

console.log(usersWithErrorLogs(logs));