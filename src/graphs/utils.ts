export class Node<T = any> {
	data: T;
	visited: boolean;
	adjascent: Map<Node, Node>;

	constructor(data: any) {
		this.data = data;
		this.visited = false;
		this.adjascent = new Map();
	}

	connectTo(node: Node) {
		this.adjascent.set(node, node);
	}
}

type Connection = [Node, Node];

interface GraphArgs {
	nodes: Node[];
	connections: Connection[];
	isDirected: Boolean;
}

export class Graph {
	nodes: Node[];

	constructor({ nodes, connections, isDirected = true }: GraphArgs) {
		this.nodes = nodes;

		connections.forEach(([nodeA, nodeB]) => {
			nodeA.connectTo(nodeB);

			if (!isDirected) {
				nodeB.connectTo(nodeA);
			}
		});
	}
}
