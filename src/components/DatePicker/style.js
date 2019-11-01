import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin-top: 20px;
`

const CancelButton = styled.button`
  color: grey;
  font-weight: bold;
  font-size: 20px,
  margin: 0;
  height: 30px;
  display: flex;
  border: none;
  font-weight: bold;
  width: 95px;
`

const ConfirmButton = styled.button`
  border: none;
  display: flex;
  height: 30px;
  font-size: 20px,
  font-weight: bold;
  color: rgb(230, 108, 85);
  margin: 0;
`

export const StyledDatePicker = {
  ButtonWrapper,
  CancelButton,
  ConfirmButton
}
