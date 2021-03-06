import React from 'react';

import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let transformedIngredients
  if (props.ingredients) {
    transformedIngredients = Object.keys(props.ingredients).map(igKey =>
      [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    ).reduce((arr, el) => (arr.concat(el)
    ), []);
  }
if (!transformedIngredients || transformedIngredients.length === 0 ) {
  transformedIngredients = <p>Please start adding ingredients!</p>
}
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
