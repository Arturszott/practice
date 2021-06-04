import createDoublyLinkedList from './createDoublyLinkedList';

import { DoublyLinkedList, DoublyLinkedNode } from '../types';
import { printListAsArray } from './utils';

const check = (a: DoublyLinkedNode<string>, b: DoublyLinkedNode<string>): Boolean => {
	// odd numbers of elements results in pointers reaching same element
	if (a === b) {
		return true;
	}

	if (a.next === b) {
		return a.data === b.data;
	}

	if (a.next === null || b.prev === null) {
		throw new Error('a.next or b.prev should never be null because they should reach middle of list');
	}

	return a.data === b.data && check(a.next, b.prev);
};

export default function isPalindrome(list: DoublyLinkedList<string>): Boolean {
	if (list === null) {
		return true;
	}

	let a = list;
	let b = list;

	// move b to the tail of list
	while (b.next) {
		b = b.next;
	}

	return check(a, b);
}
