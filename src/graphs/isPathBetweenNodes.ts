import Queue from '../stacksAndQueues/Queue';
import { Node } from './utils';

export default function isPathBetweenNodes(nodeA: Node, nodeB: Node): boolean {
	const queue = new Queue<Node>();

	queue.push(nodeA);

	while (!queue.isEmpty()) {
		const currentNode = queue.pop();

		if (currentNode.data === nodeB) {
			return true;
		}

		currentNode.data.adjascent.forEach((adjascentNode: Node) => {
			queue.push(adjascentNode);
		});
	}

	return false;
}
