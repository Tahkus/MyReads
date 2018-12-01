import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './components/BookShelves.js'
import SearchBooks from './components/SearchBooks.js'
import SearchButton from './components/SearchButton.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks: []
  }

  updateSearchState = (pageState) => {
    this.setState({ showSearchPage: pageState })
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => this.setState({ allBooks: response}))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks showSearchPage={this.updateSearchState}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <BookShelves allBooks={this.state.allBooks}/>

            <SearchButton showSearchPage={this.updateSearchState}/>
            
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
