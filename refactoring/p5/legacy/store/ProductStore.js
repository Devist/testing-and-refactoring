import { action, observable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import {
    getProductsList
} from '../libs/products'


export default class ProductStore {

    @observable list = []
    @observable totalCount = 0

    @action 
    async callProductList(page, limit, category) {
        try {
            
            const params = {
                page: page,
                limit: limit,
                category: category
            }
            
            const result = await getProductsList(params)
            
            if (result.status === 200) {
                this.list = result.data.rows
                this.totalCount = result.data.total
            }
        } catch (err) {
            
        }
    }

    
}