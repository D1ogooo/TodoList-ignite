import RocketImage from './assets/rocket.svg'
import NoteImage from './assets/Clipboard.svg'
import RadioImage from './assets/radios vario 1.svg'
import LixeiraImage from './assets/lixeira.svg'
import { Search } from './components/search/searchcomponent'
import { TopContainer, Nova, Title, MainContainer, Tarefas, PaiContainer, Array } from './styles/AppStyle'
import { useState } from 'react'

function App() {
  const [listaDeMarcadores, setListaDeMarcadores] = useState([])

  return (
    <>
      <TopContainer>
        <Title>
         <img src={RocketImage} />
         <h1>to<span>do</span></h1>
        </Title>
        <Search setListaDeMarcadores={setListaDeMarcadores} />
      </TopContainer>

      <PaiContainer>
        {listaDeMarcadores.length ? (
          listaDeMarcadores.map((lista, index) => (
            <>
            <Tarefas>
              <h2>Tarefas criadas <span>0</span></h2>
              <h3>Concluídas <span>0</span> </h3>
            </Tarefas>
            <Array key={index}>
            <Nova>
              <img src={RadioImage} id="radio_img"/>
              <p>{lista.texto}</p>
              <img src={LixeiraImage} id="lixeira_img" />
            </Nova>
            </Array>
            </>
          ))
        ) : (
          <>
            <Tarefas>
              <h2>Tarefas criadas <span>0</span></h2>
              <h3>Concluídas <span>0</span> </h3>
            </Tarefas>
            <MainContainer>
              <img src={NoteImage} />
              <h1>Você ainda não tem tarefas cadastradas <br /><span>Crie tarefas e organize seus itens a fazer</span></h1>
            </MainContainer>
          </>
        )}
      </PaiContainer>
    </>
  )
}

export default App