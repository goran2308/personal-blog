---
title: Arrays in JavaScript
author: Goran Solev
date: 2023-03-06
description: What are arrays in JavaScript? Learn how to manipulate the JavaScript arrays the right way!
tags: ["javascript"]
draft: false
excerpt:
thumbnail:
---

*Arrays in JavaScript are defined as a collection of elements of any type. They are represented as a pair of square brackets [ ] and all the elements are comma (,) separated.*

<br />

## Why we use Arrays?

Arrays are used to store a list of items. This means that if you want to store colours in a single variables this will look like:

```javascript
let colour1 = "blue"
let colour2 = "green";
let colour3 = "yellow";
```

But what if you need to store 100 colours? In that case the most effective practice is to use array of colours:

```javascript
const colours = ["blue", "green", "yellow"];
```

<br />

## Create an array

There are many alternative ways to create an array. The one using the array literal is the easiest one:

```javascript
const array_name = [item1, item2, item3, ...];
```

You can also create the array and provide the elements after:

```javascript
const colours = [];

colour[0] = "blue";
colour[1] = "green";
colour[2] = "yellow";
```

Creating array with the JavaScript keyword is possible as well:

```javascript
const colours = new Array("blue", "green", "yellow");
```

>For the simplicity and readability it is recommended to implement the first method.

<br />

## Get the elements from an Array in JavaScript

The most manageable way to get an element from an Array is to use its index. You will need to use the **square bracket** syntax to access array elements.

```javascript
const element = array[0];
```

It depends how you will access the Array based on your use-case. You can access them one by one or can use a loop.

<br />

Using the index to list them one by one:

```javascript
const colours = ["blue", "green", "yellow"];

colours[0]; // blue
colours[1]; // green
colours[2]; // yellow
```

You can use a regular **for** or **forEach** loop as well like this:

```javascript
const colours = ["blue", "green", "yellow"];

for(let i=0; i<colours.length; i++;) {
  console.log(`The colour at index ${i} is ${colours[i]}`);
}
```

<br />

In the next article I will show you how to manipulate the arrays using the array methods. Manipulating the arrays is very useful technique because it is used literally everywhere from vanilla JavaScript to any JavaScript library and framework.

<br />

---

<br />

#### Additional reading:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">developer.mozilla.org | Arrays</a> <br />
<a href="https://javascript.info/array" target="_blank">javascript.info | Arrays</a> <br />
<a href="https://www.freecodecamp.org/news/the-javascript-array-handbook/" target="_blank">freecodecamp.org | The JavaScript Array Handbook</a>