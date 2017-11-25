import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  body, html {
    height: 100%;
    font-family: 'fondamento-regular', Arial;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
  }

  @font-face {
    font-family: 'fondamento-regular';
    src: url('../static/Fondamento-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'fondamento-italic';
    src: url('../static/Fondamento-Italic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'tempura';
    src: url('../static/gothic.ttf') format('truetype');
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
