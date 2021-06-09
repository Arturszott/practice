import { createSingleNode } from '../linkedLists/utils';
import { SinglyLinkedList, SinglyLinkedNode } from '../types';

export default class Queue<T> {
	protected first: SinglyLinkedList;
	protected last: SinglyLinkedList;

	constructor() {
		this.first = null;
		this.last = null;
	}

	push(item: T) {
		// F -> O -> O -> O -> L
		const node = createSingleNode<T>(item);

		if (this.first === null || this.last === null) {
			this.first = node;
		} else {
			this.last.next = node;
		}

		this.last = node;
	}
	pop(): SinglyLinkedNode<T> {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}

		const node = this.first!;

		this.first = this.first!.next;

		return node;
	}
	peek() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}

		return this.first!;
	}
	isEmpty() {
		return !Boolean(this.first);
	}
}
