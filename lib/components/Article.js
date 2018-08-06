import React from 'react';

const Article = (props) => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);
  return (
    <div>
      <h2> {article.title}</h2>
      <div> {article.date}</div>
      <a href={author.website}> {author.firstName} {author.lastName}</a>
      <div> {article.title}</div>
      <div> {article.body}</div>
    </div>
  );
};

export default Article;
