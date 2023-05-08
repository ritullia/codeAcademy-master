import { getArrSum } from "./arrayFunc";

describe("arrayFunction.js", () => {
  describe("getArrSum", () => {
    test.each([[1, 2, 3]])("adds %p + %p + %p returns %p", (a, b, result) => {
      expect(getArrSum(a, b)).toBe(result);
    });
  });
});
