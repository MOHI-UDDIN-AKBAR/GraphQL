exports.Query = {
  hello: () => {
    return ["this", "is", "an", "array"];
  },
  products: (parent, { filter }, { db }) => {
    // console.log(db.products);
    let filterProducts = db.products;

    // console.log(filter);
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filterProducts = filterProducts.filter((product) => {
          return product.onSale;
        });
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        // console.log(avgRating);
        filterProducts = filterProducts.filter((product) => {
          let totalSumOfRating = 0;
          let numberOfRating = 0;
          console.log(db.reviews);
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              totalSumOfRating += review.rating;
              numberOfRating++;
            }
          });
          const avgProductRating = totalSumOfRating / numberOfRating;
          //   console.log(totalSumOfRating, product.name);
          return avgProductRating >= avgRating;
        });
        // return filterProducts;
      }
      return filterProducts;
    }
    return db.products;
  }, //all products
  product: (parent, { id }, { db }) => {
    // console.log(args);
    // const productId = args.id; //we are getting the id that we declared in query
    // return products.find((product) => product.id === productId);
    return db.products.find((product) => product.id === id);

    // if (product) {
    //   return product;
    // }
    // return null;
  },
  categories: (parent, args, { db }) => db.categories, //all categories
  category: (parent, { id }, { db }) => {
    // const { id } = args;
    return db.categories.find((category) => category.id === id);
  },
  reviews: (parent, args, { db }) => {
    console.log(db.reviews);
    return db.reviews;
  }, //all review
};
