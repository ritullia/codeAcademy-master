import { sum, sub } from "./math";

//bendros funkcijos failo irasymas
describe("math.js", () => {
  // faile aprasomos funkcijos veiksmas
  describe("sum", () => {
    // kas testuojama
    // test("returns correct sum if passed arg are numbers", () => {
    //   expect(sum(1, 1)).toBe(2);
    // });
    test.each([
      [1, 1, 2],
      [4, 10, 14],
      [5, 6, 11],
      [5, 5, 10],
    ])("adds %p + %p and returns %p", (a, b, result) => {
      expect(sum(a, b)).toBe(result);
    });
  });

  describe("sub", () => {
    test.each([
      [5, 2, 3],
      [6, 4, 2],
    ])("adds %p - %p and returns %p", (a, b, result) => {
      expect(sub(a, b)).toBe(result);
    });
  });
});
