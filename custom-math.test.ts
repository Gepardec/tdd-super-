import { add } from "./custom-math";

describe("test custom math library", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });

  it("should fail on unlucky numbers", () => {
    expect(() => add(1, 12)).toThrow("13 is unlucky");
  });
});
