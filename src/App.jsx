import RocketImage from './assets/rocket.svg'
import NoteImage from './assets/Clipboard.svg'
import LixeiraImage from './assets/lixeira.svg'
import { Search } from './components/search/searchcomponent'
import { TopContainer, Nova, Title, MainContainer, Tarefas, PaiContainer, Array } from './styles/AppStyle'
import { useState } from 'react'
import RadioImage from './components/RadioImage'

function App() {
  const [itens, setItens] = useState([])
  const [radio, setRadio] = useState(false)
  const [listaDeMarcadores, setListaDeMarcadores] = useState([])
  const [table, setTable] = useState(0)
  const handleTable = (prevState) => {
    setTable(prevState)
  }

  const handleCheckboxChange = (index, value) => {
    const updatedListaDeMarcadores = [...listaDeMarcadores];
    updatedListaDeMarcadores[index].done = value;
    setListaDeMarcadores(updatedListaDeMarcadores);
  }
  
  const handleDelete = (index) => {
    const updateItens = [...listaDeMarcadores]
    updateItens.splice(index,1)
    setListaDeMarcadores(updateItens)
  }

  const countDone = listaDeMarcadores.filter(item => item.done).length

  return (
    <>
      <TopContainer>
        <Title>
          <img src={RocketImage} />
          <h1>to<span>do</span></h1>
        </Title>
        <Search setListaDeMarcadores={setListaDeMarcadores} onTableChange={handleTable}/>
      </TopContainer>

      <PaiContainer>
        <Tarefas>
          <h2>Tarefas criadas <span>{listaDeMarcadores.length}</span></h2>
          <h3>Concluídas <span>{countDone} de {listaDeMarcadores.length}</span> </h3>
        </Tarefas>
        {listaDeMarcadores.length ? (
          listaDeMarcadores.map((lista, index) => (
            <>
              <Array key={index}>
                <Nova>
                  <RadioImage radio={lista.done} setRadio={(value) => handleCheckboxChange(index,value)}/>
                  <p className={lista.done? 'checked' : ''}>{lista.texto}</p>
                  <img src={LixeiraImage} id="lixeira_img" onClick={() => handleDelete(index)}/>
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