import Head from 'next/head'

import Title from '../src/componetes/title/Title'
import Subtitle from '../src/componetes/subtitle/Subtitle'

function HomePage () {
  return(
    <div>
      <>
       <Head>
        <title>Titulo diferente da home page</title>
       </Head>
       <Title>Um titulo</Title>
       <Subtitle text = "Um Subtítulo"/>
       <Title>Outro titulo</Title>
       <Subtitle text = "Outro Subtítulo"/>
      </>
    </div>
  )
}

export default HomePage