import createSinglyLinkedList from './createSinglyLinkedList';

describe('singly linked list', () => {
	it('should create empty list as null', () => {
		expect(createSinglyLinkedList([])).toBe(null);
	});

	it('should allow to iterate over', () => {
		const array = [1, 2, 3];
		const head = createSinglyLinkedList(array);
		let node = head;

		for (let i = 0; i < array.length; i++) {
			if (node) {
				expect(node.data).toBe(array[i]);

				node = node.next;
			}
		}
	});
});
