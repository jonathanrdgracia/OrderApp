import axios from "axios";
import { date, number, safeParse, string } from "valibot";
import { DraftOrderSchema, Order, ProductSchema, ProductSchemaMinimum, ProductsShema, } from "../types/index";
import Product from "../views/Product";

type ProductData = {
    [k: string]: FormDataEntryValue;
}
export async function addProduct(data: ProductData) {

    const result = safeParse(DraftOrderSchema, {
        CustomerName: data.CustomerName,
        TotalAmount: +data.TotalAmount
    })

    if (result.success) {
        const url = `${import.meta.env.VITE_API_URL}/api/orders`

        const { data } = await axios.post(url, {
            'Order': {
                CustomerName: result.output.CustomerName,
                TotalAmount: result.output.TotalAmount
            }
        });
    } else {
        throw new Error('Datos no válidos')
    }
}
export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/orders`
        const { data } = await axios(url)

        const result = safeParse(ProductsShema, data)

        if (result.success) {
            return result.output
        } else {
            throw new Error('Hubo un error...')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getProductById(id: ProductData['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/order/${id}`
        const { data } = await axios(url)

        const result = safeParse(ProductSchema, data.order)

        if (result.success) {
            return result.output

        } else {
            throw new Error('Hubo un error...')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function updateOrder(order: ProductData, id: Order['id']) {

    try {
        console.log('ProductSchema',ProductSchema);
        
        const result = safeParse(ProductSchemaMinimum, {
            id: id,
            customerName: order.CustomerName,
            totalAmount: +order.TotalAmount
        })
        console.log('result',result);
        

        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/order/${id}`
            await axios.put(url, {
                'Order': {
                    CustomerName: result.output.customerName,
                    TotalAmount: result.output.customerName
                }
            });
        }

        // if (result.success) {
        //     return result.output

        // } else {
        //     throw new Error('Hubo un error...')
        // }
    } catch (error) {
        console.log(error)
    }



}