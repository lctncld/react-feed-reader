import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../component/MenuItem';

const mapState = (state, ownProps) => {
  const articles = state.articles[ownProps.name];
  return {
    count: articles ? articles.length : 0,
  }
}

const MenuItemContainer = connect(mapState)(MenuItem);
export default MenuItemContainer;
