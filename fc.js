// 1 1 2 3 5 8 13

const n = 8;
let arr = [];
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    arr.push(1);
    arr.push(1);
  } else {
    if (arr[arr.length - 1] + arr[arr.length - 2] === i) {
      arr.push(i);
    }
  }
  if (i === n) {
    console.log(arr[arr.length - 2]);
  }
}
