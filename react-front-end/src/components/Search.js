import React from 'react'
import Form from 'react-bootstrap/Form'

const Search = ({ setSearchQuery }) => {
  return (
    <Form className="d-flex" style={{ marginInline: '20px' }} >
      <Form.Control
        type="search"
        onInput={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />

    </Form>
  )
}

export default Search
