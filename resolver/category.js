exports.Category = {
  products: ({ id }, args, { products }) => {
    // const { id } = parent;
    return products.filter((product) => product.categoryId === id);
  },
};
