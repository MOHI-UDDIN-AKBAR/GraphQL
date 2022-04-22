exports.Query = {
  hello: () => {
    return ["this", "is", "an", "array"];
  },
  products: (parent, { filter }, { products, reviews }) => {
    let filterProducts = products;
    // console.log(filter);
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filterProducts = filterProducts.filter(
          (product) => product.onSale === filter.onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        // console.log(avgRating);
        let totalSumOfRating = 0;
        let numberOfRating = 0;
        filterProducts = filterProducts.filter((product) => {
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              totalSumOfRating += review.rating;
              numberOfRating++;
            }
          });
          const avgProductRating = totalSumOfRating / numberOfRating;
          //   console.log(totalSumOfRating, product.name);
          return avgProductRating > avgRating;
        });
        return filterProducts;
      }
    }
    return products;
  }, //all products
  product: (parent, { id }, { products }) => {
    // console.log(args);
    // const productId = args.id; //we are getting the id that we declared in query
    return products.find((product) => product.id === productId);
    // if (product) {
    //   return product;
    // }
    // return null;
  },
  categories: (parent, args, { categories }) => categories, //all categories
  category: (parent, { id }, { categories }) => {
    // const { id } = args;
    return categories.find((category) => category.id === id);
  },
  reviews: (parent, args, { reviews }) => reviews, //all review
};
