import createSinglyLinkedList from './createSinglyLinkedList';

import { SinglyLinkedList, SinglyLinkedNode } from '../types';
import { getListSizeAndTail } from './utils';

export default function getConnectionNode(a: SinglyLinkedList, b: SinglyLinkedList): SinglyLinkedNode | null {
	if (a === null || b === null) {
		return null;
	}

	const aTailAndSize = getListSizeAndTail(a);
	const bTailAndSize = getListSizeAndTail(b);

	if (aTailAndSize.tail !== bTailAndSize.tail) {
		return null;
	}

	let longer = aTailAndSize.size > bTailAndSize.size ? a : b;
	let shorter = longer === a ? b : a;
	let sizeDifference = Math.abs(aTailAndSize.size - bTailAndSize.size);

	for (let i = 0; i < sizeDifference; i++) {
		longer = longer.next!;
	}

	while (shorter !== longer && longer.next) {
		shorter = shorter.next!;
		longer = longer.next!;
	}

	return longer;
}
