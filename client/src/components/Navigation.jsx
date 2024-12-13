import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">DeFrance</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/inicio" className="text-blue-500 hover:underline">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/productos" className="text-blue-500 hover:underline">
            Productos
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="text-blue-500 hover:underline">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}


