import React, { Component } from 'react';

import './styles.scss';

export default class AddItemForm extends Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => this.setState({ label: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItemHandler(this.state.label);
    this.setState({ label: '' });
  }

  render() {
    return (
      <form className="d-flex add-item-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control mt-3"
          onChange={this.onLabelChange}
          value={this.state.label}
          placeholder="What needs to be done?"
        />
        <button className="btn btn-outline-secondary text-nowrap ml-2 mt-3">Add Item</button>
      </form>
    );
  }
};