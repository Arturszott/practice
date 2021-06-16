import Queue from '../stacksAndQueues/Queue';
import { Node } from './utils';

export default function isPathBetweenNodes(nodeA: Node, nodeB: Node): boolean {
	const queue = new Queue<Node>();

	let visitedNodes = 0;

	queue.push(nodeA);

	while (!queue.isEmpty()) {
		const currentNode = queue.pop();
		currentNode.data.visited = true;
		visitedNodes++;

		if (currentNode.data === nodeB) {
			return true;
		}

		currentNode.data.adjascent.forEach((adjascentNode: Node) => {
			if (!adjascentNode.visited) {
				queue.push(adjascentNode);
			}
		});
	}

	return false;
}
