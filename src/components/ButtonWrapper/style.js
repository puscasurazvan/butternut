import styled from 'styled-components'

export const Section = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 0;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgb(230, 230, 230);
`

export const Button = styled.button`
  border-radius: 10px;
  padding: 0 5px;
  margin: 0;
  border: none;
  height: fit-content;
  width: fit-content;
  margin-top: 10px;
  padding: 5px;
`

export const Figure = styled.figure`
  position: relative;
`

export const FigureCaption = styled.figcaption`
  position: absolute;
  font-size: 10px;
  top: 15px;
  left: 9px;
  color: rgb(29, 108, 147);
  font-weight: bold;
`


