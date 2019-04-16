export const checkForStraightFlushes = (values, suits) => {
  values = values.sort((a, b) => b - a);
  if (values.length === 5 && values[4] === "10" && suits.length === 1) {
    return "Royal Flush!!!!!";
  } else if (
    values.length === 5 &&
    Math.max(...values) - Math.min(...values) === 4 &&
    suits.length === 1
  ) {
    return "Straight Flush!!!!";
  }
  return false;
};

export const checkForFullHouseOrFourOfAKind = (cardValues, uniqueValues) => {
  if (uniqueValues.length === 1) {
    return "Check their sleeves, someone cheated.";
  } else if (uniqueValues.length === 2) {
    let filter = cardValues.filter(data => data === cardValues[0]);
    if (filter.length === 1 || filter.length === 4) {
      return "4 of a kind!!!";
    } else if (filter.length === 2 || filter.length === 3) {
      return "Full House!!!";
    }
  }
  return false;
};

export const checkForFlush = suits => {
  if (suits.length === 1) {
    return "Flush!";
  }
  return false;
};

export const checkForStraight = cards => {
  let sortedValues = cards.sort((a, b) => a - b);
  if (
    cards.length === 5 &&
    sortedValues[sortedValues.length - 1] - sortedValues[0] === 4
  ) {
    return "It's a straight!";
  }
  return false;
};

export const checkForTwoPairThreeOfAKind = (uniqueValues, duplicateValues) => {
  if (uniqueValues.length === 3) {
    if (duplicateValues.length === 3) {
      return "Three Of A Kind";
    } else if (duplicateValues.length === 4) {
      return "Two Pairs";
    }
  }
  return false;
};

export const checkForSinglePair = cards => {
  if (cards.length === 2) {
    return "Its a Pair!";
  }
  return false;
};

export const checkForHighCard = cards => {
  let highCard = cards.sort((a, b) => a - b)[4];
  if (highCard === "14") {
    return "High Card Ace";
  } else if (highCard === "13") {
    return "High Card King";
  } else if (highCard === "12") {
    return "High Card Queen";
  } else if (highCard === "11") {
    return "High Card Jack";
  }
  return `High Card ${highCard}`;
};

export const convertRoyalCardsToNumbers = values => {
  return values.map(data => {
    if (data === "a") {
      return "14";
    } else if (data === "k") {
      return "13";
    } else if (data === "q") {
      return "12";
    } else if (data === "j") {
      return "11";
    }
    return data;
  });
};

export const getCardSuits = cards => {
  let suits = cards.map(data => {
    return data.split("").slice(data.length - 1)[0];
  });
  return suits;
};

export const getCardValues = cards => {
  return cards.map(data => {
    return data
      .split("")
      .slice(0, data.length - 1)
      .join("");
  });
};
