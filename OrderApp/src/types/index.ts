import {object, string ,number } from 'valibot'

export const DraftOrderSchema=object({
    CustomerName: string(),
    TotalAmount: number(),
})