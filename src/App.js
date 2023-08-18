import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetalle from "./ItemDetalle/ItemDetalle";
import ItemList from "./ItemCount/ItemList";

function App() {
  return (
    <div className="contenedor">
      <h1 className="titulo">Ejemplo segundo entregable</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/items/:id" element={<ItemDetalle />} />
        </Routes>
        {/* <ItemCount initial={1} stock={13} onAdd={(quantity)=>console.log("la cantidad ingresada es: ", quantity)} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
