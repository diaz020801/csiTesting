import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contador from "./Contador";

describe("Carrito de compras (Contador)", () => {
  it("inicia con 0 productos", () => {
    render(<Contador />);
    expect(screen.getByText("Productos: 0")).toBeInTheDocument();
  });

  it("agrega un producto al hacer clic en Agregar", async () => {
    render(<Contador />);
    await userEvent.click(screen.getByRole("button", { name: "Agregar" }));
    expect(screen.getByText("Productos: 1")).toBeInTheDocument();
  });

  it("quita un producto al hacer clic en Quitar", async () => {
    render(<Contador />);
    const agregar = screen.getByRole("button", { name: "Agregar" });
    await userEvent.click(agregar);
    await userEvent.click(agregar);
    await userEvent.click(screen.getByRole("button", { name: "Quitar" }));
    expect(screen.getByText("Productos: 1")).toBeInTheDocument();
  });

  it("no permite quitar cuando el carrito está vacío", () => {
    render(<Contador />);
    expect(screen.getByRole("button", { name: "Quitar" })).toBeDisabled();
  });

  it("vacía el carrito", async () => {
    render(<Contador />);
    await userEvent.click(screen.getByRole("button", { name: "Agregar" }));
    await userEvent.click(screen.getByRole("button", { name: "Vaciar carrito" }));
    expect(screen.getByText("Productos: 0")).toBeInTheDocument();
  });
});
