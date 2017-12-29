const listByIdAndQuantity = list => {
  return list.reduce((acc, id) => {
    if (acc[id] === undefined) {
      acc[id] = 1;

      return acc;
    }

    acc[id] += 1;

    return acc;
  }, {});
};

module.exports = listByIdAndQuantity;
