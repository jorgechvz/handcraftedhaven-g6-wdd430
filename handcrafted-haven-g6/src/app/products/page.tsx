"use client";
import { useState, useEffect } from "react";
import Product from "@/components/ui/products/product";
import { fetchProducts } from "@/lib/data";

interface ProductoData {
  id: string;
  name: string;
  price: number;
  image: string | null;
  description: string | null;
}

const ProductosPage: React.FC = () => {
  const [productos, setProductos] = useState<ProductoData[]>([]);
  const [filtroNombre, setFiltroNombre] = useState<string>("");

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosData: ProductoData[] = await fetchProducts();
        setProductos(productosData);
      } catch (error: any) {
        console.error("Error to fetch the products", error.message);
      }
    };

    obtenerProductos();
  }, []);

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroNombre(event.target.value);
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.name.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  return (
    <div className="bg-silverSand-50 mt-[75px] pb-[75px]">
      <div className="min-h-screen max-w-7xl m-auto p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-Kilamanjaro-950">Productos</h1>
        </header>

        <div className="mb-4">
          <label
            htmlFor="filtroNombre"
            className="block text-sm font-medium text-gray-700"
          >
            Filter by name:
          </label>
          <input
            type="text"
            id="filtroNombre"
            value={filtroNombre}
            onChange={handleFiltroChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productosFiltrados.map((producto) => (
            <Product key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
