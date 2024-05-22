let x1 = 0
let x2 = 1
let tmp = null

for (let i = 0; i < 10; i++) {
  console.log(x1);
    tmp = x1;
    x1 = x2;
    x2 = tmp + x2;
}