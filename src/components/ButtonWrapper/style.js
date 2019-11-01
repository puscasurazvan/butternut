import styled from 'styled-components'

const Section = styled.div`
  width: 230px;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 0;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgb(230, 230, 230);
`

const Button = styled.button`
  border-radius: 10px;
  margin: 5px;
  border: none;
  height: fit-content;
  width: fit-content;
  margin-top: 10px;
  padding: 5px;
`

const Figure = styled.figure`
  position: relative;
`

const FigureCaption = styled.figcaption`
  position: absolute;
  font-size: 10px;
  top: 15px;
  left: 17px;
  color: rgb(29, 108, 147);
  font-weight: bold;
`

export const StyledButtonWrapper = {
  Section,
  Button,
  Figure,
  FigureCaption
}


