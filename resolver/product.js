exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    // console.log(parent);
    // const { categoryId } = parent;

    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, { filter }, { reviews }) => {
    // const { id } = parent;
    console.log(filter);
    const productReviews = reviews.filter((review) => review.productId === id);
    if (filter) {
      return productReviews.filter(
        (review) => review.rating >= filter.avgRating
      );
    } else {
      return productReviews;
    }
  },
};
