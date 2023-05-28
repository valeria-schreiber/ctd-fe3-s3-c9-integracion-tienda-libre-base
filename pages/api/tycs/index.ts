import { NextApiRequest, NextApiResponse } from "next"
import { TyCsAPIResponse } from "../../../types"
import { tycs } from "../db"


interface Message {
    message: string
}
type DataResponse = TyCsAPIResponse | Message



export default function handlers(req:NextApiRequest, res: NextApiResponse<DataResponse> ){
    res.status(200).json(tycs)
}