/**
 

// Deep dive into V8 JS Engine -- Developed and maintain by Google


1. Suppose you have written some code and given to V8 Engine. Lets see what happened behind the scenes

    Stages:
        1. Parsing:
            a. Lexical Analysis(Tokenization) ---> It will break our code in tokens
            b. Syntax Analysis(Syntax Parsing) --> Tokens are converted into AST (Abstract Syntax Tree) --> https://astexplorer.net
            c. Once we generated AST, now will move onto another stage
        2. Interpretter:
            Concept: There are two types of languages
                    1. Interpretted Languages
                        a. It execute code line by line
                        b. Fast initial executing
                        c. It have interpretter
                    2. Compiled Languages
                        a. First high language code convert into machine code and then the machine code is executed
                        b. Initially heavey but later fast
                        c. It have compiler
                    3. Javascript is not interpretted or compiled languages. It uses both the types to execute the code
                    4. The compilation method in JS is JIT(Just in Time compilation) 
            a. Now we have AST and it passed to the interpretter
            b. The named of the interpretter in V8 Engine is Ignition Interpretter
            c. AST is passed into Ignition Interpretter
            d. The job of Ingition Interpretter is to convert your AST into byte code and now this byte code finally executed
            e. The named of the compiler in V8 is Turbo Fan Compiler
            f. AST is given to Ignition Interpretter and if any code is reusable or need to optimized that code is called "HOT" and this is given to JIT compliation and it will convert that into optimized machine code and then it will execute
            g. Garbage collection also running simultaneously. Garbage collectin is also known as Orinoco. Mark and Sweep algorith is used to removed the unused code.

            This whole process is known as JIT Compilation



Research:
    1. How V8 Works behind the scene?
    2. What is lexical Analysis?
    3. What is tokens?
    4. What is syntax analysis
    5. What is Interpretter and Compiler?
    6. What is Interpretter Language and Compiled Language?
    7. How JIT works
    8. How code is deoptimized
    9. What is garbage collection
    10. What is mark and sweep algorithm?
    11. What is inline caching?
    12. What is V8 architecture
    


// 

1. After code given to V8 Engine, first stages is
    a. Parsing:
        1. First thing is happen in parsing is Lexical Analysis(also known as Tokenization)
        2. Lexical Analysis: Code is broken down into tokens(small piece)
            i. Tokens: Supporse in this code:
                    Tokens: let x = 10;
                        let → Keyword
                        x → Identifier
                        = → Operator
                        10 → Literal
                        ; → End of statement
        3. Syntax Analysis(Parsing):Tokens are grouped according to JavaScript grammer's rule to form a syntax tree called the AST(Abstract Syntax Tree). This AST is used by Interpreter/Compiler to execute the code.
            i. See the AST on this website --> https://astexplorer.net/
            11. When V8 reads the code, it reads token by token, if any token is missing then it will throw an error "unexpected token". Whenever syntax error is occured means, V8 not able to generate AST
        4. Two types of parsing:
            1. Full Parsing: When code is used immediately like when function is called immediately
            2. Lazy Parsing: When code is not used immediately then it will parse later, but suppose a function is there and it never called so V8 will not parse that function to save the memory.
        5. Now, AST is generated, will give to interpreter, which is the 2nd stage

    b. Interpreter:
        1. JS is use both interpreter and compilter, compilation method in JS is known as JIT(Just In Time Compilation)
        2. AST is pass to Interpreter(name of Google's V8 engine interpreter is "Ignition")
        3. Compiler("Turbofan")
        4. How Interpreter Works:
            1. AST given to Interpreter and it will execture the code line by line, it will convert that code into byte code and then execute
            2. But if any function is invoked many times then V8 mark that function as "HOT" and that code is given to Turbofan(compiler), it will convert that code in optimised machine code and whenever that function called then it will quickly execute. Complier is also know as (optimization)
            3. Sometimes are code also deoptimized, 
                ex: sum(a,b), it turbofan make assumption that sum function will take number paramter, but when we pass string in the param then turbofan deoptimised and give to interpreter and interpreter convert it into byte code and execute it. 

 */