import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin-top: 15px;
`

const CancelButton = styled.button`
  color: grey;
  font-weight: bold;
  font-size: 20px,
  display: flex;
  font-weight: bold;
  padding: 15px;
  border:none;
`

const ConfirmButton = styled.button`
  padding: 15px;
  border: 1px solid rgb(230, 108, 85);
  font-size: 20px,
  font-weight: bold;
  color: rgb(230, 108, 85);
  margin: 0;
  box-shadow: 5px 5px 5px 2px rgb(220, 220, 220);
`

export const StyledDatePicker = {
  ButtonWrapper,
  CancelButton,
  ConfirmButton
}
