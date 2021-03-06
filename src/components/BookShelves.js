import React, { Component } from 'react'
import BookShelf from './BookShelf.js'


class BookShelves extends Component {

	render() {

		const allBooks = this.props.allBooks
		const currentBooks = allBooks.filter(book => book.shelf === 'currentlyReading')
		const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead')
		const alreadyRead = allBooks.filter(book => book.shelf === 'read')
		return (
		    <div className="list-books-content">
	          <div>
	          	<BookShelf shelfTitle='Currently Reading' books={currentBooks} newShelf={this.props.newShelf} /> {/* currently reading */}
	          	<BookShelf shelfTitle='Want to Read' books={wantToRead} newShelf={this.props.newShelf} /> {/* want to read */}
	          	<BookShelf shelfTitle='Already Read' books={alreadyRead} newShelf={this.props.newShelf} /> {/* read */}	          	
	           </div>
	        </div>			
		)
	}
}

export default BookShelves