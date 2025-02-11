import { number, string, InferInput, object, array } from "valibot"


export const DraftOrderSchema = object({
    CustomerName: string(),
    TotalAmount: number(),
})

export const ProductSchema = object({
    id: number(),
    customerName: string(),
    totalAmount: number(),
    status: number(),
    orderDate: string()
})

export const ProductSchemaMinimum = object({
    id: number(),
    customerName: string(),
    totalAmount: number(),
})


export function toBoolean(n: number) {
    n === 0 ? true : false
}

export function formatDate(str: string) {
    const date = new Date(str);
   

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });
   
}

export const ProductsShema = array(ProductSchema)
export type Order = InferInput<typeof ProductSchema>