import ProductStore from './ProductStore'

class RootStore {

    constructor() {
        this.product = new ProductStore(this)
    }
}

export default RootStore