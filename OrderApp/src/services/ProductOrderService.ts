import axios from "axios";
import { date, number, safeParse, string } from "valibot";
import { DraftOrderSchema } from "../types/index";


    type ProductData = {
        [k: string]: FormDataEntryValue;
    }

export async function addProduct(data : ProductData) {
   
        //totalAmount: parseFloat(String(data.totalAmount)),

        const result = safeParse(DraftOrderSchema, {
            CustomerName: data.CustomerName,
            TotalAmount: +data.TotalAmount
        })
        // const result = safeParse(DraftOrderSchema, parsedData);
        
        console.log(result);
        if(result.success) {
        const url = `${import.meta.env.VITE_API_URL}/api/orders`
              const { data } =  await axios.post(url, {
                'Order': {
                    CustomerName: result.output.CustomerName,
                    TotalAmount: result.output.TotalAmount
                }
                });
        
              console.log(url);
        }
        // } else {
        //     throw new Error('Datos no válidos')
        // }
    
}
