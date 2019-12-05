import React from 'react';

import shortid from 'shortid';
import classes from './OrderSummary.module.scss';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={shortid.generate()}>
      <span>{igKey}</span> {props.ingredients[igKey]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
    </React.Fragment>
  );
};

export default OrderSummary;
