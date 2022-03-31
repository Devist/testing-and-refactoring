import ProductStoreLegacy from './legacy/ProductStore'
import ProductStoreRefactoring from './refactoring/ProductStore'
class RootStore {
  constructor() {
    this.productLegacy = new ProductStoreLegacy(this)
    this.productRefactoring = new ProductStoreRefactoring(this)
  }
}

export default RootStore
