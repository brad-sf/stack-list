# Stack List
FIFO stack list

## Installation
`npm install stack-list`

## Import
Node.JS:
```javascript
const {StackList} = require('stack-list');
```

ES6:
```javascript
import {StackList} from 'stack-list';
```

## Usage
```javascript
let list = new StackList(['Hey']); // Optional initial values array

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


