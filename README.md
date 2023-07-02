# 50 Days of JavaScript by Codedamn

Here is solutions of 50 days of JavaScript challenges

## Day 1: 🎲Random Number Generator in Range

Create a function which returns a random number in the given range of values both inclusive

[<span style="color:blue; font-weight:bold"><span style="color:blue; font-weight:bold">💡 See Solution</span></span>](./day1_randomNumberGeneratorInRange.js)

## Day 2: ↩️ Reverse a String

Write a program to reverse a string. String can be reversed by iterating it and storing it in reverse order. String can also be reversed by converting it to array, then joining it after reversing

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day2_reverseAString.js)

## Day 3: ↩️ Reverse a Given Integer Number

Write a program to reverse a given integer number. The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0. A simple approach to reverse a number could also be to convert it in to a string and then reverse it.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day3_reverseGivenInteger.js)

## Day 4: Convert ⏰ Time Format From 12Hrs to 24Hrs

Write a function which can convert the time input given in 12 hours format to 24 hours format. The check for `AM` and `PM` can be verified using endsWith String method. An extra 0 would be needed if the hours have single digit.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day4_convertTo24HrsFormat.js)

## Day 5: 🔢 Count Characters Between `X`

Write a function which accepts a string argument and returns the count of characters between the first and last character `X`. indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively. If the match is not found, these methods return -1.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day5_getTheGapX.js)

## Day 6: ✂️ Truncate String Words

Write a function to truncate a string to a certain number of words. Truncate a string to a certain number of words.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day6_truncateWithWordLimit.js)

## Day 7: Validate Indian 📱 Mobile Number

Create a regular expression to validate if the given input is valid Indian mobile number or not. Regular expression check has to have an optional `+ 91` or `0` in the beginning, then an optional space and 10 digits. test method of regular expression can be used to validate if the mobile number pattern matches or not.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day7_validateMobile.js)

## Day 8: Days Difference Between Two 📆 Dates

Write a function which accepts two valid dates and returns the difference between them as number of days. The difference between 2 dates in JavaScript will give the time difference in milliseconds. Time difference can be converted in to days by dividing the 24Hrs time in milliseconds.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day8_getDaysBetweenDates.js)

## Day 9: Check 🗑️ Empty Object

Write a function to check if an object is empty or not?

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day9_isObjEmpty.js)

## Day 10: ❌ Remove Array Element...

Write a function to remove array element based on object property ?

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day10_removeArrayElement.js)

## Day 11: 🧮 Nth Value of fibonacci Series

Write a function to return the N-th value of the Fibonacci sequence

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day11_fibonacci.js)

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

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day12_sayNumberInEnglish.js)

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

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day13_spaceAge.js)

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

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day14_convertDigitsToAskedBase.js)

## Day 15: ✅ Check Pangram Sentence

Determine if a sentence is a pangram

**Instructions**

Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day15_isPangram.js)

## Day 16: 🙋‍♂️ Ask The Bob

**Instructions**
Bob is a lackadaisical teenager. In conversation, his responses are very limited.
Bob answers 'Sure.' if you ask him a question, such as "How are you?".
He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.
Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day16_askTheBob.js)

## Day 17: 📜 Longest Consecutive Sequence

Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order.

**Example**
Input: `[100,4,200,1,3,2]`
Output: 4 // LCS `[1, 2, 3, 4]`

Conceptually this is how it should work. Copy all the elements of the array in a set. Iterate the array and in each iteration determine if the current element will lead to new subsequence by checking if there is no element less than the current, present in the set. Then find how long this subsequence can be by incrementing the count till there is consecutive elements in the set. In the end return the longest consecutive sequence.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day17_longestConsecutiveSequence.js)

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

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day18_calculateGrains.js)

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

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day19_colorCode.js)

## Day 20: Add Two Numbers

Just add two numbers.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day20_addTwoNumbers.js)

## Day 21: 🤝🏻 Union of Two Arrays

Write the code for the function which returns the the union of the two given arrays.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day21_unionOfArrays.js)

## Day 22: 🌟 Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

The argument can contain a string or an array

For example: `uniqueInOrder([1,2,2,3,3])` should return `[1,2,3]`

`uniqueInOrder('ABBCcAD')` should return `['A', 'B', 'C', 'c', 'A', 'D']`

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day22_uniqueInOrder.js)

## Day 23: ⚖️ Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array `[1,2,3,4,3,2,1]`: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index `[1,2,3]` and the sum of the right side of the index `[3,2,1]` both equal 6.

**Note**: Please remember that in most programming/scripting languages the index of an array starts at 0.

**Input**: An integer array of length `0 < arr < 1000`. The numbers in the array can be any integer positive or negative.

**Output**: The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

**Note**: If you are given an array with multiple answers, return the lowest correct index.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day23_findEvenIndex.js)

## Day 24: Write Number in 📜 Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form.

For example:

```bash
expandedForm(12); // Should return '10+2'
expandedForm(42); // Should return '40+2'
```

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day24_expandedForm.js)

## Day 25: Stop 🌀 gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
`spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"`.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day25_spinWords.js)

## Day 26: 🔍 Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples `[7]` should return 7, because it occurs 1 time (which is odd). `[0]` should return 0, because it occurs 1 time (which is odd). `[1,1,2]` should return 2, because it occurs 1 time (which is odd). `[0,1,0,1,0]` should return 0, because it occurs 3 times (which is odd). `[1,2,2,3,3,3,4,3,3,3,2,2,1]` should return 4, because it appears 1 time (which is odd).

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day26_findOdd.js)

## Day 27: Vowel 🔢 Count

Return the number (count) of vowels in the given string.

We will consider `a, e, i, o, u` as vowels.

The input can consist of Lower case and upper case letters so make sure to count both of them.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day27_getVowelCount.js)

## Day 28: 🙃 WeIrD StRiNg CaSe

Write a function `toWeirdCase` that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day28_toWeirdCase.js)

## Day 29: Mexican 🌊 Wave

**Mexican Wave Origin**

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

**Task**

To create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

**Rules**

+ The input string will always be lower case but maybe empty.
+ If the character in the string is whitespace then pass over it as if it was an empty seat

**Example**
`wave("hello")` returns the array `["Hello", "hEllo", "heLlo", "helLo", "hellO"]`

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day29_wave.js)