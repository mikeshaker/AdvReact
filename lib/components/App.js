import React from 'react';
import axios from 'axios';

import DataApi from '../DataApi.js';
import ArticleList from './ArticleList';

class App extends React.Component {
 state = {
   articles: this.props.initialData.articles,
   authors: this.props.initialData.authors
 }
 async componentDidMount() {
   //fetch the data
   const resp = await axios.get('/data');
   const api = new DataApi(resp.data);

   this.setState (() => ({
     articles: api.getArticles(),
     authors: api.getAuthors(),
   }));
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
