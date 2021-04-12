class ArrayList {
  constructor() {
    let array = [];
    this.insert = (item) => {
      array.push(item);
    };
    this.toString = () => {
      return array.join();
    };

    let swap = (index1, index2) => {
      let aux = array[index1];
      array[index1] = array[index2];
      array[index2] = aux;
    };

    this.bubbleSort = () => {
      let length = array.length;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
          if (array[j] > array[j + 1]) {
            swap(j, j + 1);
          }
        }
      }
    };
    //개선된 버블 소트
    this.modifiedBubbleSort = () => {
      let length = array.length;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (array[j] > array[j + 1]) {
            swap(j, j + 1);
          }
        }
      }
    };
  }
}
