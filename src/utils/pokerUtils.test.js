import {
  checkForFullHouseOrFourOfAKind,
  checkForStraightFlushes,
  checkForFlush,
  checkForStraight,
  checkForTwoPairThreeOfAKind,
  checkForSinglePair,
  checkForHighCard,
  convertRoyalCardsToNumbers,
  getCardSuits,
  getCardValues
} from "./pokerUtils";

describe("getCardValues, ", () => {
  it("should only return the values of the cards", () => {
    let array = ["ah", "10d", "js", "2c", "10s"];

    let result = getCardValues(array);

    expect(result).toEqual(["a", "10", "j", "2", "10"]);
  });
});

describe("getCardSuits, ", () => {
  it("should only return the suits of the cards", () => {
    let array = ["ah", "10d", "js", "2c", "10s"];

    let result = getCardSuits(array);

    expect(result).toEqual(["h", "d", "s", "c", "s"]);
  });
});

describe("convertRoyalCardsToNumbers,", () => {
  it("should return the royal cards as numbers, ", () => {
    let array = ["j", "q", "k", "a", "8", 7, 5];

    let result = convertRoyalCardsToNumbers(array);

    expect(result).toEqual(["11", "12", "13", "14", "8", 7, 5]);
  });
});

describe("checkForHighCard, ", () => {
  it("should return the king, ", () => {
    let array = ["3", "6", "2", "13", "9"];

    let result = checkForHighCard(array);

    expect(result).toEqual("High Card King");
  });
  it("should return 6, ", () => {
    let array = ["6", "6", 2, "4", "4"];

    let result = checkForHighCard(array);

    expect(result).toEqual("High Card 6");
  });
});

describe("checkForSinglePair, ", () => {
  it("should return Its a Pair, ", () => {
    let array = ["a", "a"];

    let result = checkForSinglePair(array);

    expect(result).toEqual("Its a Pair!");
  });
  it("should return false, ", () => {
    let array = ["a", "a", "a"];

    let result = checkForSinglePair(array);

    expect(result).toEqual(false);
  });
});

describe("checkForTwoPairThreeOfAKind, ", () => {
  it("should return Two Pairs", () => {
    let uniqueValues = ["a", "b", "c"];
    let duplicateValues = ["a", "a", "b", "b"];

    let result = checkForTwoPairThreeOfAKind(uniqueValues, duplicateValues);

    expect(result).toEqual("Two Pairs");
  });
  it("should return Three Of A Kind", () => {
    let uniqueValues = ["a", "b", "c"];
    let duplicateValues = ["a", "a", "a"];

    let result = checkForTwoPairThreeOfAKind(uniqueValues, duplicateValues);

    expect(result).toEqual("Three Of A Kind");
  });
  it("should return false", () => {
    let uniqueValues = ["a", "b", "c", "d"];
    let duplicateValues = ["a", "a", "a"];

    let result = checkForTwoPairThreeOfAKind(uniqueValues, duplicateValues);

    expect(result).toEqual(false);
  });
});

describe("checkForStraight", () => {
  it("should return It's a Straight", () => {
    let array = ["3", "7", "6", "5", 4];

    let result = checkForStraight(array);

    expect(result).toEqual("It's a straight!");
  });

  it("should return false", () => {
    let array = ["3", "9", "6", "5", "4"];

    let result = checkForStraight(array);

    expect(result).toEqual(false);
  });
});

describe("checkForFlush, ", () => {
  it("should return Flush!", () => {
    let array = ["h"];

    let result = checkForFlush(array);

    expect(result).toEqual("Flush!");
  });
  it("should return false", () => {
    let array = ["h", "s"];

    let result = checkForFlush(array);

    expect(result).toEqual(false);
  });
});

describe("checkForStraightFlushes, ", () => {
  it("should return Royal Flush!!!!!", () => {
    let values = ["10", "14", "11", "13", "12"];
    let suits = ["h"];

    let result = checkForStraightFlushes(values, suits);

    expect(result).toEqual("Royal Flush!!!!!");
  });
  it("should return Straight Flush!!!!", () => {
    let values = ["9", "13", "11", "10", "12"];
    let suits = ["h"];

    let result = checkForStraightFlushes(values, suits);

    expect(result).toEqual("Straight Flush!!!!");
  });
  it("should return false", () => {
    let values = ["5", "13", "11", "10", "12"];
    let suits = ["h"];

    let result = checkForStraightFlushes(values, suits);

    expect(result).toEqual(false);
  });
  it("should return false", () => {
    let values = ["9", "13", "11", "10", "12"];
    let suits = ["h", "a"];

    let result = checkForStraightFlushes(values, suits);

    expect(result).toEqual(false);
  });
});

describe("checkForFullHouseOrFourOfAKind, ", () => {
  it("should return Check their sleeves, someone cheated", () => {
    let cardValues = ["a", "a", "a", "a", "a"];
    let uniqueValues = ["a"];

    let result = checkForFullHouseOrFourOfAKind(cardValues, uniqueValues);

    expect(result).toEqual("Check their sleeves, someone cheated.");
  });
  it("should return 4 of a kind!!!", () => {
    let cardValues = ["a", "10", "a", "a", "a"];
    let uniqueValues = ["a", "10"];

    let result = checkForFullHouseOrFourOfAKind(cardValues, uniqueValues);

    expect(result).toEqual("4 of a kind!!!");
  });
  it("should return Full House", () => {
    let cardValues = ["a", "10", "a", "10", "a"];
    let uniqueValues = ["a", "10"];

    let result = checkForFullHouseOrFourOfAKind(cardValues, uniqueValues);

    expect(result).toEqual("Full House!!!");
  });
  it("should return false", () => {
    let cardValues = ["a", "10", "a", "10", "9"];
    let uniqueValues = ["a", "10", "9"];

    let result = checkForFullHouseOrFourOfAKind(cardValues, uniqueValues);

    expect(result).toEqual(false);
  });
});
