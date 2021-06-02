import { SinglyLinkedList, DoublyLinkedList } from '../types';

export const printListAsArray = (list: DoublyLinkedList | SinglyLinkedList) => {
	const array = [];
	let p1 = list;

	while (p1) {
		array.push(p1.data);

		p1 = p1.next;
	}

	console.log(array);
};

export const checkSolution = (result: DoublyLinkedList<number>, expected: DoublyLinkedList<number>) => {
	while (expected && result) {
		expect(result.data).toBe(expected.data);
		result = result.next;
		expected = expected.next;
	}

	expect(result).toBe(null);
};
