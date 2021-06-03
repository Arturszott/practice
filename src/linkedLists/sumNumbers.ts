import createDoublyLinkedList from './createDoublyLinkedList';

import { DoublyLinkedList, DoublyLinkedNode } from '../types';
import { appendDoubleNode, printListAsArray } from './utils';

export default function sumNumbers(a: DoublyLinkedList<number>, b: DoublyLinkedList<number>): DoublyLinkedList<number> {
	const sum = createDoublyLinkedList([0]);

	let d = sum;

	if (!a || !b || !d) {
		return sum;
	}

	while (a && d) {
		d.data = a.data;

		if (d.next === null && a.next) {
			d = appendDoubleNode<number>(d, 0);
		}

		a = a.next;
		d = d.next;
	}

	d = sum;

	while (b || d) {
		if (d) {
			d.data = d.data + (b?.data || 0);

			if (d.next === null && b?.next) {
				d = appendDoubleNode<number>(d, 0);
			}

			if (d.data > 9) {
				if (d.next) {
					d.next.data += 1;
				} else {
					d = appendDoubleNode<number>(d, 1);
				}

				d.data = d.data % 10;
			}

			if (b) {
				b = b.next;
			}

			d = d.next;
		}
	}

	return sum;
}

export function sumNumbersRecursive(
	a: DoublyLinkedList<number>,
	b: DoublyLinkedList<number>,
	c: number = 0
): DoublyLinkedList<number> {
	if (!a && !b && !c) {
		return null;
	}

	const sum = createDoublyLinkedList([0]) as DoublyLinkedNode<number>;

	sum.data = (a?.data || 0) + (b?.data || 0) + c;

	let rest = 0;

	if (sum.data > 9) {
		rest = 1;
	}

	sum.data = sum.data % 10;

	sum.next = sumNumbersRecursive(a?.next || null, b?.next || null, rest);

	return sum;
}
