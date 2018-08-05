---
layout: post
title: Dijkstra vs BFS vs DFS  vs Bellman-Ford in JS ES6
date: 2018-07-24 07:38:39.000000000 -08:00
category: draft
tags: [en,bigo,algorithm,js]
img: /assets/img/posts/2018/bt.png
permalink: /:year/:month/:day/:title/
---

#### Dijkstra vs BFS vs DFS vs Bellman-Ford in JS ES6

In this topic, we're review graph search, traversal, and explore algorithm implementations in JS ES6.

Candidates:
- Dijkstra's algorithm
- Breadth-first search algorithm
- Depth-first search algorithm
- Bellman-Ford algorithm

All code & test provide from this [repository](https://github.com/aldb/js_algorithms/).

#### Graphs Overview

A [Graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) consists of vertices(nodes) and edges.

<img src="../../../../assets/img/posts/2018/graph_types.png" class="img-fluid" alt="DFS vs BFS vs Dijkstra">

Lets describe Graphs types for algorithm candidates:
 - A Undirected Graph
 - A [Directed Graph](https://en.wikipedia.org/wiki/Directed_graph)
  - Directed Acyclic Graphs(DAG) - are directed graphs with no directed cycles.
   - Weighted DAG(directed networks)
   - Weighted DAG with negative edges

Each of graph type has a different representation, API and problem solved.
Lets code non-recursive implementation for algorithm candidates and connect with Graphs type API.

#### Depth-first search

Depth-first search ([DFS](https://en.wikipedia.org/wiki/Depth-first_search)) an algorithm for traversing or searching graph or tree. It uses a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)), and it delays checking whether a vertex has been discovered until the vertex is popped from the stack rather than making this check before adding the vertex.

<b>Time Complexity:</b> O(E+V)

Graph type: 
  -  Undirected Graph
  -  Directed Acyclic Graphs(DAG) without weigth

{% highlight js %}
function depthFirstSearchTraversal(graph, vertex) {
  const distance = {[vertex] : {distance : 0, parent: 'None'}};
  const stack    = [vertex];
  while(stack.length) {
    const current = stack.pop();
    for (let i = 0; i < graph[current].length; i++) {
      const node = graph[current][i];
      stack.push(node);
      if (!distance[node]) {
        distance[node] = {
          distance : distance[current].distance + 1,
          parent   : current
        };
      }
    }
  }
  return distance;
}
{% endhighlight %}

Example using:
- [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting)
- Maze
- Finding strongly connected components
- Generating words in order

#### Breadth-first search

Breadth-first search ([BFS](https://en.wikipedia.org/wiki/Breadth-first_search)) is an algorithm for traversing or searching tree or graph data structures. It uses a [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)).

<b>Time Complexity:</b> O(E+V)

Graph type: 
  -  Undirected Graph
  -  Directed Acyclic Graphs(DAG) without weigth

{% highlight js %}
function breadthFirstSearchTraversal(graph, vertex) {
  const distance = {[vertex] : {distance : 0, parent: 'None'}};
  const queue    = [vertex];
  while(queue.length) {
    const current = queue.shift();
    for (let i = 0; i < graph[current].length; i++) {
      const node = graph[current][i];
      if (!distance[node]) {
        distance[node] = {
          distance : distance[current].distance + 1,
          parent   : current
        };
        queue.push(node);
      }
    }
  }
  return distance;
}
{% endhighlight %}

Example using:
- Shortest Path
- Copying garbage collection
- Serialization

#### Dijkstra's algorithm

[Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) is for finding shortest Path between nodes in the Graphs. It picks the unvisited vertex with the lowest distance, calculates the distance through it to each unvisited neighbor, and updates the neighbor's distance if smaller. It uses a [Priority queue](https://en.wikipedia.org/wiki/Priority_queue).

<b>Time Complexity:</b> O(E+V log V)

Graph type: 
-  non-negative weighted DAG

{% highlight js %}
function dijkstra(graph, vertex) {
  const priorityQueueInsertOrUpdate = function(current) {
    for (var i = 0; i < priorityQueue.length; i++) {
      if (distance[current].distance > distance[priorityQueue[i]].distance) break;
    }
    priorityQueue.splice(i, 0, current);
  }

  const distance      = {[vertex] : {distance : 0, parent: 'None'}};
  const priorityQueue = [vertex];

  while(priorityQueue.length) {
    const current = priorityQueue.shift();
    for (node in graph[current]) {
      const weigth = graph[current][node];
      if (!distance[node] || distance[node] > distance[current].distance + weigth) {
        distance[node] = {distance : distance[current].distance + weigth, parent: current};
        priorityQueueInsertOrUpdate(node);
      }
    }
  }
  return distance;
}
{% endhighlight %}

Example using:
- Shortest path

#### Implementation pattern

This 3 algorithms has similar code structure. Main different in "order" type data structure: 
  - Stack - Depth-first search ((O(E+V)))
  - Queue - Breadth-first search (O(E+V))
  - Priority Queue -  Dijkstra's algorithm (O(E+V log V))

<img src="../../../../assets/img/posts/2018/DFSvsBFSvsDijkstra.png" class="img-fluid" alt="DFS vs BFS vs Dijkstra">
Compare code implementation Depth-first search vs Breadth-first search vs Dijkstra's algorithm.

#### Bellman-Ford

The [Bellman–Ford](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.
It uses 2 for loop, what makes time complexity Vertex * Edges in worst cases.

<b>Time Complexity:</b> O(VE)

Graph type: 
- negative or positive weighted DAG

{% highlight js %}
function bellmanFord(graph, vertex) {
  const distances        = {};
  const previousVertices = {};

  // Init all distances with infinity
  distances[vertex] = 0;
  graph.vertices.map(function(node){
    previousVertices[node] = null;
    if (node !== vertex) {
      distances[node] = Infinity;
    }
  });

  for (let node in distances) {
    for (let i = 0; i < graph.edges.length; i++) {
      if (graph.edges[i].startVertex == node || graph.edges[i].endVertex == node) {
        const neighbor = graph.edges[i].startVertex == node ? graph.edges[i].endVertex : graph.edges[i].startVertex;

        const distanceToVertex = distances[node];
        const distanceToNeighbor = distanceToVertex + graph.edges[i].weight;

        if (distanceToNeighbor < distances[neighbor]) {
          distances[neighbor] = distanceToNeighbor;
          previousVertices[neighbor] = node;
        }
      }
    }
  }
  return {distances, previousVertices};
}
{% endhighlight %}

Example using:
- Shortest path

#### Implementation pattern

Bellman-Ford similar to Dijstra's except that instead of utilizing a Priority Queue to visit nodes in order, Bellman-Ford looping iterates over every edge V times each, ensuring that all negative edge weights.

<b>Time Complexity different:</b> O(E+V log V) vs O(VE)

<img src="../../../../assets/img/posts/2018/Bellman-FordvsDijkstra.png" class="img-fluid" alt="DFS vs BFS vs Dijkstra">
Compare code implementation Bellman-Ford vs Dijkstra's algorithm.

####References:

- [Github repository with tests](https://github.com/aldb/js_algorithms/)
- [Graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics))
  - [Directed Graph](https://en.wikipedia.org/wiki/Directed_graph)
  - [DFS](https://en.wikipedia.org/wiki/Depth-first_search)
  - [BFS](https://en.wikipedia.org/wiki/Breadth-first_search)
  - [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
  - [Bellman–Ford](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
- [Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
  - [Priority queue](https://en.wikipedia.org/wiki/Priority_queue)
- [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))