// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!


// ES2015 Global Constants
/* Write an ES2015 Version */
const PI = 3.14;


// QUIZ

// - What is the difference between var and let?

// Var is function scoped, so it can be easily overwritten. Var can be reassigned, redeclared and can mutate (i.e. can add more values to 
// an array or properties of an object can change.) On the other hand, let is block scoped, which exist only within a set of curly braces (
// i.e. for/if loop or a specific function). Additionally, a let variable can be reassigned and mutate. However, let cannot be redeclared (
// i.e. let PI = 3.14, ok. let PI = 3.1, not ok).

// - What is the difference between var and const?

// Var is function scoped while const is block scoped. Var can be reassigned, redeclared and can mutate while const can only mutate, but 
// cannot be reassigned or redeclared. 

// - What is the difference between let and const?

// Both let and const are block scoped. However, let can be reassigned while const can't be. Both let and const are mutatable and cannot be
// redeclared. 

// - What is hoisting?

// Hoisting refers to the behavior of javascript declaring all var variables before executing any other commands. All var variables are 
// declared at the very beginning when javascript is compiled even though no values have been assigned to any of them. Hoisting only works
// for variables declared with var, not with const or let. 
