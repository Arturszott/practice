import { DoublyLinkedList } from '../types';

export default function createDoublyLinkedList<T = any>(array: Array<T>): DoublyLinkedList<T> {
	let head: DoublyLinkedList<T> = null;
	let currentNode: DoublyLinkedList<T> = null;

	for (let i = 0; i < array.length; i++) {
		if (currentNode) {
			currentNode.next = { data: array[i], next: null, prev: currentNode };
			currentNode = currentNode.next;
		} else {
			currentNode = { data: array[0], next: null, prev: null };
			head = currentNode;
		}
	}

	return head;
}
