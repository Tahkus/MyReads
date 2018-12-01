import React, { Component } from 'react'
import BookShelf from './BookShelf.js'


class BookShelves extends Component {

	render() {

		const allBooks = this.props.allBooks
		const currentBooks = allBooks.filter(book => book.shelf === 'currentlyReading')
		const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead')
		const alreadyRead = allBooks.filter(book => book.shelf === 'read')
		console.log('here', allBooks)
		return (
		    <div className="list-books-content">
	          <div>
	          	<BookShelf shelfTitle='Currently Reading' books={currentBooks} /> {/* currently reading */}
	          	<BookShelf shelfTitle='Want to Read' books={wantToRead} /> {/* want to read */}
	          	<BookShelf shelfTitle='Already Read' books={alreadyRead} /> {/* read */}	          	
	           </div>
	        </div>			
		)
	}
}

export default BookShelves