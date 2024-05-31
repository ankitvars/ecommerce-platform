import Link from "next/link";
import Navbar from "./Navbar";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.length > 0 &&
          products.map((product) => (
            <li key={product._id} className="bg-white shadow p-4 rounded-lg">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-2 flex justify-end">
                <Link href={`/products/${product._id}/edit`}>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Edit
                  </div>
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
