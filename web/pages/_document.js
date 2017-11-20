import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  body, html {
    height: 100%;
    font-family: 'Bookman Old Style', Arial, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
  }

  /* hacky workaround for stupid next.js wrapper divs */
  body > div:first-child,
  #__next,
  #__next > div {
    height: 100%;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Basho</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
