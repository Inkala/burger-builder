import React from 'react';

import shortid from 'shortid';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={shortid.generate()}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}: </span>
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checjout?</p>
      <p><strong>Total price: ${props.price.toFixed(2)}</strong> </p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
