interface SinglyLinkedNode {
	data: any;
	next: null | SinglyLinkedNode;
}

export default function createSinglyLinkedList(array: any[]): SinglyLinkedNode | null {
	let head: SinglyLinkedNode | null = null;
	let currentNode: SinglyLinkedNode | null = null;

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
