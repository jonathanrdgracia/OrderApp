import { Link,} from 'react-router-dom'

export default function Products() {
  return (
    <>
        <div className='flex justify-between'>
            <h2 className='text-4xl font-black text-slate-500'>Órdenes</h2>
            <Link
                to="productos/nuevo"
                className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
            >
                Agregar nueva orden
            </Link>
        </div>
        <div className="p-2">
            <table className="w-full mt-5 table-auto">
                <thead className="bg-slate-800 text-white">
                    <tr>
                        <th className="p-2">Nombre del Consumidor</th>
                        <th className="p-2">Cantidad Total</th>
                        <th className="p-2">Disponibilidad</th>
                        <th className="p-2">Fecha</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </>
  )
}
