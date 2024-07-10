import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const ProductList = () => {
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  };
  const { data } = useSWR("products", fetcher);
  if (!data) {
    return <div>Loading...</div>;s
  }
  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    mutate('products');
  };
  return (
    <section className="max-w-screen-2xl w-full">
      <div className="mx-auto container">
        <Link
          className=" flex items-center gap-x-2 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded float-left mb-5 text-sm"
          to="/create"
        >
          <FaPlus />
          Add Product
        </Link>

        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr className="text-center">
                <th className="px-6 bg-violet-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  No
                </th>
                <th className="px-6 bg-violet-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  Name
                </th>
                <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  Price
                </th>
                <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((product, index) => (
                <tr className="text-center" key={product.id}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  text-gray-700 ">
                    {index + 1}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {product.name}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {product.price}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-center gap-x-6">
                    <Link
                      to={`/edit/${product.id}`}
                      className="text-yellow-400 flex justify-center hover:text-yellow-500 hover:cursor-pointer text-lg"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-400 flex justify-center hover:red-yellow-600 hover:cursor-pointer text-lg"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr className="text-center">
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  text-gray-700 ">
                  /argon/
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  4,569
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  340
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-center gap-x-6">
                  <Link
                    to={"/edit"}
                    className="text-yellow-400 flex justify-center hover:text-yellow-500 hover:cursor-pointer text-lg"
                  >
                    <FaEdit />
                  </Link>
                  <button className="text-red-400 flex justify-center hover:red-yellow-600 hover:cursor-pointer text-lg">
                    <FaTrash />
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
