import Stack from './Stack';
import { SinglyLinkedNode } from '../types';

export default class DoubleStackQueue<T> {
	protected unorderedStack: Stack;
	protected orderedStack: Stack;

	constructor() {
		this.unorderedStack = new Stack();
		this.orderedStack = new Stack();
	}

	push(item: T) {
		if (this.orderedStack.isEmpty()) {
			this.orderedStack.push(item);
		} else {
			this.unorderedStack.push(item);
		}
	}

	pop(): SinglyLinkedNode<T> {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}

		const node = this.orderedStack.pop();

		if (this.orderedStack.size === 0) {
			this.reorderStacks();
		}

		return node;
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}

		return this.orderedStack.peek();
	}

	isEmpty() {
		return this.orderedStack.isEmpty();
	}

	protected reorderStacks() {
		while (this.unorderedStack.size) {
			this.orderedStack.push(this.unorderedStack.pop().data);
		}
	}
}
