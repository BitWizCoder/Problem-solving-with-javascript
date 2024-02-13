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

```javascript
function concatinateStrings(str1, str2) {
  // Your code
}

console.log(concatinateStrings("Hello", "World!")); // Hello, World!
console.log(concatinateStrings("Hello", "Sam!")); // Hello, Sam!
```

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

```javascript
function sumOfNumbers(num1, num2) {
  // Your code
}

console.log(sumOfNumbers(1, 2)); // 3
console.log(sumOfNumbers(3, 3)); // 6
```

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

```javascript
function evenOrOdd(int) {
  // Your code
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
```

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

```javascript
function printNums(n) {
  // Your code
}

console.log(printNums(3)); // 1, 2, 3
console.log(printNums(5)); // 1, 2, 3, 4, 5
```

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

```javascript
function iterateThroughArray(arr) {
  // Your code
}

console.log(iterateThroughArray([1, 2, 3])); // 1, 2, 3
console.log(iterateThroughArray(["apple", "bannana", "orange"])); // apple, banana, orange
```

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

```javascript
function findLarge(num1, num2) {
  // Your code
}

console.log(findLarge(1, 2)); // 2
console.log(findLarge(4, 3)); // 4
```

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

## String Manipulation:

### xi. Reverse a String:

Create a function to reverse the characters in a string

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Palindrome Checker:

Write a function that checks if a word is a palindrome (reads the same backward as forward)

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Longest Word:

Write a function to find the longest word in a sentence

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Shortest Word:

Write a function to find the shortest word in a sentence.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Title Case:

Write a function to convert a string to title case (capitalize the first letter of each word)

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Anagram Checker:

Create a function that checks if two words are anagrams (contain the same letters)

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

## Array Manipulation

### xi. Sort an Array:

Write a function to sort an array of numbers in ascending order

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Check for Element:

Create a function that checks if a specific element exists in an array

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Average of Numbers:

Find the average of numbers in an array

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Intersection of Arrays:

Find the common elements between two arrays

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Remove Specific Element:

Write a function to remove a specific element from an array

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

## Number Manipulation

### xi. Maximum of Two Numbers:

Write a function to find the maximum of two numbers.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Prime Number Checker:

Check if a number is prime (only divisible by 1 and itself)

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. GCD (Greatest Common Divisor):

Find the GCD of two numbers.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. LCM (Least Common Multiple):

Find the LCM of two numbers.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Sum of Digits:

Calculate the sum of the digits of a number.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Perfect Number Checker:

Check if a number is a perfect number (sum of its divisors equals itself)

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Power of a Number:

Calculate the power of a number

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Square Root:

Calculate the square root of a number

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Factorial:

Calculate the factorial of a number

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Fibonacci Sequence:

Generate the Fibonacci sequence up to a given number of terms.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Binary to Decimal Converter:

Convert a binary number to a decimal number

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Roman Numeral Converter:

Convert a number to a Roman numeral.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---

### xi. Area of a Circle:

Calculate the area of a circle with a given radius.

<details>
<summary>Solution</summary>

```javascript
// solution here
```

</details>

---


testing anon
