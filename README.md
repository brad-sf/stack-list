# Stack List
LIFO stack list

## Installation
```bash
npm install stack-list
```

## Import
```javascript
const {StackList} = require('stack-list');

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
