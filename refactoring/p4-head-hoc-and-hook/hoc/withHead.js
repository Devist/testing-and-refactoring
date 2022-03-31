import Head from 'next/head'

const withHead = (Component) => {
  // 여기서의 props는 page 쪽 꺼
  const HeadComponent = (props) => {
    const title = props.productInfo ? props.productInfo.title : '리팩토링 헤더!'
    const desc = props.productInfo
      ? props.productInfo.content
      : '리팩토링 예제입니다.'
    const thumb = props.productInfo ? props.productInfo.thumbnail : ''

    console.log(props)
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
          />
          <title>{title}</title>
          <meta name="description" content={desc} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={'리팩토링 예제'} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={desc} />
          <meta property="og:image" content={thumb} />
          <meta property="og:image:width" content={'1200'} />
          <meta property="og:image:height" content={'630'} />
        </Head>
        <Component {...props} />
      </>
    )
  }

  return HeadComponent
}

export default withHead
