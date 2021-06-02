import { DoublyLinkedList, DoublyLinkedNode } from '../types';

const swapNodes = (a: DoublyLinkedNode<any>, b: DoublyLinkedNode<any>) => {
	const temp = b.data;

	b.data = a.data;
	a.data = temp.data;
};

export default function smallerGreater(headNode: DoublyLinkedList<number>, pivot: number): DoublyLinkedList<number> {
	// 0 elements
	if (headNode === null) {
		return null;
	}

	// 1 element, nothing to move
	if (headNode.next === null) {
		return headNode;
	}

	let p1: DoublyLinkedList<number> = headNode;
	let p2: DoublyLinkedList<number> = headNode.next;

	// move p2 to the end
	while (p2.next) {
		p2 = p2.next;
	}

	// swap values only if p1 > pivot and p2 <= pivot
	while (p1 !== p2 && p1 && p2) {
		if (p1.data < pivot) {
			p1 = p1.next;
		} else if (p2.data <= pivot) {
			const temp = p1.data;

			p1.data = p2.data;
			p2.data = temp;

			if (p2.prev === p1) {
				return headNode;
			}

			p1 = p1.next;
			p2 = p2.prev;
		} else {
			p2 = p2.prev;
		}
	}

	return headNode;
}
