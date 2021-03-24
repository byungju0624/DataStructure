class Set {
  constructor() {
    this.items = {};
    this.has = (element) => {
      return this.items.hasOwnProperty(element);
    };
    this.add = (element) => {
      if (!this.has(element)) {
        this.items[element] = element;
        return true;
      }
      return false;
    };
    this.remove = (element) => {
      if (this.has(element)) {
        delete this.items[element];
        return true;
      }
      return false;
    };
    this.clear = () => {
      return (this.items = {});
    };
    this.size = () => {
      Object.keys(this.items).length;
    };
    this.values = () => {
      return Object.keys(this.items);
    };
    //합집합
    this.union = (otherSet) => {
      let unionSet = new Set();
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }
      values = otherSet.values();
      for (let i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }
      return unionSet;
    };

    //교집합
    this.intersection = (otherSet) => {
      let intersectionSet = new Set();
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (otherSet.has(values[i])) {
          intersectionSet.add(values[i]);
        }
      }
      return intersectionSet;
    };

    //차집합
    this.difference = (otherSet) => {
      let differenceSet = new Set();
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(vlaues[i])) {
          differenceSet.add(values[i]);
        }
      }
      return differenceSet;
    };
  }
}
let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log(unionAB.values());
