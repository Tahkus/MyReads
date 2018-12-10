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

 		if (query.length > 0) {
  			this.bookSearch(query)
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
					response.forEach(b => {
						let Book = this.props.allBooks.filter(book => book.id === b.id)
						if (Book[0]) {
							b.shelf = Book[0].shelf
						} else {
							b.shelf = 'none'
						}
					})
					return this.setState({ shownBooks: response })
			})
			.catch(error => {
				console.log('Sorry, no results')
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