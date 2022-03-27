import React from 'react'
import PropTypes from 'prop-types'

import { Image } from '../image/Image'

import '../styles/root.css'

function Root(props) {
  const { name, image, price, description, seller } = props

  const [quantity, setQuantity] = React.useState(0)
  const [payment, setPayment] = React.useState(0)
  const [purchaseAgree, setPurchaseAgree] = React.useState(false)

  const onChangeQuantity = (evt) => {
    const quantity = Number(evt.target.value)
    if (quantity > -1) {
      setQuantity(quantity)
      setPayment(quantity * price)
    }
  }

  const onChangePurchaseAgree = (evt) => {
    setPurchaseAgree(evt.target.checked)
  }

  return (
    <div className="root-container">
      <div className="product-container">
        <div className="name-container">
          <span> {name} </span>
        </div>

        {/* <div className="image-container"> */}
        <Image image={image} />
        {/* <img src={image} alt={image} /> */}
        {/* </div> */}

        <div className="info-container">
          <div className="price-container">
            <span>제품가격</span>
            <span>{price}</span>
          </div>

          <div className="description-container">
            <span> 제품설명 </span>
            {description}
          </div>
        </div>
      </div>

      <div className="seller-container">
        <span>판매자</span>
        <span> {seller} </span>
      </div>

      <div className="quantity-container">
        <span> 수량 </span>
        <input
          data-testid="quantity"
          type="number"
          value={quantity}
          onChange={onChangeQuantity}
        />
      </div>

      <div className="payment-container">
        <span> 결제금액 </span>
        <span> {payment} </span>
      </div>

      <div className="agree-container">
        <input
          data-testid="agree"
          type="checkbox"
          value={purchaseAgree}
          onChange={onChangePurchaseAgree}
        />
        구매 동의
      </div>

      <div className="button-container">
        <button
          data-testid="purchase"
          disabled={quantity < 1 || !purchaseAgree}
        >
          {' '}
          구매하기{' '}
        </button>
        <button data-testid="cart" disabled={quantity < 1}>
          {' '}
          장바구니 담기{' '}
        </button>
      </div>
    </div>
  )
}

Root.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  seller: PropTypes.string.isRequired,
}

export default Root
