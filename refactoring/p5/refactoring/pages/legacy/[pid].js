import _Detail from '../../components/template/_Detail'
import { getProduct } from '../../libs/products'
import Head from 'next/head'

const detail = ({ ...props }) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
                <title>{props.productInfo.title}</title>
                <meta name="description" content={props.productInfo.content} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={"패스트캠퍼스 리팩토링 예제"} />
                <meta property="og:title" content={props.productInfo.title} />
                <meta
                    property="og:description"
                    content={props.productInfo.content}
                />
                <meta property="og:image" content={props.productInfo.thumbnail} />
                <meta property="og:image:width" content={'1200'} />
                <meta property="og:image:height" content={'630'} />
            </Head>
            <_Detail productInfo={props.productInfo} />
        </>
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

export default detail