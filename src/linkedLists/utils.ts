import { SinglyLinkedList, DoublyLinkedList, DoublyLinkedNode, AnyList } from '../types';

const listToArray = (list: AnyList) => {
	const array = [];
	let p1 = list;

	while (p1) {
		array.push(p1.data);

		p1 = p1.next;
	}

	return array;
};

export const printListAsArray = (list: AnyList) => {
	const array = listToArray(list);

	console.log(array);
};

export const createDoubleNode = <T = any>(data: T) => {
	return {
		data,
		prev: null,
		next: null
	};
};

export const createSingleNode = <T = any>(data: T) => {
	return {
		data,
		next: null
	};
};

export const appendDoubleNode = <T>(l: DoublyLinkedList<T>, data: any): DoublyLinkedNode<T> => {
	if (l === null) {
		return createDoubleNode(data);
	}

	while (l.next !== null) {
		l = l.next;
	}

	l.next = createDoubleNode(data);
	l.next.prev = l;

	return l;
};

export const checkSolution = <T = number>(result: AnyList<T>, expected: AnyList<T>) => {
	expect(listToArray(result)).toStrictEqual(listToArray(expected));
};

export const checkReversedSolution = <T = number>(result: AnyList<T>, expected: AnyList<T>) => {
	expect(listToArray(result).reverse().join('')).toBe(listToArray(expected).reverse().join(''));
};

export const getListSizeAndTail = (
	list: SinglyLinkedList | DoublyLinkedList
): { size: number; tail: SinglyLinkedList | DoublyLinkedList } => {
	if (list === null) {
		return {
			size: 0,
			tail: null
		};
	}

	let length = 0;

	while (list.next) {
		length++;
		list = list.next;
	}

	return {
		size: length,
		tail: list
	};
};
