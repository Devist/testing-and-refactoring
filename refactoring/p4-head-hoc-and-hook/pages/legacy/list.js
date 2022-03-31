import { useEffect } from 'react'
import _List from '../../components/template/_List'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/StoreProvider'
import Head from 'next/head'

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
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <title>{'리팩토링 헤더!'}</title>
        <meta name="description" content={'리팩토링 예제입니다.'} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={'리팩토링 예제'} />
        <meta property="og:title" content={'리팩토링 헤더!'} />
        <meta property="og:description" content={'리팩토링 예제입니다.'} />
        <meta property="og:image" content={''} />
        <meta property="og:image:width" content={'1200'} />
        <meta property="og:image:height" content={'630'} />
      </Head>
      <_List
        list={productLegacy.list}
        page={productLegacy.page}
        pageSize={productLegacy.limit}
        category={productLegacy.category}
        onCategoryChange={onCategoryChange}
        totalCount={productLegacy.totalCount}
        onPaginationChange={onPaginationChange}
      />
    </>
  )
})

export default list
