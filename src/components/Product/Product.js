import React from 'react'
import PropType from 'prop-types'
import './Product.css'
import ActionButtons from '../ActionButtons/ActionsButtons'

const Product = ({ name, id, completed }) => {
  return (
    <div className="Product">
      <div className={`wrapper ${completed ? 'complete' : ''}`}>{name}</div>
      <div className="action-buttons-container">
        <ActionButtons productId={id} />
      </div>
    </div>
  )
}

Product.propTypes = {
  id: PropType.string.isRequired,
  completed: PropType.bool.isRequired,
  name: PropType.string.isRequired,
}

export default Product
