import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Label, Menu } from 'semantic-ui-react'
import style from '../Style';
import MenuItem from './MenuItem';
import MenuItemContainer from '../container/MenuItemContainer';

class FeedList extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { feedList } = this.props;
    const elements = feedList.map((name, index) =>
      <Link to={`/feed/${name}`} onClick={() => this.props.onClick(name)} key={index}>
        <MenuItemContainer name={name} selected={this.props.selected === name} />
      </Link>
    );
    return (
      <Menu vertical fixed='left' style={style.menu}>{elements}</Menu>
    );
  }
}

export default FeedList;
