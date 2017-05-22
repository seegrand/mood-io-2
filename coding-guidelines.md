# Coding Guidelines  

## Indentation  
Use tabs (and configure your IDE to show a size of 8 spaces for them) for writing your code (hopefully we can keep this consistent). If you are modifying someone else’s code, try to keep the coding style similar.  

```javascript
for (i = 0; i < 10; i++) {  
	if (something(i)) {  
		do_more();  
	}
}  
```

## Performance and Readability  
- It is more important to be correct than to be fast.  
- It is more important to be maintainable than to be fast.  
- Fast code that is difficult to maintain is likely going to be looked down upon.  

## Where to put spaces  
Use a space before an opening parenthesis when calling functions, or indexing, like this:  

```javascript
method(a);  
b[10];
```

Do not put a space after the opening parenthesis and the closing one, ie:  
Good:  

```javascript
method(a);  
array[10];
```

Bad:  

```javascript
method ( a );  
array[ 10 ];
```

Do not put a space between the generic types, ie:  
Good:  

```javascript
var list = new List<int>();
```
Bad:

```javascript
var list = new List <int> ();
```

## Where to put braces  
Inside a code block, put the opening brace on the same line as the statement:  
Good:  

```javascript
if (a) {  
	code();  
	code();  
}  
```

Bad:

```javascript
if (a)  
{  
	code();  
	code();  
}
```

When defining a method, use the K&R style for brace placement, that means, use a new line for the brace, like this:  
Good:  

```javascript
void method() {  
}
```

Bad:

```javascript
void method()  
{  
}
```

If statements with else clauses are formatted like this:  

Good:  

```javascript
if (dingus) {  
		...  
} else {  
		...  
}
```

Bad:  

```javascript
if (dingus)  
{  
		...  
}  
else  
{  
		...  
}
```

Bad:  

```javascript
if (dingus) {  
		...  
}  
else {  
		...  
}
```

To summarize:  

Statement | Brace position
--- | ---
Namespace | same line
Type | same line
Method (including constructor) | same line
Properties | same line
Control blocks (if, for…) | same line
Anonymous types and methods | same line

## If statements
To achieve clean code, avoid unnecessary else clauses.
Good:
```javascript
if (dingus) {
  return false;
}

return true;
```

Bad:
```javascript
if (dingus) {
  return false;
} else {
  return true;
}
```
Because of the `return` statement, else clause is redundant.

## Casing  
Argument names should use the camel casing for identifiers, like this:  

Good:  

```javascript
void myMethod (string myArgument)
```

Bad:  

```javascript
void MyMethod (string lpstrArgument)  
void MyMethod (string my_string)
```

Although some changes were made, this is the main source for the coding guidelines: http://www.mono-project.com/community/contributing/coding-guidelines/

## Documentation Guidelines
The used documentation tool for this project is: [documentation.js](http://documentation.js.org/).

## Tags
usejsdoc.com covers all available tags in the JSDoc syntax, and is a great reference. The most commonly used tags are:
- `@param` - input given to a function as an argument
- `@returns` - output value of a function
- `@name` - explicitly set the documented name of a function, class, or variable
- `@private` - you can use @private to document code and not have it included in the generated documentation, maybe it's not part of the public API. There's also - @public and @protected
- `@example` - you can use the @example tag to add inline code examples with your documentation

If your text editor does not highlight JSDoc tags, try using a plugin for JSDoc.

## Example
```javascript
/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function addOne(input) {
  return input + 1;
}
```

#### Explanation
*On the first line:*
```javascript
 * This function adds one to its input.
```
The first line of the comment is typically the description. This section says what the code is or does.

*On the second line:*
```javascript
 * @param {number} input any number
```
- `@param` is a tag: This tag indicates that we'll be documenting a function's parameter.
- `{number}` is a type. It says that the input to this function is a JavaScript "number". It could also say {string}, {Object}, {Date}, or any other JavaScript built-in type. And if you defined a custom class, like FooClass, you can use it as a type too by saying {FooClass}.
- `input` is the name of the input variable. It matches what the code says right below it (function addOne(input)).
- `any number` is the description of the input.

*On the third line:*
```javascript
 * @returns {number} that number, plus one.
```

On the third line there's @returns. JavaScript returned values don't have names, so we just have a description of the value.

##### Optional Parameters

Sometimes functions allow you to omit a parameter. This is the syntax that describes an optional parameter:
```javascript
 * @param {number} [input=5] any number
```
If an input is omitted, the default value of 5 will be passed to the function.

More info: https://github.com/documentationjs/documentation/blob/master/docs/

## File headers
For any new files, please use a descriptive introduction, like this:  

```javascript
/**
 * @file
 * Provides some feature.
 *
 * @author
 *      Foo Bar (foo@bar.com)
 *      Snicker Bar (snicker@bar.com)
 *
 * @version
 * 0.1
 */
```

If you are modifying someone else’s code, and your contribution is significant, please add yourself to the Authors list.  

## Single-line comments
For short comments use:

```javascript
// Blah blah blah
```

## Multiline comments  
For long, multiline comments use:  

```javascript
/*  
 * Blah  
 * Blah again  
 * and another Blah  
 */
```
