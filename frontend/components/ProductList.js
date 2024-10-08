import axios from "axios";
import AddProductModal from "@/components/AddProductModal";
import { useState } from "react";
import EditProductModal from "@/components/EditProductModal";
import DeleteProductModal from "@/components/DeleteProductModal";

const ProductList = ({ products, setProducts, fetchProducts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:5001/api/products?search=${searchQuery}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        }
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to search products:", error);
    }
  };
  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Products List</h1>
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg mr-2 focus:ring-1 "
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
          >
            Add Product
          </button>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products?.length > 0 &&
            products.map((product) => (
              <li key={product._id} className="bg-white shadow p-4 rounded-lg">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-96 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-600">$ {product.price}</p>
                <div className="mt-2 flex justify-end">
                  <div
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => {
                      setSelectedProduct(product);
                      setEditModalOpen(true);
                    }}
                  >
                    Edit
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                    onClick={() => {
                      setSelectedProduct(product);
                      setDeleteModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* Add New Product */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddProduct={fetchProducts}
      />
      {/* Delete/Edit Modals */}
      <EditProductModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        product={selectedProduct}
        onUpdateProduct={fetchProducts}
      />
      <DeleteProductModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDeleteProduct={fetchProducts}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductList;
