import { useEffect } from 'react'
import _List from '../../components/template/_List'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/StoreProvider'
import { useRouter } from 'next/router'
import withHead from '../../hoc/withHead'

const list = observer(({ ...props }) => {
    const { productRefactoring } = useStore()
    const router = useRouter()

    useEffect(() => {
        const callList = async () => {
            await productRefactoring.callProductList(Number(props.page), Number(props.limit), props.category)
        }
        callList()
    }, [router])

    const onPaginationChange = (page, pageSize) => {
        router.push(`/refactoring/list?page=${page}&limit=4&category=${props.category}`)
    }

    const onCategoryChange = (value) => {
        console.log(value)
        router.push(`/refactoring/list?page=1&limit=4&category=${value}`)
    }

    return (
        <_List
            list={productRefactoring.list}
            page={Number(props.page)}
            pageSize={Number(props.limit)}
            category={props.category}
            onCategoryChange={onCategoryChange}
            totalCount={productRefactoring.totalCount}
            onPaginationChange={onPaginationChange} />
    )
})

export const getServerSideProps = (context) => {
    return {
        props: {
            page: context.query.page || 1,
            limit: context.query.limit || 4,
            category: context.query.category || 'all'
        }
    }
}

export default withHead(list)