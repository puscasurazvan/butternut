import styled from 'styled-components'

const Section = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color:rgb(250, 250, 250);
  margin-top: 100px;
  margin-left: 100px;
  padding: 10px;
`

const Heading = styled.h1`
  color: rgb(29, 108, 147);
  font-size: 20px;
  padding: 0 5px;
  margin: 0 10px;
`
const SmallHeading = styled.h1`
  margin: 0 10px;
  padding: 0 5px;
  color: rgb(29, 108, 147);
  font-size: 16px;
  background-color: rgb(240, 240, 240);
  width: fit-content;
`

export const StyledWrapper = {
  Section,
  Heading,
  SmallHeading
}