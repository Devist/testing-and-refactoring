import 'antd/dist/antd.css'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'mobx-react'
import RootStore from '../store'


const root = new RootStore()
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
      <Provider {...root}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
