import SumIcon from '../../assets/plus.svg'
import { PaiContainer, CreateButton, FindContainer } from './searchstyle'
import { useRef, useState } from 'react'

export function Search({ setListaDeMarcadores, onTableChange }) {
  const [tabelas, setTabelas] = useState(0)
  let InputTarefa = useRef(null)

  const handleSubmit = () => {
    if (InputTarefa.current) {
     setTabelas(() => tabelas+1)

     console.log(tabelas)
      let NovaTarefa = {
       texto: `${InputTarefa.current.value}`,
       done: false,
      }
      
      if (InputTarefa.current.value.length > 0) {
        setListaDeMarcadores((prevState) => [...prevState, NovaTarefa])
        onTableChange(prevState => prevState + 1)
      }
    }
  }

  return (
    <>
      <PaiContainer>
        <FindContainer>
         <input type="text" placeholder='Adicione uma nova tarefa' ref={InputTarefa} />
        </FindContainer>
        <CreateButton onClick={handleSubmit}>Criar <img src={SumIcon} /></CreateButton>
      </PaiContainer>
    </>
  )
}

