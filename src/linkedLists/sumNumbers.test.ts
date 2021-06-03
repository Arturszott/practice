import createDoublyLinkedList from './createDoublyLinkedList';
import sumNumbers, { sumNumbersRecursive } from './sumNumbers';

import { checkSolution, printListAsArray } from './utils';

const formatToReversedList = (n: number) => {
	return String(n).split('').reverse().map(Number);
};

const runTest = (a: number, b: number, method: Function) => {
	const la = createDoublyLinkedList<number>(formatToReversedList(a));
	const lb = createDoublyLinkedList(formatToReversedList(b));

	const sum = method(la, lb);

	checkSolution(sum, createDoublyLinkedList(formatToReversedList(a + b)));
};

describe('sumNumbers from reversed linked lists', () => {
	it('sums two linked lists', () => {
		runTest(12, 29, sumNumbers);
		runTest(99, 11, sumNumbers);
		runTest(0, 0, sumNumbers);
		runTest(999, 9, sumNumbers);
		runTest(9, 999, sumNumbers);
	});

	it('sums two linked lists recursively', () => {
		runTest(12, 29, sumNumbersRecursive);
		runTest(99, 11, sumNumbersRecursive);
		runTest(0, 0, sumNumbersRecursive);
		runTest(999, 9, sumNumbersRecursive);
		runTest(9, 999, sumNumbersRecursive);
	});
});
