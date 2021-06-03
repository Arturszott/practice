import { SinglyLinkedList, DoublyLinkedList, DoublyLinkedNode } from '../types';

const listToArray = (list: DoublyLinkedList | SinglyLinkedList) => {
	const array = [];
	let p1 = list;

	while (p1) {
		array.push(p1.data);

		p1 = p1.next;
	}

	return array;
};

export const printListAsArray = (list: DoublyLinkedList | SinglyLinkedList) => {
	const array = listToArray(list);

	console.log(array);
};

export const appendDoubleNode = <T>(l: DoublyLinkedList<T>, data: any): DoublyLinkedNode<T> => {
	if (l === null) {
		return {
			data,
			prev: l,
			next: null
		};
	}

	if (l.next === null) {
		l.next = {
			data,
			prev: l,
			next: null
		};
	} else {
		while (l.next !== null) {
			l = l.next;
		}

		l.next = {
			data,
			prev: l,
			next: null
		};
	}

	return l;
};

export const checkSolution = (result: DoublyLinkedList<number>, expected: DoublyLinkedList<number>) => {
	expect(listToArray(result).reverse().join('')).toStrictEqual(listToArray(expected).reverse().join(''));
};
