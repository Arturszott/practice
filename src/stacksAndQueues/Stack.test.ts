import Stack from './Stack';

describe('Stack', () => {
	it('should stack items', () => {
		const numbers = [1, 2, 3, 2, 7];

		const q = new Stack();

		for (let n of numbers) {
			q.push(n);
		}

		for (let n of numbers.reverse()) {
			expect(q.pop().data).toBe(n);
		}
	});

	it('should allow to peek on top element in stack', () => {
		const numbers = [1, 2, 3, 9, 5];

		const stack = new Stack();

		for (let n of numbers) {
			stack.push(n);
		}

		stack.pop();

		expect(stack.peek().data).toBe(9);
	});

	it('should tell when stack is empty', () => {
		const stack = new Stack();

		expect(stack.isEmpty()).toBe(true);
	});

	it('should tell when stack is NOT empty', () => {
		const stack = new Stack();

		stack.push(1);

		expect(stack.isEmpty()).toBe(false);
	});

	it('should throw error when trying to peek at empty stack', () => {
		const stack = new Stack();

		expect(() => stack.peek()).toThrowError('Stack is empty');
	});

	it('should throw error when trying to pop element from empty stack', () => {
		const stack = new Stack();

		expect(() => stack.pop()).toThrowError('Stack is empty');
	});
});
