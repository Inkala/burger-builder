import React from 'react';

import Burguer from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from'./CheckoutSummary.module.scss';

const CheckoutSummary = props => {
  const divStyles = {
    width: '100%',
    margin: 'auto'
  };

  return (
    
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your burger!</h1>
      <div style={divStyles}>
        <Burguer ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.checkoutContinued}>
        CONTUNUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
