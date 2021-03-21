import React from 'react'
import PropType from 'prop-types'
import './Product.css'
import ActionButtons from '../ActionButtons/ActionsButtons'

const Product = ({ name, id }) => {
  return (
    <div className="Product">
      <div className="wrapper">{name}</div>
      <div className="action-buttons-container">
        <ActionButtons productId={id} />
      </div>
    </div>
  )
}

Product.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
}

export default Product
