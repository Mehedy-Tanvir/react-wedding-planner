<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here variable called greeting is declared using let. Which is not further used. Rather greetign is declared as global variable (as it is not declared using var, let, const), which have an empty object as value. So consoling the greetign variable will return {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The sum function is attempting to add two values.Since javascript is a dynamically typed language, it will perform type coercion when we use "+". So when we try to call sum(1, "2"), where 1 is a number and "2" is a string javascript will try to convert them to common type before performing the addition. Since one of the arguments is a string javascript will perform string concatenation operation rather than numeric addition where number 1 gets converted to a string and string "2"remains the same type. As a result the function will return "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here, at first food array was defined containing four elements. Then info object was defined which have favoriteFood as its only property whose value is the first element of the food array. Then the value of the favoriteFood is changed but it will not effect the food array. So consoling the value of the food array will give the same array as initially assigned.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Here we are trying to call sayHi function and show its return value to the console. But, sayHi expects an argument called name as there is no default value assigned to the name parameter, calling the sayHi function without any argument will return a string with undefined name value.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here initial value of count is zero. It gets increased when the forEach loop on the nums array gives truthy value. Here nums array contains 4 elements. So forEach loop will run four times. But count's final value will be 3 as the first element of nums is 0, which is falsy value as a result count's value will not increase when 0 is looped.</i>

</p>
</details>
