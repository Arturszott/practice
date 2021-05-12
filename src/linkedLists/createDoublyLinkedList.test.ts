import createDoublyLinkedList from './createDoublyLinkedList';

describe('doubly linked list', () => {
	it('should create empty list as null', () => {
		expect(createDoublyLinkedList([])).toBe(null);
	});

	it('should allow to iterate over', () => {
		const array = [1, 2, 3];
		const head = createDoublyLinkedList(array);
		let node = head;

		for (let i = 0; i < array.length; i++) {
			if (node) {
				expect(node.data).toBe(array[i]);

				if (node.next) {
					node = node.next;
				}
			}
		}
	});

	it('should allow to iterate to the end and back', () => {
		const array = [1, 2, 3];
		const head = createDoublyLinkedList(array);

		let node = head;

		for (let i = 0; i < array.length; i++) {
			if (node) {
				expect(node.data).toBe(array[i]);

				if (node.next) {
					node = node.next;
				}
			}
		}

		for (let i = 0; i < array.length; i++) {
			if (node) {
				expect(node.data).toBe(array[array.length - i - 1]);

				if (node.prev) {
					node = node.prev;
				}
			}
		}

		expect(node).not.toBe(null);
		expect(node && node.prev).toBe(null);
	});
});
