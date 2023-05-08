export const getArrSum = () => {
  const arr = [1, 2, 3];

  let sum = arr.reduce((a, b) => {
    return a + b;
  });

  return sum;
};
