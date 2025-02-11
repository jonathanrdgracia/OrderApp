import React, { useState } from "react";

import {
  ActionFunctionArgs,
  Form,
  Link,
  redirect,
  useActionData,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct } from "../services/ProductOrderService";

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";

  
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  
  if (error.length) {
    return error;
  }
  try {
    await addProduct(data);
    
  }   catch (error: any) {
    
   return alert('Ocurrió un error: '+ error.response?.data.detail || error.message);
}
  return redirect("/");
}
export default function NewProduct() {
  const error = useActionData() as string;
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };
  
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Registrar Orden</h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Volver al listado
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form className="mt-10" method="POST">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre del Consumidor:
          </label>
          <input
            id="CustomerName"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Consumidor"
            name="CustomerName"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Total:
          </label>
          <input
            id="TotalAmount"
            type="number"
            step="0.01"
            min="0"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="TotalAmount"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Fecha:
          </label>
          <input
           className="mt-2 block w-full p-3 bg-gray-50"
            type="date"
            name="OrderDate"
            id="OrderDate"
            value={selectedDate}
            onChange={handleDateChange}
           
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </div>
  );
}
