class StackList {
	/**
	 * Constructor
	 * Creates private stack store and pushes any initial values
	 * @param {array} initialValues 
	 */
	constructor(initialValues = []) {
		this._stack = [];
		initialValues.forEach((value) => {
			this.push(value);
		});
	}

	/**
	 * Push value to stack
	 * @param {*} value to push to stack
	 */
	push(value) {
		if (value !== undefined) {
			return this._stack.push(value);
		} else {
			throw new Error('Cannot push undefined value to stack list');
		}
	}

	/**
	 * Pop value off stack if stack not empty
	 */
	pop() {
		if (this.size) {
			return this._stack.pop();
		} else {
			throw 'Cannot pop from empty stack list';
		}
	}

	/**
	 * Peek at top value in stack without popping
	 */
	peek() {
		if (this.size) {
			return this._stack[this._stack.length - 1];
		} else {
			throw 'Cannot peek in empty stack list';
		}
	}

	/**
	 * Reset stack
	 */
	clear() {
		this._stack = [];
	}

	/**
	 * Get number of items in stack
	 */
	get size() {
		return this._stack.length;
	}
}

module.exports = {
	StackList
}