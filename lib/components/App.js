import React from 'react';
import DataApi from '../DataApi.js';
import { data } from '../testData.json';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),

    };
  }
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
