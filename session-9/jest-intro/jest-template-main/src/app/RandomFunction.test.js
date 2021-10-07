
test("Should be equal to an object", () => {
    const myObject = {};
    expect(myObject).toEqual({});
});

test("Should not have I in team", () => {
    const word = "team";
    expect(word).not.toMatch(/I/);
});