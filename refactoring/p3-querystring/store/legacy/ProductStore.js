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
            page: observable,
            limit: observable,
            totalCount: observable,
            category: observable,
            callProductList: action,
            setPage: action,
            setCategory: action
        })
    }

    list = []
    page = 1
    limit = 4
    totalCount = 0
    category = 'all'
    callProductList = async () => {
        try {
            const params = {
                page: this.page,
                limit: this.limit,
                category: this.category
            }

            const result = await getProductsList(params)
            
            if (result.status === 200) {
                this.list = result.data.rows
                this.totalCount = result.data.total
            }
        } catch (err) {
            
        }
    }

    setPage = (page) => {
        this.page = page
    }

    setCategory = (category) => {
        this.category = category
    }

    
}