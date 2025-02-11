import { useNavigate, Form } from 'react-router-dom'
import { formatDate, Product } from "../types"
import { formatCurrency } from "../utils"
type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({product} : ProductDetailsProps) {
    const navigate = useNavigate()

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.customerName}
            </td>
            <td className="p-3 text-lg text-gray-800">
                { formatCurrency(product.totalAmount) }
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatDate(product.orderDate) }
            </td>
            <td className="p-3 text-lg text-gray-800">
                {product.status ? 'Ordern activa' : 'Orden inactiva' }
            </td>
            <td className="p-3 text-lg text-gray-800">
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                 <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`/order/${product.id}/edit`)}
                        className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                    >Editar</button>

                    <Form
                        className='w-full'
                        method='POST'
                        action={`order/${product.id}/delete`}
                        onSubmit={ (e) => {
                            if( !confirm('¿Eliminar?') ) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type='submit'
                            value='Eliminar'
                            className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
                        />
                    </Form>
                </div> 
            </td>
        </tr> 
    )
}
