import Header from '../src/componetes/header/Header'
import Title from '../src/componetes/title/Title'
import Subtitle from '../src/componetes/subtitle/Subtitle'

function OutroExemploPage (){
  return(
    <>
     <Header image='https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'>
       <Title>Outro Café Dev</Title>
          <Subtitle text="O melhor café para o programador"/>
     </Header>
    </>
  )
}

export default OutroExemploPage