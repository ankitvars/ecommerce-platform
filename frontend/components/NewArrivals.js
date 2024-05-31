import ProductList from "./ProductList";

const NewArrivals = () => {
  const newProducts = [
    {
      _id: 1,
      name: "New Product 1",
      description: "Description of New Product 1",
      image: "/images/product1.jpg",
    },
    {
      _id: 2,
      name: "New Product 2",
      description: "Description of New Product 2",
      image: "/images/product2.jpg",
    },
    {
      _id: 3,
      name: "New Product 3",
      description: "Description of New Product 3",
      image: "/images/product3.jpg",
    },
  ];

  return <ProductList products={newProducts} title="New Arrivals" />;
};

export default NewArrivals;
