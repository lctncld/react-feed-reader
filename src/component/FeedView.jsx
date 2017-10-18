import React from 'react';
import Post from './Post';

const FeedViewNoMatch = ({ path }) => (
  <div>
    <p>Nothing interesting here at <code>{path}</code>!</p>
  </div>
);

class FeedView extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const articles = this.props.articles;
    if (!articles || articles.length === 0) {
      return <FeedViewNoMatch path={this.props.match.params.name} />
    }
    const elements = articles.map((post, index) => <Post {...post} key={index} />);
    return <div>{elements}</div>;
  }
}

export default FeedView;
