import {useState} from 'react'  // useState é usado para mostrar uma variavel para o usuário
import Head from 'next/head'

import Title from '../src/componetes/title/Title'
import Subtitle from '../src/componetes/subtitle/Subtitle'
import Button from '../src/componetes/button/Button'

function HomePage () {
  const [click, setClick] = useState(0)
  const handleClick = () => {
    console.log('= quantidade de clicks')
    setClick(click + 1)
  }

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
       <Button onClick={handleClick}>Botão teste</Button>
       <p>Cliques: {click}</p>
      </>
    </div>
  )
}

export default HomePage