import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const TopContainer = styled.div`
 width: 100%;
 margin: 0 auto;
 height: 200px;
 flex-shrink: 0;
 background: #0D0D0D;
 position: fixed;
 top: 0;
`

export const Title = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 72px;
 margin-bottom: 53px;
 
 h1 {
 margin-left: 0.625rem;
 color: #4EA8DE;
 font-family: Inter;
 font-size: 50px;
 font-style: normal;
 font-weight: 900;
 line-height: normal; 
}

 img {
  width: 25px;
  height: 50px;
  flex-shrink: 0;
  margin-top: 10px;
 }

 span {
  color: #5E60CE;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
 }
`

export const MainContainer = styled.div`
 display: flex;
 justify-content: center;
 padding-top: 2.5rem;
 border-radius: 0.5rem;
 border-top: 1px solid #333;
 width: 48rem;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 img {
  width: 4.375rem;
  height: 5.3125rem;
  margin: 0 auto;
 }

 h1 {
  color: #808080;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  span {
   color: var(--Gray-300, #808080);
   font-family: Inter;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
  }
 }

`

export const PaiContainer = styled.div`
 
`

export const Tarefas = styled.div`
  display: flex;
  justify-content: center;
  gap: 33.5rem;
  margin-bottom: 1.5rem;
  margin-top: 20rem;
 
  h2 {
   color: #4EA8DE;
   font-family: Inter;
   font-size: 0.85rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
    span {
     color: #D9D9D9;
     background-color: #333;
     padding: 2px 8px;
     border-radius: 999px;
    }
  }
 
  h3 {
   color: #8284FA;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   span {
     color: #D9D9D9;
     background-color: #333;
     padding: 2px 8px;
     border-radius: 999px;
    }
  }
 `

export const Array = styled.div`
 /* margin-top: 20rem; */
 align-items: start;
 margin: 0 auto;
 margin-top: 1rem;
 width: 764px;
 height: 72px;
 border-radius: 8px;
 border: 1px solid var(--Gray-400, #333);
 background: var(--Gray-500, #262626);
 box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

 #lixeira_img {
 width: 24px;
 height: 24px;
 cursor: pointer;
 text-align: left;
 }

 #Radio_img{
  width: 24px;
  height: 24px;
  cursor: pointer;
 }
`

export const Nova = styled.div`
 display: flex; 
 align-items: center;
 justify-content: space-between;
 margin: 16px;

 p {
  margin-left: 30px;
  color: #F2F2F2;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
 }

 .checked {
  text-decoration: line-through;
 }
`