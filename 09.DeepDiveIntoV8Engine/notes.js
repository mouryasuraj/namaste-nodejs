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





Note:
    1. When there is a unexpeced token came then it will throw an error "syntax error"

 */