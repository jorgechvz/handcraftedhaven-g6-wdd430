"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CreateProductAction } from "@/lib/actions";
import { Category } from "@/lib/types";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CreateProduct({
  userId,
  category,
}: {
  userId: string;
  category: Category[];
}) {
  const initialState = { message: "", errors: {} };
  const [formState, setFormState] = useFormState(
    CreateProductAction,
    initialState
  );

  const [fileName, setFileName] = useState("Upload a file");

  const handleFileChange = (event: any) => {
    setFileName(event.target.files[0].name);
  };

  return (
    <form action={setFormState} className="flex">
      {formState.message && (
        <div className="text-Kilamanjaro-800">{formState.message}</div>
      )}
      <div className="w-full sm:px-5 rounded-lg">
        <h1 className="text-Kilamanjaro-950 font-bold text-4xl mb-4">
          Create a Product
        </h1>
        <div className="m-auto">
          <div>
            <input
              className="hidden"
              id="userId"
              type="text"
              name="userId"
              defaultValue={userId}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-Kilamanjaro-950 mb-2 block text-md"
            >
              Product Name
            </label>
            <div className="relative mb-4">
              <input
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your Product Name"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-Kilamanjaro-950 mb-2 block text-md"
            >
              Product Description
            </label>
            <div className="relative mb-4">
              <textarea
                className="block h-[150px] w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="description"
                name="description"
                placeholder="Enter your Product Description"
                required
              />
            </div>
          </div>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-Kilamanjaro-950 px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="image"
                  className="mx-auto relative cursor-pointer rounded-md font-semibold hover:underline"
                >
                  <span className="">{fileName}</span>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-3 gap-x-5">
          <div className="flex-1">
            <label
              htmlFor="quantity"
              className="text-Kilamanjaro-950 mb-2 block text-md"
            >
              Product Quantity
            </label>
            <div className="relative mb-4">
              <input
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="quantity"
                type="text"
                name="quantity"
                placeholder="Enter your Product Quantity"
                required
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="price"
              className="text-Kilamanjaro-950 mb-2 block text-md"
            >
              Product Price
            </label>
            <div className="relative mb-4">
              <input
                className="block w-full rounded-md border border-Kilamanjaro-950 py-[9px] pl-3 text-md outline-2 placeholder:text-silverSand-400"
                id="price"
                type="string"
                name="price"
                placeholder="Enter your Product Quantity"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="category"
            className="text-Kilamanjaro-950 mb-2 block text-md"
          >
            Product Category
          </label>
          <div className="relative mb-4">
            <select
              className="w-full px-3 py-2 border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
              id="category"
              name="category"
            >
              <option value="" disabled>
                Select a category
              </option>
              {category.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-6 max-w-2xl m-auto flex justify-end gap-4">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full text-md bg-Kilamanjaro-950 text-silverSand-50 p-3 rounded-lg mt-2"
      type="submit"
      aria-disabled={pending}
    >
      Create Product
    </button>
  );
}
