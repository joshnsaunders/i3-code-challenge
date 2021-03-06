export const getUniqueArray = values => {
  return [...new Set(values)];
};

export const getNonUniqueValues = values => {
  return values.filter(function(a) {
    return values.indexOf(a) !== values.lastIndexOf(a);
  });
};

export const sortArray = array => {
  return array.sort((a, b) => a - b);
};
