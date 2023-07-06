import Head from 'next/head'

import '../src/SiteStyle.css'

function App ({ Component, pageProps}) {
  return (
    <>
     <Head>
      <title>Titulo padrão</title>
     </Head>
     <Component {...pageProps}/>
    </>
  )
}

export default App