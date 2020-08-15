# FUNCTIONAL PROGRAMMING

Functions need to be pure, no side effects, if the same argument is passed to the function, it must return the same result and execute the exact same actions. It's impossible to build an application with only pure functions, what we can do is to isolate the not pure from the rest.

A pure function:
- Has only 1 task;
- Return statement;
- No shared state;
- Immutable state, cannot mutate the state of the outside;
- Composable;
- Predictable, need to be easy to understand the process and to identify the result

## Idempotence

Idempotence means that given the same input, the function does and return exactly the same thing. The code becomes predictable.

## Immutability

Immutability means that you cannot change the current (global) state, you can change the data, but cloning the original object, changing it and then return. It keeps the original state immutable. It may sound expensive to clone everything and return the clones, but there are the concept of structural sharing, in the clone the clone won't copy everything, just create new values in the memory if it's different than the original.

## Currying

Currying is the method of change a function that accepts different arguments to a function that takes one argument at a time.

```javascript
    const multiply = (a, b, c) => a*b*c;
    const curriedMultiply = (a) => (b) => (c) => a*b*c;
```

## Partial Application

Partial Application is the method of change a function that accepts different arguments to a function that receives only one argument and returns a function that receives the rest of them. It's possible to test it with the bind method:

```javascript
    const multiply = (a, b, c) => a*b*c;
    const createPartialMultiply = (a) => multiply.bind(null, a);
    const partialMultiplyBy5 = createPartialMultiply(5);
    const result = partialMultiplyBy5(2, 2); // Returns 20
```

## Memoization

Form of caching that "saves" the result of the function after the first time that it was calculated, saving time and processing as the whole execution is done once and after that the method only returns the saved result in the cache.