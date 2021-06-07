import { SinglyLinkedList, SinglyLinkedNode } from '../types';

export default function detectLoopStartNode(a: SinglyLinkedList): SinglyLinkedNode | null {
	if (a === null || a.next === null || a.next.next === null) {
		return null;
	}

	let p1 = a;
	let p2 = a;

	p1 = a.next;
	p2 = a.next.next;

	// try to meet two pointers where p2 moves twice faster
	while (p1 !== p2) {
		if (p1.next === null || p2.next === null || p2.next.next === null) {
			return null;
		}

		p1 = p1.next;
		p2 = p2.next.next;
	}

	p1 = a;

	// moves at the same pace to find starting loop node
	while (p1 !== p2) {
		p1 = p1.next!;
		p2 = p2.next!;
	}

	return p1;
}
