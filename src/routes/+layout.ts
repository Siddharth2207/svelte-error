import type { LayoutLoad } from './$types';
import { getOrders } from '@rainlanguage/orderbook/js_api' ;

export const load: LayoutLoad = async ({ fetch, url, params }) => {
    const orders = await getOrders(
        [
            {
                name: "bsc",
                url: "https://api.goldsky.com/api/public/project_clv14x04y9kzi01saerx7bxpg/subgraphs/ob4-bsc/2024-12-13-2244/gn",
            }
        ],
        {
            owners: []
        },
        {
            page: 1,
            pageSize: 1000
        }
    )
    console.log("orders : ", orders)
    return {
        orders
    }
}