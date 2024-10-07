import React from "react";
import axios from "axios";

const DeleteProductModal = ({ isOpen, onClose, onDeleteProduct, product }) => {
  const handleDeleteProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `http://localhost:5001/api/products/${product._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        }
      );

      if (res.status === 200) {
        onDeleteProduct();
        onClose();
      } else {
        console.error("Failed to delete product:", res.message);
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div
      className={`modal ${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center`}
    >
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <span
          className="close absolute top-2 right-2 text-gray-600 text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
        <p className="text-lg mb-4">
          Are you sure you want to delete this product?
        </p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            onClick={handleDeleteProduct}
          >
            Delete Product
          </button>
          <button
            className="bg-slate-200 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
