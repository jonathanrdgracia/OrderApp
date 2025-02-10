import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";

export async function loader() {
  return {};
}

// export async function action({request} : ActionFunctionArgs) {
//     const data = Object.fromEntries(await request.formData())
//     await updateProductAvailability(+data.id)
//     return {}
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
