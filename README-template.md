# Problem solving with javascript

**Questions for the Challenges:**
Below is the complete list of all challenges:

**Possible Solutions:**
You can find the corresponding solutions linked below each question.

Have fun practicing JavaScript and coding by solving enjoyable beginner-friendly exercises. These exercises are designed for people who are new to programming and those who have reached an intermediate level. If you're just starting out in programming, begin with these challenges. By working on them, you'll become a skilled programmer in a short time.

If programming is entirely new to you, it's a good idea to grasp some programming basics from the recommended resources. Once you've got the basics down, you can start tackling these problems. Remember to keep learning, solving problems, and working on projects as you continue your programming journey.

The challenges range from very easy to intermediate difficulty, and there are even a few semi-advanced problems. If you're unable to solve a problem on your own, you can take a look at my solution or seek assistance elsewhere. Then, give it another shot on your own. Enjoy the process of coding :)


## Basic Syntax and Concepts:

## xi. Concatenate strings:
Create a function that takes two strings as arguments and return a new string.

<details>
<summary>Solution</summary>

```javascript
function concatinateStrings(str1, str2) {
  const result = str1 + " " + str2;
  const result2 = `${str1} ${str2}`;

  return result2;
}
```

</details>

---

### xi. Sum of numbers:
Create a simple function that takes two numbers as arguments and returns the sum of two numbers.

<details>
<summary>Solution</summary>

```javascript
function sumOfNumbers(num1, num2) {
  const sum = num1 + num2;

  return sum;
}

```

</details>

---

### xi. Even or odd:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

<details>
<summary>Solution</summary>

```javascript
function evenOrOdd(int) {
  if (int % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

</details>

---

### xi. Print Numbers:
Create a function that takes an integer as an argument and it prints all the numbers starting from 1 upto the given number.

<details>
<summary>Solution</summary>

```javascript
function printNums(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

</details>

---


### xi. Iterate through an array:
Iterate through an array using a loop and print each element.

<details>
<summary>Solution</summary>

```javascript
 function iterateThroughArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}
```

</details>

---


### xi. large number:
Create a function that takes two parameters and returns the larger one.

<details>
<summary>Solution</summary>

```javascript
function findLarge(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }

  //   return num1 > num2 ? num1 : num2;
}
```

</details>

---


**String Manipulation:**

**xi. to uppercase:**
Convert a string to uppercase.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/strUpper.js)**

**xi. to lowercase:**
Convert a string to lowercase.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/strLower.js)**

**xi. Check string:**
Check if a string contains a specific substring.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/checkStr.js)**

**xi. Replace word:**
Replace a specific word in a string with another word.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/replaceWord.js)**

**xi. Remove whitespace:**
Remove whitespace from the beginning and end of a string.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/removeSpace.js)**

**xi. Convert string:**
Convert a string to an array of characters.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/convertStr.js)**

**Array Manipulation:**

**xi. Add elements to the end of an array:**
Add given elements to the end of an array.

**[Solution]()**

**xi. Remove last element:**
Remove the last element from an array.

**[Solution]()**

**xi. Add elements to the beginning of an array:**
Add given elements to the beginning of an array.

**[Solution]()**

**xi. Remove first element:**
Remove the first element from an array.

**[Solution]()**

**xi. Find array elements index:**
Find the index of a specific element in an array.

**[Solution]()**

**xi. Remove array elements from index:**
Remove an element from a specific index in an array.

**[Solution]()**

**xi. Sort an array:**
Sort an array of numbers in ascending order.

**[Solution]()**

**xi. Reverse an array:**
Reverse an array.

**[Solution]()**

**xi. Merge two arrays:**
Merge two arrays into a single array.

**[Solution]()**

**xi. Check specific element in array:**
Check if an array contains a specific element.

**[Solution]()**

**xi. Filter even numbers:**
Filter out even numbers from an array.

**[Solution]()**

**xi. Double array elements:**
Map over an array to double each element.

**[Solution]()**

**xi. Sum numbers:**
Sum all the numbers in an array.

**[Solution]()**
