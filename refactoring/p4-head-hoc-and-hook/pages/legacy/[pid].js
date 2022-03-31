import _Detail from '../../components/template/_Detail'
import { getProduct } from '../../libs/products'
import Head from 'next/head'

const detail = ({ ...props }) => {
  return (
    <>
      {/* 이렇게 그대로 넣어주는 방식의 문제점 */}
      {/* 상세페이지 종류가 여러 개이거나 */}
      {/* 상세페이지가 아닌 경우 */}
      {/* HEAD 를 그때 그때 모든 페이지에 들어가 바꾸어 주어야 함 */}
      {/* 이를 HOC를 통해 리팩토링 ㄱ ㄱ */}
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <title>{props.productInfo.title}</title>
        <meta name="description" content={props.productInfo.content} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={'리팩토링 예제'} />
        <meta property="og:title" content={props.productInfo.title} />
        <meta property="og:description" content={props.productInfo.content} />
        <meta property="og:image" content={props.productInfo.thumbnail} />
        <meta property="og:image:width" content={'1200'} />
        <meta property="og:image:height" content={'630'} />
      </Head>
      <_Detail productInfo={props.productInfo} />
    </>
  )
}

// seo 이득을 보기 위해 getServerSideProps에서 API 호출
// 서버사이드에서 상세페이지 문서를 작성하여 보냄
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
        productInfo: productInfo,
      },
    }
  }
}

export default detail
