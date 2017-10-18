import React from 'react';
import '../App.css';

function createMarkup(markup) {
  return { __html: markup };
}

function Post({ link, title, publishedAt, content }) {
  return (
    <section className="post">
      <h1>
        <a href={link}>{title}</a>
      </h1>
      <p>{publishedAt}</p>
      <div dangerouslySetInnerHTML={createMarkup(content)}></div>
    </section>
  )
}

export default Post;
