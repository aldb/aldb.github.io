---
layout: post
title: Dijkstra vs BFS vs DFS  vs Bellman Ford in JS ES6
date: 2018-08-05 07:38:39.000000000 -08:00
category: draft
tags: [en,bigo,algorithm,js]
img: /assets/img/posts/2018/bt.png
permalink: /:year/:month/:day/:title/
---

#### Dijkstra vs BFS vs DFS  vs Bellman Ford in JS ES6

In this topic we're review graph search, traversal, and explore algorithm implementations in JS ES6.

Candidates:
- Dijkstra's algorithm
- Breadth first search algorithm
- Depth first search algorithm
- Bellman Ford algorithm

All code&test provide from this repository [repository](https://github.com/aldb/js_algorithms/).

#### Graphs Overview

A [Graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) consists of vertices(nodes) and edges.

Lets describe Graphs types for algorithm candidates:
 - A Undirected Graph
 - A [Directed Graph](https://en.wikipedia.org/wiki/Directed_graph)
  - Directed Acyclic Graphs(DAG) - are directed graphs with no directed cycles.
   - Weighted DAG(directed networks)
   - Weighted DAG with negative edges

Each of graph type has different representation, API and problem solved.
Lets code non-recursive implementation for algorithm candidates and connect with Graphs type API.

#### Depth-first search

Depth-first search ([DFS](https://en.wikipedia.org/wiki/Depth-first_search)) an algorithm for traversing or searching graph or tree. It uses a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)), and it delays checking whether a vertex has been discovered until the vertex is popped from the stack rather than making this check before adding the vertex.

<b>Time Complexity:</b> O(E+V)

Graph type: 
  -  Undirected Graph
  -  Directed Acyclic Graphs(DAG) without weigth

{% highlight js %}
function depthFirstSearch(root, tree, search) {
    let stack     = [];
    let visited   = {};
    visited[root] = 'None';
    stack.push(root);
    while(stack.length) {
        const current = stack.pop();
        if (current === search) {
            return true;
        }
        for (let i = 0; i < tree[current].length; i++) {
            const node = tree[current][i];
            stack.push(node);
            if (!visited[node]) {
                visited[node] = current;
            }
        }
    }
    return false;
}
{% endhighlight %}

Example using:
- [Topological sorting](https://en.wikipedia.org/wiki/Topological_sorting)
- Maze
- Finding strongly connected components
- Generating words in order
