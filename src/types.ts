export interface SinglyLinkedNode<T = any> {
	data: any;
	next: null | SinglyLinkedNode<T>;
}

export type SinglyLinkedList<T = any> = null | SinglyLinkedNode<T>;

export interface DoublyLinkedNode<T = any> {
	data: T;
	next: null | DoublyLinkedNode<T>;
	prev: null | DoublyLinkedNode<T>;
}

export type DoublyLinkedList<T = any> = null | DoublyLinkedNode<T>;

export type AnyList<T = any> = DoublyLinkedList<T> | SinglyLinkedList<T>;
