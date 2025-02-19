/* 
 1. Syntax Error
    a. Syntax error happen when javascript code in written incorrectly and cannot be parsed (understood by computer)
    Ex: 
    console.log("Hello)  // ❌ Missing closing quote
        msg: SyntaxError: Unexpected end of input
    ✅ How to Fix?
    Make sure your syntax (like brackets, quotes, commas) is correct:

2. Reference Error
    a. A reference error occured when we try to use the variable which has not been declared
    console.log(myVar);  // ❌ myVar is not defined
    Common Causes of Reference Errors:
    1. Using a variable before declaring it.
    2. Trying to access a block-scoped variable outside its scope.
    3. Typing mistakes in variable names.

3. Type Error
    A TypeError happens when we perform an operation on a wrong data type.
    let num = 10;
    num.toUpperCase();  // ❌ Numbers do not have toUpperCase()
    TypeError: num.toUpperCase is not a function

4. Eval error occurs only when using eval() in wrong way
5. A RangeError occurs when a value is outside the allowed range.

6. URIError occurs when there is an issue with encoding or decoding URLs.


Error Type	How to Identify?
Syntax Error -	Happens when the code has incorrect syntax (missing brackets, wrong quotes, etc.).
Reference Error -	Happens when using an undefined variable.
Type Error -	Happens when performing an operation on the wrong data type.
Range Error -	Happens when a value is out of an allowed range.
Eval Error -	Happens due to incorrect eval() usage.
URI Error -	Happens when decodeURIComponent() or encodeURIComponent() has an invalid input.
 */
