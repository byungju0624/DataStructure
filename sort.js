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
    //버블 정렬
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
    //선택 정렬

    this.slectSort = () => {
      let length = array.length,
        indexMin;
      for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
          if (array[indexMin] > array[j]) {
            indexMin = j;
          }
        }
        if (i !== indexMin) {
          swap(i, indexMin);
        }
      }
    };

    //삽입 정렬

    this.insertionSort = () => {
      let length = array.length,
        j,
        temp;
      for (let i = 1; i < length; i++) {
        j = i;
        temp = array[i];
        while (j > 0 && array[j - 1] > temp) {
          array[j] = array[j - 1];
          j--;
        }
        array[j] = temp;
      }
    };
  }
}
