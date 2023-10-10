import SumIcon from '../../assets/plus.svg'
import { PaiContainer, CreateButton, FindContainer } from './searchstyle'
import { useRef } from 'react'

export function Search({ setListaDeMarcadores }) {
  let InputTarefa = useRef(null)

  const handleSubmit = () => {
    if (InputTarefa.current) {

      let NovaTarefa = {
       texto: `${InputTarefa.current.value}`,
       done: false,
      }

      setListaDeMarcadores((prevState) => [...prevState, NovaTarefa])
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

