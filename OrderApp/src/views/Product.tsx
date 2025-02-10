import { ActionFunctionArgs, Link, redirect, useLoaderData } from "react-router-dom";
import { value } from "valibot";

export async function loader() {
  return {};
}



// export async function action({request} : ActionFunctionArgs) {
//   const data = Object.fromEntries(await request.formData())
//   let error='';
//   if(Object value(data)..id !== undefined) {
//       await deleteProduct(+params.id)
//       return redirect('/')
//   }
// }

export default function Products() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Órdenes</h2>
        <Link
          to="Order/new"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Agregar Orden
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Nombre Consumidor</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Fecha</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}

// function deleteProduct(arg0: number) {
//   throw new Error("Function not implemented.");
// }

