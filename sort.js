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

    //병합 정렬

    const merge = (left, right) => {
      let result = [],
        il = 0,
        ir = 0;
      while (il < left.length && ir < right < length) {
        if (left[il] < right[ir]) {
          result.push(left[il++]);
        } else {
          result.push(right[ir++]);
        }
      }
      while (il < left.length) {
        result.push(left[il++]);
      }
      while (ir < right.length) {
        result.push(right[ir++]);
      }
      return result;
    };
    const mergeSortRec = (array) => {
      let length = array.length;
      if (length === 1) {
        return array;
      }
      let mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);

      return merge(mergeSortRec(left), mergeSortRec(right));
    };

    this.mergeSort = () => {
      array = mergeSortRec(array);
    };

    //퀵 정렬(quick sort)

    swapQuickSort = (array, index1, index2) => {
      let aux = array[index1];
      array[index1] = array[index2];
      array[index2] = aux;
    };
    let partition = (array, left, right) => {
      let pivot = array[Math.floor((left + right) / 2)];
      (i = left), (j = right);
      while (i <= j) {
        //i와 j의 위치가 역전될 때까지 파티션을 반복
        while (array[i] < pivot) {
          //pivot보다 크거나 같은 원소를 찾을 때까지 좌측 포인터를 우측으로 이동
          i++;
        }
        while (array[j] > pivot) {
          //pivot보다 작거나 같은 원소를 찾을 때까지 우측 포인터를 좌측으로 이동
          j--;
        }
        if (i <= j) {
          swapQuickSort(array, i, j);
          i++;
          j--;
        }
      }
    };
    let quick = (array, left, right) => {
      let index;
      if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
          quick(array, left, index - 1);
        }
        if (index < right) {
          quick(array, index, right);
        }
      }
    };
    this.quickSort = () => {
      quick(array, 0, array.length - 1); //정렬할 배열과 처음/끝 인덱스를 인자로 재귀 호출
    };
  }
}
