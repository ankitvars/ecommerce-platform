import ProductList from "./ProductList";

const BestSellers = () => {
  const bestSellingProducts = [
    {
      _id: 4,
      name: "Best Seller 1",
      description: "Description of Best Seller 1",
      image: "/images/product4.jpg",
    },
    {
      _id: 5,
      name: "Best Seller 2",
      description: "Description of Best Seller 2",
      image: "/images/product5.jpg",
    },
    {
      _id: 6,
      name: "Best Seller 3",
      description: "Description of Best Seller 3",
      image: "/images/product6.jpg",
    },
  ];

  return <ProductList products={bestSellingProducts} title="Best Sellers" />;
};

export default BestSellers;
