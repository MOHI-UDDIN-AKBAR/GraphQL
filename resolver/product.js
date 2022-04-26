exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    // console.log(parent);
    // const { categoryId } = parent;

    return db.categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, { filter }, { db }) => {
    // const { id } = parent;
    console.log(filter);
    const productReviews = db.reviews.filter(
      (review) => review.productId === id
    );
    if (filter) {
      return productReviews.filter(
        (review) => review.rating >= filter.avgRating
      );
    } else {
      return productReviews;
    }
  },
};
