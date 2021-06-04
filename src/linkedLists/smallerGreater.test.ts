import createDoublyLinkedList from './createDoublyLinkedList';

import { checkReversedSolution } from './utils';

import smallerGreater from './smallerGreater';

describe('smallerGreater', () => {
	describe('should move smaller elements than pivot to the left part of the list and greater to the right', () => {
		it('no swaps', () => {
			let result = smallerGreater(createDoublyLinkedList([1, 2, 3]), 1);
			let expected = createDoublyLinkedList([1, 2, 3]);

			checkReversedSolution(result, expected);
		});

		it('reverse', () => {
			let result = smallerGreater(createDoublyLinkedList([3, 2, 1]), 1);
			let expected = createDoublyLinkedList([1, 2, 3]);

			checkReversedSolution(result, expected);
		});

		it('same with pivot higher than all elements', () => {
			let result = smallerGreater(createDoublyLinkedList([1, 1, 1, 1]), 2);
			let expected = createDoublyLinkedList([1, 1, 1, 1]);

			checkReversedSolution(result, expected);
		});

		it('same with pivot smaller than all elements', () => {
			let result = smallerGreater(createDoublyLinkedList([1, 1, 1, 1]), 0.5);
			let expected = createDoublyLinkedList([1, 1, 1, 1]);

			checkReversedSolution(result, expected);
		});

		it('zipped elements odd', () => {
			let result = smallerGreater(createDoublyLinkedList([1, 5, 1, 5, 1]), 4);
			let expected = createDoublyLinkedList([1, 1, 1, 5, 5]);

			checkReversedSolution(result, expected);
		});

		it('zipped elements even', () => {
			let result = smallerGreater(createDoublyLinkedList([1, 5, 1, 5]), 4);
			let expected = createDoublyLinkedList([1, 1, 5, 5]);

			checkReversedSolution(result, expected);
		});
	});
});
