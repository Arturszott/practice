import createDoublyLinkedList from './createDoublyLinkedList';
import sumNumbers from './sumNumbers';

import { checkSolution, printListAsArray } from './utils';

const formatToReversedList = (n: number) => {
	return String(n).split('').reverse().map(Number);
};

const runTest = (a: number, b: number) => {
	const la = createDoublyLinkedList<number>(formatToReversedList(a));
	const lb = createDoublyLinkedList(formatToReversedList(b));

	const sum = sumNumbers(la, lb);

	checkSolution(sum, createDoublyLinkedList(formatToReversedList(a + b)));
};

describe('sumNumbers from reversed linked lists', () => {
	it('sums two linked lists', () => {
		runTest(12, 29);
	});
});
