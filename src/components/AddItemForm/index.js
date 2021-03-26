import React, { Component } from 'react';

import './styles.scss';

export default class AddItemForm extends Component {

  render() {
    const { addItemHandler } = this.props;
    return (
      <div className="add-item-form">
        <button onClick={() => addItemHandler('Have a lunch')} className="btn btn-outline-secondary mt-3">Add Item</button>
      </div>
    );
  }
};