import {object, string,decimal ,number ,boolean } from 'valibot'

export const DraftOrderSchema=object({
    customerName: string(),
    totalAmount: number(),
    status: boolean(),
})