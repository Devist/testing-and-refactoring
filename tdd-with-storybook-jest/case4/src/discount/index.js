import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function Discount(props) {
  const { orderAmount = 0, userPoint = 0, coupons = {}, callback } = props;

  const [usePoint, setUsePoint] = React.useState(0);
  const [useCoupon, setUseCoupon] = React.useState("");

  const onChangePoint = (evt) => {
    const value = Number(evt.target.value);
    if (value <= userPoint && value <= orderAmount) {
      if (value > -1) {
        setUsePoint(value);
      }
    }
  };

  const onChangeCoupon = (evt) => {
    setUseCoupon(evt.target.value);
  };

  const discountRatio = (useCoupon && coupons && coupons[useCoupon].discount) || 0;
  const discountAmount = usePoint + orderAmount * discountRatio;

  React.useEffect(() => {
    if (callback) {
      callback(discountAmount);
    }
  }, [callback, discountAmount]);

  return (
    <div className='discount-container'>
      <p> 할인 </p>

      <div className='property-container'>
        <p> 주문금액 </p>
        <p id='order-amount'> {orderAmount} </p>
      </div>

      <div className='property-container'>
        <p> {`사용가능 포인트(${userPoint}원)`} </p>
        <input id='user-point' type='number' value={usePoint} onChange={onChangePoint} />
      </div>

      <div className='property-container'>
        <p> 쿠폰 </p>
        <select id='select-coupon' value={useCoupon} onChange={onChangeCoupon}>
          <option value={""}> 쿠폰선택 </option>
          {Object.keys(coupons).map((key) => {
            return (
              <option key={key} value={key}>
                {" "}
                {coupons[key].name}
              </option>
            );
          })}
        </select>
      </div>

      <div className='property-container'>
        <p> 할인금액 </p>
        <p id='discount-amount'> {discountAmount} </p>
      </div>
    </div>
  );
}

Discount.propTypes = {
  orderAmount: PropTypes.number,
  userPoint: PropTypes.number,
  callback: PropTypes.func,
};

export default Discount;
