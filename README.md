# Problem solving with javascript

**Questions for the Challenges:**
Below is the complete list of all challenges:

**Possible Solutions:**
You can find the corresponding solutions linked below each question.

Have fun practicing JavaScript and coding by solving enjoyable beginner-friendly exercises. These exercises are designed for people who are new to programming and those who have reached an intermediate level. If you're just starting out in programming, begin with these challenges. By working on them, you'll become a skilled programmer in a short time.

If programming is entirely new to you, it's a good idea to grasp some programming basics from the recommended resources. Once you've got the basics down, you can start tackling these problems. Remember to keep learning, solving problems, and working on projects as you continue your programming journey.

The challenges range from very easy to intermediate difficulty, and there are even a few semi-advanced problems. If you're unable to solve a problem on your own, you can take a look at my solution or seek assistance elsewhere. Then, give it another shot on your own. Enjoy the process of coding :)


## Basic Syntax and Concepts:

## 1. Concatenate strings:
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

### 2. Sum of numbers:
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

### 3. Even or odd:
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

### 4. Print Numbers:
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


### 5. Iterate through an array:
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


### 6. large number:
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

**7. to uppercase:**
Convert a string to uppercase.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/strUpper.js)**

**8. to lowercase:**
Convert a string to lowercase.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/strLower.js)**

**9. Check string:**
Check if a string contains a specific substring.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/checkStr.js)**

**10. Replace word:**
Replace a specific word in a string with another word.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/replaceWord.js)**

**11. Remove whitespace:**
Remove whitespace from the beginning and end of a string.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/removeSpace.js)**

**12. Convert string:**
Convert a string to an array of characters.

**[Solution](https://github.com/mhmdNoman/Problem-solving-with-javascript/blob/master/convertStr.js)**

**Array Manipulation:**

**13. Add elements to the end of an array:**
Add given elements to the end of an array.

**[Solution]()**

**14. Remove last element:**
Remove the last element from an array.

**[Solution]()**

**15. Add elements to the beginning of an array:**
Add given elements to the beginning of an array.

**[Solution]()**

**16. Remove first element:**
Remove the first element from an array.

**[Solution]()**

**17. Find array elements index:**
Find the index of a specific element in an array.

**[Solution]()**

**18. Remove array elements from index:**
Remove an element from a specific index in an array.

**[Solution]()**

**19. Sort an array:**
Sort an array of numbers in ascending order.

**[Solution]()**

**20. Reverse an array:**
Reverse an array.

**[Solution]()**

**21. Merge two arrays:**
Merge two arrays into a single array.

**[Solution]()**

**22. Check specific element in array:**
Check if an array contains a specific element.

**[Solution]()**

**23. Filter even numbers:**
Filter out even numbers from an array.

**[Solution]()**

**24. Double array elements:**
Map over an array to double each element.

**[Solution]()**

**25. Sum numbers:**
Sum all the numbers in an array.

**[Solution]()**
