export const sum = (a, b) => {
  return a + b;
};
export const sub = (a, b) => {
  return a - b;
};

export const getArrSum = (arr) => {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
};
