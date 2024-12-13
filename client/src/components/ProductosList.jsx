import {useEffect, useState} from "react"
import { getAllProductos } from "../api/productos.api";
import {ProductoCard} from './ProductoCard'

export function ProductosList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      const res = await getAllProductos();
      setProductos(res.data);
    }
    loadProductos();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-2 p-4">
      {productos.map((producto) => (
        <ProductoCard key={producto.coditm} producto={producto} />
      ))}
    </div>
  );
}
