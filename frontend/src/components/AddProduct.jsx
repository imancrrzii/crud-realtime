import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      name: name,
      price: parseInt(price),
    });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-md shadow shadow-slate-300">
      <form onSubmit={saveProduct} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5 flex items-center gap-x-4">
            <label className="font-bold text-slate-700 text-sm w-[75px]">
              Name
            </label>
            <input
              type="text"
              className="w-full py-2 mt-1 border border-slate-200 rounded-md px-4 focus:outline-none focus:border-slate-500 hover:shadow text-sm"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5 flex items-center gap-x-4">
            <label className="font-bold text-slate-700 text-sm w-[75px]">
              Price
            </label>
            <input
              type="text"
              className="w-full py-2 mt-1 border border-slate-200 rounded-md px-4 focus:outline-none focus:border-slate-500 hover:shadow text-sm"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="w-5/6 py-2 font-bold text-white bg-violet-600 hover:bg-violet-400 rounded-lg border-violet-400 hover:shadow text-sm "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
