# 50 Days of JavaScript by Codedamn

Solutions of 50 days of JavaScript by [Codedamn](https://codedamn.com/50-days-of-js)

![50-Days-of-js](https://github.com/sahilatahar/50-Days-of-JavaScript/assets/100127570/2594dffe-1ee2-4840-9315-dd371beb69ed)

## Day 1: 🎲 Random Number Generator in Range

Create a function which returns a random number in the given range of values both inclusive

[💡 See Solution](./Day-01/randomNumberGeneratorInRange.js)

## Day 2: ↩️ Reverse a String

Write a program to reverse a string. String can be reversed by iterating it and storing it in reverse order. String can also be reversed by converting it to array, then joining it after reversing

[💡 See Solution](./Day-02/reverseAString.js)

## Day 3: ↩️ Reverse a Given Integer Number

Write a program to reverse a given integer number. The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0. A simple approach to reverse a number could also be to convert it in to a string and then reverse it.

[💡 See Solution](./Day-03/reverseGivenInteger.js)

## Day 4: Convert ⏰ Time Format From 12Hrs to 24Hrs

Write a function which can convert the time input given in 12 hours format to 24 hours format. The check for `AM` and `PM` can be verified using endsWith String method. An extra 0 would be needed if the hours have single digit.

[💡 See Solution](./Day-04/convertTo24HrsFormat.js)

## Day 5: 🔢 Count Characters Between `X`

Write a function which accepts a string argument and returns the count of characters between the first and last character `X`. indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively. If the match is not found, these methods return -1.

[💡 See Solution](./Day-05/getTheGapX.js)

## Day 6: ✂️ Truncate String Words

Write a function to truncate a string to a certain number of words. Truncate a string to a certain number of words.

[💡 See Solution](./Day-06/truncateWithWordLimit.js)

## Day 7: Validate Indian 📱 Mobile Number

Create a regular expression to validate if the given input is valid Indian mobile number or not. Regular expression check has to have an optional `+ 91` or `0` in the beginning, then an optional space and 10 digits. test method of regular expression can be used to validate if the mobile number pattern matches or not.

[💡 See Solution](./Day-07/validateMobile.js)

## Day 8: Days Difference Between Two 📆 Dates

Write a function which accepts two valid dates and returns the difference between them as number of days. The difference between 2 dates in JavaScript will give the time difference in milliseconds. Time difference can be converted in to days by dividing the 24Hrs time in milliseconds.

[💡 See Solution](./Day-08/getDaysBetweenDates.js)

## Day 9: Check 🗑️ Empty Object

Write a function to check if an object is empty or not?

[💡 See Solution](./Day-09/isObjEmpty.js)

## Day 10: ❌ Remove Array Element...

Write a function to remove array element based on object property ?

[💡 See Solution](./Day-10/removeArrayElement.js)

## Day 11: 🧮 Nth Value of fibonacci Series

Write a function to return the N-th value of the Fibonacci sequence

[💡 See Solution](./Day-11/fibonacci.js)

## Day 12: 🔄 Convert Number to English

Given a number from `0` to `999,999,999,999` spell out that number in English.

**Step 1**
Handle the basic case of `0` through `99`.
If the input to the program is `22`, then the output should be `twenty-two`.
Your program should `complain loudly` if given a number outside the blessed range.

**Step 2**
Implement breaking a number up into chunks of thousands.
So `1234567890` should yield a list like `1, 234, 567, and 890` while the far simpler `1000` should yield just `1` and `0`.
The program must also report any values that are out of range.

**Step 3**
Now handle inserting the appropriate scale word between those chunks.
So 1234567890 should yield `1 billion 234 million 567 thousand 890`. The program must also report any values that are out of range. It's fine to stop at `trillion`.

**Step 4**
Put it all together to get nothing but plain English.
`12345` should give `twelve thousand three hundred forty-five`.
The program must also report any values that are out of range.

[💡 See Solution](./Day-12/sayNumberInEnglish.js)

## Day 13: Calculate Age on 🌍 Planets

Convert given seconds to space age on all planets of our solar system
Instructions
Given an age in seconds, calculate how old someone would be on:

**Mercury**: orbital period `0.2408467` Earth years
**Venus**: orbital period `0.61519726` Earth years
**Earth**: orbital period `1.0` Earth years, `365.25` Earth days, or `31557600` seconds
**Mars**: orbital period 1.8808158 Earth years
**Jupiter**: orbital period `11.862615` Earth years
**Saturn**: orbital period `29.447498` Earth years
**Uranus**: orbital period `84.016846` Earth years
**Neptune**: orbital period `164.79132` Earth years
Pluto is not a planet

So if your function was called with 436575687 as the argument i.e `spaceAge(436575687)` it should return `{ "Mercury": 57.44, "Venus": 22.49, "Earth": 13.83, "Mars": 7.36, "Jupiter": 1.17, "Saturn": 0.47, "Uranus": 0.16, "Neptune": 0.08 }`

**⚠️IMPORTANT!!**
Your spaceAge function should return the (already given) yearsInAllPlanets object after setting age on each planet (each property of the object)

THE VALUE OF EACH PROPERTY SHOULD BE A NUMBER( AND SHOULD HAVE MAXIMUM 2 DIGITS AFTER THE POINT) for example 4.34

[💡 See Solution](./Day-13/spaceAge.js)

## Day 14: 🔄 Convert Digits Array Base

Convert given array of `digits` of a base to another asked base

**Instructions**
Convert a number, represented as a sequence of digits in one base, to any other base.

Implement general base conversion. Given a number in base a, represented as a sequence of digits, convert it to base b.

Example
input: `convertDigitsToAskedBase([5, 8], 10, 16)`
output: `[3, 10]`
`convertDigitsToAskedBase([5, 8], 10, 16)` is passed to the `convertDigitsToAskedBase` function i.e 58 in base 10 as [5, 8] in array is passed and asked to convert to base 16 which is 310. This should be returned in array as [3, 10].

Note
[3, 10] is not other than [3, 10] is because 3 and 10 both are valid digits of base 16

[3, 1, 0] is WRONG because even though 1 and 0 are valid digits of base 16 it can be represented as 10 without taking the 3rd place.

[💡 See Solution](./Day-14/convertDigitsToAskedBase.js)

## Day 15: ✅ Check Pangram Sentence

Determine if a sentence is a pangram

**Instructions**

Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

[💡 See Solution](./Day-15/isPangram.js)

## Day 16: 🙋‍♂️ Ask The Bob

**Instructions**
Bob is a lackadaisical teenager. In conversation, his responses are very limited.
Bob answers 'Sure.' if you ask him a question, such as "How are you?".
He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.
Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.

[💡 See Solution](./Day-16/askTheBob.js)

## Day 17: 📜 Longest Consecutive Sequence

Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order.

**Example**
Input: `[100,4,200,1,3,2]`
Output: 4 // LCS `[1, 2, 3, 4]`

Conceptually this is how it should work. Copy all the elements of the array in a set. Iterate the array and in each iteration determine if the current element will lead to new subsequence by checking if there is no element less than the current, present in the set. Then find how long this subsequence can be by incrementing the count till there is consecutive elements in the set. In the end return the longest consecutive sequence.

[💡 See Solution](./Day-17/longestConsecutiveSequence.js)

## Day 18: Calculate 🌾 Grains

Calculate Grains on a given square on a chessboard

**Instructions**
Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.

There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board, with the number of grains doubling on each successive square.

There are 64 squares on a chessboard (where square 1 has one grain, square 2 has two grains, and so on).

Write code that shows:

- How many grains were on a given square
- Total number of grains that can exist on the chessboard given the condition

NOTE

- Answer should be a BigInt value
- Both function is given to you separate and you should write code in both functions.

[💡 See Solution](./Day-18/calculateGrains.js)

## Day 19: Resistor 🎨 Color map

**Instructions**
If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:

Each resistor has a resistance value. Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands.

These colors are encoded as follows:

- Black: 0
- Brown: 1
- Red: 2
- Orange: 3
- Yellow: 4
- Green: 5
- Blue: 6
- Violet: 7
- Grey: 8
- White: 9

The goal of this exercise is to create a way:

- to look up the numerical value associated with a particular color band
- to list the different band colors

Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.

**NOTE**
Although the color names are capitalized in the description, the function colorCode will always be called with the lowercase equivalent, e.g brown instead of Brown.

[💡 See Solution](./Day-19/colorCode.js)

## Day 20: Add Two Numbers

Just add two numbers.

[💡 See Solution](./Day-20/addTwoNumbers.js)

## Day 21: 🤝🏻 Union of Two Arrays

Write the code for the function which returns the the union of the two given arrays.

[💡 See Solution](./Day-21/unionOfArrays.js)

## Day 22: 🌟 Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

The argument can contain a string or an array

For example: `uniqueInOrder([1,2,2,3,3])` should return `[1,2,3]`

`uniqueInOrder('ABBCcAD')` should return `['A', 'B', 'C', 'c', 'A', 'D']`

[💡 See Solution](./Day-22/uniqueInOrder.js)

## Day 23: ⚖️ Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array `[1,2,3,4,3,2,1]`: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index `[1,2,3]` and the sum of the right side of the index `[3,2,1]` both equal 6.

**Note**: Please remember that in most programming/scripting languages the index of an array starts at 0.

**Input**: An integer array of length `0 < arr < 1000`. The numbers in the array can be any integer positive or negative.

**Output**: The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

**Note**: If you are given an array with multiple answers, return the lowest correct index.

[💡 See Solution](./Day-23/findEvenIndex.js)

## Day 24: Write Number in 📜 Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form.

For example:

```bash
expandedForm(12); // Should return '10+2'
expandedForm(42); // Should return '40+2'
```

[💡 See Solution](./Day-24/expandedForm.js)

## Day 25: Stop 🌀 gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
`spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"`.

[💡 See Solution](./Day-25/spinWords.js)

## Day 26: 🔍 Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples `[7]` should return 7, because it occurs 1 time (which is odd). `[0]` should return 0, because it occurs 1 time (which is odd). `[1,1,2]` should return 2, because it occurs 1 time (which is odd). `[0,1,0,1,0]` should return 0, because it occurs 3 times (which is odd). `[1,2,2,3,3,3,4,3,3,3,2,2,1]` should return 4, because it appears 1 time (which is odd).

[💡 See Solution](./Day-26/findOdd.js)

## Day 27: Vowel 🔢 Count

Return the number (count) of vowels in the given string.

We will consider `a, e, i, o, u` as vowels.

The input can consist of Lower case and upper case letters so make sure to count both of them.

[💡 See Solution](./Day-27/getVowelCount.js)

## Day 28: 🙃 WeIrD StRiNg CaSe

Write a function `toWeirdCase` that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

[💡 See Solution](./Day-28/toWeirdCase.js)

## Day 29: 🤐 Mumbling

Each char becomes `n*chars` where n is the index + 1, and the first char is capitalized divided by `-` instead of space.

Only alphabets are passed as arguments for the `accum(s)` funciton

Example: `accum("ZpglnRxqenU")` should return `"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"`

[💡 See Solution](./Day-29/mumbling.js)

## Day 30: Mexican 🌊 Wave

**Mexican Wave Origin**

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

**Task**

To create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

**Rules**

- The input string will always be lower case but maybe empty.
- If the character in the string is whitespace then pass over it as if it was an empty seat

**Example**
`wave("hello")` returns the array `["Hello", "hEllo", "heLlo", "helLo", "hellO"]`

[💡 See Solution](./Day-30/wave.js)

## Day 31: Factorial of a Number❗

Write a Program to Find the Factorial of a Number
The factorial of a number is the product of all the numbers from 1 to that number. For example,

factorial of 5 is equal to 1 _ 2 _ 3 _ 4 _ 5 = 120.

The factorial of a positive number n is given by:

factorial of n `(n!) = 1 * 2 * 3 * 4.....n` The factorial of negative numbers do not exist and the factorial of 0 is 1.

[💡 See Solution](./Day-31/factorial.js)

## Day 32: GCD of Two Positive Number

Write a program to find the greatest common divisor (gcd) of two positive numbers.
The greatest common divisor (GCD), also called the greatest common factor, of two numbers is the largest number that divides them both. For instance, the greatest common factor of 20 and 15 is 5, since 5 divides both 20 and 15 and no larger number has this property.

[💡 See Solution](./Day-32/gcd.js)

## Day 33: 🌟 Unique values from an array

**Input**
`const arrOfNum = [1, 2, 2, 4, 5, 6, 6]`

**Output**
`[1, 2, 4, 5, 6]`

[💡 See Solution](./Day-33/uniqueValues.js)

## Day 34: 🔁 Most frequent item of an array

**Input**
`const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];`

**Output**
`a 5`

[💡 See Solution](./Day-34/mostFreq.js)

## Day 35: Get nth 📏 largest element from an array

Write a JavaScript function to get nth largest element from an unsorted array.

**Input**
`nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)`

**Output**
`89`

[💡 See Solution](./Day-35/nthlargest.js)

## Day 36: 🧬 RNA Transcription

Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

- G → C
- C → G
- T → A
- A → U

[💡 See Solution](./Day-36/rnaTranscription.js)

## Day 37: Leap 📆 Year

Tell if its a leap year

**Instructions**
Given a year, report if it is a leap year.

The tricky thing here is that a leap year in the Gregorian calendar occurs:

`on every year that is evenly divisible by 4   except every year that is evenly divisible by 100     unless the year is also evenly divisible by 400`

For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

Notes Though our exercise adopts some very simple rules, there is more to learn!

[💡 See Solution](./Day-37/leapYear.js)

## Day 38: Luhn algorithm

**Instructions**
Given a number determine whether or not it is valid per the Luhn formula.

The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The task is to check if a given string is valid.

Validating a Number
Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.

Example 1: valid credit card number
`4539 3195 0343 6467`

The first step of the Luhn algorithm is to double every second digit, starting from the right. We will be doubling

`4_3_ 3_9_ 0_4_ 6_6_`

If doubling the number results in a number greater than 9 then subtract 9 from the product. The results of our doubling:

`8569 6195 0383 3437`

Then sum all of the digits:

`8+5+6+9+6+1+9+5+0+3+8+3+3+4+3+7 = 80`

If the sum is evenly divisible by 10, then the number is valid. This number is valid!

Example 2: invalid credit card number
`8273 1232 7352 0569`

Double the second digits, starting from the right

`7253 2262 5312 0539`

Sum the digits

`7+2+5+3+2+2+6+2+5+3+1+2+0+5+3+9 = 57`

57 is not evenly divisible by 10, so this number is not valid.

[💡 See Solution](./Day-38/luhn_algo.js)

## Day 39: Mixed 🥤 Juices

**Instructions**
Your friend Li Mei runs her own juice bar where she sells delicious mixed fruit juices. You are a frequent customer in her shop and realized you could make your friend's life easier. You decide to use your coding skills to help Li Mei with her job.

1. Determine how long it takes to mix a juice
   Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered. She has a hard time remembering the exact numbers, because the time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.

To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the number of minutes it take to mix that drink.

```javascript
timeToMixJuice("Tropical Island"); // => 3

timeToMixJuice("Berries & Lime"); // => 2.5
```

2. Replenish the lime wedge supply
   A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.

```javascript
limesToCut(25, ["small", "small", "large", "medium", "small"]); // => 4
```

3. Finish up the shift
   Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends. Dmitry will then prepare the remaining juices.

To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet. The function should return the orders that Li Mei cannot start preparing before the end of her work day.

The time left in the shift will always be greater than 0. Furthermore the orders are prepared in the order in which they appear in the array. If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.

```javascript
remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"]); // => ['Green Garden']
```

[💡 See Solution](./Day-39/mixedJuices.js)

## Day 40: 🚗 Vehicle Purchase

In this exercise you are going to write some code to help you prepare to buy a vehicle.

You have three tasks, one to determine if you will need to get a licence, one to help you choose between two vehicles and one to estimate the acceptable price for a used vehicle.

**1. Determine if you will need a drivers licence**
Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.

Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

```javascript
needsLicense("car"); // => true

needsLicense("bike"); // => false
```

**2. Choose between two potential vehicles to buy**
You evaluate your options of available vehicles. You manage to narrow it down to two options but you need help making the final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and returns a decision that includes the option that comes first in dictionary order.

```javascript
chooseVehicle("Wuling Hongguang", "Toyota Corolla"); // => 'Toyota Corolla is clearly the better choice.'

chooseVehicle("Volkswagen Beetle", "Volkswagen Golf"); // => 'Volkswagen Beetle is clearly the better choice.'
```

**3. Calculate an estimation for the price of a used vehicle**
Now that you made your decision you want to make sure you get a fair price at the dealership. Since you are interested in buying a used vehicle, the price depends on how old the vehicle is. For a rough estimate, assume if the vehicle is less than 3 years old, it costs 80% of the original price it had when it was brand new. If it is more than 10 years old, it costs 50%. If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.

Implement the calculateResellPrice(originalPrice, age) function that applies this logic using if, else if and else (there are other ways but you want to practice). It takes the original price and the age of the vehicle as arguments and returns the estimated price in the dealership.

```javascript
calculateResellPrice(1000, 1); // => 800

calculateResellPrice(1000, 5); // => 700

calculateResellPrice(1000, 15); // => 500
```

[💡 See Solution](./Day-40/vehicle_purchase.js)

## Day 41: 🗂️ Categorize New Member

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

**Input**
Input will consist of a array of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

**Output**
Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.

**Example**
`openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) // returns ['Open', 'Senior', 'Open', 'Senior']`

[💡 See Solution](./Day-41/categorize_member.js)

## Day 42: Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output should be `7`.

[💡 See Solution](./Day-42/sumTwoSmallestNumbers.js)

## Day 43: Highest 🎯 Scoring Word

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

[💡 See Solution](./Day-43/high.js)

## Day 44: Count the ➗ divisors of a number

Count the number of divisors of a positive integer n.

Examples (input and output)
```bash
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
```

[💡 See Solution](./Day-44/getDivisorsCnt.js)

## Day 45: Find The Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
```bash
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

[💡 See Solution](./Day-45/findOutlier.js)
