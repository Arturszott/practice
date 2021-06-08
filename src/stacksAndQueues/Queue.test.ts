import { Stack, Queue } from './utils';

describe('Queue', () => {
	it('should queue items', () => {
		const numbers = [1, 2, 3, 9, 7];

		const q = new Queue();

		for (let n of numbers) {
			q.push(n);
		}

		for (let n of numbers) {
			expect(q.pop().data).toBe(n);
		}
	});

	it('should allow to peek on first element in queue', () => {
		const numbers = [1, 2, 3, 9, 5];

		const q = new Queue();

		for (let n of numbers) {
			q.push(n);
		}

		q.pop();

		expect(q.peek().data).toBe(2);
	});

	it('should tell when queue is empty', () => {
		const q = new Queue();

		expect(q.isEmpty()).toBe(true);
	});

	it('should tell when queue is NOT empty', () => {
		const q = new Queue();

		q.push(1);

		expect(q.isEmpty()).toBe(false);
	});

	it('should throw error when trying to peek at empty queue', () => {
		const q = new Queue();

		expect(() => q.peek()).toThrowError('Queue is empty');
	});

	it('should throw error when trying to pop element from empty queue', () => {
		const q = new Queue();

		expect(() => q.pop()).toThrowError('Queue is empty');
	});
});
