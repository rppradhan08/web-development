# Week-1 : Topics to be covered

1. [Grammar and types](#1-grammar-and-types)
2. [Control flow and error handling](#2-control-flow-and-error-handling)
3. [Loops and iteration](#3-loops-and-iteration)
4. [Function](#4-function)
5. [Expression and operators](#5-expression-and-operators)
6. [DOM Manipulation](#6-dom-manipulation)
7. [Milestone project](#7-milestone-project)

**Sources**: [Javascript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide#functions) | [DOM Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

# 1. **Grammar and types**

## **Hello World in Javascript**

<br>
Writing a simple hello world program in javascript.

```javascript
(function () {
  "use strict";
  /*Start of your code*/
  function greetMe(Name) {
    alert(`Hello ${Name}`);
  }

  greetMe("World");
  /*End of code*/
})();
```

![Hello World!](images\task-1.png)

## **Basics**

JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.

JavaScript is case-sensitive and uses the `Unicode` character set.
For example, the word Früh (which means "early" in German) could be used as a variable name.

```javascript
const Früh = "foobar";
```

## **Comments**

The syntax of comments is the same as in C++ and in many other languages:

```javascript
// a one line comment

/* this is a longer,
 multi-line comment
 */
```

Comments behave like whitespace, and are discarded during script execution.

## **Variable Declaration**

<br>
JavaScript has three kinds of variable declarations.

_var_
Declares a variable, optionally initializing it to a value.

_let_
Declares a block-scoped, local variable, optionally initializing it to a value.

_const_
Declares a block-scoped, read-only named constant.

### **Declaration and initialization**

In a statement like let x = 42, the let x part is called a declaration, and the = 42 part is called an initializer. The declaration allows the variable to be accessed later in code without throwing a ReferenceError, while the initializer assigns a value to the variable. In var and let declarations, the initializer is optional. If a variable is declared without an initializer, it is assigned the value undefined.

```javascript
// Approach 1
var v1 = 20; // declaration + initialization
// Approach 2
let v2; // declaration
v2 = 30; // initialization
```

Data of variables declared via `let` and `var` can be manipulated once initialized. Whereas, `const` variables cannot.
![chapter-1-img](images\task-2.png)

Once a variable is declared it cannot be declared again (see below).
![chapter-1-img](images\task-3.png)

### **Variable scope**

A variable may belong to one of the following scopes:

**Global scope**: The default scope for all code running in script mode.
**Module scope**: The scope for code running in module mode.
**Function scope**: The scope created with a function.
In addition, variables declared with `let` or `const` can belong to an additional scope:

**Block scope**: The scope created with a pair of curly braces (a block).
When you declare a variable outside of any function, it is called a _global variable_, because it is available to any other code in the current document. When you declare a variable within a function, it is called a _local variable_, because it is available only within that function.

![chapter-1-img](images\task-4.png)

However, variables created with var are not block-scoped, but only local to the function (or global scope) that the block resides within.

![chapter-1-img](images\task-5.png)

### **Variable hoisting**

`var`-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet. You can see `var` declarations as being "lifted" to the top of its function or global scope. However, if you access a variable before it's declared, the value is always undefined, because only its declaration is hoisted, but not its initialization.

Types of hoisting:

1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")

```javascript
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

The above examples will be interpreted the same as:

```javascript
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
```

Verifying results of above code snippets.

![chapter-1-img](images\task-6.png)

### **Global Variables**

Global variables are in fact properties of the global object.

In web pages, the global object is window, so you can set and access global variables using the window.variable syntax. In all environments, you can use the globalThis variable (which itself is a global variable) to access global variables.

### **Constants**

You can create a read-only, named constant with the `const` keyword. The syntax of a constant identifier is the same as any variable identifier: it must start with a letter, underscore, or dollar sign ($), and can contain alphabetic, numeric, or underscore characters.

```javascript
const PI = 3.14;
```

A constant cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value. The scope rules for constants are the same as those for let block-scope variables.

However, `const` only prevents re-assignments, but doesn't prevent mutations. The properties of objects assigned to constants are not protected, so the following statement is executed without problems.

```javascript
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

![chapter-1-img](images\task-7.png)
Also, the contents of an array are not protected, so the following statement is executed without problems.

```javascript
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

![chapter-1-img](images\task-8.png)

## **Data structures and types**

### **Data types**

The latest ECMAScript standard defines eight data types:

Seven data types that are primitives:

- `Boolean`. true and false.
- `null`. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
- `undefined`. A top-level property whose value is not defined.
- `Number`. An integer or floating point number. For example: 42 or 3.14159.
- `BigInt`. An integer with arbitrary precision. For example: 9007199254740992n.
- `String`. A sequence of characters that represent a text value. For example: "Howdy".
- `Symbol`. A data type whose instances are unique and immutable.
  and
- `Object`
  Although these data types are relatively few, they enable you to perform useful operations with your applications.
  `Functions` are the other fundamental elements of the language. While functions are technically a kind of object, you can think of objects as named containers for values, and functions as procedures that your script can perform.

### **Data Type Conversion**

JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

So, for example, you could define a variable as follows:

```javascript
let answer = 42;
```

And later, you could assign the same variable a string value, for example:

```javascript
answer = "Thanks for all the sampleArr!";
```

Because JavaScript is dynamically typed, this assignment does not cause an error message.

### **Numbers and the '+' operator**

In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

```javascript
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

With all other operators, JavaScript does not convert numeric values to strings. For example:

```javascript
"37" - 7; // 30
"37" * 7; // 259
```

![chapter-1-img](images\task-9.png)

### **Converting strings to numbers**

In the case that a value representing a number is in memory as a string, there are methods for conversion.

- parseInt()
- parseFloat()

parseInt only returns whole numbers, so its use is diminished for decimals.

![chapter-1-img](images\task-10.png)

### **Literals**

Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script. This section describes the following types of literals:

- Array literals
- Boolean literals
- Numeric literals
- Object literals
- RegExp literals
- String literals

### **Array literals**

An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

The following example creates the coffees array with three elements and a length of three:

```javascript
const coffees = ["French Roast", "Colombian", "Kona"];
```

If an array is created using a literal in a top-level script, JavaScript interprets the array each time it evaluates the expression containing the array literal. In addition, a literal used in a function is created each time the function is called.

![chapter-1-img](images\task-11.png)

#### **Extra commas in array literals**

If you put two commas in a row in an array literal, the array leaves an empty slot for the unspecified element. The following example creates the sampleArr array:

![chapter-1-img](images\task-12.png)

Note that the second item is "empty", which is not exactly the same as the actual undefined value. When using array-traversing methods like `Array.prototype.map`, empty slots are skipped. However, index-accessing sampleArr[1] still returns undefined.

![chapter-1-img](images\task-12-b.png)

If you include a trailing comma at the end of the list of elements, the comma is ignored.

![chapter-1-img](images\task-13.png)

### **Boolean literals**

The Boolean type has two literal values: `true` and `false`.

#### **Boolean coercion**

Many built-in operations that expect booleans first coerce their arguments to booleans. The operation can be summarized as follows:

![chapter-1-img](images\task-14.png)

- Booleans are returned as-is.
- undefined turns into false.
- null turns into false.
- 0, -0, and NaN turn into false; other numbers turn into true.
- 0n turns into false; other BigInts turn into true.
- Symbols turn into true.
- All objects become true.

In other words, there are only a handful of values that get coerced to false — these are called falsy values. All other values are called truthy values. A value's truthiness is important when used with logical operators, conditional statements, or any boolean context.

There are two ways to achieve the same effect in JavaScript.

- `Double NOT`: `!!x` negates `x` twice, which converts `x` to a boolean using the same algorithm as above.
- The `Boolean()` function: `Boolean(x)` uses the same algorithm as above to convert `x`.

![chapter-1-img](images\task-15.png)

### **Numeric literals**

JavaScript numeric literals include integer literals in different bases as well as floating-point literals in base-10.

Note that the language specification requires numeric literals to be unsigned. Nevertheless, code fragments like -123.4 are fine, being interpreted as a unary - operator applied to the numeric literal 123.4.

#### **Integer literals**

Integer and BigInt literals can be written in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

Some examples of integer literals are:

```
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

#### **Floating-point literals**

A floating-point literal can have the following parts:

- An unsigned decimal integer,
- A decimal point (.),
- A fraction (another decimal number),
- An exponent.

More succinctly, the syntax is:

```
[digits].[digits][(E|e)[(+|-)]digits]
```

Some examples of floating point literals:

```3.1415926
.123456789
3.1E+12
.1e-23
```

### **Object literals**

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

The following is an example of an object literal. The first element of the `car` object defines a property, `myCar`, and assigns to it a new string, "Saturn"; the second element, the `getCar` property, is immediately assigned the result of invoking the function `(carTypes("Honda"))`; the third element, the special property, uses an existing variable `(sales)`.

```javascript
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

![chapter-1-img](images\task-16.png)

Additionally, you can use a numeric or string literal for the name of a property or nest an object inside another. The following example uses these options.

![chapter-1-img](images\task-17.png)

Property names that are not valid identifiers cannot be accessed as a dot (.) property.
![chapter-1-img](images\task-18.png)

### **Enhanced Object literals**

Object literals support a range of shorthand syntaxes that include setting the prototype at construction, shorthand for foo: foo assignments, defining methods, making super calls, and computing property names with expressions.

Together, these also bring object literals and class declarations closer together, and allow object-based design to benefit from some of the same conveniences.

```javascript
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};
```

### **RegExp literals**

A regex literal (which is defined in detail later) is a pattern enclosed between slashes. The following is an example of a regex literal.

```
const re = /ab+c/;
```

### **String literals**

A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type (that is, either both single quotation marks, or both double quotation marks).

```
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

**Template literals** are also available. Template literals are enclosed by the back-tick (`) (grave accent) character instead of double or single quotes.

![chapter-1-img](images\task-19.png)

#### **Using special characters in strings**

In addition to ordinary characters, you can also include special characters in strings, as shown in the following example.

```
"one line \n another line";
```

# **2. Control flow and error handling**

JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application. This chapter provides an overview of these statements.

The [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements) contains exhaustive details about the statements in this chapter. The semicolon (;) character is used to separate statements in JavaScript code.

Any JavaScript expression is also a statement. See [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators) for complete information about expressions.

## **Block statement**

The most basic statement is a block statement, which is used to group statements. The block is delimited by a pair of curly brackets:

```
{
  statement1;
  statement2;
  // …
  statementN;
}
```

Block statements are commonly used with control flow statements (`if`, `for`, `while`).

_Example 1_

```javascript
while (x < 10) {
  x++;
}
```

_Example 2_

Demonstration of `Block` scope using `let` & `var` declaration.
Below snapshot shows the variable declared using `var` keyword retain its local scope even inside the block statement, as after the variable got re-initialized inside the block its value got updated. However, the variable declared using `let` keyword didn't had any impact outside the block.

![chapter-2-img](images\task-20.png)

## **Conditional statements**

A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: `if...else` and `switch`.

### **if...else statement**

Use the `if` statement to execute a statement if a logical condition is `true`. Use the optional `else` clause to execute a statement if the condition is `false`.

An if statement looks like this:

```javascript
if (condition) {
  statement1;
} else {
  statement2;
}
```

![chapter-2-img](images\task-21.png)

You can also compound the statements using else if to have multiple conditions tested in sequence, as follows:

```javascript
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

![chapter-2-img](images\task-22.png)

#### **Falsy values**

The following values evaluate to `false` (also known as **Falsy** values):

- false
- undefined
- null
- 0
- NaN
- the empty string ("")

All other values—including all objects—evaluate to `true` when passed to a conditional statement.

**Note: Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object!**

For example:
![chapter-2-img](images\task-23.png)

### **switch statement**

A `switch` statement allows a program to evaluate an expression and attempt to match the expression's value to a `case` label. If a match is found, the program executes the associated statement.

A switch statement looks like this:

```javascript
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

JavaScript evaluates the above switch statement as follows:

- The program first looks for a case clause with a label matching the value of expression and then transfers control to that clause, executing the associated statements.
  > - If no matching label is found, the program looks for the optional default clause:
  > - If a default clause is found, the program transfers control to that clause, executing the associated statements.
  > - If no default clause is found, the program resumes execution at the statement following the end of switch.
  > - (By convention, the default clause is written as the last clause, but it does not need to be so.)

#### **break statements**

The optional `break` statement associated with each `case` clause ensures that the program breaks out of switch once the matched statement is executed, and then continues execution at the statement following switch. If break is omitted, the program continues execution inside the switch statement (and will evaluate the next `case`, and so on).

_EXAMPLE_

In the following example, if fruitType evaluates to 'Bananas', the program matches the value with case 'Bananas' and executes the associated statement. When break is encountered, the program exits the switch and continues execution from the statement following switch. If break were omitted, the statement for case 'Cherries' would also be executed.

```javascript
let fruitType = "Apples";
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");
```

RESPONSE
![chapter-2-img](images\task-24.png)

## **Exception handling statements**

You can throw exceptions using the `throw` statement and handle them using the `try...catch` statements.

- throw statement
- try...catch statement

### **Exception types**

Just about any object can be thrown in JavaScript. Nevertheless, not all thrown objects are created equal. While it is common to throw numbers or strings as errors, it is frequently more effective to use one of the exception types specifically created for this purpose:

- ECMAScript exceptions
- DOMException and DOMError

### **throw statement**

Use the `throw` statement to throw an exception. A `throw` statement specifies the value to be thrown:

```javascript
throw expression;
```

You may throw any expression, not just expressions of a specific type. The following code throws several exceptions of varying types:

```javascript
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};
```

Response:

![chapter-2-img](images\task-25.png)

### **try...catch statement**

The `try...catch` statement marks a block of statements to try, and specifies one or more responses should an exception be thrown. If an exception is thrown, the `try...catch` statement catches it.

The `try...catch` statement consists of a `try` block, which contains one or more statements, and a `catch` block, containing statements that specify what to do if an exception is thrown in the `try` block.

In other words, you want the `try` block to succeed—but if it does not, you want control to pass to the `catch` block. If any statement within the `try` block (or in a function called from within the `try` block) throws an exception, control immediately shifts to the `catch` block. If no exception is thrown in the `try` block, the `catch` block is skipped. The `finally` block executes after the `try` and `catch` blocks execute but before the state+ments following the try...catch statement.

_Example-1_

Executing `getMonthName()` without `try...catch` block:

```javascript
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
}

let myMonth = 22; // This will cause getMonthName to throw "InvalidMonthNo" error
monthName = getMonthName(myMonth); // function could throw exception
```

Response:
![chapter-2-img](images\task-26.png)

_Example-2_
Executing `getMonthName()` with `try...catch` block:

```javascript
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
}

try {
  // statements to try
  let myMonth = 22;
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  console.log(monthName, "Month ID inserted"); // pass exception object to error handler (i.e. your own function)
}
```

Response:
![chapter-2-img](images\task-27.png)

### **The catch block**

You can use a `catch` block to handle all exceptions that may be generated in the try block.

```
catch (catchID) {
  statements
}
```

The `catch` block specifies an identifier (catchID in the preceding syntax) that holds the value specified by the `throw` statement. You can use this identifier to get information about the exception that was thrown.

JavaScript creates this identifier when the `catch` block is entered. The identifier lasts only for the duration of the `catch` block. Once the `catch` block finishes executing, the identifier no longer exists.

For example, the following code throws an exception. When the exception occurs, control transfers to the catch block.

![chapter-2-img](images\task-29.png)

### **The finally block**

The `finally` block contains statements to be executed after the `try` and `catch` blocks execute. Additionally, the `finally` block executes before the code that follows the `try…catch…finally` statement.

It is also important to note that the `finally` block will execute whether or not an exception is thrown. If an exception is thrown, however, the statements in the `finally` block execute even if no `catch` block handles the exception that was thrown.

You can use the `finally` block to make your script fail gracefully when an exception occurs. For example, you may need to release a resource that your script has tied up.

```javascript
openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
```

If the finally block returns a value, this value becomes the return value of the entire `try…catch…finally` production, regardless of any `return` statements in the `try` and `catch` blocks:

_Example_

```javascript
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false
```

![chapter-2-img](images\task-30.png)

Overwriting of return values by the finally block also applies to exceptions thrown or re-thrown inside of the catch block:

_Example_

```javascript
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    // This throw statement is suspended until
    // finally block has completed
    throw e;
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  console.log(f());
} catch (e) {
  // this is never reached!
  // while f() executes, the `finally` block returns false,
  // which overwrites the `throw` inside the above `catch`
  console.log('caught outer "bogus"');
}

// Logs:
// caught inner "bogus"
// false
```

### **Nesting try...catch statements**

You can nest one or more `try...catch` statements.

If an inner `try` block does not have a corresponding `catch` block:

it must contain a `finally` block, and
the enclosing `try...catch` statement's catch block is checked for a match.
For more information, see [nested try-blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try-blocks) on the try...catch reference page.

### **Utilizing Error objects**

Depending on the type of error, you may be able to use the `name` and `message` properties to get a more refined message.

The `name` property provides the general class of Error (such as DOMException or Error), while message generally provides a more succinct message than one would get by converting the error object to a string.

If you are throwing your own exceptions, in order to take advantage of these properties (such as if your catch block doesn't discriminate between your own exceptions and system ones), you can use the Error constructor.

```javascript
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("The message");
  } else {
    doSomethingToGetAJavaScriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) {
  // Now, we actually use `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'The message', or a JavaScript error message
}
```

# 3. **Loops and iteration**

Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.

_Example_

```javascript
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

The statements for loops provided in JavaScript are:

- for statement
- do...while statement
- while statement
- labeled statement
- break statement
- continue statement
- for...in statement
- for...of statement

## **for statement**

A `for` loop repeats until a specified condition evaluates to `false`. The JavaScript for loop is similar to the Java and C for loop.

A `for` statement looks as follows:

```javascript
for (initialization; condition; afterthought) {
  statements;
  //or
  statement; // no curly braces required
}
```

When a `for` loop executes, the following occurs:

1. The initializing expression "initialization", if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The "condition" expression is evaluated. If the value of "condition" is `true`, the loop statements execute. Otherwise, the for loop terminates. (If the "condition" expression is omitted entirely, the "condition" is assumed to be `true`.)
3. The statement executes. To execute multiple statements, use a block statement ({ }) to group those statements.
4. If present, the update expression afterthought is executed.
5. Control returns to Step 2.

_Example_
![chapter-3-img](images\task-31.png)

## **do...while statement**

The **do...while** statement repeats until a specified condition evaluates to false.

A `do...while` statement looks as follows:

```javascript
do statement;
while (condition);
```

statement is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ }) to group those statements.)

If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

_Example_
In the following example, the do loop iterates at least once and reiterates until i is no longer less than 5.

## **while statement**

A `while` statement executes its statements as long as a specified condition evaluates to `true`. A while statement looks as follows:

```javascript
while (condition) statement;
```

If the condition becomes `false`, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns `true`, statement is executed and the condition is tested again. If the condition returns `false`, execution stops, and control is passed to the statement following while.

To execute multiple statements, use a block statement ({ }) to group those statements.

_Example 1_
The following while loop iterates as long as `n` is less than 3:

```javascript
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:

- After the first pass: n = 1 and x = 1
- After the second pass: n = 2 and x = 3
- After the third pass: n = 3 and x = 6

After completing the third pass, the condition n < 3 is no longer `true`, so the loop terminates.

_Example 2_
**Avoid infinite loops**. Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate! The statements in the following while loop execute forever because the condition never becomes `false`:

```javascript
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}
```

## **labeled statement**

A `label` provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a `label` to identify a loop, and then use the `break` or `continue` statements to indicate whether a program should interrupt the loop or continue its execution.

The syntax of the labeled statement looks like the following:

```
label:
  statement
```

The value of `label` may be any JavaScript identifier that is not a reserved word. The `statement` that you identify with a `label` may be any statement.

_Example_
In this example, the `label` markLoop identifies a `while` loop.

```javascript
markLoop: while (theMark) {
  doSomething();
}
```

## **break statement**

Use the `break` statement to terminate a loop, switch, or in conjunction with a labeled statement.

- When you use break without a `label`, it terminates the innermost enclosing `while`, `do-while`, `for`, or `switch` immediately and transfers control to the following statement.
- When you use `break` with a `label`, it terminates the specified labeled statement.

example

```javascript
break;
break label;
```

1. The first form of the syntax terminates the innermost enclosing loop or switch.
2. The second form of the syntax terminates the specified enclosing labeled statement.

_Example 1_
The following example iterates through the elements in an array until it finds the index of an element whose value is `theValue`:

![chapter-3-img](images\task-33.png)

_Example 2: Breaking to a label_

![chapter-3-img](images\task-34.png)

## **continue statement**

The `continue` statement can be used to restart a `while`, `do-while`, `for`, or `label` statement.

- When you use continue without a `label`, it terminates the current iteration of the innermost enclosing `while`, `do-while`, or `for` statement and continues execution of the loop with the next iteration. In contrast to the `break` statement, `continue` does not terminate the execution of the loop entirely. In a `while` loop, it jumps back to the condition. In a `for` loop, it jumps to the increment-expression.
- When you use `continue` with a `label`, it applies to the looping statement identified with that `label`.

The syntax of the `continue` statement looks like the following:

```javascript
continue;
continue label;
```

_Example 1_
The following example shows a `while` loop with a `continue` statement that executes when the value of `i` is 3. Thus, `n` takes on the values 1, 3, 7, and 12.

```javascript
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12
```

![chapter-3-img](images\task-35.png)

If you comment out the `continue`;, the loop would run till the end and you would see 1,3,6,10,15.

_Example 2_
A statement labeled `checkiandj` contains a statement labeled `checkj`. If `continue` is encountered, the program terminates the current iteration of `checkj` and begins the next iteration. Each time `continue` is encountered, `checkj` reiterates until its condition returns `false`. When `false` is returned, the remainder of the `checkiandj` statement is completed, and `checkiandj` reiterates until its condition returns `false`. When `false` is returned, the program continues at the statement following `checkiandj`.

If `continue` had a label of `checkiandj`, the program would continue at the top of the `checkiandj` statement.

```javascript
let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
```

Response
![chapter-3-img](images\task-36.png)

## **for...in statement**

The `for...in` statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A `for...in` statement looks as follows:

```javascript
for (variable in object) statement;
```

_Example_
The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.

```javascript
function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}
```

For an object `car` with properties `make` and `model`, result would be:

```javascript
car.make = Ford;
car.model = Mustang;
```

### Arrays

Although it may be tempting to use this as a way to iterate over Array elements, the `for...in` statement will return the name of your user-defined properties in addition to the numeric indexes.

Therefore, it is better to use a traditional for loop with a numeric index when iterating over arrays, because the `for...in `statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).

## **for...of statement**

The `for...of` statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```javascript
for (variable of object) statement;
```

The following example shows the difference between a `for...of` loop and a `for...in` loop. While `for...in` iterates over property names, `for...of` iterates over property values:

```javascript
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
```

The `for...of` and `for...in` statements can also be used with destructuring. For example, you can simultaneously loop over the keys and values of an object using `Object.entries()`.

```javascript
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
```

![chapter-3-img](images\task-37.png)

# 4. **Function**

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

## **Defining functions**

### **Function declarations**

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, { /_ … _/ }.

For example, the following code defines a simple function named `square`:

```javascript
function square(number) {
  return number * number;
}
```

Parameters are essentially passed to _functions by value_ — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, **the change is not reflected globally or in the code which called that function**.

![chapter-4-img](images\task-38.png)

When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

![chapter-4-img](images\task-39.png)

When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:

![chapter-4-img](images\task-40.png)

### **Function expressions**

While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

```javascript
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

![chapter-4-img](images\task-41.png)

Function expressions are convenient when passing a function as an argument to another function. The following example shows a `map` function that should receive a function as first argument and an array as second argument:

_Example-1_
![chapter-4-img](images\task-42.png)

_Example-2_
In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as a second argument:

```javascript
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
```

In JavaScript, a function can be defined based on a condition. For example, the following function definition defines `myTempFunc` only if `num` equals 0:

![chapter-4-img](images\task-43.png)

In addition to defining functions as described here, you can also use the [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) constructor to create functions from a string at runtime, much like [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

A method is a function that is a property of an object. Read more about objects and methods in [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects).

## **Calling functions**

Defining a function does not _execute it_. Defining it names the function and specifies what to do when the function is called.

_Calling_ the function actually performs the specified actions with the indicated parameters. For example, if you define the function `square`, you could call it as follows:

```javascript
square(5);
```

The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.

Functions must be in `scope` when they are called, but the function declaration can be hoisted (appear below the call in the code). The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level).

A function can call itself. For example, here is a function that computes factorials recursively:

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

There are other ways to call functions. There are often cases where a function needs to be called dynamically, or the number of arguments to a function vary, or in which the context of the function call needs to be set to a specific object determined at runtime.

It turns out that functions are themselves objects — and in turn, these objects have methods. (See the Function object.) The `call()` and `apply()` methods can be used to achieve this goal.

### **_Function hoisting_**

Consider the example below:

```javascript
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:

```
javascript
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25

```

Function hoisting only works with function declarations — not with function expressions. The following code will not work:

```javascript
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## **Function scope**

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.

In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

```javascript
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
```

## **Scope and the function stack**

### **Recursion**

A function can refer to and call itself. There are three ways for a function to refer to itself:

1. The function's name
2. arguments.callee
3. An in-scope variable that refers to the function

```javascript
const foo = function bar() {
  // statements go here
};
```

Within the function body, the following are all equivalent:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

A function that calls itself is called a _recursive_ function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

```javascript
let x = 0;
// "x < 10" is the loop condition
while (x < 10) {
  // do stuff
  x++;
}
```

It can be converted into a recursive function declaration, followed by a call to that function:

```javascript
function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

It is possible to convert any recursive algorithm to a non-recursive one, but the logic is often much more complex, and doing so requires the use of a stack.

In fact, recursion itself uses a stack: the function stack. The stack-like behavior can be seen in the following example:

```javascript
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Logs:
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

### **Nested functions and closures**

You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

**To summarize:**

- The inner function can be accessed only from statements in the outer function.
- The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
  The following example shows nested functions:

```javascript
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41
```

Since the inner function forms a **closure**, you can call the outer function and specify arguments for both the outer and inner function:

```javascript
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8
```

### **Preservation of variables**

Notice how x is preserved when `inside` is returned. A closure must preserve the arguments and variables in all scopes it references. Since each call provides potentially different arguments, a new closure is created for each call to `outside`. The memory can be freed only when the returned `inside` is no longer accessible.

This is not different from storing references in other objects, but is often less obvious because one does not set the references directly and cannot inspect them.

### **Multiply-nested functions**

Functions can be multiply-nested. For example:

- A function (A) contains a function (B), which itself contains a function (C).
- Both functions B and C form closures here. So, B can access A, and C can access B.
- In addition, since C can access B which can access A, C can also access A.

```javascript
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)
```

### **Name conflicts**

When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the innermost scope takes the highest precedence, while the outermost scope takes the lowest. This is the scope chain. The first on the chain is the innermost scope, and the last is the outermost scope. Consider the following:

```javascript
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
```

The name conflict happens at the statement return x \* 2 and is between inside's parameter x and outside's variable x. The scope chain here is {inside, outside, global object}. Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).

### **Closures**

`Closures` are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).

