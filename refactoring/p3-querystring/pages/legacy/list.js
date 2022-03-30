import { useEffect } from 'react'
import _List from '../../components/template/_List'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/StoreProvider'

const list = observer(() => {
    const { productLegacy } = useStore()

    useEffect(() => {
        const callList = async () => {
            await productLegacy.callProductList()
        }
        callList()
    }, [productLegacy.page, productLegacy.category])

    const onPaginationChange = (page, pageSize) => {
        productLegacy.setPage(page)
    }

    const onCategoryChange = (value) => {
        productLegacy.setCategory(value)
    }

    return (
        <_List
            list={productLegacy.list}
            page={productLegacy.page}
            pageSize={productLegacy.limit}
            category={productLegacy.category}
            onCategoryChange={onCategoryChange}
            totalCount={productLegacy.totalCount}
            onPaginationChange={onPaginationChange} />
    )
})

export default list