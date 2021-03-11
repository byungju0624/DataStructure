class Stack {
  constructor() {
    this.items = [];
  }
  push = (elements) => {
    this.items.push(elements);
  };
  pop = () => {
    return this.items.pop();
  };
  isEmpty = () => {
    return this.items.length === 0;
  };
  size = () => {
    return this.items.length;
  };
  peak = () => {
    let length = this.items.length;
    return this.items[length - 1];
  };
  clear = () => {
    this.items = [];
  };
  print = () => {
    return this.items;
  };
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peak());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(1);
console.log(stack.size());
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();

//10진수를 2진수로 변환

const divideBy2 = (decNumber) => {
  let remStack = new Stack(),
    rem,
    binaryString = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
};
console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

const baseConverter = (decNumber, base) => {
  let remStack = new Stack(),
    rem,
    baseString = "",
    digits = "0123456789ABCDEF";
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
};
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
