class Queue {
  constructor() {
    this.items = [];
  }
  //뒤에 요소 추가
  enqueue = (elements) => {
    return this.items.push(elements);
  };
  //앞의 요소 삭제
  dequeue = () => {
    return this.items.shift();
  };
  //앞의 요소 참조
  front = () => {
    let front = this.items[0];
    return front;
  };
  //아이템의 길이
  size = () => {
    return this.items.length;
  };
  //배열이 비어있는지 불린값으로 확인
  isEmpty = () => {
    return this.items.length === 0;
  };
  //아이템 배열 전부 삭제
  clear = () => {
    return (this.items = []);
  };
  print = () => {
    console.log(this.items.toString());
  };
}
let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(11);
queue.enqueue(12);
console.log(queue.size());
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
console.log(queue.isEmpty());
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);
console.log(queue.size());
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.print());

//우선순위 큐
class PriorityQueue {
  constructor() {
    this.items = [];
    class QueueElement {
      constructor(element, priority) {
        this.element = element;
        this.priority = priority;
      }
    }
    this.enqueue = (element, priority) => {
      let queueElement = new QueueElement(element, priority);

      if (this.isEmpty()) {
        this.items.push(queueElement);
      } else {
        let add = false;
        //여기서 priority는 1이 가장 큰 순위다.
        for (let i = 0; i < this.items.length; i++) {
          if (queueElement.priority < this.items[i].priority) {
            this.items.splice(i, 0, queueElement);
            //아이템의 i번째에 해당하는 요소를 0번째 인덱스에 요소를 삽입
            add = true;
            break;
          }
        }
        if (!add) {
          this.items.push(queueElement);
        }
      }
    };
  }
  dequeue = () => {
    return this.items.shift();
  };
  size = () => {
    return this.items.length;
  };
  isEmpty = () => {
    return this.items.length === 0;
  };
  front = () => {
    let front = this.items[0];
    return front;
  };
  print = () => {
    console.log(this.items);
  };
}

let priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());
priorityQueue.enqueue("john", 2);
priorityQueue.enqueue("byungju", 3);
priorityQueue.enqueue("jonny", 1);
console.log(priorityQueue.print());

//환형 큐 - 뜨거운 감자 게임

const hotPotato = (nameList, num) => {
  let queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(`${eliminated} 탈락`);
  }
  return queue.dequeue();
};
let names = ["john", "jessey", "camelo", "eujin", "tom"];
let winner = hotPotato(names, 10);
console.log(`${winner} 승리!`);

export default Queue;
