import { createSingleNode } from '../linkedLists/utils';
import { SinglyLinkedList } from '../types';

export default class Stack<T = any> {
	protected top: SinglyLinkedList<T>;
	private _size: number;

	constructor() {
		this.top = null;
		this._size = 0;
	}

	push(item: T) {
		const node = createSingleNode<T>(item);

		if (!this.isEmpty()) {
			node.next = this.top;
		}

		this._size++;

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

		this._size--;

		return node;
	}

	isEmpty() {
		return !Boolean(this.top);
	}

	get size() {
		return this._size;
	}
}