However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.

Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the outer function execution, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function is somehow made available to any scope outside the outer function.

![chapter-4-img](images\task-44.png)

The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold "persistent" and "encapsulated" data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

```javascript
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

## **Using the arguments object**

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

```
arguments[i];
```

where `i` is the ordinal number of the `argument`, starting at 0. So, the first argument passed to a function would be `arguments[0]`. The total number of arguments is indicated by `arguments.length`.

Using the `arguments` object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many `arguments` will be passed to the function. You can use `arguments.length` to determine the number of arguments actually passed to the function, and then access each argument using the `arguments` object.

For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:

```javascript
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

You can pass any number of arguments to this function, and it concatenates each argument into a string "list":

```javascript
console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "
```

```
Note: The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property. However, it does not possess all of the array-manipulation methods.
```

## **Function parameters**

There are two special kinds of parameter syntax:

1. default parameters
2. rest parameters.

### **Default Parameters**

In JavaScript, parameters of functions default to `undefined`. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.

In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are `undefined`.

_Example: Without Default Parameters_

```javascript
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

With default parameters, a manual check in the function body is no longer necessary. You can put 1 as the default value for `b` in the function head:

```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

### **Rest Parameters**

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

In the following example, the function `multiply` uses rest parameters to collect arguments from the second one to the end. The function then multiplies these by the first argument.

```javascript
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## **Predefined functions**

JavaScript has several top-level, built-in functions:

- `eval()`
  The eval() method evaluates JavaScript code represented as a string.

- `isFinite()`
  The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

- `isNaN()`
  The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN() to determine if the value is Not-A-Number.

- `parseFloat()`
  The parseFloat() function parses a string argument and returns a floating point number.

- `parseInt()`
  The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

- `decodeURI()`
  The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.

- `decodeURIComponent()`
  The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.

- `encodeURI()`
  The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

- `encodeURIComponent()`
  The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

# 5. **Expression and operators**

/_ TODO _/

# 6. **DOM Manipulation**

/_ TODO _/

# 7. **Milestone project**

/_ TODO _/
