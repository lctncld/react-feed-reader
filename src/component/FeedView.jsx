import React from 'react';
import Post from './Post';
import style from '../Style';
import { Container, Icon } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react'

const FeedViewNoMatch = ({ path }) => (
  <Message negative style={style.main}>
    <Message.Header>Looks like you shouldn't be here!</Message.Header>
    <p>at <code>{path}</code>!</p>
  </Message>
);

class FeedView extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { articles, isLoading } = this.props;
    if (isLoading) {
      return (
        <div style={style.main}>
        <Icon loading name='spinner' size='large' />
        </div>
      )
    }
    if (!articles || articles.length === 0) {
      return <FeedViewNoMatch path={this.props.match.params.name} />
    }
    const elements = articles.map((post, index) => <Post {...post} key={index} />);
    return <div style={style.main}>{elements}</div>;
  }
}

export default FeedView;
