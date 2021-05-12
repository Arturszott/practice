interface DoublyLinkedNode {
	data: any;
	next: null | DoublyLinkedNode;
	prev: null | DoublyLinkedNode;
}

export default function createDoublyLinkedList(array: any[]): DoublyLinkedNode | null {
	let head: DoublyLinkedNode | null = null;
	let currentNode: DoublyLinkedNode | null = null;

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
