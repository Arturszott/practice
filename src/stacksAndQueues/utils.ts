import { createSingleNode } from '../linkedLists/utils';
import { SinglyLinkedNode, SinglyLinkedList } from '../types';

export class Stack<T = any> {
	private top: SinglyLinkedList<T>;

	constructor() {
		this.top = null;
	}

	push(item: T) {
		const node = createSingleNode<T>(item);

		if (!this.isEmpty()) {
			node.next = this.top;
		}

		this.top = node;
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}

		return this.top!;
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}

		const node = this.top!;

		this.top = this.top!.next;

		node.next = null;

		return node;
	}

	isEmpty() {
		return !Boolean(this.top);
	}
}

export class Queue<T> {
	private first: SinglyLinkedList;
	private last: SinglyLinkedList;

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
