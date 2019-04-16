import { getUniqueArray, getNonUniqueValues } from "./utils";

describe("getUniqueArray, ", () => {
  it("should return one value", () => {
    let array = ["a", "a", "a", "a", "a"];

    let result = getUniqueArray(array);

    expect(result).toEqual(["a"]);
  });

  it("should only return non-duplicate values", () => {
    let array = ["a", "b", "c", "c", "c"];

    let result = getUniqueArray(array);

    expect(result).toEqual(["a", "b", "c"]);
  });
});

describe("getNonUniqueValues, ", () => {
  it("should only return values that occur more then once", () => {
    let array = ["a", "a", "b", "b", 1];

    let result = getNonUniqueValues(array);

    expect(result).toEqual(["a", "a", "b", "b"]);
  });
});
