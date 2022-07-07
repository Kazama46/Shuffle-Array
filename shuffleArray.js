const swapElements = (list, a, b) => {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
};

const arrayShuffle = (list, len) => {
  for (let i = 1; i < len; i += 2) {
    if (list[i - 1] > list[i]) {
      swapElements(list, i - 1, i);
    }
    if (i < len - 1 && list[i] < list[i + 1]) {
      swapElements(list, i, i + 1);
    }
  }
};

let array = [10, 90, 49, 2, 1, 5, 23];

arrayShuffle(array, array.length);
console.log(array);
