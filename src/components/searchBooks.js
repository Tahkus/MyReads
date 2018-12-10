import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book.js'


class SearchBooks extends Component {

	state = {
		shownBooks: [],
		query: ''
	}

  	updateQuery = (query) => {
  		this.setState({ query: query.trim() })
  		this.search()
  	}

  	search() {
  	 	if (this.state.query.length > 0) {
  			this.bookSearch(this.state.query)
  		} else {
  			return this.setState({ shownBooks: []})
  		}
  	}

	bookSearch(query) {
		if (this.state.query === '') {
			return this.setState({ shownBooks:[] })
		} else {
			BooksAPI.search(query)
			.then(response => {
					response.map(b => {
						let Book = this.props.allBooks.filter(book => book.id === b.id)
						if (Book[0]) {
							return b.shelf = Book[0].shelf
						} else {
							return b.shelf = 'none'
						}
					})
					return this.setState({ shownBooks: response })
			})
			.catch(error => {
				return this.setState({ shownBooks: []})
			})
		}
	}

	render() {

		return (
			<div className="search-books">
	          <div className="search-books-bar">
	            <Link className="close-search" to="/">Close</Link>
	            <div className="search-books-input-wrapper">
	              <input 
	              	type="text" 
	              	placeholder="Search by title or author"
	              	value={this.state.query} 	            
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