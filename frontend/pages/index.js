import { useState } from "react";
import Navbar from "../components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import AddProductModal from "@/components/AddProductModal";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    // Add the new product to the state
    setProducts([...products, product]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Store
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the latest trends and shop your favorite products with
              ease.
            </p>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Product
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  New Arrivals
                </h2>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Best Sellers
                </h2>
                {/* Add best selling products here */}
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  On Sale
                </h2>
                {/* Add products on sale here */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} E-Commerce Website. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Home;
