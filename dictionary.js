class Dictionary {
  constructor() {
    this.items = {};

    this.has = (key) => {
      return key in this.items;
    };
    this.set = (key, value) => {
      return (this.items[key] = value);
    };
    this.remove = (key) => {
      if (this.has(key)) {
        delete this.items[key];
        return true;
      }
      return false;
    };
    this.get = (key) => {
      if (this.has(key)) {
        return this.items[key];
      }
      return undefined;
    };
    this.size = () => {
      return Object.keys(this.items).length;
    };
    this.keys = () => {
      return Object.keys(this.items);
    };
    this.clear = () => {
      return (this.items = {});
    };
    this.values = () => {
      let value = [];
      for (let key in this.items) {
        if (this.has(key)) {
          value.push(this.items[key]);
        }
      }
      return value;
    };
  }
}

let dictionary = new Dictionary();
dictionary.set("byung", "1");
dictionary.set("joo", "2");
dictionary.set("bar", "3");
console.log(dictionary.values());
dictionary.remove("byung");
console.log(dictionary.size());
console.log(dictionary.keys());
