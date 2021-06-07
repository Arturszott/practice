import createSinglyLinkedList from './createSinglyLinkedList';
import detectLoopStartNode from './detectLoopStartNode';

import { printListAsArray, getNthNode, getListSizeAndTail } from './utils';
import { SinglyLinkedNode } from '../types';

describe('detectLoopStartNode', () => {
	it('should find starting loop node', () => {
		const list = createSinglyLinkedList([1, 2, 3, 4, 5]);
		const tail = getListSizeAndTail(list).tail as SinglyLinkedNode;
		const startingNode = getNthNode(list, 3) as SinglyLinkedNode;

		tail.next = startingNode;

		expect(detectLoopStartNode(list)).toBe(startingNode);
	});

	it('should find starting loop node for lists from 2 elements', () => {
		const list = createSinglyLinkedList([1, 2]);
		const tail = getListSizeAndTail(list).tail as SinglyLinkedNode;
		const startingNode = getNthNode(list, 0) as SinglyLinkedNode;

		tail.next = startingNode;

		expect(detectLoopStartNode(list)).toBe(startingNode);
	});

	it('should return null if there is no loop for list', () => {
		const list = createSinglyLinkedList([1, 2, 3, 4, 5]);

		expect(detectLoopStartNode(list)).toBe(null);
	});

	it('should return null if there is no loop for empty list', () => {
		const list = createSinglyLinkedList([]);

		expect(detectLoopStartNode(list)).toBe(null);
	});

	it('should return null if there is no loop for lists below 2 elements', () => {
		const list = createSinglyLinkedList([1]);

		expect(detectLoopStartNode(list)).toBe(null);
	});
});
