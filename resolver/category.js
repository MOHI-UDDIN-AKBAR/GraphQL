exports.Category = {
  products: ({ id }, { filter }, { db }) => {
    // const { id } = parent;
    let filterCategoryProducts = db.products.filter(
      (product) => product.categoryId === id
    );
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filterCategoryProducts = filterCategoryProducts.filter(
          (product) => product.onSale === onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        let totalSumOfRating = 0;
        let numberOfRating = 0;
        filterCategoryProducts = filterCategoryProducts.filter((product) => {
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              totalSumOfRating += review.rating;
              numberOfRating++;
            }
          });
          const avgProductRating = totalSumOfRating / numberOfRating;
          //   console.log(totalSumOfRating, product.name);
          return avgProductRating > avgRating;
        });
      }
      return filterCategoryProducts;
    }
    return db.products;
  },
};
