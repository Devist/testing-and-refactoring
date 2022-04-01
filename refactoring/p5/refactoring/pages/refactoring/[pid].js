import _Detail from '../../components/template/_Detail'
import { getProduct } from '../../libs/products'
import withHead from '../../hoc/withHead'

const detail = ({ ...props }) => {

    return (
        <_Detail productInfo={props.productInfo} />
    )
}

export const getServerSideProps = async (context) => {
    let productInfo = null
    try {
        const pid = context.params.pid
        const result = await getProduct(pid)
        if (result.status === 200) {
            productInfo = result.data
        }
    } catch (err) {
    } finally {
        return {
            props: {
                productInfo: productInfo
            }
        }
    }
}

export default withHead(detail)