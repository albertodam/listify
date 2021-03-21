import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MyButtonStyled = styled.button`
  background-color: #7ce7d7;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
`

const MyButton = memo(({ isDisabled }) => {
  return <MyButtonStyled disabled={isDisabled}>+ Añadir producto</MyButtonStyled>
})

MyButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
}
MyButton.displayName = 'MyButtonDisplay'
export default MyButton
