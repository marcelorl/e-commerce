export const createProductIdsList = (id, quantity) => {
  let list = [];

  for (let i = 0; i < quantity; i++) {
    list.push(id);
  }

  return list;
};
