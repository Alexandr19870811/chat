import apiClient from "src/config/apiClient";
import {TradeStore} from 'src/reducer/trades/Model'

export const getAllTrades = async ():Promise<TradeStore> => {
    const response = await apiClient.get('/api/trades')
    return response.data[0]
}