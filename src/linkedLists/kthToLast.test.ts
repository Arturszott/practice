import createSinglyLinkedList from './createSinglyLinkedList';

import kth from './kthToLast';

describe('kth to last on singly linked list', () => {
	it('should return kth to last element data', () => {
		const listA = createSinglyLinkedList([1, 2, 3]);

		expect(kth(listA, 1)).toBe(2);

		const listB = createSinglyLinkedList([1]);

		expect(kth(listB, 0)).toBe(1);

		const listC = createSinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);

		expect(kth(listC, 3)).toBe(5);
	});

	it('should return null if k is greater than list length', () => {
		const list = createSinglyLinkedList([1]);

		expect(kth(list, 1)).toBe(null);
	});
});
