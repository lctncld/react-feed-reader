import React from 'react';
import '../App.css';
import { Container } from 'semantic-ui-react';

function createMarkup(markup) {
  return { __html: markup };
}

function Post({ link, title, publishedAt, content }) {
  return (
    <Container text>
      <h1>
        <a href={link}>{title}</a>
      </h1>
      <p>{publishedAt}</p>
      <div dangerouslySetInnerHTML={createMarkup(content)}></div>
    </Container>
  )
}

export default Post;
