# stack-list
A Node.js JavaScript implementation of the stack data type. Supporting both LIFO via `push()` and `pop()`, and FIFO via `push()` and `shift()`.

```bash
npm install stack-list
```

## Syntax
```js
new StackList(initialValue);
```

### Parameters
#### `initialValue`
An `Array` of values of any type to initially populate the stack list.

### Methods
#### `push()`
Push a new value to the top of the stack.

#### `pop()`
Take the top most value off the list and return it.

#### `shift()`
Take the bottom most value off the list and return it.

#### `peek()`
View the top most value on the list.

#### `inspect()`
View the bottom most value on the list.

#### `clear()`
Reset to an empty list.

### Properties
#### `size`
The number of elements in the list. Also available under alias property `length`.


## Examples
```js
const StackList = require('stack-list');

let list = new StackList(['Hey']); // Optional initial values

// Push
list.push('Mate');

// Get size
list.size; // 2

// Peek top value
list.peek(); // 'Mate'

// Pop top value
list.pop(); // 'Mate'
list.pop(); // 'Hey'

// Clear stack
list.clear();
```
