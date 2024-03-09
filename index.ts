const subtract = (num1: number, num2: number): number => {
  return num1 - num2;
};

function add(a: number, b: number, ...num3: number[]): number {
  return a + b + num3.reduce((acc, val) => acc + val);
}
console.log(add(5, 10, 15, 20, 25));
