import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book.js'


class SearchBooks extends Component {

	state: {
		shownBooks: [],
		query: ''
	}

  	updateQuery = (query) => {
  		this.setState({ query: query.trim() })

  		if (query !== null || query !== 'undefined') {
  			this.bookSearch(query)
  		} else {
  			return this.setState({ shownBooks: []})
  		}
  	}

	bookSearch = (query) => {
		if (query) {
			BooksAPI.search(query)
			.then((response) => this.setState({ shownBooks: response }))
			.catch((error) => {
				console.log('Sorry, there are no books that match your search.')
			})
		} else {
			this.setState({ shownBooks: []})
		}
	}

	render() {

		return (
			<div className="search-books">
	          <div className="search-books-bar">
	            <button className="close-search" onClick={() => this.props.showSearchPage(false)}>Close</button>
	            <div className="search-books-input-wrapper">
	              <input 
	              	type="text" 
	              	placeholder="Search by title or author" 	            
	              	onChange={(event) => this.updateQuery(event.target.value)}
	              />
	            </div>
	          </div>
	          <div className="search-books-results">         
	            <ol className="books-grid">
	                {this.state.shownBooks.map(book => 
	                	<Book key={book.id} newShelf={this.props.newShelf} book={book}/>
	                )}
	            </ol>	            
	          </div>
	        </div>
		)  
	} 
}


export default SearchBooks