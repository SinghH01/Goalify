import React from 'react'
import Form from 'react-bootstrap/Form'
import '../styles/search.css'

const Search = ({ setSearchQuery }) => {
  return (
    <Form className="d-flex search" >
      <Form.Control
        type="search"
        onInput={(e) => setSearchQuery(e.target.value)}
        placeholder="Search For Goals"
        className="search_input"
        aria-label="Search"
      />
    </Form >
  )
}

export default Search
