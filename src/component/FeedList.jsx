import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class FeedList extends React.Component {
  componentWillMount() {
    this.props.onMount();
  }

  render() {
    const { feedList } = this.props;
    const elements = feedList.map((name, index) =>
      <div className="sidebar__element" key={index}>
        <Link
          className="sidebar__element__link"
          to={`/feed/${name}`}
          onClick={() => this.props.onClick(name)}
        >{name}</Link>
      </div>
    );
    return (
      <div className="sidebar">{elements}</div>
    );
  }
}

export default FeedList;
