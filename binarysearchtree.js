class BinarySearchTree {
  constructor() {
    class Node {
      constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
      }
    }
    let root = null;

    this.insert = (key) => {
      let newNode = new Node(key);
      //프라이빗 함수
      let insertNode = (node, newNode) => {
        if (newNode.key < node.key) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            insertNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            insertNode(node.right, newNode);
          }
        }
      };
      if (root === null) {
        root = newNode;
      } else {
        insertNode(root, newNode);
      }
    };
    //중위 순회
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    };
    this.inOrderTraverse = (callback) => {
      inOrderTraverseNode(root, callback);
    };

    //전위 순회
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    };

    this.preOrderTraverse = (callback) => {
      preOrderTraverseNode(root, callback);
    };

    //후위 순회
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    };
    this.postOrderTraverse = (callback) => {
      postOrderTraverseNode(root, callback);
    };
    //최소값 찾기
    const minNode = (node) => {
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }
        return node.key;
      }
      return null;
    };
    this.min = () => {
      return minNode(root);
    };

    //최대값 찾기
    const maxNode = (node) => {
      if (node) {
        while (node && node.right !== null) {
          node = node.right;
        }
        return node.key;
      }
      return null;
    };
    this.max = () => {
      return maxNode(root);
    };

    //특정값찾기
    const searchNode = (node, key) => {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else {
        return true;
      }
    };

    this.search = (key) => {
      root = searchNode(root, key);
    };

    //노드 삭제
    let findMinNode = function (node) {
      while (node && node.left !== null) {
        node = node.left;
      }

      return node;
    };
    const removeNode = (node, key) => {
      if (node === null) {
        return null;
      }
      if (key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        //리프노드
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        //자식 노드가 하나뿐인 노드
        if (node.right === null) {
          node = node.left;
          return node;
        } else if (node.left === null) {
          node = node.right;
          return node;
        }
        //자식이 둘인 노드

        // let aux = findMinNode(node.right);
        // node.key = aux.key;
        // node.right = removeNode(node.right, aux.key);
        // return node;
      }
    };
    this.remove = (key) => {
      removeNode(root, key);
    };
  }
}
var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.log("------중위순회-------");
function printNode(value) {
  console.log(value);
}
tree.inOrderTraverse(printNode);
console.log("-----전위순회------");

tree.preOrderTraverse(printNode);

console.log("-----후위순회------");

tree.postOrderTraverse(printNode);

console.log("-----최소값------");
console.log(tree.min());

console.log("-----최대값------");
console.log(tree.max());

console.log(tree.search(1) ? "키 1을 찾았습니다" : "키 1을 못찾았습니다");
console.log(tree.search(8) ? "키 8을 찾았습니다" : "키 8을 못찾았습니다");
