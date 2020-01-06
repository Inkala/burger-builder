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
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
