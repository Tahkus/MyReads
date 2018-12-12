import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './components/BookShelves.js'
import SearchBooks from './components/SearchBooks.js'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    query: ''
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        allBooks: state.allBooks.filter(b => b.id !== book.id).concat(book)
      }));
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then((response) => this.setState({ allBooks: response}))
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path='/search' render={() => (
            <SearchBooks 
              allBooks={this.state.allBooks} 
              newShelf={this.updateShelf}
            />
          )}/>

          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads Book Tracker</h1>
              </div>
              <BookShelves 
                allBooks={this.state.allBooks} 
                newShelf={this.updateShelf}
              />
              <Link className="open-search" to='/search'></Link>
            </div>
          )}/>

          <Route render={() => (
            <div>
              <h2>Oops! No match found for the URL entered.</h2>
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
