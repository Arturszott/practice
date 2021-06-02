import { SinglyLinkedList } from '../types';

export default function kthToLast(headNode: SinglyLinkedList, k: number): number | null {
	let p1 = headNode;
	let p2 = headNode;
	let p2Moves = k;

	if (p1 === null || p2 === null) {
		return null;
	}

	while (p2Moves > 0 && p2.next) {
		p2 = p2.next;
		p2Moves--;
	}

	if (p2Moves !== 0) {
		return null;
	}

	while (p2.next) {
		p2 = p2.next;

		if (p1.next) {
			p1 = p1.next;
		}
	}

	return p1.data;
}
