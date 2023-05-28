import { NextApiRequest, NextApiResponse } from "next"
import { products } from "../db"

import { ProductsAPIResponse } from "../../../types"


interface Message {
    message: string
}

type DataResponse = ProductsAPIResponse | Message
export default function handlers(req: NextApiRequest, res: NextApiResponse<DataResponse>){
    res.status(200).json(products)


}