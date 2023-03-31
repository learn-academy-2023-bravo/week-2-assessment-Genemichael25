// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Test - Evelyn

describe("divisibleByThree", () => {
    it("takes an object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
      expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
      expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
      expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })   
  })
  // Failing!
  //    FAIL  ./code-challenges.test.js
  //   divisibleByThree
  //   ✕ takes an object as an argument and decides if the number inside it is evenly divisible by three or not
  
  // ● divisibleByThree › takes an object as an argument and decides if the number inside it is evenly divisible by three or not
  
  //   ReferenceError: divisibleByThree is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

//Pseudocode - Felix
//input:1 object
//output: return string with interpolation using the original input.
//create a function divByThree using dot notation we will call the number in the object to check if divisible by three. Using the modulo and an equality operator to check if the number is divisible by three if there is no remainder the number turns out to be divisible by three. The modulo operator displays remainders and the equality operator checks that it is strictly equal to zero (no remainder). Then it returns an interpolated string to let the user know if the input is divisible by three or not.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Test - Eddie

describe ("capitalize", () => {
    it ("returns the words inside of the array capitalized", () => {
        expect (capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect (capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// Good failure:
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.178 s, estimated 1 s
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudocode - James

// first create a function called alltoCaps and then take an array as an argument. Then use the map function to make every index in the array capitalized. I will do this by first taking the zero index character of the string .toUpperCase on it then add the rest of the string by slicing the index one forward and then return the new mapped array.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// Test - Greg

describe("firstVowel", ()=> {
    it("returns the index of the first vowel in a string", ()=>{
    const vowelTester1 = "learn"
    // // Expected output: 1
    const vowelTester2 = "academy"
    // // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})
// const vowelTes

// b) Create the function that makes the test pass.


// Pseudocode - Nikki

// Pseudocode:
        // Input is a string that will create a function
        // Create a function named firstVowelIndex
        // Create an array of vowels
        // Create "for" loop that uses the .includes() method to check if the current character is a vowel
        // Use conditional statement to return [i] if/when a vowel is found
        // Function will return index of the first vowel in the strings given 