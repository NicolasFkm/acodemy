# JavaScript Basics

The JS file needs a ECMAScript engine(like Google V8 or SpiderMonkey), the engine **parses** the file in tokens to the **Abstract Syntax Tree** (you can check how the AST works [here](https://astexplorer.net/)) that basically breaks the code file into a tree structure with what's happening like variable declarations and function declarations, then it's before send it to the compiler chain, but first we need to understand more about interpreters and compilers

## Interpreter vs Compiler

Interpreter just reads the code line by line and simply execute it as it's written on the fly, it means that the interpreter is really fast but does not optimize the code, just runs it, so if the code has repetitions that may be simplified, the interpreter will keep running it over and over again.

Compiler tries to understand what the code want to do and transforms it into a low level language, it can take more time, but it tries to simplify the code to optimize before the bytecode generation.

The V8 engine uses a different approach, merging the two ways you can get a Just In Time Compiler (**JIT Compiler**) that uses the best of both worlds.

## V8 Compiler Chain

With the JIT Compiler, the AST pass through the **Interpreter** (V8 calls it as "Ignition") that generates the bytecode. The bytecode is executed inside the engine and during the code execution the engine analyzes and collect data to improve/optimize the code with the **Profiler** or Monitor, after this profiling the **Compiler** optimize the code and generates an optimized code (for example if the same method with the same result is executed in loop, the Profiler sends to the Compiler to optimize it changing this call fot its result).