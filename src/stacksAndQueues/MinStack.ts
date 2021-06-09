import Stack from './Stack';

interface MinNode {
	min: MinNode;
	next: MinNode | null;
	data: number;
}

class MinNode {
	constructor(data: number) {
		this.next = null;
		this.min = this;
		this.data = data;
	}
}

const getSmallerNode = (a: MinNode, b: MinNode) => {
	return a.min.data > b.min.data ? b.min : a.min;
};

export default class MinStack extends Stack {
	protected top: MinNode | null;

	constructor() {
		super();
		this.top = null;
	}

	push(item: number) {
		const node = new MinNode(item);

		if (!this.isEmpty()) {
			node.min = getSmallerNode(node, this.top!);

			node.next = this.top;
		} else {
			node.min = node;
		}

		this.top = node;
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error('MinStack is empty');
		}

		const node = this.top!;

		this.top = this.top!.next;

		node.next = null;

		return node;
	}

	min() {
		if (this.isEmpty()) {
			throw new Error('MinStack is empty');
		}

		return this.top!.min;
	}
}
