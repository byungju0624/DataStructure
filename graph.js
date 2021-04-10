import Dictionary from "./dictionary";
import Queue from "./queue";
class Graph {
  constructor() {
    let vertices = [];
    let adjList = new Dictionary();

    const addVertex = (v) => {
      vertices.push(v);
      adjList.set(v, []);
    };
    const addEdge = (v, w) => {
      adjList.get(v).push(w);
      adjList.get(w).push(v); //무방향이므로 w->v 방향의 간선도 추가해야함.
    };
    const toString = () => {
      let s = "";
      for (let i = 0; i < vertices.length; i++) {
        s += `${vertices[i]} -> `;
        let neighbor = adjList.get(vertices[i]);
        for (let j = 0; j < neighbor.length; j++) {
          s += `${neighbor[i]} `;
        }
        s += "\n";
      }
      return s;
    };
    let initializeColor = () => {
      let color = [];
      for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = "white"; //아직 방문하지 않은 정점
      }
      return color;
    };
    const bfs = (v, callback) => {
      let color = initializeColor(),
        queue = new Queue();
      queue.enqueue(v);

      while (!queue.isEmpty()) {
        let u = queue.dequeue(),
          neighbors = adjList.get(u);
        color[u] = "grey"; //방문은 했으나 탐색하지 않은 정점
        for (let i = 0; i < neighbors.length; i++) {
          let w = neighbors[i];
          if (color[w] === "white") {
            color[w] = "grey";
            queue.enqueue(w);
          }
        }
        color[u] = "black";
        if (callback) {
          callback[u];
        }
      }
    };
  }
}
