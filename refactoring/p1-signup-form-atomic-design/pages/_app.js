import 'antd/dist/antd.css'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  p {
    
    margin: 0;
    font-size: 14px;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
