import { SinglyLinkedNode } from '../types';

export default function createSinglyLinkedList<T = any>(array: any[]): SinglyLinkedNode<T> | null {
	let head: SinglyLinkedNode<T> | null = null;
	let currentNode: SinglyLinkedNode<T> | null = null;

	for (let i = 0; i < array.length; i++) {
		if (currentNode) {
			currentNode.next = { data: array[i], next: null };
			currentNode = currentNode.next;
		} else {
			currentNode = { data: array[0], next: null };
			head = currentNode;
		}
	}

	return head;
}
