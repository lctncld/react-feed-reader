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
    if (!this.props.articles || this.props.articles.length === 0) {
      return <FeedViewNoMatch path={this.props.match.params.name} />
    }
    const elements = this.props.articles.map((post, index) => <Post {...post} key={index} />);
    return <div>{elements}</div>;
  }
}

export default FeedView;
