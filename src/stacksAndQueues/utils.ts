import Queue from './Queue';
import { SinglyLinkedNode, SinglyLinkedList } from '../types';

export const fillQueue = <T = any>(q: Queue<T>, items: Array<T>) => {
	for (let item of items) {
		q.push(item);
	}
};
