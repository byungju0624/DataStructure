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
        color[u] = "black"; //탐색을 마친 정점
        if (callback) {
          callback[u];
        }
      }
    };
    //BFS 최단경로 찾기
    const BFS = (v) => {
      let color = initializeColor(),
        queue = new Queue();
      let d = [], //거리를 나타내는 배열
        pred = []; // 선행자를 나타내는 배열
      queue.enqueue(v);

      for (let i = 0; i < vertices.length; i++) {
        d[vertices[i]] = 0; //그래프의 모든 정점에 대한 d의 값을 0으로 초기화
        pred[vertices[i]] = null; //null로 초기화
      }

      while (!queue.isEmpty()) {
        let u = queue.dequeue(),
          neighbors = adjList.get(u);
        color[u];
        for (let j = 0; j < neighbors.length; j++) {
          let w = neighbors[j];
          if (color[w] === "white") {
            color[w] = " grey";
            d[w] = d[u] + 1;
            pred[w] = u;
            queue.enqueue(w);
          }
        }
        color[u] = "black";
      }
      return {
        distance: d,
        predecessors: pred,
      };
    };
    let dfsVisit = (u, color, callback) => {
      color[u] = "grey";
      if (callback) {
        callback(u);
      }
      let neighbors = adjList.get(u);
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          dfsVisit(w, color, callback);
        }
      }
      color[u] = "black";
    };
    const dfs = (callback) => {
      let color = initializeColor();
      for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === "white") {
          dfsVisit(vertice[i], color, callback);
        }
      }
    };

    //응용
    let DFSVisit = (u, color, d, f, p) => {
      color[u] = "grey";
      d[u] = time++;
      let neighbors = adjList.get(u);
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          p[w] = u;
          DFSVisit(w, color, d, f, p);
        }
      }
      color[u] = "black";
      f[u] = time++;
    };
    let time = 0;
    const DFS = (callback) => {
      let color = initializeColor(),
        d = [], //방문시간
        f = [], //탐색시간
        p = [], //선행자
        time = 0;
      for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
      }

      for (i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === "white") {
          DFSVisit(vertice[i], color, d, f, p);
        }
      }
      return {
        discovery: d,
        finished: f,
        predecessors: p,
      };
    };
  }
}
