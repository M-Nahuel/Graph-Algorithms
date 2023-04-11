//This program takes in an object representing the adjacency list of a directed acyclic graph and two nodes.
//And returns a boolean indicating whether or not there exists a directed path between the source and destination nodes.

//Depth First Algorithm:
/*
const hasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }

    return false;
};
*/

//Breadth First Algorithm:
const hasPath = (graph, src, dst) => {
    const queue = [src];

    while(queue.lenght > 0) {
        let current = queue.shift();

        if (current === dst) {return true};

        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }

    return false;
};

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
};

console.log(hasPath(graph, 'f', 'k'));