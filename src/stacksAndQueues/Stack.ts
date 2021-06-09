import { createSingleNode } from '../linkedLists/utils';
import { SinglyLinkedList } from '../types';

export default class Stack<T = any> {
	protected top: SinglyLinkedList<T>;

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
