
test("Should be equal to an object", () => {
    const myObject = {};
    expect(myObject).toEqual({});
});

// JEST reference: https://jestjs.io/docs/expect

test("Should not have I in team", () => {
    const word = "team";
    expect(word).not.toMatch(/I/);
});

test("Should contain apples in array", () => {
    const arr = ["apples", "pears", "grapes"];
  
    expect(arr).toContain("apples");
  });
  
  /* toBe performs strict equality === 
  where as toEqual checks that the values are the same.
  So be careful when using toEqual.
  for example:
  const first = { a: { b: 3 } };
  const second = { a: { b: 3 } };
  expect(first).toEqual(second); // passes
  expect(first).toBe(second); // fails as it the objects are pointing to different memory locations
  You can use toBe for primitive types such as strings, numbers or booleans. For anything else, use toEqual.
  */

  describe("Adds all numbers", () => {
    it.each([
      [1, 2, 3],
      [3, 4, 7],
    ])(`should add %i to %i to give %i`, (first, second, expected) => {
      const result = first + second;
      expect(result).toBe(expected);
    });
  });