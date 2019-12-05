import React from 'react';
import shortid from 'shortid';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.scss';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <section className={classes.BuildControls}>
    <p>Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={shortid.generate()}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
  </section>
);

export default BuildControls;