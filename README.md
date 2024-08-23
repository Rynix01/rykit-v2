# RyKit-v2

**RyKit-v2** is a multi-purpose JavaScript utility module designed to simplify common programming tasks. It includes a variety of functions for string manipulation, array processing, mathematical operations, and more.

[![Socket Badge](https://socket.dev/api/badge/npm/package/rykit-v2/undefined)](https://socket.dev/npm/package/rykit-v2/overview/1.0.1

## Features

1. **Deep copying objects**: Creates a deep copy of an object, allowing changes to the copied object without affecting the original.
2. **Random number generation**: Generates random numbers within specified ranges.
3. **Mathematical operations**:
   - Factorial calculation
   - Permutation calculation
   - Combination calculation
   - Sine, cosine, and tangent calculations for angles in degrees
4. **UUID generation**: Generates a unique identifier (UUID) using the `generateUUID()` function.
5. **SHA-256 hashing**: Calculates the SHA-256 hash of a given string.
6. **Deep equality checking**: Compares two objects for deep equality.
7. **Query parameter extraction**: Extracts query parameters from a URL.
8. **Execution time measurement**: Measures the execution time of a given function or code block.
9. **Async iteration**: Implements an asynchronous version of the `forEach()` method using async/await syntax.
10. **Hex-to-RGB and RGB-to-Hex conversions**: Converts between hexadecimal color codes and RGB values.
11. **Array utilities**:
    - Unique array generation
    - Random array element selection
    - Shuffling array elements
    - Chunks array into specified number of pieces

## Installation

Install the module using npm:

```bash
npm install rykit-v2
```

Install the module using yarn:

```bash
yarn add rykit-v2
```

Install the module using bun:

```bash
bun add rykit-v2
```

# Usage

Import the functions you need from the module:

```
const rykit = require("rykit-v2");
```

## Functions

### 1. `getMinecraftServer(ip, options)`

Fetches information about a Minecraft server.

```javascript
const ip = "mc.hypixel.net";
const type = "java";
const server = await getMinecraftServer(ip, { type });
console.log("Server:", server);
```

### 2. `replaceWord(text, oldWord, newWord)`

Replaces occurrences of `oldWord` with `newWord` in a given string.

```javascript
const text = "Hello world! The world is beautiful.";
const newText = replaceWord(text, "world", "universe");
console.log(newText);
// "Hello universe! The universe is beautiful."
```

### 3. `joinStrings(array, separator)`

Joins an array of strings into a single string with a specified separator.

```javascript
const words = ["JavaScript", "is", "a", "powerful", "language"];
const joinedSentence = joinStrings(words, " ");
console.log(joinedSentence);
// "JavaScript is a powerful language"
```

### 4. `findAndReplace(array, findValue, replaceValue)`

Finds all occurrences of `findValue` in an array and replaces them with `replaceValue`.

```javascript
const numbers = [1, 2, 3, 4, 5, 3];
const updatedNumbers = findAndReplace(numbers, 3, 99);
console.log(updatedNumbers);
// [1, 2, 99, 4, 5, 99]
```

### 5. `sortArray(array, ascending = true)`

Sorts an array either in ascending or descending order.

```javascript
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArrayAsc = sortArray(unsortedArray); // Ascending
console.log(sortedArrayAsc);
// [1, 2, 3, 5, 8]
const sortedArrayDesc = sortArray(unsortedArray, false); // Descending
console.log(sortedArrayDesc);
// [8, 5, 3, 2, 1]
```

### 6. `filterArray(array, callback)`

Filters an array based on a provided callback function.

```javascript
const mixedArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(mixedArray, (num) => num % 2 === 0);
console.log(evenNumbers);
// [2, 4, 6]
```

### 7. `deleteKey(object, key)`

Deletes a specified key from an object.

```javascript
const person = { name: "John", age: 30, city: "New York" };
const updatedPerson = deleteKey(person, "age");
console.log(updatedPerson);
// { name: 'John', city: 'New York' }
```

### 8. `addKey(object, key, value)`

Adds a key-value pair to an object.

```javascript
const person = { name: "John", age: 30, city: "New York" };
const newPerson = addKey(person, "country", "USA");
console.log(newPerson);
// { name: 'John', age: 30, city: 'New York', country: 'USA' }
```

### 9. `shallowCopy(object)`

Creates a shallow copy of an object.

```javascript
const originalObj = { a: 1, b: { c: 2 } };
const shallowCopiedObj = shallowCopy(originalObj);
shallowCopiedObj.b.c = 3;
console.log(originalObj.b.c);
// 3 (Shallow copy affects the original)
```

### 10. `deepCopy(object)`

Creates a deep copy of an object.

```javascript
const originalObj = { a: 1, b: { c: 2 } };
const deepCopiedObj = deepCopy(originalObj);
deepCopiedObj.b.c = 4;
console.log(originalObj.b.c);
// 2 (Deep copy does not affect the original)
```

### 11. `getRandomNumber(min, max)`

Generates a random number between `min` and `max`.

```javascript
const randomNum = getRandomNumber(1, 10);
console.log(`Random Number: ${randomNum}`);
// Example: Random Number: 7
```

### 12. `factorial(n)`

Calculates the factorial of a number.

```javascript
const fact = factorial(5);
console.log(`5! = ${fact}`);
// 5! = 120
```

### 13. `permutation(n, r)`

Calculates the number of permutations.

```javascript
const perm = permutation(5, 3);
console.log(`P(5, 3) = ${perm}`);
// P(5, 3) = 60
```

### 14. `combination(n, r)`

Calculates the number of combinations.

```javascript
const comb = combination(5, 3);
console.log(`C(5, 3) = ${comb}`);
// C(5, 3) = 10
```

### 15. `sin(degrees)`

Calculates the sine of an angle in degrees.

```javascript
const sineValue = sin(30);
console.log(`sin(30°) = ${sineValue}`);
// sin(30°) = 0.5
```

### 16. `cos(degrees)`

Calculates the cosine of an angle in degrees.

```javascript
const cosineValue = cos(60);
console.log(`cos(60°) = ${cosineValue}`);
// cos(60°) = 0.5
```

### 17. `tan(degrees)`

Calculates the tangent of an angle in degrees.

```javascript
const tangentValue = tan(45);
console.log(`tan(45°) = ${tangentValue}`);
// tan(45°) = 1
```

### 18. `generateUUID()`

Generates a UUID (Universally Unique Identifier).

```javascript
const uuid = generateUUID();
console.log(`Generated UUID: ${uuid}`);
// Example: Generated UUID: 110ec58a-a0f2-4ac4-8393-c866d813b8d1
```

### 19. `sha256(message)`

Calculates the SHA-256 hash of a message.

```javascript
sha256("rykit version 2").then((hash) => {
  console.log(`SHA-256 Hash: ${hash}`);
  // Example: SHA-256 Hash: 5cc790f28fdac9beef4dc298532b71c0b2a5c48af2c818d9d2bc31510aad4173
});
```

### 20. `deepEqual(obj1, obj2)`

Performs a deep equality check between two objects.

```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 3 } };
console.log(deepEqual(obj1, obj2));
// false
```

### 21. `getQueryParams(url)`

Extracts query parameters from a URL as an object.

```javascript
const params = getQueryParams("https://example.com?page=1&limit=10");
console.log(params);
// { page: '1', limit: '10' }
```

### 22. `measureExecutionTime(callback)`

Measures the execution time of a given function.

```javascript
const executionTime = measureExecutionTime(() => {
  for (let i = 0; i < 1000000; i++) {}
});
console.log(`Execution Time: ${executionTime}ms`);
```

### 23. `asyncForEach(array, callback)`

Asynchronous for-each loop implementation.

```javascript
asyncForEach([1, 2, 3], async (num) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(num);
});
```

### 24. `rgbToHex(r, g, b)`

Converts RGB color values to HEX.

```javascript
const hexColor = rgbToHex(255, 87, 51);
console.log(`RGB to Hex: ${hexColor}`);
// RGB to Hex: #FF5733
```

### 25. `hexToRgb(hex)`

Converts HEX color values to RGB.

```javascript
const rgbColor = hexToRgb("#ff5733");
console.log(`Hex to RGB: ${rgbColor}`);
// Hex to RGB: rgb(255, 87, 51)
```

### 26. `uniqueArray(array)`

Returns an array with unique values.

```javascript
const array = [1, 2, 2, 3, 4, 4, 5];
const unique = uniqueArray(array);
console.log(`Unique Array: ${unique}`);
// Unique Array: [1, 2, 3, 4, 5]
```

### 27. `getRandomArrayElement(array)`

Gets a random element from an array.

```javascript
const items = ["apple", "banana", "cherry", "orange", "kiwi"];
const randomItem = getRandomArrayElement(items);
console.log(`Random Array Element: ${randomItem}`);
// Example: Random Array Element: kiwi
```

### 28. `shuffle(array)`

Shuffles the order of elements in an array.

````javascript
const shuffleFunction = shuffle(["a", "b", "c", "d", "e", "f"]);
console.log(shuffleFunction);
//[ 'e', 'a', 'd', 'b', 'c', 'f' ]```
````

### 29. `chunk(array, num)`

It divides the array you provide into the number of pieces you specify.

```javascript
const chunkFunction = chunk(["a", "b", "c", "d", "e", "f"], 2);
console.log(chunkFunction);
// [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]
```
