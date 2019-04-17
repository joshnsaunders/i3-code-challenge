export const checkTwoPairOrFourOfAKind = array => {
  if (array[1] === array[2]) {
    return `Four of A Kind with ${array[0]}'s`;
  } else {
    return `Two pair with ${array[0]}'s and ${array[2]}'s`;
  }
};

export const checkFullHouseValues = array => {
  if (array[1] === array[2]) {
    return `${array[2]}'s and ${array[3]}'s`;
  } else {
    return `${array[1]}'s and ${array[2]}'s`;
  }
};

export const convertLettersToSuits = string => {
  if (string === "c") {
    return "Clubs";
  } else if (string === "d") {
    return "Diamonds";
  } else if (string === "h") {
    return "Hearts";
  } else {
    return "Spades";
  }
};

export const convertRoyalsToNumbers = array => {
  return array.map(data => {
    if (data === "j") {
      return "11";
    } else if (data === "q") {
      return "12";
    } else if (data === "k") {
      return "13";
    } else if (data === "a") {
      return "14";
    }
    return data;
  });
};

export const convertNumbersToRoyals = array => {
  return array.map(data => {
    if (data == "11") {
      return "Jack";
    } else if (data == "12") {
      return "Queen";
    } else if (data == "13") {
      return "King";
    } else if (data == "14") {
      return "Ace";
    }
    return data;
  });
};
