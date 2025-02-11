import axios from "axios";
import {  safeParse } from "valibot";
import { DraftOrderSchema, Order, ProductSchema, ProductSchemaMinimum, ProductsShema, } from "../types/index";

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

        const result = safeParse(ProductSchemaMinimum, {
            id: id,
            customerName: order.CustomerName,
            totalAmount: +order.TotalAmount
        })

        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/order`
            await axios.put(url, {
                'Order': {
                    Id: result.output.id,
                    CustomerName: result.output.customerName,
                    TotalAmount: result.output.totalAmount

                }
            });
        }

    } catch (error) {
        console.log(error)
    }
}