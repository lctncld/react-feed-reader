import React from 'react';
import { Link } from 'react-router-dom';

const FeedList = ({ feedList, onFeedClick }) => {
  const elements = feedList.map((name, index) =>
    <li key={index}>
      <Link to={`/feed/${name}`}>{name}</Link>
    </li>
  );
  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default FeedList;
