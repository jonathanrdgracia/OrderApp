import React from "react";

import {
  ActionFunctionArgs,
  Form,
  Link,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getProductById, updateOrder } from "../services/ProductOrderService";
import { Order } from "../types";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const orderId = params.id;
    const order = await getProductById(+orderId);
    if (!order) {
      return redirect("/");
    }
    
    return order;
  }
}

export async function action({ request,params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";

  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  if(error.length) {
    return error
}
  if(params.id !== undefined) {

  await updateOrder(data,+params.id);
  }
  return redirect("/");
}

export default function EditProduct() {
  const order = useLoaderData() as Order
  const error = useActionData() as string;

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Editar Orden</h2>
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
            defaultValue={order.customerName}
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
            defaultValue={order.totalAmount}
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="TotalAmount"
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Actualizar Orden"
        />
      </Form>
    </div>
  );
}
