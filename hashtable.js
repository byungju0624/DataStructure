class HashTable {
  constructor() {
    let items = [];

    const loseloseHashCode = (key) => {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % 37;
    };

    //해쉬함수 개선

    const djb2HashCode = (key) => {
      let hash = 5381;
      for (let i = 0; i < key.length; i++) {
        hash += hash * 33 + key.charCodeAt(i);
      }
      return hash % 1013;
    };

    this.put = (key, value) => {
      //이 함수의 문제점은 중복되면 값이 덮어씌여진다는것.
      let position = loseloseHashCode(key);
      return (items[position] = value);
    };
    this.get = (key) => {
      let position = loseloseHashCode(key);
      return items[position];
    };
    this.remove = (key) => {
      let position = loseloseHashCode(key);
      return (items[position] = undefined);
    };
    this.print = () => {
      for (let i = 0; i < items.length; i++) {
        if (items[i] !== undefined) {
          console.log(`${i}: ${items[i]}`);
        }
      }
    };

    //체이닝

    class ValuePair {
      constructor() {
        this.key = key;
        this.value = value;

        this.toString = () => {
          return `[${this.key} - ${this.value}]`;
        };
      }
    }

    this.cPut = (key, value) => {
      let position = loseloseHashCode(key);
      if (items[position] === undefined) {
        items[position] = new LinkedList();
      }
      return items[position].append(new ValuePair(key, value));
    };

    this.cGet = (key) => {
      let position = loseloseHashCode(key);

      if (items[position] !== undefined) {
        let current = items[position].getHead();

        while (current.next) {
          if (current.next.key === key) {
            return current.next.value;
          }
          current = current.next;
        }
        if (current.next.key === key) {
          return current.next.value;
        }
      }
      return undefined;
    };
    this.remove = (key) => {
      let position = loseloseHashCode(key);

      if (items[position] !== undefined) {
        let current = items[position].getHead();

        while (current.next) {
          if (current.next.key === key) {
            items[position].remove(current.element);
            if (items[position].isEmpty()) {
              items[position] = undefined;
            }
            return true;
          }
          current = current.next;
        }
        if (current.next.key === key) {
          items[position].remove(current.element);
          if (items[position].isEmpty()) {
            items[position] = undefined;
          }
          return true;
        }
      }
      return false;
    };

    //선형탐색법(linear probing)

    this.lPut = (key, value) => {
      let position = loseloseHashCode(key);
      if (items[position] === undefined) {
        items[position] = new ValuePair(key, value);
      } else {
        let index = position++;
        while (items[index] !== undefined) {
          index++;
        }
        items[position] = new ValuePair(key, value);
      }
    };
    this.lGet = (key) => {
      let position = loseloseHashCode(key);

      if (items[position] !== undefined) {
        if (items[position].key === key) {
          return items[position].value;
        }
      } else {
        let index = position++;
        while (items[position] !== undefined || items[position].key === key) {
          index++;
        }
        if (items[position].key === key) {
          return items[position].value;
        }
      }
      return undefined;
    };
    this.lRemove = (key) => {
      let position = loseloseHashCode(key);

      if (items[position] !== undefined) {
        if (items[position].key === key) {
          return (items[position] = undefined);
        }
      } else {
        let index = position++;
        while (items[index] !== undefined || items[index].key === key) {
          index++;
        }
        if (items[index].key === key) {
          return items[index] - undefined;
        }
      }
      return undefined;
    };
  }
}
let hashTable = new HashTable();
hashTable.put("byungju", 1);
hashTable.put("bar", 2);
hashTable.put("youjin", 3);
console.log(hashTable.get("bar"));
console.log(hashTable.print());
