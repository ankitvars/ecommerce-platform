import ProductList from "./ProductList";

const OnSale = () => {
  const productsOnSale = [
    {
      _id: 7,
      name: "Product on Sale 1",
      description: "Description of Product on Sale 1",
      image: "/images/product7.jpg",
    },
    {
      _id: 8,
      name: "Product on Sale 2",
      description: "Description of Product on Sale 2",
      image: "/images/product8.jpg",
    },
    {
      _id: 9,
      name: "Product on Sale 3",
      description: "Description of Product on Sale 3",
      image: "/images/product9.jpg",
    },
  ];

  return <ProductList products={productsOnSale} title="On Sale" />;
};

export default OnSale;
