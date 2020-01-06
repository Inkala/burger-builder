import React from 'react'

import classes from './Order.module.scss';

const Order = (props) => {  
  const ingredients = [];

  for (let ingredient in props.ingredients) {
    ingredients.push({name: ingredient, amount: props.ingredients[ingredient]})
  }

  const ingredientOutput = ingredients.map(ig => (
    <span key={ig.name} className={classes.OrderIngredients}>{ig.name} ({ig.amount})</span>
  ));

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
  )
}

export default Order
