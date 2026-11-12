import { useState } from "react";

function Contador() {
  const [cantidad, setCantidad] = useState(0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <p>Productos: {cantidad}</p>
      <button onClick={() => setCantidad(cantidad + 1)}>Agregar</button>
      <button
        onClick={() => setCantidad(cantidad - 1)}
        disabled={cantidad === 0}
      >
        Quitar
      </button>
      <button onClick={() => setCantidad(0)}>Vaciar carrito</button>
    </div>
  );
}

export default Contador;
