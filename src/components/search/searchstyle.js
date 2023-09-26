import styled from 'styled-components'

export const PaiContainer = styled.div`
 display: flex;
 justify-content: center;
 gap: 0.5rem;
`

export const CreateButton = styled.button`
 display: flex;
 padding: 1rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 border-radius: 0.5rem;
 border: none;
 background-color: #1E6F9F;
 width: 5.625rem;
 cursor: pointer;

 color: #F2F2F2;
 font-family: Inter;
 font-size: 14px;
 font-style: normal;
 font-weight: 700;
 line-height: 140%;
`

export const FindContainer = styled.div`
 display: flex;
 border-radius: 8px;
 border: 1px solid #0D0D0D;
 background: #262626;
 padding: 16px;
 border-radius: 8px;
 border: 1px solid #0D0D0D;
 background: #262626;

 input {
  width: 39.875rem;
  border: none;
  height: 22px;
  background: #262529;
  font-size: 16px;
  color: #808080;
 }

 input::placeholder {
  color: #808080;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
 }
`
