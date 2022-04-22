exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    // console.log(parent);
    // const { categoryId } = parent;

    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    // const { id } = parent;
    return reviews.filter((review) => review.productId === id);
  },
};
