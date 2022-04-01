import { action, computed, observable, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import {
    getProductsList
} from '../../libs/products'

enableStaticRendering(typeof window === 'undefined')

export default class ProductStore {
    
    constructor() {
        makeObservable(this, {
            list: observable,
            totalCount: observable,
            callProductList: action
        })
    }

    list = []
    totalCount = 0
    callProductList = async (page, limit, category) => {
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