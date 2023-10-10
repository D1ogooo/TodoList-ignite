import RocketImage from './assets/rocket.svg'
import NoteImage from './assets/Clipboard.svg'
import LixeiraImage from './assets/lixeira.svg'
import { Search } from './components/search/searchcomponent'
import { TopContainer, Nova, Title, MainContainer, Tarefas, PaiContainer, Array } from './styles/AppStyle'
import { useState } from 'react'
import RadioImage from './components/RadioImage'

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

        <Tarefas>
          <h2>Tarefas criadas <span>0</span></h2>
          <h3>Concluídas <span>0</span> </h3>
        </Tarefas>
        {listaDeMarcadores.length ? (
          listaDeMarcadores.map((lista, index) => (
            <>
              <Array key={index}>
                <Nova>
                  <RadioImage />
                  <p>{lista.texto}</p>
                  <img src={LixeiraImage} id="lixeira_img" />
                </Nova>
              </Array>
            </>
          ))
        ) : (
          <>
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