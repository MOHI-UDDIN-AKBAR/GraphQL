exports.Query = {
  hello: () => {
    return ["this", "is", "an", "array"];
  },
  products: () => products, //all products
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
