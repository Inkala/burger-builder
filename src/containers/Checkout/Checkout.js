import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    const { ings, price } = this.props;
    const { url } = this.props.match;
    return (
      <div>
        <CheckoutSummary
          ingredients={ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route path={`${url}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingrediends,
    price: state.totalPrice
  };
};

export default connect(mapStateToProps)(Checkout);
