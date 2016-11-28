import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import ShoppingList from './ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Shopping List</h2>
        </div>
        <Shopping List items={this.props.shoppingListItems} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {shoppingListItems: state.shoppingListItems}
}

const connector = connect(mapStateToProps);
const connectedComponent = connector(App);


export default connectedComponent;
