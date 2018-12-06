import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';


class SearchBooks extends Component {

	state: {
		books: [],
		query: ''
	}

  	componentDidMount() {
    	BooksAPI.getAll().then((response) => this.setState({ books: response}))
  	}

  	updateQuery = (query) => {
  		this.setState({ query: query.trim() })
  	}

  	bookSearch() {
  		let q = this.state.query

  		if (q === '') {
  			this.setState({ books: []})
  		} else {
  			let response = BooksAPI.search(q)
			if (response.length > 0) {
				this.setState({ books: response})
			} else {
				this.setState({ books: []})
			}
  		}
  	}

	render() {
{/*
		const { books } = this.state
		let bookResults = books
*/}
		return (
			<div className="search-books">
	          <div className="search-books-bar">
	            <button className="close-search" onClick={() => this.props.showSearchPage(false)}>Close</button>
	            <div className="search-books-input-wrapper">
	              {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	              */}
	              <input 
	              	type="text" 
	              	placeholder="Search by title or author" 
	              	onChange={(event) => this.updateQuery(event.target.value)}
	              />
	            </div>
	          </div>
	          <div className="search-books-results">
	            <ol className="books-grid">
{/*	          
					{bookResults.map(book => (
	                	<li key={book.id}>
	                    <div className="book">
	                      <div className="book-top">
	                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
	                        <div className="book-shelf-changer">
	                          <select defaultValue={book.shelf} onChange={(e) => (this.props.newShelf(book, e.target.value))}>
	                            <option value="move" disabled>Move to...</option>
	                            <option value="currentlyReading">Currently Reading</option>
	                            <option value="wantToRead">Want to Read</option>
	                            <option value="read">Read</option>
	                            <option value="none">None</option>
	                          </select>
	                        </div>
	                      </div>
	                      <div className="book-title">{book.title}</div>
	                      <div className="book-authors">{book.authors}</div>
	                    </div>
	                    </li>	          
                    ))}
*/}                    
	            </ol>
	          </div>
	        </div>
		)  
	} 
}


export default SearchBooks