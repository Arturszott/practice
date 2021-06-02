export interface SinglyLinkedNode<T> {
	data: any;
	next: null | SinglyLinkedNode<T>;
}

export type SinglyLinkedList<T = any> = null | SinglyLinkedNode<T>;

export interface DoublyLinkedNode<T> {
	data: T;
	next: null | DoublyLinkedNode<T>;
	prev: null | DoublyLinkedNode<T>;
}

export type DoublyLinkedList<T = any> = null | DoublyLinkedNode<T>;
