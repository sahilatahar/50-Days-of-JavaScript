# 50 Days of JavaScript by Codedamn

Here is solutions of 50 days of JavaScript challenges

### Day 1: 🎲Random Number Generator in Range

Create a function which returns a random number in the given range of values both inclusive

[<span style="color:blue; font-weight:bold"><span style="color:blue; font-weight:bold">💡 See Solution</span></span>](./day1_randomNumberGeneratorInRange.js)

### Day 2: ↩️ Reverse a String

Write a program to reverse a string. String can be reversed by iterating it and storing it in reverse order. String can also be reversed by converting it to array, then joining it after reversing

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day2_reverseAString.js)

### Day 3: ↩️ Reverse a Given Integer Number

Write a program to reverse a given integer number. The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0. A simple approach to reverse a number could also be to convert it in to a string and then reverse it.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day3_reverseGivenInteger.js)

### Day 4: Convert ⏰ Time Format From 12Hrs to 24Hrs

Write a function which can convert the time input given in 12 hours format to 24 hours format. The check for `AM` and `PM` can be verified using endsWith String method. An extra 0 would be needed if the hours have single digit.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day4_convertTo24HrsFormat.js)

### Day 5: 🔢 Count Characters Between `X`

Write a function which accepts a string argument and returns the count of characters between the first and last character `X`. indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively. If the match is not found, these methods return -1.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day5_getTheGapX.js)

### Day 6: ✂️ Truncate String Words

Write a function to truncate a string to a certain number of words. Truncate a string to a certain number of words.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day6_truncateWithWordLimit.js)

### Day 7: Validate Indian 📱 Mobile Number

Create a regular expression to validate if the given input is valid Indian mobile number or not. Regular expression check has to have an optional `+ 91` or `0` in the beginning, then an optional space and 10 digits. test method of regular expression can be used to validate if the mobile number pattern matches or not.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day7_validateMobile.js)

### Day 8: Days Difference Between Two 📆 Dates

Write a function which accepts two valid dates and returns the difference between them as number of days. The difference between 2 dates in JavaScript will give the time difference in milliseconds. Time difference can be converted in to days by dividing the 24Hrs time in milliseconds.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day8_getDaysBetweenDates.js)

### Day 9: Check 🗑️ Empty Object

Write a function to check if an object is empty or not?

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day9_isObjEmpty.js)

### Day 10: ❌ Remove Array Element...

Write a function to remove array element based on object property ?

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day10_removeArrayElement.js)

### Day 11: 🧮 Nth Value of fibonacci Series

Write a function to return the N-th value of the Fibonacci sequence

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day11_fibonacci.js)

### Day 12: 🔄 Convert Number to English

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

### Day 13: Calculate Age on 🌍 Planets

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

### Day 14: 🔄 Convert Digits Array Base

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

### Day 15: Check Pangram Sentence

Determine if a sentence is a pangram

**Instructions**

Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

[<span style="color:blue; font-weight:bold">💡 See Solution</span>](./day15_isPangram.js)

