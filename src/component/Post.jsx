import React from 'react';

function Post({ link, title, publishedAt, content }) {
  return (
    <section>
      <h1>
        <a href={link}>{title}</a>
      </h1>
      <p>{publishedAt}</p>
      <p>{content}</p>
    </section>
  )
}

export default Post;