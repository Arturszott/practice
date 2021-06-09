import MinStack from './MinStack';

describe('MinStack', () => {
	it('should stack items', () => {
		const numbers = [1, 2, 3, 2, 7];

		const q = new MinStack();

		for (let n of numbers) {
			q.push(n);
		}

		for (let n of numbers.reverse()) {
			expect(q.pop().data).toBe(n);
		}
	});

	it('should allow to peek on top element in stack', () => {
		const numbers = [1, 2, 3, 9, 5];

		const stack = new MinStack();

		for (let n of numbers) {
			stack.push(n);
		}

		stack.pop();

		expect(stack.peek().data).toBe(9);
	});

	it('should tell when stack is empty', () => {
		const stack = new MinStack();

		expect(stack.isEmpty()).toBe(true);
	});

	it('should return min node', () => {
		const stack = new MinStack();

		stack.push(1);
		stack.push(-Infinity);
		stack.push(2);

		expect(stack.min().data).toBe(-Infinity);
	});

	it('should throw error when trying to get min element from empty stack', () => {
		const stack = new MinStack();

		expect(() => stack.min()).toThrowError('Stack is empty');
	});
});
