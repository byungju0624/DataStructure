//피보나치 수열

function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(10);

//최소 동전 교환 문제

class MinCoinChange {
  constructor(coins) {
    let items = coins;
    let cache = {};
    this.makeChange = (amount) => {
      let me = this;
      if (!amount) {
        return [];
      }
      if (cache[amount]) {
        return cache[amount];
      }
      let min = [],
        newMin,
        newAmount;
      for (let i = 0; i < items.length; i++) {
        let coin = items[i];
        newAmount = amount - coin;
        if (newAmount >= 0) {
          newMin = me.makeChange(newAmount);
        }
        if (
          newAmount >= 0 &&
          (newMin.length < min.length - 1 || !min.length) &&
          (newMin.length || !newAmount)
        ) {
          min = [coin].concat(newMin);
          console.log(`new Min ${min} for ${amount}`);
        }
      }
      return (cache[amount] = min);
    };
  }
}

// let minCoinChange = new MinCoinChange([1, 5, 10, 25]);
// console.log(minCoinChange.makeChange(36));

//욕심쟁이 알고리즘

class GreedyMincoin {
  constructor(coins) {
    let items = coins;

    this.makeChange = (amount) => {
      let change = [],
        total = 0;
      for (let i = items.length; i >= 0; i--) {
        let coin = items[i];
        while (total + coin <= amount) {
          change.push(coin);
          total += coin;
        }
      }
      return change;
    };
  }
}

let greedyMincoin = new GreedyMincoin([1, 5, 10, 25]);
console.log(greedyMincoin.makeChange(36));
