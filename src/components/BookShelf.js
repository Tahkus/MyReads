import React, { Component } from 'react'
import Book from './Book.js'

class BookShelf extends Component {

	render() {

		return (
			<div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map(book => 
                	<Book key={book.id} newShelf={this.props.newShelf} book={book}/>
                )}
                </ol>
              </div>
            </div>
		);
	}
}

export default BookShelf