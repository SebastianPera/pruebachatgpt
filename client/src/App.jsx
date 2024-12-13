import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductosPage } from "./pages/ProductosPage";
import { Navigation } from "./components/Navigation";
import './styles.css';

function HomePage() {
  return <h1>Bienvenido a la Página de Inicio</h1>;
}

function ContactPage() {
  return <h1>Página de Contacto</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
