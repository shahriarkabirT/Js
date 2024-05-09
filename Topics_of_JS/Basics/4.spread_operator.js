// The spread operator (`...`) in JavaScript is a syntax that allows an iterable
// (like an array or a string) to be expanded into individual elements.
// It's commonly used in several contexts:

// 1. Function Calls:

function myFunction(x, y, z) {
  console.log(x, y, z);
}

const args = [0, 1, 2];
myFunction(...args); // Equivalent to myFunction(0, 1, 2)

// 2. Array Literals**:

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // Equivalent to const arr2 = [1, 2, 3, 4, 5, 6]

// 3. **Object Literals** (introduced in ES2018):

const obj1 = { foo: "bar", x: 42 };
const obj2 = { ...obj1, y: 13 }; // Equivalent to { foo: 'bar', x: 42, y: 13 }

// 4. **String to Array**:

const str = "hello";
const chars = [...str]; // Equivalent to ['h', 'e', 'l', 'l', 'o']

// 5. **Concatenating Arrays**:

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
const arr3 = [...arr4, ...arr5]; // Equivalent to [1, 2, 3, 4, 5, 6]

// The spread operator provides a concise way to work with arrays,
//  objects, and strings, making the code more readable and expressive.
