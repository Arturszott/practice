import createSinglyLinkedList from './createSinglyLinkedList';

import { SinglyLinkedList, SinglyLinkedNode } from '../types';
import { getListSizeAndTail, checkSolution } from './utils';

import getConnectionNode from './getConnectionNode';

const joinTwoSinglyLinkedListsWithAnother = (a: SinglyLinkedList, b: SinglyLinkedList, c: SinglyLinkedList) => {
	if (a === null || b === null || c === null) {
		return null;
	}

	const aTail = getListSizeAndTail(a).tail as SinglyLinkedNode;
	const bTail = getListSizeAndTail(b).tail as SinglyLinkedNode;

	aTail.next = c;
	bTail.next = c;
};

describe('joining lists', () => {
	it('should join two lists', () => {
		const listA = createSinglyLinkedList([1, 2, 3]);
		const listB = createSinglyLinkedList([1, 2]);
		const listC = createSinglyLinkedList([4, 5, 6]);

		joinTwoSinglyLinkedListsWithAnother(listA, listB, listC);

		checkSolution(listA, createSinglyLinkedList([1, 2, 3, 4, 5, 6]));
		checkSolution(listB, createSinglyLinkedList([1, 2, 4, 5, 6]));
	});
});

describe('getConnectionNode', () => {
	it('should find 1st common node from both list', () => {
		const listA = createSinglyLinkedList([1, 2, 3]);
		const listB = createSinglyLinkedList([1, 2]);
		const listC = createSinglyLinkedList([4, 5, 6]);

		joinTwoSinglyLinkedListsWithAnother(listA, listB, listC);

		const node = getConnectionNode(listA, listB);

		expect(node).toBe(listC);
	});

	it('should return null if there is no connection', () => {
		const listA = createSinglyLinkedList([1, 2, 3]);
		const listB = createSinglyLinkedList([1, 2]);

		const node = getConnectionNode(listA, listB);

		expect(node).toBe(null);
	});

	it('should return null if there are no lists', () => {
		const listA = createSinglyLinkedList([]);
		const listB = createSinglyLinkedList([]);

		const node = getConnectionNode(listA, listB);

		expect(node).toBe(null);
	});
});
