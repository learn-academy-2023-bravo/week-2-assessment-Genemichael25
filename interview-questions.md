# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?


Raymond

Your answer:
A parameter is a placeholder used when defining a function. A function can take any number of parameters. Parameters allow you to perform logic on data that is supplied to a function. This allows you to repeat an action on different peices of data without duplicating logic.
Create a function called greet that takes a parameter called name:
// parameter---- ↓
function greet1(name) {
	return `Hello ${name}`
}

// parameter---- ↓
const greet2 = (name) => {
	return `Hello ${name}`
}
An argument is used when invoking a function. An argument is the data that is being passed into the function.
Call the function greet with the argument of 'Raymond':
// argument-↓
greet1('Raymond')

// argument-↓
greet2('Raymond')

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Borja

Your answer: value, index and array. Only the value is required, the index and array parameters are optional 

Researched answer: element, index, array. The element is what is being processed in the array.map(), the index is the index of the specific element being processed and the array is the array that called .map()

3. What is the difference between map and filter?

Spencer

Your answer: Map is a method that will take in an array and create a new array after iterating over the old. We can take an array of all lower case strings and use the .map() method to change them to all uppercase because of its ability to look at each value and make the change. Filter is a method which can be used to extract personlized values from an array. For example if we have an array of 100 numbers we can use .filter() to set a conditional statement that will return only odd numbers.
Researched answer: the method .map() returns an array of informatin from the original array. We can use it in the call back function to change or get only the data wanted. The .filter() method is used to aquire a subset of data from the original array based on provided condition.


4. What is iteration?

Elmer

Your answer:
Iteration refers to the process of repeatedly executing a set of instructions or statements for a specific number of times or until a certain condition is met.
Researched answer:
In programming, iteration is the process of repeatedly executing a block of code until a specific condition is met. In JavaScript, there are several ways to iterate over an array, including the for loop, the forEach() method, and the map() method. For example, a for loop can be used to iterate over an array and execute a set of statements for each element in the array:
    let myArray = [1, 2, 3, 4, 5]
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }
In this example, the for loop starts at index 0 and iterates over the array until the index is less than the length of the array. For each iteration, the loop prints the value of the current element to the console.

5. What is the difference between a function and a method?

Mark


Your answer: Functions are blocks of code that can be invoked with different arguments over and over again. A method is a similar to a function in that it performs an action on a given piece of data. The difference is that a method is directly applied to an object or a class.

Researched answer: Functions are a reusable block of code that performs a task, and can take in data as an argument via a parameter. Functions can be called anywhere, and return different results based on the input. A method is a function thats associated with an object or class. When calling a method, it is defined to a specific piece of data.

6. STRETCH: What is hoisting in JavaScript?


Apple

Your answer: I read about hoisting in JavaScript when I was doing the Codecademy tutorials before the beginning of our cohort, however, I cannot recall exactly what it was. I remember that hoisting something is bad practice, because it is basically hard coding data.

Researched answer: Hoisting is doing something before it is defined. For example, one can call for a function, and then under the function invocation, one then types out said function. This is not recommended because it is unusual and can throw errors. If one decides to console.log a variable, and then declares said variable, it will log undefined into the console.