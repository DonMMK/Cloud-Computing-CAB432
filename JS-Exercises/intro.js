result = console.log("Hello World")
console.log(result)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

/* 
A method or statement … returns undefined if the variable that is being evaluated does not
have an assigned value. A function returns undefined if a value was not returned.
*/


// Number
1; // a number
1.2; // also a number
1.2; // a negative number
6.023e23 // scientific notation

// Arithmetic in JS is safe


// Strings
    'I am a string';
"I am a string";
`I am also a string`;

// String concatenation and Eloquent Notation
8 * null;
8 * 5 - 2 + null;

"5" + 1;
"5" - 1;
"5" * 2;
"five" + 2;
"five" * 2;

/*
The let keyword helps us limit the scope of a variable to the region of the code in which we want it to
work for us. 
If the variable is undeclared, then its scope is global, which means it can cause a
great deal of grief elsewhere. 
The var keyword gives us function scope, but here all of the code
lies within the one function, and so there is no difference from global. 
*/