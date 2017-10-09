const tap = require('tap');
const StackList = require('./index.js');

let list = new StackList(['Yo']);

// It pushes intial values
tap.equal(list.size, 1);

// It can peek initial value
tap.equal(list.peek(), 'Yo');

// It pushes new value
list.push('Hey');
tap.equal(list.size, 2);
tap.equal(list.length, 2);

// It peeks new value
tap.equal(list.peek(), 'Hey');

// It inspects bottom value
tap.equal(list.inspect(), 'Yo');

// It pops LIFO
tap.equal(list.pop(), 'Hey');
tap.equal(list.size, 1);
tap.equal(list.pop(), 'Yo');
tap.equal(list.size, 0);

// It shifts FIFO
list.push('Sup');
list.push('Bro');
tap.equal(list.shift(), 'Sup');
tap.equal(list.size, 1);
tap.equal(list.shift(), 'Bro');
tap.equal(list.size, 0);

// It clears the list
list.push('Clear me');
list.clear();
tap.equal(list.size, 0);
tap.equal(list.length, 0);

// It throws when pushing, popping or peeking in empty
tap.throws(list.push);
tap.throws(list.pop);
tap.throws(list.shift);
tap.throws(list.peek);
