import Radio_Image from '../../assets/radios vario 1.svg'
import RadioImageChecked from '../../assets/radios cheio 2.svg'
import { ImageCustom } from './RadioStyle'
import { useState } from 'react'

function RadioImage({ setRadio, radio }) {

 function changeIcon () {
  setRadio(!radio)
 }

 return (
  <>
   <ImageCustom>
    <img src={radio ? RadioImageChecked : Radio_Image} onClick={changeIcon}/>
   </ImageCustom>
  </>
  )
}

export default RadioImage