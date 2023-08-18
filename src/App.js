import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetalle from "./ItemDetalle/ItemDetalle";
import ItemList from "./ItemCount/ItemList";

function App() {
  return (
    <div className="contenedor">
      <h1 className="titulo">Ejemplo segundo entregable</h1>
    {/* creando enrutado */}
      <BrowserRouter>
        <Routes>
          {/* ruta principal que contiene la lista de productos */}
          <Route path="/" element={<ItemList />} />
         {/*  ruta detalle de producto la cual recibe por parametros el id del producto para realizar la busqueda */}
          <Route path="/items/:id" element={<ItemDetalle />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
