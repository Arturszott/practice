import Queue from '../stacksAndQueues/Queue';

import isPathBetweenNodes from './isPathBetweenNodes';

import { Graph, Node } from './utils';

const verifyConnectionNode = (nodes: Node[], i: number) => {
	if (!nodes[i]) {
		throw new Error('Wrong node connection! ' + i + ' index is out of nodes array');
	}
};

const createConnectionsByIndex = (connections: Array<[number, number]>, nodes: Node[]): [Node, Node][] => {
	return connections.map(([i1, i2]) => {
		verifyConnectionNode(nodes, i1);
		verifyConnectionNode(nodes, i2);

		return [nodes[i1], nodes[i2]];
	});
};

describe('isPathBetweenNodes', () => {
	describe('should tell if there is path between nodes', () => {
		test('in direct path', () => {
			const nodes = Array.from({ length: 4 }, (_, i) => new Node(i));
			const connections = createConnectionsByIndex(
				[
					[0, 1],
					[1, 2],
					[2, 3]
				],
				nodes
			);

			new Graph({ nodes, connections, isDirected: true });

			expect(isPathBetweenNodes(nodes[0], nodes[3])).toBe(true);
		});

		test('with one dead end branch', () => {
			const nodes = Array.from({ length: 4 }, (_, i) => new Node(i));
			const connections = createConnectionsByIndex(
				[
					[0, 1],
					[0, 2],
					[2, 3]
				],
				nodes
			);

			new Graph({ nodes, connections, isDirected: true });

			expect(isPathBetweenNodes(nodes[0], nodes[3])).toBe(true);
		});

		test('with one loop', () => {
			const nodes = Array.from({ length: 8 }, (_, i) => new Node(i));
			const connections = createConnectionsByIndex(
				[
					[0, 1],
					[1, 0],
					[1, 2],
					[2, 3],
					[3, 4],
					[4, 5]
				],
				nodes
			);

			new Graph({ nodes, connections, isDirected: true });

			expect(isPathBetweenNodes(nodes[0], nodes[5])).toBe(true);
		});
	});

	describe('should tell if there is NO path between nodes', () => {
		test('with one loop', () => {
			const nodes = Array.from({ length: 8 }, (_, i) => new Node(i));
			const connections = createConnectionsByIndex(
				[
					[0, 1],
					[1, 0]
				],
				nodes
			);

			new Graph({ nodes, connections, isDirected: true });

			expect(isPathBetweenNodes(nodes[0], nodes[5])).toBe(false);
		});
	});
});
